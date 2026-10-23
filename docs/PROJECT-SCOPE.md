# Alcance del Proyecto — ZAZA Web Preview (PROJECT-SCOPE.md)

Este documento formaliza los límites funcionales, requerimientos técnicos, exclusiones y criterios de aceptación para el desarrollo de la web preview de **ZAZA**.

---

## 1. Naturaleza y Propósito del Proyecto

El sitio web es una **web preview / landing page de presentación comercial** orientada a la conversión directa por canales conversacionales. Su finalidad primordial es consolidar la presencia digital del negocio, exhibir su propuesta de valor gastronómica con un diseño distintivo y derivar las órdenes de compra directamente a WhatsApp.

---

## 2. Características Incluidas (In Scope)

1. **Sección Hero:**
   - Presentación de la marca y propuesta de valor ("Hecho con pasión, buenos ingredientes, sabor auténtico").
   - Call To Action (CTA) principal y flotante orientado a contactar vía WhatsApp.
2. **Identidad y Storytelling:**
   - Breve presentación de la filosofía de ZAZA: masa artesanal/casera, cultura pizzera mixta y estética retro-vintage cuidada.
3. **Catálogo Gastronómico (Menú Informativo Confirmado):**
   - Clasificación por categorías según carta oficial de Instagram:
     - **Pizzas Clásicas:** Margarita ($ 380), Muzza ($ 450), Napolitana ($ 450), Jamón y morrones ($ 450).
     - **Pizzas Especiales:** Cuatro Quesos ($ 680), Pepperoni ($ 350), Capresse ($ 450), Pi-ZAZA ($ 450).
     - **Para Acompañar:** Papas Fritas ($ 150), Papas Noisette ($ 150).
     - **Bebidas:** Refrescos 1.5L ($ 200), Agua 1L ($ 150), Cerveza Patagonia 700ml ($ 350).
   - Fichas de producto con descripción de ingredientes reales, precios oficiales y recursos visuales optimizados.
4. **Información Operativa y de Cobertura:**
   - Horarios de atención: Lunes a Domingo, 20:00 a 01:00 hs.
   - Zona de entrega: Todo Rosario (Colonia, Uruguay).
   - Modalidad: 100% Delivery (no se dispone de atención presencial ni retiro en local para el público).
   - Medios de pago aceptados: Efectivo, Transferencia bancaria, Tarjetas, Código QR y Mercado Pago.
5. **Canales de Contacto Directo y Redes:**
   - Enlace directo con mensaje preformateado a WhatsApp (`+598 91 214 087`).
   - Enlace oficial al perfil de Instagram (`@lapizzeriazaza`).
6. **Diseño Responsive y Optimizado:**
   - Experiencia fluida para navegación móvil (prioridad alta), tablet y escritorio.
7. **SEO Básico y Accesibilidad:**
   - Marcado semántico HTML5, Open Graph tags para redes sociales y contraste accesible.

---

## 3. Exclusiones Explícitas (Out of Scope)

Para evitar desvíos en el alcance, las siguientes funcionalidades quedan expresamente excluidas de esta fase inicial:

- ❌ **Retiro en local / Take-away presencial:** El modelo de negocio opera a puertas cerradas exclusivamente por delivery en Rosario; no se promueve la visita física ni retiro en cocina.
- ❌ **Carrito de compras o pasarela de pago online:** No se integrará Checkout Pro de Mercado Pago, Stripe ni procesadores de tarjeta dentro del frontend en esta etapa. El pago se gestiona contra entrega o mediante envío manual de comprobante al WhatsApp.
- ❌ **Backend y Base de Datos:** No habrá servidor Node.js/Python dedicado, APIs dinámicas ni base de datos persistente (PostgreSQL, MongoDB, etc.). El contenido del menú se administrará mediante archivos estáticos (`src/data/menu.ts`).
- ❌ **Autenticación y Cuentas de Usuario:** Sin registro de clientes, login con contraseñas ni paneles de administración.
- ❌ **Seguimiento de pedidos en tiempo real:** No habrá tracking GPS ni estados de cocina en vivo.
- ❌ **Panel de control / CMS administrativo:** Toda modificación de menú o precios se realizará mediante actualización del repositorio de código.

---

## 4. Limitaciones del Preview

- **Carácter Provisional:** Los precios y detalles no confirmados oficialmente por los propietarios se presentarán con indicadores de valor estimado o requerirán validación final en el chat de WhatsApp.
- **Dirección Física:** No se publica. El negocio confirmó una modalidad 100% delivery, sin atención presencial ni retiro en cocina.
- **Disponibilidad de Stock:** El sitio no refleja stock en tiempo real; la confirmación de disponibilidad ocurre al recibir el mensaje en WhatsApp.

---

## 5. Requerimientos Funcionales y No Funcionales

### Requerimientos Funcionales (RF)
- **RF-01:** El usuario debe poder visualizar el menú completo categorizado en cualquier resolución de pantalla.
- **RF-02:** El botón de WhatsApp debe abrir la app nativa o WhatsApp Web con un mensaje preconfigurado (ej.: *"¡Hola ZAZA! Me gustaría consultar por el menú / realizar un pedido"*).
- **RF-03:** Los medios de pago y zonas de entrega deben exhibirse de forma clara y accesible desde la navegación principal.
- **RF-04:** El sitio debe indicar claramente los horarios de atención y advertir amigablemente si el usuario ingresa fuera del horario habitual de delivery.

### Requerimientos No Funcionales (RNF)
- **RNF-01 — Rendimiento:** Puntuación Lighthouse >= 90 en Performance en dispositivos móviles (aprovechando la arquitectura estática de Astro).
- **RNF-02 — Accesibilidad:** Contraste de colores acorde a WCAG AA (especialmente en los tonos Borgoña/Crema) y etiquetas semánticas con textos alternativos (`alt`) en todas las imágenes.
- **RNF-03 — Compatibilidad:** Correcta visualización y funcionamiento en navegadores modernos (Chrome, Safari, Firefox, Edge, tanto en iOS como en Android).
- **RNF-04 — Velocidad de Carga:** Tiempo de carga visual interactiva inicial (LCP) inferior a 2.0 segundos en conexiones móviles 4G.

---

## 6. Criterios de Aceptación

1. **Fidelidad Estética:** La interfaz transmite con elegancia el espíritu visual acordado (estética retro-chic años 70/80/90, paleta vino/crema, tipografía de acento vintage).
2. **Integridad de Datos:** No se expone información falsa ni inventada. Todo dato no validado figura como `Pendiente de confirmación`.
3. **Flujo de Conversión:** El 100% de los CTAs de contacto derivan correctamente a WhatsApp o Instagram sin enlaces rotos ni números erróneos.
4. **Validación Multi-dispositivo:** Navegación probada en pantallas de 360px (móvil estándar) hasta resoluciones de escritorio 1920px.
