/* Shared card rendering — museum-style caption:
   DOMINICA SOL, 'TITLE', <KIND>, YEAR                                      */

var KIND_BY_CATEGORY = {
  'Claws': 'ceramic claw',
  'Teeth': 'ceramic tooth',
  'Earrings': 'ceramic and steel'
};

function thumb(src) { return src.replace(/\.jpg$/, '-t.jpg'); }

function kindOf(p) { return KIND_BY_CATEGORY[p.category] || 'ceramic object'; }

function captionOf(p) {
  return "Dominica Sol, '" + p.title + "', " + kindOf(p) + ', ' + p.year;
}

function statusLine(p) {
  if (p.status === 'sold') return '<span class="status">Sold</span>';
  if (p.category === 'Earrings') return 'Price on request';
  return p.dimensions;
}

function cardHTML(p) {
  var second = p.images[1]
    ? '<img src="' + thumb(p.images[1]) + '" alt="" loading="lazy">'
    : '';
  return (
    '<a class="card' + (p.status === 'sold' ? ' card--sold' : '') + '" href="piece.html?p=' + p.slug + '">' +
      '<div class="card__media">' +
        '<img src="' + thumb(p.images[0]) + '" alt="' + p.title + '" loading="lazy">' + second +
      '</div>' +
      '<div class="card__body">' +
        '<div class="card__title">' + captionOf(p) + '</div>' +
        '<div class="card__price">' + statusLine(p) + '</div>' +
      '</div>' +
    '</a>'
  );
}
