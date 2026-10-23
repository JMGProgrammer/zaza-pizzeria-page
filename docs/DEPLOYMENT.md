# Guía de Despliegue e Infraestructura — ZAZA (DEPLOYMENT.md)

Este documento describe la arquitectura de alojamiento, el flujo de integración y despliegue continuo (CI/CD) y la lista de comprobación de calidad para publicar la web de **ZAZA**.

---

## 1. Plataformas de Alojamiento Recomendadas

La web es un sitio puramente estático (SSG - Static Site Generation) compilado mediante Astro, lo que permite aprovechar plataformas de borde (Edge/JAMstack) globales, con costo cero en tier gratuito y máxima velocidad de respuesta:

1. **Vercel (Opción recomendada):**
   - Detección automática del framework Astro.
   - Certificados SSL/TLS automáticos y gratuitos (Let's Encrypt).
   - Optimización de imágenes en el Edge.
   - Previsualización automática de cada Pull Request.
2. **Netlify (Alternativa sólida):**
   - Integración nativa con repositorios GitHub.
   - Despliegue estático con CDN global ultrarrápida.
   - Gestión sencilla de dominios y registros DNS.

---

## 2. Configuración del Proyecto y Comandos de Compilación

A nivel de configuración en el panel de Vercel o Netlify:

| Parámetro | Valor |
| :--- | :--- |
| **Framework Preset** | Astro |
| **Root Directory** | `./` |
| **Build Command** | `npm run build` |
| **Output Directory** | `dist` |
| **Node.js Version** | `22.23.4` (definida también en `.nvmrc`) |

---

## 3. Variables de Entorno

En la fase inicial de preview informativa, el sitio no requiere secretos de backend ni llaves de bases de datos. La única variable efectiva es la URL pública real:

```bash
# .env.example
PUBLIC_SITE_URL="https://URL-REAL-DEL-PREVIEW"
```

El teléfono, los textos de WhatsApp y el perfil de Instagram continúan centralizados en `src/data/businessInfo.ts`; no se documentan variables que el código no consume.

---

## 4. Consideraciones de Dominio y DNS

- **Dominio provisional:** Al conectar el repositorio a Vercel o Netlify, se generará una URL automática gratuita (ej. `zaza-pizzeria.vercel.app` o `zaza-pizzeria.netlify.app`), ideal para la revisión interna y validación con los propietarios del local.
- **Dominio personalizado:** Para el lanzamiento definitivo, se coordinará la delegación DNS o configuración de registros A/CNAME en el proveedor de dominio correspondiente (por ejemplo, antel / dominios `.uy`).

---

## 5. Checklist de Verificación Pre-Lanzamiento (Production Readiness)

Antes de compartir el enlace público con clientes o promocionarlo en redes:

- [x] **Verificación de WhatsApp:** Los 13 enlaces generados usan `59891214087`; el destino público respondió correctamente.
- [x] **Verificación de Instagram:** El perfil real `@lapizzeriazaza` respondió correctamente y se abre con `target="_blank" rel="noopener noreferrer"`.
- [x] **Validación de Horarios y Cobertura:** Se exhibe el horario 20:00 a 01:00 hs y la cobertura confirmada en Rosario.
- [x] **Revisión de Precios e Información Provisional:** La carta coincide con `docs/BUSINESS-INFO.md` y no publica promociones inexistentes.
- [ ] **Prueba de Responsive en Celulares Reales:** Probar en al menos un dispositivo Android y un iPhone para verificar que no haya desbordamiento horizontal ni tipografías ilegibles.
- [ ] **Lighthouse en hosting:** La auditoría local obtuvo 100 en Accessibility, Best Practices y SEO, 99 en Performance de escritorio y 85-87 en Performance móvil. Repetir en el CDN para validar el objetivo >= 90.
- [x] **Favicon y metadatos:** Favicon, Open Graph, Schema.org y canonical configurable están incluidos; la URL absoluta se completa con `PUBLIC_SITE_URL`.

## Configuración efectiva

`astro.config.mjs` lee `PUBLIC_SITE_URL` durante el build. Al definir una URL real se generan canonical y URLs absolutas de Open Graph. Sin ella no se inventa un dominio. Ejecutar `npm ci` y `npm run validate`; publicar `dist/`. No hay proyecto de hosting enlazado todavía.
