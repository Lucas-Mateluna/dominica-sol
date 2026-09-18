/* Shared behaviour: current-page marking, scroll reveal */
(function () {
  var here = location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav a').forEach(function (a) {
    var target = a.getAttribute('href');
    if (!target || target.charAt(0) === '#') return;
    if (target === here ||
        (here === 'piece.html' && target === 'shop.html')) {
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
