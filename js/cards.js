/* Shared card rendering — museum-style caption:
   DOMINICA SOL, 'TITLE', <KIND>, YEAR                                      */

var KIND_BY_CATEGORY = {
  'Claws': 'ceramic claw',
  'Teeth': 'ceramic tooth',
  'Earrings': 'ceramic and steel'
};

function thumb(src) { return src.replace(/\.(jpe?g|png|webp)$/i, function (m) { return '-t' + m; }); }

/* <img> for a grid: loads the 800px thumbnail, falls back to the full photo. */
function thumbImg(src, alt) {
  return '<img src="' + thumb(src) + '" alt="' + esc(alt || '') + '" loading="lazy"' +
         ' onerror="this.onerror=null;this.src=\'' + src + '\'">';
}

function esc(s) {
  return String(s == null ? '' : s).replace(/&/g, '&amp;').replace(/</g, '&lt;')
    .replace(/>/g, '&gt;').replace(/"/g, '&quot;');
}

/* Plain text from the admin -> paragraphs. Blank line = new paragraph, *word* = italic. */
function paragraphs(text) {
  return String(text || '').split(/\n\s*\n/).map(function (p) { return p.trim(); })
    .filter(Boolean).map(function (p) {
      return '<p>' + esc(p).replace(/\*([^*\n]+)\*/g, '<em>$1</em>').replace(/\n/g, '<br>') + '</p>';
    }).join('');
}

function kindOf(p) { return p.medium || KIND_BY_CATEGORY[p.category] || 'ceramic object'; }

function captionOf(p) {
  return "Dominica Sol, '" + esc(p.title) + "', " + esc(kindOf(p)) + (p.year ? ', ' + esc(p.year) : '');
}

function statusLine(p) {
  if (p.status === 'sold') return '<span class="status">Sold</span>';
  if (p.category === 'Earrings') return 'Price on request';
  return esc(p.dimensions);
}

function cardHTML(p) {
  var second = p.images[1] ? thumbImg(p.images[1], '') : '';
  return (
    '<a class="card' + (p.status === 'sold' ? ' card--sold' : '') + '" href="piece.html?p=' + p.slug + '">' +
      '<div class="card__media">' +
        thumbImg(p.images[0], p.title) + second +
      '</div>' +
      '<div class="card__body">' +
        '<div class="card__title">' + captionOf(p) + '</div>' +
        '<div class="card__price">' + statusLine(p) + '</div>' +
      '</div>' +
    '</a>'
  );
}
