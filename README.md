# Inside Cricket — GitHub Pages deployment

This folder is the complete website. Upload **the contents of this folder** to the root of the `INSIDE-CRICKET` GitHub repository — do not upload this folder as a nested directory and do not upload a ZIP file as the site itself.

## Required repository structure

```text
INSIDE-CRICKET/
├── .nojekyll
├── index.html
├── world-cup.html
├── styles.css
├── script.js
└── assets/
    ├── cricket-countries-map.jpeg
    ├── cricket-hero-clean.png
    ├── cricket-hero.png
    └── finals/
        ├── 1975.webp
        ├── 1979.jpeg
        ├── 1983.jpeg
        ├── 1987.jpg
        ├── 1992.webp
        ├── 1996.jpg
        ├── 1999.webp
        ├── 2003.jpg
        ├── 2007.webp
        ├── 2011.avif
        ├── 2015.webp
        ├── 2019.jpg
        └── 2023.avif
```

## Publish

1. Open the `INSIDE-CRICKET` repository on GitHub.
2. Upload every item shown above to the repository root, replacing the old site files.
3. In **Settings → Pages**, choose **Deploy from a branch**, then select the `main` branch and **/(root)**.
4. Open `https://yashwanth0210.github.io/INSIDE-CRICKET/` after GitHub Pages finishes deploying.

All local page, stylesheet, script, and image references use relative paths. This makes the site work both at the repository Pages address above and on a custom domain without adding `/INSIDE-CRICKET/` manually to each URL.
