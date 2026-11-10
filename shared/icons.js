// Íconos de línea (viewBox 24). Se usan con ic('nombre').
window.ICONS = {
  burger: '<path d="M4 10a8 6 0 0 1 16 0z"/><path d="M3 13.5h18"/><path d="M5 13.5c1 1.6 2 1.6 3 0s2-1.6 3 0 2 1.6 3 0 2-1.6 3 0"/><path d="M4 17h16v1a3 3 0 0 1-3 3H7a3 3 0 0 1-3-3z"/>',
  pizza: '<path d="M3 5c6-2.6 12-2.6 18 0L12 21z"/><circle cx="10" cy="9" r="1.1"/><circle cx="14.2" cy="10.6" r="1.1"/><circle cx="11.8" cy="14.6" r="1.1"/>',
  fries: '<path d="M6 9l1.6 12h8.8L18 9z"/><path d="M8.5 9V4M11 9V3M13.5 9V4M16 9V5"/>',
  beer: '<path d="M6 8h9v12H6z"/><path d="M15 10.5h2a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2h-2"/><path d="M6 8a2.2 2.2 0 0 1 3-2.2 2.2 2.2 0 0 1 3.2 0A2.2 2.2 0 0 1 15 8"/><path d="M9 11v6M12 11v6"/>',
  cocktail: '<path d="M4 4h16l-8 9z"/><path d="M12 13v7M8 20h8"/><path d="M16 2l-3.2 5.2"/>',
  soda: '<path d="M7 8h10l-1.2 13H8.2z"/><path d="M6 8h12"/><path d="M13 8l1.8-5H18"/>',
  coffee: '<path d="M4 10h12v5a5 5 0 0 1-5 5H9a5 5 0 0 1-5-5z"/><path d="M16 11h1.6a2.2 2.2 0 0 1 0 4.4H16"/><path d="M8 3.5v3M12 3.5v3"/>',
  board: '<rect x="3" y="6" width="15" height="12" rx="2.5"/><path d="M18 10.5h3"/><circle cx="8" cy="11.5" r="1.7"/><circle cx="13" cy="11.5" r="1.7"/><path d="M6.5 15.5h8"/>',
  chicken: '<path d="M14.5 4a5 5 0 0 1 1 9.4l-5 5a2 2 0 1 1-2.9-2.9l5-5A5 5 0 0 1 14.5 4z"/>',
  sushi: '<ellipse cx="12" cy="9" rx="8" ry="4"/><path d="M4 9v5c0 2.2 3.6 4 8 4s8-1.8 8-4V9"/><path d="M8.5 8.6h7"/>',
  egg: '<path d="M12 3c4 0 7 5 7 10a7 7 0 0 1-14 0c0-5 3-10 7-10z"/><path d="M9 13a3 3 0 0 0 3 3"/>',
  leaf: '<path d="M5 19C5 10 10 5 20 4c0 10-5 15-14 15z"/><path d="M5 19l8-8"/>',
  party: '<path d="M4 20l4.2-12 7.8 7.8z"/><path d="M14 4.5l1 2.2M19.5 9.5l2.2 1M18 4v2.5M10 3v2"/>',
  star: '<path d="M12 3.5l2.6 5.4 5.9.8-4.3 4.1 1 5.9-5.2-2.8-5.2 2.8 1-5.9L3.5 9.7l5.9-.8z"/>',
  bell: '<path d="M6 16v-5a6 6 0 0 1 12 0v5l2 2H4z"/><path d="M10 21h4"/>',
  search: '<circle cx="11" cy="11" r="6.5"/><path d="M20 20l-4.2-4.2"/>',
  close: '<path d="M6 6l12 12M18 6L6 18"/>',
  clock: '<circle cx="12" cy="12" r="8.5"/><path d="M12 7.5V12l3 2"/>',
  pin: '<path d="M12 21s7-6.2 7-11.5A7 7 0 0 0 5 9.5C5 14.8 12 21 12 21z"/><circle cx="12" cy="9.5" r="2.4"/>',
  insta: '<rect x="4" y="4" width="16" height="16" rx="4.5"/><circle cx="12" cy="12" r="3.6"/><circle cx="16.8" cy="7.2" r=".6"/>',
  wa: '<path d="M4 20l1.2-4A8 8 0 1 1 8 18.8z"/><path d="M9 9.5c.4 2 2.4 4 4.5 4.5l1.3-1.2-1.8-1-.8.7a3.6 3.6 0 0 1-1.6-1.6l.7-.8-1-1.8z"/>',
  fire: '<path d="M12 3c1 3.5 5 5.5 5 10a5 5 0 0 1-10 0c0-2 1-3 2-4 .3 1.2 1 2 2 2-.5-3 0-6 1-8z"/>',
  arrow: '<path d="M5 12h14M13 6l6 6-6 6"/>'
};
window.ic = function (name, cls) {
  return '<svg class="ic ' + (cls || '') + '" viewBox="0 0 24 24" aria-hidden="true">' + (window.ICONS[name] || '') + '</svg>';
};
