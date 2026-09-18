/* Home page — fills About, Earrings, Exhibitions and Contact from the admin content */
(function () {
  if (typeof HOME === 'undefined') return;
  function set(id, html) { var el = document.getElementById(id); if (el && html) el.innerHTML = html; }
  function img(id, src) { var el = document.getElementById(id); if (el && src) el.src = src; }

  img('hero-image', HOME.hero_image);
  img('portrait', HOME.portrait);
  img('earrings-image', HOME.earrings_image);
  set('about-text', paragraphs(HOME.about_text));
  set('earrings-text', paragraphs(HOME.earrings_text));
  set('contact-intro', esc(HOME.contact_intro));
  set('studio-address', esc(SITE.studio_address));
  set('visits', esc(SITE.visits));

  var list = (HOME.exhibitions || []).map(function (e) {
    return '<div class="entry"><p class="when">' + esc(e.year) + '</p><h3>' + esc(e.title) + '</h3>' +
           (e.details ? '<p>' + esc(e.details) + '</p>' : '') + '</div>';
  }).join('');
  var box = document.querySelector('.exhibitions');
  if (list) set('exhibitions', list); else if (box) box.style.display = 'none';

  /* Hide contact rows that were left empty in the admin */
  ['studio-address', 'visits'].forEach(function (id) {
    var el = document.getElementById(id);
    if (el && !el.textContent.trim()) el.parentNode.style.display = 'none';
  });
})();
