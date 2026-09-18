/* Shared behaviour: current-page marking, scroll reveal */
(function () {
  /* Settings from the admin: Instagram everywhere, Projects link when it is public. */
  if (typeof SITE !== 'undefined') {
    document.querySelectorAll('a[data-ig]').forEach(function (a) {
      a.href = SITE.instagram_url;
      if (a.hasAttribute('data-ig-handle') && SITE.instagram_handle) a.textContent = SITE.instagram_handle;
    });
    if (SITE.show_projects) {
      document.querySelectorAll('.nav, .site-footer__links').forEach(function (nav) {
        var shop = nav.querySelector('a[href$="shop.html"]');
        if (!shop || nav.querySelector('a[href$="projects.html"]')) return;
        var link = document.createElement('a');
        link.href = shop.getAttribute('href').replace('shop.html', 'projects.html');
        link.textContent = 'Projects';
        shop.insertAdjacentElement('afterend', link);
        shop.insertAdjacentText('afterend', '\n    ');
      });
    }
  }

  function page(p) { return (p.split('#')[0].split('?')[0].split('/').pop() || 'index').replace(/\.html$/, '') || 'index'; }
  var here = page(location.pathname);
  document.querySelectorAll('.nav a').forEach(function (a) {
    var target = a.getAttribute('href');
    if (!target || target.charAt(0) === '#') return;
    if (target.indexOf('#') !== -1) return;
    if (page(target) === here || (here === 'piece' && page(target) === 'shop')) {
      a.setAttribute('aria-current', 'page');
    }
  });

  var y = document.getElementById('year');
  if (y) y.textContent = new Date().getFullYear();

  var items = document.querySelectorAll('.reveal');
  if (!items.length) return;
  if (!('IntersectionObserver' in window)) {
    items.forEach(function (el) { el.classList.add('is-in'); });
    return;
  }
  var io = new IntersectionObserver(function (entries) {
    entries.forEach(function (e) {
      if (e.isIntersecting) { e.target.classList.add('is-in'); io.unobserve(e.target); }
    });
  }, { rootMargin: '0px 0px -8% 0px', threshold: 0.05 });
  items.forEach(function (el) { io.observe(el); });
  setTimeout(function () { items.forEach(function (el) { el.classList.add('is-in'); }); }, 4000);
})();
