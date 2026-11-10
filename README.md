# Menú digital NFC · Lazy Point

Menú digital para abrir con una tarjeta o sticker NFC en la mesa. Sitio estático (HTML, CSS y JS), sin build.

## Datos a completar antes de entregar
En `config.js`:
- `whatsapp`: número del local con código de país (ej. `595981123456`). Lo usan "Llamar al mozo" y las reservas.
- `reviewUrl`: enlace de reseñas de Google del local (con el Place ID real).
- Precios y productos: `shared/items.js` (base) y `extraItems` en `config.js`.

## NFC
Grabar en cada tarjeta la URL del menú con el número de mesa:
`https://<dominio>/?mesa=1`, `?mesa=2`, etc. El menú muestra "Mesa N" y el botón de mozo lo incluye en el mensaje.

## Despliegue
Importar el repo en Vercel (framework: Other, sin comando de build).
