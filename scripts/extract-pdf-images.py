"""Extract embedded images + page previews from the client PDF into assets/source/.

Usage:  python scripts/extract-pdf-images.py "docs/CurePlus Hospitals Website.pdf" assets/source
Requires PyMuPDF (pip install pymupdf). assets/source/ is git-ignored (raw 3MB+ PNGs).
"""
import os
import sys

import fitz  # PyMuPDF

pdf, out = sys.argv[1], sys.argv[2]
os.makedirs(out, exist_ok=True)
doc = fitz.open(pdf)
for pno, page in enumerate(doc, 1):
    page.get_pixmap(dpi=60).save(os.path.join(out, f"page{pno}.png"))
    for idx, info in enumerate(page.get_images(full=True), 1):
        xref = info[0]
        pm = fitz.Pixmap(doc, xref)
        if pm.n - pm.alpha >= 4:  # CMYK -> RGB
            pm = fitz.Pixmap(fitz.csRGB, pm)
        pm.save(os.path.join(out, f"p{pno}_i{idx}_x{xref}.png"))
        print(f"page {pno} image {idx}: {pm.width}x{pm.height}")
