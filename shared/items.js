// Carta genérica (precios de ejemplo, en guaraníes). Cada local elige qué categorías muestra y en qué orden.
window.MENU_CATS = {
  burgers:  {n: 'Hamburguesas',    i: 'burger',   d: 'Todas con papas fritas'},
  pizzas:   {n: 'Pizzas',          i: 'pizza',    d: 'Masa de la casa, 8 porciones'},
  picadas:  {n: 'Picadas',         i: 'board',    d: 'Para compartir'},
  acomp:    {n: 'Acompañamientos', i: 'fries',    d: 'Para picar'},
  cervezas: {n: 'Cervezas',        i: 'beer',     d: 'Bien heladas'},
  tragos:   {n: 'Tragos',          i: 'cocktail', d: 'Clásicos y de la casa'},
  sin:      {n: 'Sin alcohol',     i: 'soda',     d: 'Bebidas y café'}
};

(function () {
  var L = [];
  function it(id, c, n, d, p, t, i) { L.push({id: id, c: c, n: n, d: d, p: p * 1000, t: t || [], i: i}); }

  it('b-clasica', 'burgers', 'Clásica', 'Medallón de carne 150 g, queso cheddar, lechuga, tomate y salsa de la casa.', 38, ['pop']);
  it('b-cheese', 'burgers', 'Cheese Bacon', 'Doble cheddar fundido, panceta crocante, cebolla caramelizada y pan brioche.', 46, ['pop']);
  it('b-smash', 'burgers', 'Doble Smash', 'Dos medallones smash, queso americano, pickles y salsa especial.', 52);
  it('b-crispy', 'burgers', 'Crispy Chicken', 'Pollo crocante, lechuga, tomate y mayonesa de ajo.', 42, [], 'chicken');
  it('b-veggie', 'burgers', 'Veggie', 'Medallón de garbanzos y vegetales, rúcula, tomate y alioli.', 40, ['veg'], 'leaf');

  it('p-muzza', 'pizzas', 'Muzzarella', 'Salsa de tomate, muzzarella y orégano.', 48);
  it('p-napo', 'pizzas', 'Napolitana', 'Muzzarella, rodajas de tomate, ajo y albahaca.', 55);
  it('p-calab', 'pizzas', 'Calabresa', 'Muzzarella, longaniza calabresa y cebolla.', 58, ['hot']);
  it('p-4q', 'pizzas', 'Cuatro Quesos', 'Muzzarella, provolone, parmesano y roquefort.', 62, ['pop']);
  it('p-pepe', 'pizzas', 'Pepperoni', 'Muzzarella y abundante pepperoni.', 60);

  it('pic-casa', 'picadas', 'Picada de la casa (2 personas)', 'Mini milanesas, bastones de muzzarella, aros de cebolla, mandioca frita y chorizo.', 95, ['share', 'pop']);
  it('pic-4', 'picadas', 'Picada grande (4 personas)', 'Variedad de carnes, quesos, fritos y salsas.', 170, ['share']);
  it('pic-pollo', 'picadas', 'Pollo frito crocante', 'Piezas de pollo crujiente con limón y salsa BBQ.', 58, [], 'chicken');
  it('pic-provo', 'picadas', 'Provoleta', 'Provolone a la parrilla con orégano y tomate.', 45, ['veg'], 'pizza');
  it('pic-alitas', 'picadas', 'Alitas BBQ (6 unidades)', 'Alitas glaseadas con salsa BBQ ahumada.', 52, ['hot'], 'chicken');

  it('a-papas', 'acomp', 'Papas fritas', 'Porción grande, sal marina.', 22);
  it('a-ched', 'acomp', 'Papas cheddar y bacon', 'Con salsa cheddar y panceta crocante.', 34, ['pop']);
  it('a-aros', 'acomp', 'Aros de cebolla', 'Empanizados y bien crocantes.', 24, ['veg']);
  it('a-mand', 'acomp', 'Mandioca frita', 'La típica paraguaya, con salsa de ajo.', 20, ['veg']);
  it('a-bast', 'acomp', 'Bastones de muzzarella', '6 unidades con dip de tomate.', 32, ['veg']);
  it('a-ens', 'acomp', 'Ensalada de la casa', 'Verdes, tomate, zanahoria y aderezo.', 24, ['veg'], 'leaf');

  it('c-pilsen', 'cervezas', 'Pilsen', 'Lata 473 ml.', 22);
  it('c-brahma', 'cervezas', 'Brahma', 'Lata 473 ml.', 20);
  it('c-heine', 'cervezas', 'Heineken', 'Botella 330 ml.', 26);
  it('c-corona', 'cervezas', 'Corona', 'Botella 355 ml con limón.', 28);
  it('c-ipa', 'cervezas', 'Artesanal IPA', 'Lúpulo intenso, notas cítricas. Vaso 400 ml.', 32, ['new']);
  it('c-balde', 'cervezas', 'Balde x5', 'Cinco cervezas a elección, con hielo.', 100, ['share']);

  it('t-caipi', 'tragos', 'Caipirinha', 'Cachaça, lima, azúcar y hielo.', 32);
  it('t-mojito', 'tragos', 'Mojito', 'Ron, menta, lima y soda.', 34);
  it('t-marg', 'tragos', 'Margarita', 'Tequila, triple sec y limón, borde de sal.', 38);
  it('t-aperol', 'tragos', 'Aperol Spritz', 'Aperol, espumante y soda con rodaja de naranja.', 40, ['pop']);
  it('t-gin', 'tragos', 'Gin Tonic', 'Gin, tónica, pepino y enebro.', 42);
  it('t-moscow', 'tragos', 'Moscow Mule', 'Vodka, jengibre y lima en copa de cobre.', 40);
  it('t-fernet', 'tragos', 'Fernet con Coca', 'El de siempre, con mucho hielo.', 30, ['pop']);
  it('t-pina', 'tragos', 'Piña Colada', 'Ron, crema de coco y jugo de piña.', 36);

  it('s-gas', 'sin', 'Gaseosa', 'Línea Coca-Cola, 500 ml.', 12);
  it('s-agua', 'sin', 'Agua mineral', 'Con o sin gas, 500 ml.', 10);
  it('s-jugo', 'sin', 'Jugo natural', 'Naranja, frutilla o piña.', 18);
  it('s-limon', 'sin', 'Limonada con menta', 'Jarra individual, bien fría.', 18);
  it('s-energ', 'sin', 'Energizante', 'Lata 473 ml.', 22);
  it('s-cafe', 'sin', 'Café', 'Espresso o con leche.', 14, [], 'coffee');

  window.MENU_ITEMS = L;
})();

// Fotos genéricas disponibles en /assets/p/<id>.jpg (el local puede reemplazarlas en config.images).
window.MENU_PHOTOS = ["b-clasica", "b-cheese", "b-smash", "b-crispy", "b-veggie", "p-muzza", "p-napo", "p-calab", "p-4q", "p-pepe", "pic-casa", "pic-4", "pic-pollo", "pic-provo", "a-papas", "a-ched", "a-ens", "c-pilsen", "c-brahma", "c-heine", "c-ipa", "t-caipi", "t-mojito", "t-marg", "t-aperol", "t-fernet", "t-moscow", "t-pina", "s-jugo", "s-limon", "s-cafe", "su-cali", "su-combo", "br-panq", "br-capu", "br-lic", "a-mand", "g-jarra", "g-festejo", "g-after", "c-corona", "br-tostado", "t-gin", "a-aros", "a-bast", "s-gas", "s-agua", "s-energ", "c-balde", "pic-alitas"];
// Encuadre de fotos oscuras o con el producto descentrado.
window.MENU_POS = {'c-ipa': '78% 62%'};
