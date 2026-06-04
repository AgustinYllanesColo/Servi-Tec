# SERVITEC Rowa Landing

Landing de captacion para service de bombas de agua, ROWA y presurizadoras.

## Desarrollo

```bash
npm install
npm run dev
```

El proyecto usa Vite. La configuracion local abre por defecto en `http://localhost:8080`.

## Variables de contacto

Copiar `.env.example` a `.env.local` y completar datos reales antes de publicar:

```bash
VITE_CONTACT_BRAND=SERVITEC
VITE_CONTACT_PHONE_DISPLAY=+54 11 3571-7218
VITE_CONTACT_PHONE_E164=+541135717218
VITE_CONTACT_WHATSAPP=5491135717218
VITE_CONTACT_DEFAULT_MESSAGE=Hola SERVITEC, necesito service de bomba de agua. ¿Pueden ayudarme?
```

## Verificacion

```bash
npm test
npm run lint
npm run build
npm audit --omit=dev
```

## Produccion

```bash
npm run build
npm run preview
```

Antes del deploy final, reemplazar el canonical de `index.html` por la URL absoluta del dominio publicado y confirmar que los claims comerciales del sitio sean reales.
