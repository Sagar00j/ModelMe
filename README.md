# Visage — Beta Landing Page

Licensed human likeness marketplace. This is the static beta waitlist site.

## Files

```
visage-beta/
├── index.html      # Main page
├── style.css       # All styles
├── main.js         # Scroll animations + form handler
└── README.md
```

## Deploy to GitHub Pages

### Option 1 — Drag & drop (fastest)
1. Create a new repo at github.com/new — name it `visage-beta` or `yourname.github.io`
2. Upload all 4 files
3. Go to **Settings → Pages → Source → Deploy from branch → main / root**
4. Your site is live at `https://yourusername.github.io/visage-beta`

### Option 2 — Git CLI
```bash
git init
git add .
git commit -m "init: Visage beta landing page"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/visage-beta.git
git push -u origin main
```
Then enable Pages in repo Settings.

### Option 3 — Vercel (recommended for custom domain)
```bash
npm i -g vercel
vercel
```
Point your domain DNS to Vercel and you're live.

## Connecting the waitlist form

In `main.js`, find `handleSubmit()` and add your backend call:

### Airtable (simplest)
```js
await fetch('https://api.airtable.com/v0/YOUR_BASE_ID/Waitlist', {
  method: 'POST',
  headers: {
    'Authorization': 'Bearer YOUR_AIRTABLE_TOKEN',
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    fields: {
      Name: formData.get('name'),
      Email: formData.get('email'),
      Company: formData.get('company'),
      Type: formData.get('type'),
      Notes: formData.get('notes'),
    }
  })
});
```

### Notion API / Formspree / Mailchimp
Works the same way — swap the fetch URL and payload shape.

## Customisation

- Colors: all in `style.css` under `:root` — change `--gold` to your brand accent
- Stats: update the hero proof numbers in `index.html`
- Pricing: update license card prices in the `#licenses` section
- Logo: replace `Vis<span>age</span>` with your actual logo SVG

## License
Private — Visage 2025
