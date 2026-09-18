# Dominica Sol — website

Static site. Plain HTML, CSS and JavaScript — no build step, no dependencies.

## Run it

```
python3 -m http.server 8000
```

then open http://localhost:8000

(Opening `index.html` directly from Finder also works.)

## Pages

```
index.html    About + Contact (the home page)
shop.html     Everything — filtered by Claws / Teeth / Earrings
piece.html    One piece — reads ?p=<slug>
work.html     Only a redirect to shop.html (keeps old links alive)
```

## Files

```
css/style.css   All styling. Colours, font and spacing live in :root at the top.
js/data.js      THE CATALOGUE — edit this to add, reorder or retitle pieces
js/cards.js     Grid card + caption rendering
js/shop.js      Shop grid + Claws/Teeth/Earrings filter
js/piece.js     Single piece page
js/main.js      Nav state, scroll reveal, footer year
assets/web/     The photos the site loads. Full-resolution originals are
                NOT kept here — they live in ~/Dropbox/Domi-WEB.
                <name>.jpg    ~1600px, used on the piece page
                <name>-t.jpg  ~800px, used on the grids
netlify.toml    Publish directory + cache headers for Netlify
wrangler.jsonc  Cloudflare config (static assets only)
_headers        Cache headers for Cloudflare
.assetsignore   Files Cloudflare must not publish
```

## Adding or changing a piece

Open `js/data.js`. `WORKS` holds the sculpture, `SHOP` holds the earrings;
both appear together on shop.html.
Copy a block and change the fields. `slug` must be unique — it becomes the
URL (`piece.html?p=<slug>`). The first entry in `images` is the cover; the
second is the hover image on the grid. Reordering that array reorders the
gallery.

## Adding new photos

Originals live in `~/Dropbox/Domi-WEB/<Series>/<Piece name>/`, deliberately
outside this folder so Netlify never uploads them. To add a photo, put the
original there, then generate the two web sizes into
`assets/web/<series>/<slug>/` — `N.jpg` at ~1600px and `N-t.jpg` at ~800px:

```
sips -Z 1600 original.jpg --out assets/web/teeth/golden/10.jpg
sips -Z 800  original.jpg --out assets/web/teeth/golden/10-t.jpg
```

Then add the path to that piece's `images` array in `js/data.js`.

## Deploying

The whole folder is the site — 25 MB, no build step. Drag it onto
app.netlify.com/drop, or connect a repo and let `netlify.toml` set the
publish directory.

## Still to do

- Real About copy (search `js/data.js` and `index.html` for "Placeholder")
- Real exhibition list
- Real studio address in the contact block
- Prices, if the earrings should show them
- Confirm the years on the work — they were read off the photo filenames
- Contact is Instagram-only (@domisolmido) — add an email + form once Domi has an address
- Favicon + social share image
