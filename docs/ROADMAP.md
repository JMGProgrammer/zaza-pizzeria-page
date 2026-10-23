# Hoja de Ruta del Proyecto — ZAZA (ROADMAP.md)

Este documento detalla el estado actual de avance del proyecto, los hitos inmediatos para completar la web preview y las posibilidades de expansión futura clasificadas por fases.

---

## 1. Estado Actual del Repositorio

- **Fase actual:** Hito 1 completado — Documentación, Relevamiento y Preparación de Assets.
- **Activos recopilados:**
  - Ficha de relevamiento de negocio ([docs/BUSINESS-INFO.md](BUSINESS-INFO.md)).
  - Identidad gráfica, logotipos, fotos de platos y texturas en `Assets/`.
  - Definición completa del stack técnico, alcance, diseño y guías editoriales en `docs/`.
- **Pendiente inmediato:** Inicialización del proyecto frontend en Astro y desarrollo de la interfaz de la web preview.

---

## 2. Cronograma de Hitos (Milestones)

### Hito 1: Relevamiento y Documentación Técnica (COMPLETADO ✅)
- [x] Consolidación de datos del emprendimiento y canales de contacto.
- [x] Organización de assets gráficos (logos, fondos, fotos de menú, piezas promocionales).
- [x] Redacción de documentación técnica: Arquitectura, Alcance, Sistema de Diseño, Contenido, SEO, Despliegue y Hoja de Ruta.
- [x] Creación de `README.md` y `AGENTS.md` para estandarizar el desarrollo.

### Hito 2: Inicialización del Proyecto Astro y Base UI (EN PROCESO ⏳)
- [ ] Inicialización limpia de Astro con soporte de TypeScript.
- [ ] Configuración e integración de Tailwind CSS con los tokens de color Vino/Crema (`tailwind.config.mjs`).
- [ ] Incorporación del set de iconos Lucide (`lucide-astro`).
- [ ] Estructuración de datos estáticos del menú en `src/data/menu.ts`.
- [ ] Maquetación del layout base (`Layout.astro`) con metadatos SEO y tipografías.

### Hito 3: Desarrollo de Componentes y Landing Page (PRÓXIMO 🎯)
- [ ] Componente `Navbar.astro` con logo, navegación ancla y botón rápido de WhatsApp.
- [ ] Componente `Hero.astro` con propuesta de valor, estética vintage de impacto y llamados a la acción.
- [ ] Componente `MenuSection.astro` y `PizzaCard.astro` con visualización categorizada (Clásicas, Especiales, Acompañamientos, Bebidas).
- [ ] Componente `DeliveryInfo.astro` para zonas de entrega, horarios de atención y badges de medios de pago.
- [ ] Componente `Footer.astro` y botón flotante de WhatsApp.

### Hito 4: Verificación, Auditoría y Despliegue del Preview (PRÓXIMO 🎯)
- [ ] Optimización de imágenes (`<Image />` de Astro en WebP/AVIF).
- [ ] Verificación de todos los enlaces salientes (WhatsApp con texto automático, Instagram).
- [ ] Auditoría de accesibilidad, responsive y Core Web Vitals (Lighthouse >= 90).
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
