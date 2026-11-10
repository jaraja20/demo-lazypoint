// Lazy Point · estilo tomado de su Instagram: noche, rojo neón, ámbar y trazo fino. Logo: bulldog en línea.
window.MENU_CONFIG = {
  name: 'Lazy Point',
  tagline: 'Donde cada brindis se vuelve plan',
  hours: '',
  place: 'Ciudad del Este',
  instagram: 'lazypointpy',
  logo: '/assets/logo.jpg',
  cover: '/assets/sunset.jpg',
  // TODO: reemplazar por los datos reales del local
  whatsapp: '595000000000',
  reviewUrl: 'https://search.google.com/local/writereview?placeid=PLACE_ID_DEL_LOCAL',
  waiter: true,
  demoBanner: true,
  reserve: {
    title: 'Reservas exclusivas',
    text: 'Festejos, after office y eventos corporativos.',
    cta: 'Reservar por WhatsApp',
    message: 'Hola! Quiero reservar en Lazy Point para un evento.'
  },
  theme: {
    bg: '#120709', bg2: '#3a0a14', s1: '#1d0d11', s2: '#2a1218',
    text: '#f8e9e1', muted: '#b79c98', accent: '#e63950', accent2: '#ffab4d', 'on-accent': '#fff',
    line: 'rgba(248,233,225,.13)', fh: "'Josefin Sans',system-ui,sans-serif", fb: "'DM Sans',system-ui,sans-serif",
    hls: '.14em', hw: '300', hcase: 'uppercase',
    glow: '0 0 18px rgba(230,57,80,.45)',
    'hero-glow': 'radial-gradient(ellipse at 20% 100%, rgba(230,57,80,.45), transparent 60%), radial-gradient(ellipse at 90% 0, rgba(255,171,77,.28), transparent 55%)',
    'cover-pos': '50% 60%'
  },
  order: ['tragos', 'cervezas', 'picadas', 'acomp', 'burgers', 'pizzas', 'sin', 'grupos'],
  extraCats: {
    grupos: {n: 'Para grupos', i: 'party', d: 'Combos para festejos y after office'}
  },
  extraItems: [
    {id: 't-sunset', c: 'tragos', n: 'Lazy Sunset', d: 'Tequila, curaçao azul, naranja y granadina. El trago de la casa.', p: 45000, t: ['pop', 'new'], first: true},
    {id: 'g-festejo', c: 'grupos', n: 'Combo Festejo (10 personas)', d: 'Picada grande, 2 baldes de cerveza y 4 jarras de trago a elección.', p: 450000, t: ['share', 'pop']},
    {id: 'g-after', c: 'grupos', n: 'After Office (6 personas)', d: 'Picada de la casa, balde de cerveza y 2 jarras de trago.', p: 280000, t: ['share']},
    {id: 'g-jarra', c: 'grupos', n: 'Jarra de trago (1,5 L)', d: 'Caipirinha, mojito o gin tonic para compartir.', p: 90000, t: ['share']}
  ],
  images: {
    't-sunset': '/assets/sunset.jpg'
  }
};
