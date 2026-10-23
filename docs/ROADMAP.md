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
   - Permitir al cliente seleccionar pizzas y cantidades directamente en la web y pulsar un botón *"Enviar pedido a WhatsApp"*, que genera un mensaje estructurado con el resumen del pedido y total estimado.
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

## Hero interactivo sobre mesa

`src/components/Hero.astro` reemplaza la portada anterior por la escena `Assets/hero-para-pngs.png`, la bandeja transparente de `Assets/Pngs/bandejas/` y cuatro pizzas de `Assets/Pngs/pizzas/`. La tapa y el plato se separan visualmente con CSS sobre el mismo PNG, sin alterar originales. Carrusel manual con botones, teclado y apertura por hover o toque; sin reproducción automática.
