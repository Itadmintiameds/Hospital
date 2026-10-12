"""Crop + compress the images extracted from the client PDF.

Reads assets/source/*.png (see extract-pdf-images.py) and writes web-ready files into public/images/:
  hospitals/<name>.webp|.jpg          1200x750 (16:10)
  hospitals/<name>-800.webp|.jpg      800x500
  hospitals/<name>-600.webp|.jpg      600x375
  facilities/<name>.*                 same 16:10 treatment
  team/<name>.webp|.jpg + -240        square, face-centred portraits (480 / 240)
Every file is kept under ~200 KB. Run:  python scripts/optimize-images.py
"""
import json
import os

from PIL import Image

SRC = "assets/source"
OUT = "public/images"
MAX_BYTES = 195 * 1024

# name, source file, group, (anchor_x, anchor_y) in 0..1  -- anchors bias which part of the
# source survives the 16:10 crop so signboards / faces stay visible.  `box` overrides the crop.
HOSPITALS = [
    ("halli-mysuru-hospital", "p1_i1_x7.png", (0.5, 0.25), None),
    ("dharani-hospital", "p1_i2_x9.png", (0.5, 0.15), None),
    ("krishna-hospital", "p2_i1_x12.png", (0.5, 0.5), None),
    ("terakanambi-hospital", "p2_i2_x13.png", (0.5, 0.05), None),
    ("ramapura-hospital", "p2_i3_x14.png", (0.5, 0.35), None),
    # portrait source: keep the CurePlus signboard + shop front, drop the sky and the neighbouring "Yashashvi" sign
    ("shanivarasanthe-hospital", "p2_i4_x15.png", (0.5, 0.5), (0, 560, 1101, 560 + 688)),
]
# Existing site photos for hospitals the client did not supply new pictures for. Same photo, re-cropped to the
# shared 16:10 frame and compressed so every card/hero is identical in size and ratio.
# TODO: replace martalli / arakere / huliyurudurga (and yelandur etc.) when the client sends new photos.
RETAINED = [
    ("disha-hospital", "public/cureplus/cureplus5.png", (0.5, 0.5)),
    ("kaveri-hospital", "public/kaveri/kaveri1.png", (0.5, 0.5)),
    ("narasegowda-memorial-hospital", "public/narasegowda/narasaregoda1.png", (0.5, 0.5)),
    ("bherya-hospital", "public/bheraya/bheraya.png", (0.5, 0.0)),
    ("t-narasipura-hospital", "public/Narasipura/Narasipura.png", (0.5, 0.5)),
    ("handpost-hospital", "public/HandPost/Handpost1.png", (0.5, 0.5)),
    ("arakere-hospital", "public/arakere/arakere.jpeg", (0.5, 0.62)),
    ("huliyurudurga-hospital", "public/hospital/huliyurudurga.jpeg", (0.5, 0.3)),
    ("udayagiri-hospital", "public/hospital/udayagiri.jpeg", (0.5, 0.5)),
    ("talakadu-hospital", "public/hospital/talkakadu.jpeg", (0.5, 0.5)),
    ("yelandur-hospital", "public/hospital/yelandur.jpeg", (0.5, 0.1)),
    ("martalli-hospital", "public/hospital/martalli.jpeg", (0.5, 0.5)),
]
FACILITIES = [
    ("facility-lab-nurse-station", "p4_i1_x20.png", (0.6, 0.5)),
    ("facility-reception", "p4_i2_x21.png", (0.5, 0.5)),
    ("facility-pharmacy", "p4_i3_x22.png", (0.5, 0.5)),
    ("facility-consultation-room", "p4_i4_x23.png", (0.5, 0.5)),
    ("facility-inpatient-ward", "p4_i5_x24.png", (0.5, 0.5)),
    ("facility-examination-room", "p4_i6_x25.png", (0.5, 0.3)),
    ("facility-scan-room", "p4_i7_x26.png", (0.5, 0.4)),
]
TEAM = [
    ("ram-hebbale-hiriyanna", "p5_i1_x29.png", (0.5, 0.0), 900),
    ("manjunath-p", "p5_i2_x30.png", (0.5, 0.03), 1086),
]


def crop_ratio(im, ratio, anchor, box=None):
    if box:
        return im.crop(box)
    w, h = im.size
    if w / h > ratio:  # too wide -> trim width
        nw = round(h * ratio)
        left = round((w - nw) * anchor[0])
        return im.crop((left, 0, left + nw, h))
    nh = round(w / ratio)  # too tall -> trim height
    top = round((h - nh) * anchor[1])
    return im.crop((0, top, w, top + nh))


def save_pair(im, path_noext, size):
    im = im.resize(size, Image.LANCZOS)
    os.makedirs(os.path.dirname(path_noext), exist_ok=True)
    sizes = {}
    # WebP: find the highest quality that fits the budget
    for q in (82, 78, 74, 70, 65, 60, 55):
        im.save(path_noext + ".webp", "WEBP", quality=q, method=6)
        if os.path.getsize(path_noext + ".webp") <= MAX_BYTES:
            break
    sizes["webp"] = os.path.getsize(path_noext + ".webp")
    for q in (80, 74, 70, 65, 60, 55, 50):
        im.save(path_noext + ".jpg", "JPEG", quality=q, optimize=True, progressive=True)
        if os.path.getsize(path_noext + ".jpg") <= MAX_BYTES:
            break
    sizes["jpg"] = os.path.getsize(path_noext + ".jpg")
    return sizes


manifest = {}
for name, f, anchor, box in HOSPITALS:
    im = Image.open(os.path.join(SRC, f)).convert("RGB")
    c = crop_ratio(im, 16 / 10, anchor, box)
    manifest[name] = {
        "1200": save_pair(c, f"{OUT}/hospitals/{name}", (1200, 750)),
        "800": save_pair(c, f"{OUT}/hospitals/{name}-800", (800, 500)),
        "600": save_pair(c, f"{OUT}/hospitals/{name}-600", (600, 375)),
    }
for name, f, anchor in RETAINED:
    im = Image.open(f).convert("RGB")
    c = crop_ratio(im, 16 / 10, anchor)
    manifest[name] = {
        "1200": save_pair(c, f"{OUT}/hospitals/{name}", (1200, 750)),
        "800": save_pair(c, f"{OUT}/hospitals/{name}-800", (800, 500)),
        "600": save_pair(c, f"{OUT}/hospitals/{name}-600", (600, 375)),
    }
for name, f, anchor in FACILITIES:
    im = Image.open(os.path.join(SRC, f)).convert("RGB")
    c = crop_ratio(im, 16 / 10, anchor)
    manifest[name] = {
        "1200": save_pair(c, f"{OUT}/facilities/{name}", (1200, 750)),
        "800": save_pair(c, f"{OUT}/facilities/{name}-800", (800, 500)),
        "600": save_pair(c, f"{OUT}/facilities/{name}-600", (600, 375)),
    }
for name, f, anchor, side in TEAM:
    im = Image.open(os.path.join(SRC, f)).convert("RGB")
    w, h = im.size
    left = round((w - side) * anchor[0])
    top = round((h - side) * anchor[1]) if h > side else 0
    c = im.crop((left, top, left + side, top + side))
    manifest[name] = {
        "480": save_pair(c, f"{OUT}/team/{name}", (480, 480)),
        "240": save_pair(c, f"{OUT}/team/{name}-240", (240, 240)),
    }

worst = max(s for v in manifest.values() for d in v.values() for s in d.values())
print(json.dumps(manifest, indent=1))
print("largest file:", round(worst / 1024), "KB")
