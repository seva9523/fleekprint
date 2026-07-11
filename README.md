# FleekPrint

**Every bundle leaves a better footprint.**

FleekPrint is a free, browser-only hackathon prototype that turns a secondhand wholesale order into a clear, shareable environmental impact receipt.

## What it shows

- Garments kept in circulation
- Textile weight diverted from waste
- Estimated CO₂e avoided
- Estimated water saved
- Average cost per garment
- Circular impact score
- Downloadable PNG receipt

## Run locally

No install is required. Open `index.html` in a browser.

For a local web server:

```bash
python3 -m http.server 8000
```

Then open `http://localhost:8000`.

## Deploy free with GitHub Pages

1. Open the repository on GitHub.
2. Go to **Settings → Pages**.
3. Under **Build and deployment**, select **Deploy from a branch**.
4. Choose `main` and `/ (root)`.
5. Save.

The site will be available at:

`https://seva9523.github.io/fleekprint/`

## Methodology

This MVP uses configurable demonstration factors stored in `app.js`:

- Textile waste diverted = order weight
- CO₂e avoided = order weight × category carbon factor
- Water saved = garment count × category water factor
- Impact score = a capped demonstration score based on quantity, weight, and category

All environmental values are labelled as estimates. This prototype does not make audited environmental claims. In production, these factors should be replaced with Fleek-approved lifecycle-assessment data and order records.

## Stack

- HTML
- CSS
- Vanilla JavaScript
- `html2canvas` via CDN for PNG export
- GitHub Pages

No backend, database, paid API, account, or model training is required.

## Hackathon pitch

Fleek helps resellers source secondhand inventory, but the environmental value of each transaction is largely invisible. FleekPrint makes that value visible at the moment of purchase through a transparent, shareable impact receipt. It gives resellers something useful for customers and sustainability reporting, while creating the foundation for a future impact-data layer across Fleek orders and suppliers.