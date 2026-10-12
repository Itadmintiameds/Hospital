"""Extract the embedded images from the client's Word / Google Doc export into assets/source/.

Usage:  python scripts/extract-docx-images.py "<CurePlus Hospitals Website.docx>" assets/source
Export the Google Doc via File > Download > Microsoft Word (.docx). Images are written as
doc_image<N>.png (N = the number Word gave the image) so optimize-images.py can refer to them.
assets/source/ is git-ignored (raw 2MB+ PNGs).
"""
import os
import re
import sys
import zipfile

docx, out = sys.argv[1], sys.argv[2]
os.makedirs(out, exist_ok=True)
with zipfile.ZipFile(docx) as z:
    for name in z.namelist():
        m = re.fullmatch(r"word/media/image(\d+)\.png", name)
        if not m:
            continue
        dest = os.path.join(out, f"doc_image{m.group(1)}.png")
        with open(dest, "wb") as f:
            f.write(z.read(name))
        print("wrote", dest)
