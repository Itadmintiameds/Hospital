"""Extract the embedded images from the client's Word / Google Doc export into assets/source/.

Usage:  python scripts/extract-docx-images.py
Export the Google Doc via File > Download > Microsoft Word (.docx) and save it as
assets/source/CurePlus Hospitals Website.docx. Images are written next to it as doc_image<N>.png
(N = the number Word gave the image) so optimize-images.py can refer to them.
The paths are fixed (relative to the project root) on purpose: the script takes no file paths from the
command line. assets/source/ is git-ignored (raw 2MB+ PNGs).
"""
import re
import zipfile
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
OUT = ROOT / "assets" / "source"
DOCX = OUT / "CurePlus Hospitals Website.docx"

OUT.mkdir(parents=True, exist_ok=True)
with zipfile.ZipFile(DOCX) as z:
    for name in z.namelist():
        m = re.fullmatch(r"word/media/image(\d+)\.png", name)
        if not m:
            continue
        dest = OUT / f"doc_image{m.group(1)}.png"
        dest.write_bytes(z.read(name))
        print("wrote", dest)
