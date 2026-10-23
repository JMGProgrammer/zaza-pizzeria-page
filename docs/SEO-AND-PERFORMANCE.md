# Estrategia de SEO y Rendimiento — ZAZA (SEO-AND-PERFORMANCE.md)

Este documento describe la arquitectura de optimización en motores de búsqueda (SEO) y las mejores prácticas de rendimiento web para garantizar tiempos de carga instantáneos en la web de **ZAZA**.

---

## 1. Estrategia de SEO Local y Metadatos

Dado que ZAZA es un negocio gastronómico con delivery local radicado en Rosario, Colonia, la estrategia debe enfocarse prioritariamente en el posicionamiento local y la visibilidad conversacional.

### A. Metadatos Fundamentales (HTML Head)
- **Title Tag optimizado:**
  `ZAZA Pizzería Artesanal | Delivery en Rosario, Colonia`
- **Meta Description:**
  `Pizzería artesanal ZAZA en Rosario, Colonia. Masa casera, ingredientes seleccionados y recetas clásicas y especiales. Pedí tu delivery directo por WhatsApp de 20:00 a 01:00 hs.`
- **Canonical URL:**
  `<link rel="canonical" href="https://pizzeriazaza.com.uy/" />` *(Dominio definitivo a confirmar)*
- **Meta Robots:**
  `index, follow`

### B. Open Graph y Twitter Cards (Para compartir en WhatsApp e Instagram)
Cuando un cliente comparta el enlace del sitio por WhatsApp o redes, debe previsualizarse una ficha atractiva con la identidad de la marca:
- `og:type`: `website`
- `og:title`: `ZAZA Pizzería — Masa Artesanal & Delivery en Rosario`
- `og:description`: `Masa casera, buenos ingredientes y sabor auténtico. Conocé nuestro menú y pedí por WhatsApp.`
- `og:image`: Imagen optimizada de 1200x630px basada en `Assets/Presentation/capresse-luxury-presentation.jpeg` o `Assets/Logos/zaza-pizzeria-logotipo.jpeg`.
- `og:locale`: `es_UY`

### C. Datos Estructurados (Schema.org JSON-LD)
Implementar en la plantilla principal (`Layout.astro`) un esquema de tipo `Restaurant` / `FoodEstablishment`:

```json
{
  "@context": "https://schema.org",
  "@type": "Restaurant",
  "name": "ZAZA Pizzería",
  "description": "Pizzería delivery artesanal con masa casera e ingredientes seleccionados.",
  "servesCuisine": "Pizza",
  "telephone": "+59891214087",
  "url": "https://pizzeriazaza.com.uy",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Rosario",
    "addressRegion": "Colonia",
    "addressCountry": "UY"
  },
  "openingHoursSpecification": [
    {
      "@type": "OpeningHoursSpecification",
      "opens": "20:00",
      "closes": "01:00"
    }
  ],
  "paymentAccepted": "Cash, Credit Card, Debit Card, Mercado Pago, Bank Transfer",
  "priceRange": "$$"
}
```

---

## 2. Jerarquía Semántica y Accesibilidad HTML

- Un único `<h1>` por página, ubicado estratégicamente en el Hero: `ZAZA — Pizzería Artesanal & Delivery`.
- Encabezados `<h2>` para delimitar las secciones principales:
  - *Nuestro Menú Artesanal*
  - *Cómo Funciona el Delivery*
  - *Medios de Pago*
  - *Contacto y Horarios*
- Encabezados `<h3>` para nombres de pizzas y categorías secundarias.
- Uso de elementos semánticos de HTML5: `<header>`, `<nav>`, `<main>`, `<section>`, `<article>` (para cada pizza) y `<footer>`.

---

## 3. Optimización de Imágenes y Recursos Estáticos

Las imágenes en alta resolución de la carpeta `Assets/` (que actualmente pesan entre 1 MB y 3.5 MB cada una) representan el mayor riesgo de rendimiento si no se optimizan.

### Estrategia de Carga y Conversión
1. **Integración con el componente `<Image />` de Astro:**
   - Aprovechar el optimizador de imágenes nativo de Astro basado en Sharp.
   - Conversión automática a formatos modernos de última generación (**WebP** o **AVIF**).
   - Generación de atributos `srcset` y `sizes` automáticos para servir tamaños ajustados a la pantalla móvil.
2. **Dimensionamiento explícito:**
   - Asignar siempre atributos `width` y `height` a las imágenes para evitar saltos de diseño (Cumulative Layout Shift - CLS).
3. **Estrategia de carga diferida (Lazy Loading):**
   - Imagen principal del Hero: `loading="eager"` con `fetchpriority="high"` para optimizar el LCP (Largest Contentful Paint).
   - Imágenes del menú y presentación: `loading="lazy"` y `decoding="async"`.

---

## 4. Rendimiento Frontend y Core Web Vitals

Aprovechando que Astro no envía JavaScript al cliente por defecto (cero JS en modo estático):

- **First Input Delay (FID) / Interaction to Next Paint (INP):** Instantáneo, al no existir hidratación de pesadas librerías de cliente en la carga inicial.
- **Largest Contentful Paint (LCP):** Objetivo < 1.8 segundos en conexiones 4G móviles.
- **Cumulative Layout Shift (CLS):** 0 (cero), garantizado por tipografías pre-cargadas y contenedores de imagen con aspecto de ratio fijo (`aspect-video`, `aspect-square`).
- **Fuentes web:**
  - Si se emplean Google Fonts, utilizar la directiva `font-display: swap` y considerar alojarlas localmente en `public/fonts/` o mediante `@fontsource`.

---

## 5. Sitemap y Robots.txt

Para cuando el sitio sea desplegado en su dominio definitivo:

- **`public/robots.txt`**:
  ```text
  User-agent: *
  Allow: /
  
  Sitemap: https://pizzeriazaza.com.uy/sitemap-index.xml
  ```
- **Sitemap:** Generación automática mediante la integración `@astrojs/sitemap`.
