/* ==========================================================================
   Dominica Sol — catalogue
   --------------------------------------------------------------------------
   WORKS  the sculptural work, split into two families: Claws and Teeth.
   SHOP   the earrings.
   Both are shown together on shop.html, filtered by category.

   Each entry:
     slug        unique id, used in the URL: piece.html?p=<slug>
     title       name of the piece
     category    'Claws' | 'Teeth' | 'Earrings'  — the filter buttons on the shop
     year        shown in the caption
     dimensions  height × width × depth, in cm
     status      'available' | 'sold'
     images      paths under assets/web/. First one is the cover; the second
                 is the hover image on the grid.
   Photography © Pablo Hassmann unless noted.
   ========================================================================== */

var SHOP_CATEGORIES = ['All', 'Claws', 'Teeth', 'Earrings'];

var WORKS = [
  {
    slug: 'black',
    title: 'Black',
    category: 'Claws',
    year: '2025',
    dimensions: '24 × 9 × 17 cm',
    status: 'available',
    images: ['assets/web/claws/black/1.jpg','assets/web/claws/black/2.jpg','assets/web/claws/black/3.jpg','assets/web/claws/black/4.jpg'],
    description: 'Placeholder description. Add a few lines about this piece — the clay body, the firing, what it is doing.'
  },
  {
    slug: 'blue-white',
    title: 'Blue & White',
    category: 'Claws',
    year: '2023',
    dimensions: 'Dimensions on request',
    status: 'sold',
    images: ['assets/web/claws/blue-white/1.jpg','assets/web/claws/blue-white/2.jpg','assets/web/claws/blue-white/4.jpg','assets/web/claws/blue-white/3.jpg','assets/web/claws/blue-white/5.jpg'],
    description: 'Placeholder description. A pair — one raw, one glazed deep blue — shown together on turned bases.'
  },
  {
    slug: 'nails',
    title: 'Nails',
    category: 'Claws',
    year: '2023',
    dimensions: '13 × 12 × 10 cm',
    status: 'available',
    images: ['assets/web/claws/nails/1.jpg','assets/web/claws/nails/3.jpg','assets/web/claws/nails/4.jpg','assets/web/claws/nails/2.jpg'],
    description: 'Placeholder description. Add a few lines about this piece.'
  },
  {
    slug: 'wb-i',
    title: 'W&B I',
    category: 'Claws',
    year: '2025',
    dimensions: '14.5 × 18 × 9.5 cm',
    status: 'available',
    images: ['assets/web/claws/wb-i/1.jpg','assets/web/claws/wb-i/2.jpg','assets/web/claws/wb-i/3.jpg','assets/web/claws/wb-i/4.jpg','assets/web/claws/wb-i/5.jpg','assets/web/claws/wb-i/6.jpg'],
    description: 'Placeholder description. Add a few lines about this piece.'
  },
  {
    slug: 'wb-ii',
    title: 'W&B II',
    category: 'Claws',
    year: '2025',
    dimensions: '9.5 × 22 × 13 cm',
    status: 'available',
    images: ['assets/web/claws/wb-ii/1.jpg','assets/web/claws/wb-ii/2.jpg','assets/web/claws/wb-ii/4.jpg','assets/web/claws/wb-ii/5.jpg','assets/web/claws/wb-ii/6.jpg','assets/web/claws/wb-ii/3.jpg'],
    description: 'Placeholder description. Add a few lines about this piece.'
  },
  {
    slug: 'alto-texturado',
    title: 'Alto Texturado',
    category: 'Teeth',
    year: '2025',
    dimensions: '33 × 20 × 7 cm',
    status: 'available',
    images: ['assets/web/teeth/alto-texturado/3.jpg','assets/web/teeth/alto-texturado/4.jpg','assets/web/teeth/alto-texturado/8.jpg','assets/web/teeth/alto-texturado/5.jpg','assets/web/teeth/alto-texturado/6.jpg','assets/web/teeth/alto-texturado/7.jpg','assets/web/teeth/alto-texturado/1.jpg','assets/web/teeth/alto-texturado/2.jpg'],
    description: 'Placeholder description. Add a few lines about this piece.'
  },
  {
    slug: 'atigrado',
    title: 'Atigrado',
    category: 'Teeth',
    year: '2025',
    dimensions: '22 × 20 × 9 cm',
    status: 'available',
    images: ['assets/web/teeth/atigrado/1.jpg','assets/web/teeth/atigrado/2.jpg','assets/web/teeth/atigrado/3.jpg','assets/web/teeth/atigrado/4.jpg','assets/web/teeth/atigrado/5.jpg','assets/web/teeth/atigrado/6.jpg','assets/web/teeth/atigrado/7.jpg','assets/web/teeth/atigrado/8.jpg','assets/web/teeth/atigrado/9.jpg'],
    description: 'Placeholder description. Add a few lines about this piece.'
  },
  {
    slug: 'golden',
    title: 'Golden',
    category: 'Teeth',
    year: '2025',
    dimensions: '24 × 19 × 11 cm',
    status: 'available',
    images: ['assets/web/teeth/golden/1.jpg','assets/web/teeth/golden/2.jpg','assets/web/teeth/golden/4.jpg','assets/web/teeth/golden/5.jpg','assets/web/teeth/golden/6.jpg','assets/web/teeth/golden/7.jpg','assets/web/teeth/golden/3.jpg','assets/web/teeth/golden/8.jpg','assets/web/teeth/golden/9.jpg'],
    description: 'Placeholder description. Add a few lines about this piece.'
  },
  {
    slug: 'speckel',
    title: 'Speckel',
    category: 'Teeth',
    year: '2025',
    dimensions: '27 × 20 × 19 cm',
    status: 'available',
    images: ['assets/web/teeth/speckel/6.jpg','assets/web/teeth/speckel/5.jpg','assets/web/teeth/speckel/7.jpg','assets/web/teeth/speckel/8.jpg','assets/web/teeth/speckel/2.jpg','assets/web/teeth/speckel/3.jpg','assets/web/teeth/speckel/4.jpg','assets/web/teeth/speckel/1.jpg'],
    description: 'Placeholder description. Add a few lines about this piece.'
  },
  {
    slug: 'a-cuadrille',
    title: 'A Cuadrillé',
    category: 'Teeth',
    year: '2023',
    dimensions: '3 × 7.5 × 10.5 cm',
    status: 'available',
    images: ['assets/web/teeth/a-cuadrille/4.jpg','assets/web/teeth/a-cuadrille/5.jpg','assets/web/teeth/a-cuadrille/1.jpg','assets/web/teeth/a-cuadrille/2.jpg','assets/web/teeth/a-cuadrille/3.jpg'],
    description: 'Placeholder description. Add a few lines about this piece.'
  },
  {
    slug: 'texturas-flores-i',
    title: 'Texturas Flores I',
    category: 'Teeth',
    year: '2023',
    dimensions: '16 × 9.5 × 9.5 cm',
    status: 'available',
    images: ['assets/web/teeth/texturas-flores-i/1.jpg','assets/web/teeth/texturas-flores-i/2.jpg','assets/web/teeth/texturas-flores-i/3.jpg'],
    description: 'Placeholder description. Add a few lines about this piece.'
  }
];

/* --- Earrings ---------------------------------------------------------------
   Eighteen pairs from the same series. Ceramic discs and arcs on stainless
   steel rings. Prices are shown on request until a price list is set.
   -------------------------------------------------------------------------- */

var SHOP = [];
(function () {
  for (var i = 1; i <= 18; i++) {
    var n = (i < 10 ? '0' : '') + i;
    SHOP.push({
      slug: 'earrings-' + n,
      title: 'Earrings ' + n,
      category: 'Earrings',
      year: '2026',
      dimensions: 'Pendant 2.4–2.7 cm · steel ring 1.8 cm · drop 35 cm',
      price: null,
      status: 'available',
      images: ['assets/web/shop/earrings-' + n + '/1.jpg', 'assets/web/shop/earrings-' + n + '/2.jpg'],
      description: 'Placeholder description. Hand-painted ceramic pendants on a stainless steel ring. Each pair is one of a kind — no two are painted alike.'
    });
  }
})();

var ITEMS = WORKS.concat(SHOP);
