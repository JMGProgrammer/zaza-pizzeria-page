# Registro de Cambios — ZAZA (CHANGELOG.md)

Todas las modificaciones notables realizadas en este proyecto serán documentadas en este archivo.

El formato se basa en [Keep a Changelog](https://keepachangelog.com/es-ES/1.1.0/) y este proyecto se adhiere a [Semantic Versioning](https://semver.org/lang/es/).

---

## [0.3.0] - 2026-10-23

### Cierre de Iteración 2 (IT-2) — Capa de Datos Estáticos, Layout Base, Navbar y Hero
- **Tag Git:** `v0.3.0`
- **Añadido:**
  - Capa de tipado TypeScript en `src/types/index.ts` (`MenuItem`, `ProductCategory`, `BusinessDetails`, `BusinessSchedule`).
  - Base de datos estática tipada en `src/data/businessInfo.ts` con todos los datos confirmados del comercio (Rosario, Colonia, atención de lunes a domingo 20:00 a 01:00 hs, WhatsApp directo y redes).
  - Catálogo tipado en `src/data/menu.ts` con todas las pizzas clásicas, especiales, acompañamientos y bebidas con sus respectivos precios en pesos uruguayos e ingredientes.
  - Actualización de `src/layouts/Layout.astro` incorporando marcado estructurado Schema.org JSON-LD para restaurantes, Open Graph tags para WhatsApp y Twitter cards.
  - Componente de cabecera `src/components/Navbar.astro` con barra superior de avisos, logotipo optimizado, navegación ancla y botón rápido de pedidos a WhatsApp.
  - Componente principal `src/components/Hero.astro` con propuesta de valor artesanal, estética visual de hotel vintage/años 70, llamados a la acción y card destacada de pizza.
  - Actualización de `src/pages/index.astro` integrando Navbar, Hero, grid de pizzas destacadas y panel informativo de horarios, cobertura y medios de pago.

---

## [0.2.0] - 2026-10-23

### Cierre de Iteración 1 (IT-1) — Inicialización de Astro & Configuración del Design System
- **Tag Git:** `v0.2.0`
- **Añadido:**
  - Inicialización limpia del proyecto base con Astro 5 (`v5.4.2`) y TypeScript en modo estricto.
  - Integración nativa de Tailwind CSS v4 con `@tailwindcss/vite` y hoja de estilos globales `src/styles/global.css`.
  - Configuración completa de tokens de diseño ZAZA: Escala Vino/Borgoña (`#5A131A`, `#7B1B24`, `#3D0C11`), Escala Crema Cálido (`#FAF6EE`, `#FDFBF7`, `#F3EBD8`), Acento Oro Tostado (`#E5A93B`, `#C88A22`) y tipografías personalizadas.
  - Configuración de Google Fonts: *Playfair Display* (serif retro-elegante para titulares) y *Plus Jakarta Sans* (sans-serif legible para cuerpo).
  - Instalación de la librería de iconografía `@lucide/astro` e integración de `@astrojs/check` para validación de tipos.
  - Creación del layout maestro `src/layouts/Layout.astro` con metadatos SEO y tipografías pre-cargadas.
  - Creación de vista previa inicial en `src/pages/index.astro` demostrando la paleta cromática, iconos y tipografía del Design System.
  - Estructuración de carpetas modulares según `DEVELOPMENT-RULES.md`: `src/layouts/`, `src/components/ui/`, `src/data/`, `src/types/` y `src/assets/`.

---

## [0.1.0] - 2026-10-22

### Cierre de Iteración 0 (IT-0) — Documentación y Arquitectura
- **Tag Git:** `v0.1.0`
- **Añadido:**
  - Suite completa de documentación técnica y operativa en la carpeta `docs/`:
    - `docs/PROJECT-SCOPE.md`: Alcance detallado, exclusiones explícitas y criterios de aceptación.
    - `docs/CONTENT-GUIDELINES.md`: Pautas de voz de marca, catálogo con precios e ingredientes oficiales de la carta en Instagram, tratamiento de datos y activos gráficos.
    - `docs/DESIGN-SYSTEM.md`: Sistema de diseño, paleta Vino/Crema, tipografía retro/elegante, componentes y directrices WCAG AA.
    - `docs/SEO-AND-PERFORMANCE.md`: Estrategia de SEO local en Rosario (Colonia), marcado Schema.org, Open Graph y optimización de Core Web Vitals.
    - `docs/DEPLOYMENT.md`: Guía de despliegue en Vercel/Netlify, variables de entorno y checklist de pre-lanzamiento.
    - `docs/ROADMAP.md`: Planificación por hitos (desde documentación hasta la web preview y mejoras a futuro).
    - `docs/DEVELOPMENT-RULES.md`: Estándares de desarrollo, convenciones de nombres, estructura de `src/`, reglas de versionado (IT = +v0.1, fix = +v0.0.1, stable = +v1.0) y workflow de Git.
    - `docs/ITERATION-PLAN.md`: Plan secuencial de iteraciones operativas (IT-0 a IT-5) con tags y criterios de salida (DoD).
    - `docs/AGENTS.md` y `AGENTS.md` en la raíz con directrices estrictas para agentes de inteligencia artificial.
  - Archivo `README.md` principal en la raíz con presentación ejecutiva, comandos de desarrollo, arquitectura y catálogo de enlaces a la documentación.
  - Banco de recursos gráficos en `Assets/` (logotipos, fotografía gastronómica de pizzas, fondos de textura borgoña y carta digital oficial).
- **Modificado:**
  - `docs/OVERVIEW.md`: Alineado con los datos confirmados del comercio ZAZA, canales de atención directa, modalidad 100% delivery y referencias a las especificaciones técnicas.
  - `docs/BUSINESS-INFO.md`: Actualizado con la confirmación de atención de Lunes a Domingo de 20:00 a 01:00 hs, política de cocina a puertas cerradas (delivery exclusivo sin atención presencial), medios de pago y desglose oficial de la carta gastronómica.
