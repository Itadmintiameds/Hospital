"""Extract embedded images + page previews from the client PDF into assets/source/.

Usage:  python scripts/extract-pdf-images.py
Reads docs/CurePlus Hospitals Website.pdf and writes into assets/source/. The paths are fixed (relative to the
project root) on purpose: the script takes no file paths from the command line.
Requires PyMuPDF (pip install pymupdf). assets/source/ is git-ignored (raw 3MB+ PNGs).
"""
from pathlib import Path

import fitz  # PyMuPDF

ROOT = Path(__file__).resolve().parent.parent
PDF = ROOT / "docs" / "CurePlus Hospitals Website.pdf"
OUT = ROOT / "assets" / "source"

OUT.mkdir(parents=True, exist_ok=True)
doc = fitz.open(PDF)
for pno, page in enumerate(doc, 1):
    page.get_pixmap(dpi=60).save(OUT / f"page{pno}.png")
    for idx, info in enumerate(page.get_images(full=True), 1):
        xref = info[0]
        pm = fitz.Pixmap(doc, xref)
        if pm.n - pm.alpha >= 4:  # CMYK -> RGB
            pm = fitz.Pixmap(fitz.csRGB, pm)
        pm.save(OUT / f"p{pno}_i{idx}_x{xref}.png")
        print(f"page {pno} image {idx}: {pm.width}x{pm.height}")
