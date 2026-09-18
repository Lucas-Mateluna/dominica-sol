/* Shop grid + centered category filter row (Claws / Teeth / Earrings) */
(function () {
  var grid = document.getElementById('grid');
  var filters = document.getElementById('filters');
  if (!grid || !filters) return;

  var params = new URLSearchParams(location.search);
  var active = params.get('c') || 'All';
  if (SHOP_CATEGORIES.indexOf(active) === -1) active = 'All';

  function render() {
    var list = active === 'All'
      ? ITEMS
      : ITEMS.filter(function (p) { return p.category === active; });

    grid.innerHTML = list.length
      ? list.map(cardHTML).join('')
      : '<p class="grid__empty caps">Nothing in this group yet.</p>';

    filters.querySelectorAll('button').forEach(function (b) {
      b.setAttribute('aria-pressed', String(b.dataset.cat === active));
    });

    history.replaceState(null, '',
      active === 'All' ? location.pathname : location.pathname + '?c=' + encodeURIComponent(active));
  }

  filters.innerHTML = SHOP_CATEGORIES.map(function (c) {
    return '<li><button type="button" data-cat="' + c + '">' + c + '</button></li>';
  }).join('');

  filters.addEventListener('click', function (e) {
    var btn = e.target.closest('button');
    if (!btn) return;
    active = btn.dataset.cat;
    render();
  });

  render();
})();
