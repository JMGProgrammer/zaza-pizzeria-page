# Hoja de Ruta del Proyecto — ZAZA (ROADMAP.md)

Este documento detalla el estado actual de avance del proyecto, los hitos inmediatos para completar la web preview y las posibilidades de expansión futura clasificadas por fases.

---

## 1. Estado Actual del Repositorio

- **Fase actual:** pre-deploy completado; falta publicar y validar el preview sobre CDN.
- **Activos recopilados:**
  - Ficha de relevamiento de negocio ([docs/BUSINESS-INFO.md](BUSINESS-INFO.md)).
  - Identidad gráfica, logotipos, fotos de platos y texturas en `Assets/`.
  - Definición completa del stack técnico, alcance, diseño y guías editoriales en `docs/`.
- **Pendiente inmediato:** conectar Vercel o Netlify, definir `PUBLIC_SITE_URL`, repetir Lighthouse móvil y validar en dispositivos reales.

---

## 2. Cronograma de Hitos (Milestones)

### Hito 1: Relevamiento y Documentación Técnica (COMPLETADO ✅)

- [x] Consolidación de datos del emprendimiento y canales de contacto.
- [x] Organización de assets gráficos (logos, fondos, fotos de menú, piezas promocionales).
- [x] Redacción de documentación técnica: Arquitectura, Alcance, Sistema de Diseño, Contenido, SEO, Despliegue y Hoja de Ruta.
- [x] Creación de `README.md` y `AGENTS.md` para estandarizar el desarrollo.

### Hito 2: Inicialización del Proyecto Astro y Base UI (COMPLETADO ✅)

- [x] Inicialización limpia de Astro 5+ con soporte de TypeScript estricto.
- [x] Configuración e integración de Tailwind CSS v4 con los tokens de color Vino/Crema (`src/styles/global.css`).
- [x] Incorporación del set de iconos Lucide (`@lucide/astro`).
- [x] Configuración de tipografías Google Fonts (Playfair Display para títulos y Plus Jakarta Sans para texto).
- [x] Maquetación del layout base (`src/layouts/Layout.astro`) con metadatos SEO.

### Hito 3: Desarrollo de Componentes y Landing Page (IMPLEMENTADO)

- [x] Componente `Navbar.astro` con logo, navegación ancla y botón rápido de WhatsApp.
- [x] Componente `Hero.astro` con propuesta de valor, estética vintage de impacto y llamados a la acción.
- [x] Componente `MenuSection.astro` y `PizzaCard.astro` con visualización categorizada (Clásicas, Especiales, Acompañamientos, Bebidas).
- [x] Componente `DeliveryInfo.astro` para zonas de entrega, horarios de atención y badges de medios de pago.
- [x] Componente `Footer.astro` con contactos.
- [x] Botón fijo de WhatsApp, logo tipográfico y horario contextual (iteración 4).

### Hito 4: Verificación, Auditoría y Despliegue del Preview (PRÓXIMO 🎯)

- [x] Optimización de imágenes (`<Image />` de Astro en WebP/AVIF).
- [x] Verificación de todos los enlaces salientes (WhatsApp con texto automático, Instagram).
- [x] Auditoría local de accesibilidad y responsive (Accessibility, Best Practices y SEO: 100; escritorio: 99 Performance).
- [ ] Confirmación de Performance móvil >= 90 en el hosting real (local: 85-87, LCP 2.0-2.1 s, CLS 0).
- [ ] Despliegue del preview en Vercel o Netlify para revisión con los dueños de ZAZA.

---

## 3. Posibilidades Futuras (Fuera del Alcance Actual)

Las siguientes iniciativas son ideas y propuestas de evolución tecnológica que se considerarán únicamente en etapas posteriores, una vez validado el éxito de la web preview:

1. **Catálogo con Carrito Conversacional (WhatsApp Cart):**
   - Permitir al cliente seleccionar pizzas y cantidades directamente en la web y pulsar un botón _"Enviar pedido a WhatsApp"_, que genera un mensaje estructurado con el resumen del pedido y total estimado.
2. **Selector de Estado en Tiempo Real (Abierto / Cerrado):**
   - Indicador dinámico que detecte la hora local del usuario y señale si la cocina está tomando pedidos en ese momento.
3. **Gestor de Contenidos Ligero (Headless CMS):**
   - Integración con Sanity o Decap CMS para que el equipo de ZAZA pueda actualizar precios, agregar fotos o activar promociones sin tocar código.
4. **Pasarela de Pago Online Integrada:**
   - En caso de escalar a un modelo de pedidos automatizados, evaluación de integración con Checkout de Mercado Pago Uruguay.

## Revisión visual del 23 de octubre de 2026

