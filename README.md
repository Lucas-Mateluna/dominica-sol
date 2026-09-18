# Dominica Sol — website

Plain HTML, CSS and JavaScript. The texts, pieces and photos live in
`content/` and `assets/web/`, and are edited through the admin at
**https://dominicasol.com/admin/** — no code needed.

## How it fits together

```
GitHub repo  ──push / admin save──▶  Netlify runs `npm run build`  ──▶  dominicasol.com
```

- **Admin** (`/admin/`, Sveltia CMS): Domi signs in with GitHub and edits pieces,
  projects, the home page texts and the settings. Each save is a commit here.
  "Save" stores the change; **"Save and Publish"** also puts it online
  (Netlify deploys are metered, so it is one deploy per session, not per click).
- **Build** (`scripts/build.js`): copies the site into `dist/`, turns `content/`
  into `dist/js/data.js`, makes the 800px grid thumbnails, and shrinks any
  photo larger than 2000px — so a 20 MB upload never reaches a visitor.
  The admin already resizes uploads to 1800px WebP in the browser; the build is
  the safety net.

## Pages

```
index.html     About + Contact (the home page) — texts come from content/site/home.json
shop.html      Everything — filtered by Claws / Teeth / Earrings
piece.html     One piece — reads ?p=<slug>
projects.html  Projects — hidden until "Show the Projects page" is on in the admin
work.html      Only a redirect to shop.html (keeps old links alive)
404.html       Not found
```

## Files

```
content/pieces/<slug>.json    one file per piece (the file name is the URL slug)
content/projects/<slug>.json  one file per project
content/site/home.json        About text, photos, exhibitions, contact intro
content/site/settings.json    Instagram, studio address, show_projects switch
assets/web/                   all photos — one folder, uploads land here too
                              (thumbnails `*-t.*` are made by the build, not stored)
admin/config.yml              the admin's fields — edit this to add a field or a category
scripts/build.js              the build
css/style.css                 all styling; colours, font, spacing in :root at the top
js/cards.js                   card + caption rendering, text helpers
js/shop.js  js/piece.js  js/home.js  js/projects.js  js/main.js
netlify.toml                  build command, publish dir (dist), cache headers
```

## Preview on your computer

```
npm install        # once
npm run preview    # builds, then serves http://localhost:8000
```

## Adding a category

Add it to the `category` options in `admin/config.yml`, and (for the caption)
to `KIND_BY_CATEGORY` in `js/cards.js`. The filter button appears by itself.

## Originals

Full-resolution originals are NOT in this repo — they live in
`~/Dropbox/Domi-WEB/<Series>/<Piece name>/`.

## Still to do

- Real About copy, exhibition list, studio address (all editable in the admin now)
- Prices, if the earrings should show them
- Confirm the years on the work — they were read off the photo filenames
- Contact is Instagram-only — add an email + form once Domi has an address
- Favicon + social share image
