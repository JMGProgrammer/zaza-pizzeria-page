# Tech Stack --- Pizzería Delivery Preview

## Objetivo

Sitio web informativo tipo landing page para presentar una pizzería de
delivery. Esta primera versión es una demo conceptual, sin backend ni
base de datos.

## Stack

-   **Framework:** Astro
-   **Lenguaje:** TypeScript
-   **Estilos:** Tailwind CSS
-   **Iconografía:** Lucide
-   **Tipografías:** Google Fonts
-   **Imágenes:** WebP / AVIF optimizadas
-   **Deploy:** Vercel o Netlify
-   **Control de versiones:** Git + GitHub

## Alcance inicial

-   Landing page responsive
-   Hero con propuesta de valor y CTA
-   Menú con pizzas, descripciones y precios
-   Promociones o combos destacados
-   Información de delivery: zonas, horarios y medios de pago
-   Contacto y enlaces a WhatsApp y redes sociales
-   SEO básico y metadatos
-   Optimización de imágenes y rendimiento

## Decisiones técnicas

-   Usar componentes nativos de Astro para la estructura y el contenido.
-   Mantener los datos del menú en archivos TypeScript dentro de
    `src/data/`.
-   No incorporar React inicialmente; evaluarlo solo si aparece una
    necesidad real de interactividad compleja.
-   No incluir backend ni base de datos en esta etapa.
-   Marcar precios, horarios, zonas y datos de contacto como
    provisionales hasta su confirmación por el negocio.

## Estructura sugerida

``` text
src/
├── components/
│   ├── Navbar.astro
│   ├── Hero.astro
│   ├── MenuSection.astro
│   ├── PizzaCard.astro
│   └── Footer.astro
├── data/
│   └── menu.ts
├── layouts/
│   └── Layout.astro
└── pages/
    └── index.astro
```

## Criterios de entrega

-   Diseño adaptable a móvil, tablet y escritorio.
-   Navegación clara y CTA de contacto visible.
-   Contraste, textos alternativos y navegación accesible.
-   Imágenes comprimidas y dimensiones adecuadas.
-   Metadatos básicos para compartir y buscadores.
-   Verificación de enlaces y datos antes de publicar.
