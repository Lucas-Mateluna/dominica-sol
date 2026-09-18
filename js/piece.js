/* Single piece — piece.html?p=<slug>. Serves every item in the shop. */
(function () {
  var root = document.getElementById('piece');
  if (!root) return;

  var slug = new URLSearchParams(location.search).get('p');
  var p = ITEMS.filter(function (item) { return item.slug === slug; })[0];

  if (!p) {
    root.innerHTML =
      '<div class="piece__missing">' +
      '<p class="caps">This piece has moved</p>' +
      '<p>We could not find that one. It may have been sold or renamed.</p>' +
      '<a class="caps accent hover-accent" href="shop.html">Back to the shop →</a></div>';
    return;
  }

  var isShop = p.category === 'Earrings';
  var backHref = 'shop.html?c=' + encodeURIComponent(p.category);
  var backText = esc(p.category);

  document.title = p.title + ' — Dominica Sol';

  var gallery = p.images.map(function (src, i) {
    return '<img src="' + src + '" alt="' + esc(p.title) + ' — view ' + (i + 1) + '"' +
           (i ? ' loading="lazy"' : '') + '>';
  }).join('');

  var sold = p.status === 'sold';
  var cta = sold
    ? '<a href="' + backHref + '">See available pieces →</a>'
    : '<a href="' + SITE.instagram_url + '" target="_blank" rel="noopener">Enquire on Instagram →</a>';

  var note = sold
    ? 'This piece has found a home. Similar work can be made to order — get in touch to talk about a commission.'
    : 'Every piece is built by hand, so colour, glaze and dimension vary slightly from one to the next. Shipping is quoted separately.';

  root.innerHTML =
    '<div class="piece__gallery">' + gallery + '</div>' +
    '<div class="piece__info">' +
      '<p class="caps piece__crumb"><a href="' + backHref + '">← ' + backText + '</a></p>' +
      '<h1 class="piece__title">' + captionOf(p) + '</h1>' +
      '<p class="piece__price">' + (isShop ? 'Price on request' : (sold ? '<span class="status">Sold</span>' : 'Enquire')) + '</p>' +
      '<div class="piece__desc">' + paragraphs(p.description) + '</div>' +
      '<dl class="spec">' +
        (p.year ? '<div><dt>Year</dt><dd>' + esc(p.year) + '</dd></div>' : '') +
        (p.dimensions ? '<div><dt>' + (isShop ? 'Size' : 'Dimensions') + '</dt><dd>' + esc(p.dimensions) + '</dd></div>' : '') +
        '<div><dt>Series</dt><dd>' + esc(p.category) + '</dd></div>' +
      '</dl>' +
      '<div class="piece__cta">' + cta + '</div>' +
      '<p class="piece__note">' + note + '</p>' +
    '</div>';

  var related = document.getElementById('related');
  if (related) {
    var pool = ITEMS.filter(function (i) { return i.slug !== p.slug; });
    pool.sort(function (a, b) { return (b.category === p.category) - (a.category === p.category); });
    related.innerHTML = pool.slice(0, 3).map(cardHTML).join('');
  }
})();
