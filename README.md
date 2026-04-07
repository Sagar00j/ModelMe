# ModelMe v2 — Beta Landing Page

Getty-style model browse grid + INR pricing + license modal.

## Deploy to GitHub Pages (replace your existing files)

```bash
# In your ModelMe repo:
git add index.html style.css main.js
git commit -m "v2: model grid hero + INR pricing + license modal"
git push
```

GitHub Pages auto-deploys. Live in ~60 seconds at:
`https://sagar00j.github.io/ModelMe/`

## What changed in v2

- **Hero is now the model browse grid** — Getty-style 6-column grid, hover reveals name, tags, and pricing
- **All prices in ₹** — converted at ~83x with Indian number formatting (₹24,900 not $299)
- **License modal** — click any model card to open license picker with live ₹ price calculation
- **Filter chips** — by ethnicity, age, use case
- **Rebranded** — Visage → ModelMe to match your GitHub repo name

## Connecting a real waitlist backend

In `main.js`, add to `handleSubmit()`:

```js
// Airtable example
const data = new FormData(e.target);
await fetch('https://api.airtable.com/v0/YOUR_BASE/Waitlist', {
  method: 'POST',
  headers: { 'Authorization': 'Bearer YOUR_KEY', 'Content-Type': 'application/json' },
  body: JSON.stringify({ fields: { Name: data.get('name'), Email: data.get('email') } })
});
```

## License
Private — ModelMe 2025
