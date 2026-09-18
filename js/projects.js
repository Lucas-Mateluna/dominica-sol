/* Projects page. While "Show the Projects page" is off in the admin, the page
   is a hidden preview: not in the menu, not indexed, and marked as a draft. */
(function () {
  var root = document.getElementById('projects');
  if (!root) return;

  if (!SITE.show_projects) {
    var meta = document.createElement('meta');
    meta.name = 'robots'; meta.content = 'noindex, nofollow';
    document.head.appendChild(meta);
    var note = document.getElementById('draft-note');
    if (note) note.hidden = false;
  }

  if (!PROJECTS.length) {
    root.innerHTML = '<p class="grid__empty caps">Nothing here yet.</p>';
    return;
  }

  root.innerHTML = PROJECTS.map(function (p) {
    var meta = [p.year, p.place].filter(Boolean).map(esc).join(' · ');
    var images = (p.images || []).map(function (src, i) {
      return '<img src="' + src + '" alt="' + esc(p.title) + ' — view ' + (i + 1) + '" loading="lazy">';
    }).join('');
    return '<article class="project reveal" id="' + esc(p.slug) + '">' +
      '<header class="project__head">' +
        '<h2 class="project__title">' + esc(p.title) + '</h2>' +
        (meta ? '<p class="project__meta">' + meta + '</p>' : '') +
      '</header>' +
      '<div class="project__text">' + paragraphs(p.text) + '</div>' +
      (images ? '<div class="project__images' + (p.images.length === 1 ? ' project__images--single' : '') + '">' + images + '</div>' : '') +
    '</article>';
  }).join('');
})();