Portada con afiche Capresse completo y telón, fotos de las cuatro pizzas disponibles, carta de 13 productos y bloque de marca con bandeja. Se eliminaron afirmaciones no confirmadas y se resolvieron las anclas ausentes. Componentes nuevos: `MenuSection.astro`, `PizzaCard.astro`, `DeliveryInfo.astro` y `Footer.astro` en `src/components/`. La fuente comercial continúa siendo [BUSINESS-INFO.md](BUSINESS-INFO.md).

### Continuación de iteración 4

Añadidos `Wordmark.astro`, `WhatsAppButton.astro`, `ServiceHours.astro`, `src/utils/schedule.ts` y fuentes locales. Marca tipográfica autorizada por el usuario; [criterio visual](DESIGN-SYSTEM.md).

## Hero interactivo sobre mesa (archivado)

La implementación descrita abajo ahora vive en `src/components/PizzaShowcase.astro` y está deshabilitada en la portada.

`src/components/Hero.astro` reemplaza la portada anterior por la escena `Assets/hero-para-pngs.png`, la bandeja transparente de `Assets/Pngs/bandejas/` y cuatro pizzas de `Assets/Pngs/pizzas/`. La tapa y el plato se separan visualmente con CSS sobre el mismo PNG, sin alterar originales. Carrusel manual con botones, teclado y apertura por hover o toque; sin reproducción automática. El ocultado de la pizza al cerrar la tapa se retrasa hasta el aterrizaje del domo (700ms) y el cambio con la tapa abierta cierra primero, intercambia detrás del domo y reabre mostrando la pizza nueva: nunca se ve desaparecer literalmente.

## Toldo festoneado en la barra de navegación (implementación anterior)

El original `Assets/Backgrounds/header-bg.png` (1920×1072) queda intacto, sin recortes, como material de diseño. El fondo vivo de la navbar usa el derivado `Assets/Backgrounds/header-toldo.png` (bloque de contenido 1920×395) estirado a llenar la barra (`100% 100%`, una única imagen sin mosaico ni costuras; en ≤973px la barra es proporcional y el estirado es nulo) y los huecos del festón son agujeros reales: el hero pasa por detrás de la barra vía `margin-top` negativo (≥768px) mostrando el telón en continuidad; el título del hero queda anclado bajo la barra con la misma fórmula de alto. Sin sombra de bloque bajo la barra (pintaría el borde duro bajo el festón) y marca ZAZA estampada sobre la tela en desktop (global.css ≥768px). El teléfono flotante de WhatsApp queda por debajo del header (z-30) y cuelga del borde inferior del toldo compensando el padding transparente del PNG (`-32px`). Reemplaza las variantes `cover`/mosaico/degradado que recortaban la barra, generaban costuras o mostraban un panel de color.

## Portada actual: fachada y acceso a la carta

`Hero.astro` usa la fachada representativa y el pizarrón interactivo de `Assets/Pizarron hero/` como enlace a `#menu` (con ruta Inicio / Carta). La escena de pizzas anterior se conserva sin montar en `PizzaShowcase.astro` para reutilizarla más adelante. Los platillos destacados están separados en `FeaturedDishes.astro` y deshabilitados; la carta oficial sigue publicada. Pendiente: revisar el material ilustrativo de la fachada porque muestra un horario diferente del confirmado y sillas; el contenido textual del sitio deja claro que ZAZA atiende solo por delivery de 20:00 a 01:00 según [BUSINESS-INFO.md](BUSINESS-INFO.md).

## Header vigente

El header utiliza `Assets/header-reworked-zaza.png` (3840×790) con logotipo ya impreso, sin duplicar el `Wordmark`; la marca funciona como enlace accesible al inicio. Se retiraron los enlaces Menú, Delivery & Pagos y La TV, manteniendo el botón «Hacer pedido» en su posición de escritorio y el teléfono colgante en móvil. El toldo ocupa toda la barra en escritorio, se centra sin repetición en móvil y mantiene sus huecos transparentes sobre el hero. El recurso anterior se conserva sin utilizar.

## TV Section

Debajo de la carta, `TVSection.astro` reemplaza el bloque «Nuestra masa» de `DeliveryInfo.astro`: la sala de `Assets/TV Section/tv-section-base.jpeg` recibe `tv/TV.png` por encima, sobre la mesa. Los cuatro frames `tv/tv-estatica-*.png` se alternan mientras se pasa el mouse por la TV; en táctil se enciende y apaga con toques, y con movimiento reducido queda fija. La sección conserva el ancla `#tv`; delivery permanece debajo. No usar el montaje de referencia `tv-70s-all-section.jpeg` en producción porque anuncia una promoción sin confirmar.

## Loading screen

La portada monta `LoadingScreen.astro` con los dos telones complementarios y la pizza central de `Assets/Loading screen/`. Durante la carga se ve la pizza girando; al abrir, sube rápido y ambos telones se deslizan hacia los laterales. La capa se elimina al completar la transición y cuenta con salida por tiempo máximo; queda oculta sin JavaScript o con movimiento reducido.
