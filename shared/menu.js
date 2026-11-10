// Motor del menú digital: lee window.MENU_CONFIG + window.MENU_ITEMS y arma la página.
(function () {
  var C = window.MENU_CONFIG;
  var CATS = Object.assign({}, window.MENU_CATS, C.extraCats || {});
  var ITEMS = window.MENU_ITEMS.concat(C.extraItems || []);
  var IMG = Object.assign({}, C.images || {});
  (window.MENU_PHOTOS || []).forEach(function (id) { if (!(id in IMG)) IMG[id] = '/assets/p/' + id + '.jpg'; });
  var POS = window.MENU_POS || {};
  var TAGS = {pop: ['fire', 'Popular'], hot: ['fire', 'Picante'], veg: ['leaf', 'Veggie'], new: ['star', 'Nuevo'], share: ['party', 'Para compartir']};
  var app = document.getElementById('app');
  var mesa = new URLSearchParams(location.search).get('mesa');

  function money(n) { return n.toLocaleString('es-PY'); }
  function esc(s) { return String(s).replace(/[&<>"]/g, function (c) { return {'&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;'}[c]; }); }
  function norm(s) { return s.toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g, ''); }
  function wa(text) { return 'https://wa.me/' + C.whatsapp + '?text=' + encodeURIComponent(text); }

  // tema
  var root = document.documentElement.style;
  Object.keys(C.theme || {}).forEach(function (k) { root.setProperty('--' + k, C.theme[k]); });
  document.title = C.name + ' · Menú';

  var order = C.order.filter(function (k) { return CATS[k]; });
  var byCat = {};
  ITEMS.forEach(function (x) { (byCat[x.c] = byCat[x.c] || []).push(x); });
  Object.keys(byCat).forEach(function (k) { byCat[k].sort(function (a, b) { return (b.first ? 1 : 0) - (a.first ? 1 : 0); }); });

  function thumb(x) {
    var src = IMG[x.id];
    var icon = x.i || CATS[x.c].i;
    return src ? '<img src="' + src + '" alt="' + esc(x.n) + '" loading="lazy"' + (POS[x.id] ? ' style="object-position:' + POS[x.id] + '"' : '') + '>' : ic(icon);
  }

  function itemHTML(x) {
    var tags = x.t.map(function (t) { return '<span class="tag ' + t + '">' + ic(TAGS[t][0]) + TAGS[t][1] + '</span>'; }).join('');
    return '<button class="item" data-id="' + x.id + '"><div><h3>' + esc(x.n) + '</h3><p>' + esc(x.d) + '</p>' +
      '<div class="price"><small>Gs.</small>' + money(x.p) + '</div>' + (tags ? '<div class="tags">' + tags + '</div>' : '') +
      '</div><div class="thumb">' + thumb(x) + '</div></button>';
  }

  function secHTML(k) {
    var list = byCat[k] || [];
    var c = CATS[k];
    return '<section class="sec" id="c-' + k + '" data-cat="' + k + '"><h2>' + ic(c.i) + c.n + '</h2><div class="sub">' + esc(c.d || '') + '</div>' +
      list.map(itemHTML).join('') + '</section>';
  }

  function info() {
    var out = '';
    if (mesa) out += '<span class="pill mesa">' + ic('pin') + 'Mesa ' + esc(mesa) + '</span>';
    if (C.hours) out += '<span class="pill">' + ic('clock') + esc(C.hours) + '</span>';
    if (C.place) out += '<span class="pill">' + ic('pin') + esc(C.place) + '</span>';
    return out;
  }

  function footerCards() {
    var h = '';
    if (C.reserve) {
      h += '<div class="card"><h3>' + esc(C.reserve.title) + '</h3><p>' + esc(C.reserve.text) + '</p>' +
        '<a class="btn" href="' + wa(C.reserve.message) + '" target="_blank" rel="noopener">' + ic('wa') + esc(C.reserve.cta) + '</a></div>';
    }
    h += '<div class="card"><h3>¿Qué tal estuvo todo?</h3><p>Tu reseña en Google nos ayuda muchísimo.</p>' +
      '<div class="stars">' + [1, 2, 3, 4, 5].map(function () { return ic('star'); }).join('') + '</div>' +
      '<a class="btn" href="' + C.reviewUrl + '" target="_blank" rel="noopener">' + ic('star') + 'Dejar una reseña</a></div>';
    return h;
  }

  app.innerHTML =
    '<div class="wrap">' +
    '<header class="hero"><img class="cover" src="' + C.cover + '" alt=""><div class="glow"></div></header>' +
    '<div class="brand"><div class="badge"><img src="' + C.logo + '" alt="' + esc(C.name) + '"></div><div><h1>' + esc(C.name) + '</h1><p>' + esc(C.tagline) + '</p></div></div>' +
    '<div class="info">' + info() + '</div>' +
    '<label class="search">' + ic('search') + '<input id="q" type="search" placeholder="Buscar en el menú…" autocomplete="off"></label>' +
    '<nav class="cats" id="cats">' + order.map(function (k) { return '<a class="chip" href="#c-' + k + '" data-k="' + k + '">' + ic(CATS[k].i) + CATS[k].n + '</a>'; }).join('') + '</nav>' +
    '<main id="main">' + order.map(secHTML).join('') + '</main>' +
    '<div id="extras">' + footerCards() + '</div>' +
    '<footer class="foot"><button class="toplogo" id="top" aria-label="Volver arriba"><img src="' + C.logo + '" alt=""></button><div class="links">' +
    (C.instagram ? '<a href="https://instagram.com/' + C.instagram + '" target="_blank" rel="noopener">' + ic('insta') + '@' + C.instagram + '</a>' : '') +
    '</div>Precios en guaraníes, IVA incluido.</footer>' +
    (C.waiter ? '<a class="fab" href="' + wa((mesa ? 'Mesa ' + mesa + ': ' : '') + 'Necesitamos atención, por favor') + '" target="_blank" rel="noopener">' + ic('bell') + 'Llamar al mozo</a>' : '') +
    '</div>' +
    '<div class="sheet-bg" id="bg"></div><div class="sheet" id="sheet" role="dialog" aria-modal="true"></div>';

  document.getElementById('top').onclick = function () { window.scrollTo({top: 0, behavior: 'smooth'}); };

  // detalle del producto
  var sheet = document.getElementById('sheet');
  var bg = document.getElementById('bg');
  function open(id) {
    var x = ITEMS.filter(function (i) { return i.id === id; })[0];
    if (!x) return;
    var src = IMG[x.id];
    sheet.innerHTML = '<div class="grab"></div><button class="x" aria-label="Cerrar">' + ic('close') + '</button>' +
      '<div class="pic">' + (src ? '<img src="' + src + '" alt="' + esc(x.n) + '">' : ic(x.i || CATS[x.c].i)) + '</div>' +
      '<div class="body"><h3>' + esc(x.n) + '</h3><span class="price"><small>Gs.</small>' + money(x.p) + '</span><p>' + esc(x.d) + '</p>' +
      '<div class="tags" style="margin-top:12px">' + x.t.map(function (t) { return '<span class="tag ' + t + '">' + ic(TAGS[t][0]) + TAGS[t][1] + '</span>'; }).join('') + '</div></div>';
    sheet.classList.add('on'); bg.classList.add('on');
    sheet.querySelector('.x').onclick = close;
  }
  function close() { sheet.classList.remove('on'); bg.classList.remove('on'); }
  bg.onclick = close;
  document.addEventListener('keydown', function (e) { if (e.key === 'Escape') close(); });
  document.getElementById('main').addEventListener('click', function (e) {
    var b = e.target.closest('.item');
    if (b) open(b.getAttribute('data-id'));
  });

  // categoría activa al hacer scroll
  var chips = [].slice.call(document.querySelectorAll('.chip'));
  function setActive(k) {
    chips.forEach(function (c) {
      var on = c.getAttribute('data-k') === k;
      c.classList.toggle('on', on);
      if (on) {
        var nav = document.getElementById('cats');
        nav.scrollTo({left: c.offsetLeft - nav.clientWidth / 2 + c.clientWidth / 2, behavior: 'smooth'});
      }
    });
  }
  setActive(order[0]);
  if ('IntersectionObserver' in window) {
    var io = new IntersectionObserver(function (es) {
      es.forEach(function (e) { if (e.isIntersecting) setActive(e.target.getAttribute('data-cat')); });
    }, {rootMargin: '-90px 0px -65% 0px'});
    [].forEach.call(document.querySelectorAll('.sec'), function (s) { io.observe(s); });
  }

  // búsqueda
  var q = document.getElementById('q');
  q.addEventListener('input', function () {
    var t = norm(q.value.trim());
    var main = document.getElementById('main');
    if (!t) { main.innerHTML = order.map(secHTML).join(''); return; }
    var found = ITEMS.filter(function (x) { return norm(x.n + ' ' + x.d + ' ' + CATS[x.c].n).indexOf(t) > -1; });
    main.innerHTML = found.length
      ? '<section class="sec"><h2>' + ic('search') + 'Resultados</h2><div class="sub">' + found.length + ' producto' + (found.length > 1 ? 's' : '') + '</div>' + found.map(itemHTML).join('') + '</section>'
      : '<div class="empty">No encontramos "' + esc(q.value) + '". Probá con otra palabra.</div>';
  });
})();
