# Plan de Iteración y Construcción — ZAZA (ITERATION-PLAN.md)

Este documento desglosa el plan de ejecución por sprints o iteraciones para la construcción técnica de la web preview de **ZAZA**. Cada iteración define objetivos concretos, tareas técnicas, entregables y criterios de salida (DoD - Definition of Done).

---

## Resumen del Plan de Iteraciones y Versiones

| Iteración | Foco Principal | Entregable Clave | Tag / Versión | Estado |
| :--- | :--- | :--- | :--- | :--- |
| **Iteración 0** | Documentación, Relevamiento & Arquitectura | Suite de Docs, Assets organizados y Reglas de Desarrollo | `v0.1.0` | **COMPLETADA ✅** |
| **Iteración 1** | Inicialización del Proyecto Astro & Design System | Proyecto base con Tailwind tokens, tipografía e iconos | `v0.2.0` | **COMPLETADA ✅** |
| **Iteración 2** | Capa de Datos & Componentes de Cabecera y Hero | Datos tipados de menú, Layout SEO, Navbar y Hero Section | `v0.3.0` | **COMPLETADA ✅** |
| **Iteración 3** | Catálogo Gastronómico & Sección Delivery | MenuSection, PizzaCards interactivas e Info Operativa | `v0.4.0` | **SIGUIENTE 🎯** |
| **Iteración 4** | Integración de Contacto WhatsApp, Footer & A11y | Botón flotante WhatsApp, Footer, microanimaciones y accesibilidad | `v0.5.0` | **PLANIFICADA 📋** |
| **Iteración 5** | Auditoría, Optimización de Assets & Despliegue | Build de producción sin errores, Lighthouse 90+ y URL en Vercel/Netlify | `v1.0.0` (Stable) | **PLANIFICADA 📋** |

> **Regla de Parches:** Cualquier corrección o ajuste puntual posterior a un cierre de iteración añade `+ v0.0.1` (ejemplo: `v0.1.1`).

---

## Detalle de las Iteraciones

### Iteración 0: Documentación, Relevamiento & Arquitectura (Completada ✅)
- **Objetivo:** Establecer las bases documentales, consolidar datos reales del comercio y definir directrices técnicas.
- **Tareas ejecutadas:**
  - Creación de `README.md`, `AGENTS.md`, `CHANGELOG.md`.
  - Creación de guías técnicas en `docs/`: `PROJECT-SCOPE.md`, `CONTENT-GUIDELINES.md`, `DESIGN-SYSTEM.md`, `SEO-AND-PERFORMANCE.md`, `DEPLOYMENT.md`, `ROADMAP.md`, `DEVELOPMENT-RULES.md`, `ITERATION-PLAN.md`.
  - Validación del 100% de los datos comerciales y de la carta oficial de precios.
- **Criterio de salida:** Enlaces internos verificados y sin datos pendientes de negocio.

---

### Iteración 1: Inicialización de Astro & Configuración del Design System (Siguiente 🎯)
- **Objetivo:** Disponer del entorno de desarrollo ejecutable con el framework y los estilos configurados.
- **Tareas técnicas:**
  1. Inicializar el proyecto Astro con TypeScript (`npm create astro@latest ./`).
  2. Instalar y configurar `@astrojs/tailwind` con la paleta de colores Vino (`#5A131A`, `#7B1B24`) y Crema (`#FAF6EE`) en `tailwind.config.mjs`.
  3. Instalar la librería de iconografía Lucide (`lucide-astro`).
  4. Configurar tipografías Google Fonts (Serif elegante para titulares y Sans-serif para texto).
  5. Crear archivo de estilos globales (`src/styles/global.css`).
- **Criterio de salida (DoD):** `npm run dev` arranca sin advertencias y la página de prueba refleja los colores y tipografías del Design System.

---

### Iteración 2: Capa de Datos Estáticos, Layout Base, Navbar y Hero
- **Objetivo:** Configurar la plantilla maestra con metadatos y presentar la primera sección impactante.
- **Tareas técnicas:**
  1. Definir interfaces en `src/types/index.ts` y poblar `src/data/menu.ts` con la carta oficial de precios y recetas.
  2. Crear `src/data/businessInfo.ts` con teléfono, WhatsApp, horarios y redes sociales.
  3. Crear `src/layouts/Layout.astro` con Open Graph, Schema.org y meta tags SEO.
  4. Diseñar `src/components/Navbar.astro` con logo optimizado y enlace rápido a WhatsApp.
  5. Desarrollar `src/components/Hero.astro` con propuesta de valor ("Hecho con pasión, buenos ingredientes, sabor auténtico") y CTA doble.
- **Criterio de salida (DoD):** Navegación fluida en móvil y escritorio con Hero estilizado de estética vintage.

---

### Iteración 3: Catálogo de Menú & Información Operativa de Delivery
- **Objetivo:** Exponer la oferta gastronómica completa clasificada por categorías y las condiciones de servicio.
- **Tareas técnicas:**
  1. Crear componente `src/components/PizzaCard.astro` con soporte de `<Image />` para compresión WebP, badges de precio y lista de ingredientes.
  2. Implementar `src/components/MenuSection.astro` con navegación por pestañas o tabs de categorías: Clásicas, Especiales, Acompañamientos y Bebidas.
  3. Desarrollar `src/components/DeliveryInfo.astro` mostrando el horario (Lunes a Domingo, 20:00 a 01:00 hs), cobertura en Rosario y badges de medios de pago (Efectivo, Tarjetas, QR, Mercado Pago).
- **Criterio de salida (DoD):** Menú visualmente atractivo, responsive, con todos los productos y precios de la carta oficial.

---

### Iteración 4: Canales de Conversión WhatsApp, Redes Sociales, Footer & A11y
- **Objetivo:** Cerrar el embudo de conversión y asegurar accesibilidad completa.
- **Tareas técnicas:**
  1. Crear botón flotante interactivo de WhatsApp (`fixed bottom-6 right-6`) con mensaje predefinido para pedir delivery.
  2. Integrar botón de consulta directa en cada ficha de pizza hacia WhatsApp con el producto preseleccionado.
  3. Desarrollar `src/components/Footer.astro` con enlaces a Instagram (`@lapizzeriazaza`), aviso de 100% Delivery y copyright.
  4. Auditoría de accesibilidad: atributos `alt` en imágenes, contraste de colores y navegación por teclado.
- **Criterio de salida (DoD):** Todos los botones abren WhatsApp o Instagram correctamente en nueva pestaña sin errores de consola.

---

### Iteración 5: Auditoría Final, Optimización de Rendimiento & Despliegue
- **Objetivo:** Garantizar máxima velocidad y publicar la web preview en la nube.
- **Tareas técnicas:**
  1. Ejecutar `npx astro check` para validación estricta de TypeScript.
  2. Ejecutar `npm run build` y comprobar la carpeta `dist`.
  3. Realizar auditoría Lighthouse en Chrome DevTools (Performance >= 90, Accessibility >= 90, SEO >= 90).
  4. Conectar con Vercel o Netlify para generar la URL pública de vista previa para el cliente.
- **Criterio de salida (DoD):** Sitio web activo en URL pública de prueba y validado con los dueños de ZAZA.
