# DESIGN.md — ZAZA Pizzería

> **Estado:** dirección visual propuesta, basada en los assets compartidos.  
> **Versión:** 1.0 — 22 de octubre de 2026.  
> **Alcance:** identidad aplicada a la web promocional y su sistema de interfaz (desktop, tablet y móvil).  
> **Tipo de documento:** guía de diseño implementable, no sustituto de `overview.md` para información comercial ni de `tech-stack.md` para tecnología.

---

## 0. Resumen ejecutivo

**ZAZA es una pizzería presentada mediante el lenguaje visual de un hotel clásico y su servicio de habitación, reinterpretado con publicidad gastronómica retro.** Su universo combina una campana de room service, guantes blancos, cortinas de terciopelo, tapices damasco, paneles de madera oscura, marcos decorativos, luz teatral y guiños a la publicidad de los años setenta y ochenta. El vino/bordó domina; marfil, oro envejecido y tonos tostados construyen contraste.

La web debe ser **editorial, cinematográfica, nostálgica, cálida y comercialmente funcional**. La ambientación establece una experiencia singular, pero **la pizza, el menú, el precio cuando corresponda y el acceso a pedir deben permanecer inequívocos**.

**Principio rector:** *la atmósfera invita; el producto convence; la interfaz permite pedir sin esfuerzo*.

**Tres capas del diseño:**
1. **Marca:** tipografía clásica, logo, vino, marfil, ornamentos y terminaciones doradas.
2. **Escenografía:** cortinados, campana, iluminación cálida, marcos, panelería y papeles ornamentales.
3. **Comercio:** menú claro, fotos apetitosas, información legible, llamadas a la acción y navegación sencilla.

**Regla de equilibrio:** no convertir cada componente en una pieza publicitaria elaborada. Reservar la máxima riqueza visual para el hero, una sección de relato y una promoción destacada. Las interfaces repetitivas, especialmente el menú, tienen que ser sobrias.

---

## 1. Cuestionario resuelto: decisiones recomendadas

Estas respuestas consolidan los bloques A–I del cuestionario. Son **recomendaciones editoriales**, no declaraciones del cliente ni datos confirmados del negocio.

### A. Identidad general

| N.º | Pregunta | Decisión recomendada |
|---|---|---|
| 1 | Cinco sensaciones principales | Tradición, nostalgia, calidez, elegancia y personalidad. |
| 2 | Influencia dominante | Mezcla equilibrada con **room service clásico como marco narrativo** y **pizzería tradicional como protagonista comercial**. |
| 3 | Carácter de la estética | Cálida, cinematográfica y premium accesible, con un punto juguetón en promociones. |
| 4 | Lo que no debe transmitir | Startup tecnológica, fast food genérico, lujo distante, minimalismo clínico ni restaurante de etiqueta excesivamente formal. |

### B. Color

| N.º | Pregunta | Decisión recomendada |
|---|---|---|
| 5 | Dominancia del vino | Sí: protagonista absoluto de la marca y de las escenas principales, **no necesariamente de cada superficie de lectura**. |
| 6 | Secundario principal | Marfil/crema, para legibilidad y pausas visuales. |
| 7 | Intensidad de dorado | Solo acentos: bordes, filetes, símbolos y elementos editoriales. |
| 8 | Colores a evitar | Azul eléctrico, cian, púrpura neón, gris frío dominante y verdes saturados como colores de interfaz. Los colores naturales de ingredientes están permitidos en fotografía. |

### C. Tipografía

| N.º | Pregunta | Decisión recomendada |
|---|---|---|
| 9 | Tipografía principal | Serif clásica, elegante, de alto contraste y presencia editorial. |
| 10 | Sistema de fuentes | Serif display + sans funcional; script opcional solo para pequeños acentos. |
| 11 | Uso de script | Una o dos palabras decorativas en material editorial; **no** en navegación, menú, precios ni botones. El logo se utiliza como asset, sin intentar reproducirlo con una fuente distinta. |

### D. Fondos y texturas

| N.º | Pregunta | Decisión recomendada |
|---|---|---|
| 12 | Fondo predominante | Mezcla contextual: cortinas para hero, tapiz para narrativa, panelería para secciones especiales y planos lisos para menú. |
| 13 | Alternancia | Sí, pero con ritmo controlado: oscuro escenográfico → crema respirable → vino sobrio → cierre escenográfico. |
| 14 | Ornamentación | Intermedia: fuerte carácter de marca sin saturación constante. |
| 15 | Textura imprescindible | Cortina/terciopelo vino como firma del universo room service. |

### E. Imágenes y assets

| N.º | Pregunta | Decisión recomendada |
|---|---|---|
| 16 | Assets identitarios | Campana con guante, cortina vino, logo ZAZA, pizza iluminada, tapiz y TV retro como recurso ocasional. |
| 17 | Protagonismo de la pizza | Sí, con escenografía de apoyo; evitar que la campana o el fondo oculten por completo qué vende la marca. |
| 18 | Promociones estilo TV retro | Recurso secundario, destacado en una sección especial o campaña; no patrón para todas las ofertas. |
| 19 | Tratamiento de fotos | Cinematográfico y editorial para campañas; fotografía gastronómica más directa y consistente para el menú. |

### F. UI y componentes

| N.º | Pregunta | Decisión recomendada |
|---|---|---|
| 20 | Botones | Elegantes, simples y muy visibles. Un botón primario marfil sobre vino; variación vino sobre crema. |
| 21 | CTA principal | **Pedir por WhatsApp**, sujeto a confirmación de que ese canal esté activo. CTA secundario: **Ver menú**. No simular un sistema de checkout inexistente. |
| 22 | Tarjetas de menú | Editoriales, pero limpias: foto, nombre, ingredientes, precio confirmado y acción. |
| 23 | Marcos y adornos | Sí, de forma sutil y selectiva; filetes o pequeñas estrellas antes que molduras en todas las cards. |

### G. Layout

| N.º | Pregunta | Decisión recomendada |
|---|---|---|
| 24 | Hero | Composición teatral: cortina + campana o pizza + logo/titular + CTA claro. |
| 25 | Peso visual del home | Muy visual en primer impacto, equilibrado e informativo a partir del primer scroll. |
| 26 | Secciones obligatorias recomendadas | Hero, menú/destacadas, promoción (si está validada), breve historia/identidad, delivery/contacto, CTA final y footer. Testimonios solo si son reales. |
| 27 | Distribución oscuro/claro | Oscuro dominante con bloques crema intencionales. |

### H. Tono de marca

| N.º | Pregunta | Decisión recomendada |
|---|---|---|
| 28 | Voz | Cálida, clásica, cercana y con frases memorables; nada solemne ni excesivamente grandilocuente. |
| 29 | Slogans | Sí, pocos y coherentes; validar los textos definitivos con la marca. |
| 30 | Ángulo de slogans | Tradición y sabor, reinterpretados en clave de hospitalidad clásica. |

### I. Límites

| N.º | Pregunta | Decisión recomendada |
|---|---|---|
| 31 | Exclusiones visuales | Minimalismo blanco de startup, neón, UI de delivery genérica, exceso de brillos metálicos, texturas en todas partes. |
| 32 | Exclusiones UX/UI | Scroll hijacking, animaciones largas, carruseles obligatorios, precios ilegibles, cartas solo en imagen y navegación compleja. |
| 33 | Primer pantallazo | Identidad ZAZA, color vino, imagen escenográfica reconocible, qué vende la marca y CTA principal accesible. |

---

## 2. Identidad conceptual y dirección de arte

### 2.1 Idea rectora

**«La pizza llega con ceremonia».** Es una idea creativa interna, no un slogan comercial aprobado. La puesta en escena evoca el gesto de destapar una bandeja en un hotel antiguo: anticipación, curiosidad y recompensa gastronómica. La estética retro suma cercanía y humor.

### 2.2 Tensiones que hacen única a ZAZA

- **Elegancia vs. cercanía:** acabado refinado; trato cálido y directo.
- **Nostalgia vs. actualidad:** visuales del pasado; navegación contemporánea, rápida y accesible.
- **Teatralidad vs. utilidad:** héroes visuales dramáticos; menú de uso inmediato.
- **Oscuridad vs. apetito:** fondos vino profundos; fotografías de pizza iluminadas con textura y color natural.
- **Publicidad retro vs. legibilidad:** titulares expresivos en promos; textos esenciales siempre en HTML.

### 2.3 Épocas y referencias

- Hospitalidad clásica: guantes blancos, campanas cromadas/doradas, cortinados, molduras, tapiz damasco.
- Publicidad de los 70/80: composiciones llamativas, TV de tubo, titulares grandes, colores cálidos, humor gráfico contenido.
- Cartelería de restaurante tradicional: serif, líneas de separación, estrellas, inscripciones cortas y sellos.

No reproducir indiscriminadamente una década ni añadir iconografía retro aleatoria. El hilo conductor es **la atención ceremonial de una pizzería tradicional**.

### 2.4 Reglas de aprobación visual

Toda propuesta debe superar estas preguntas:
1. ¿Se reconoce como ZAZA incluso sin leer toda la página?
2. ¿Una persona entiende en pocos segundos que es una pizzería y cómo pedir?
3. ¿El diseño funciona en móvil sin depender de composiciones complejas?
4. ¿Los ornamentos apoyan el contenido, en lugar de competir con él?
5. ¿El producto se ve auténtico, apetitoso y suficientemente protagonista?

---

## 3. Sistema cromático

> Los hex son **tokens propuestos**, aproximados al material de referencia, no valores extraídos como especificación oficial del logo. Ajustar después de comparar en navegador y validar contraste real.

| Token | Valor sugerido | Rol |
|---|---|---|
| `--color-wine-950` | `#25070D` | Oscuridad más profunda, overlays y footer. |
| `--color-wine-900` | `#3D0813` | Fondo oscuro principal. |
| `--color-wine-800` | `#570C1C` | Superficies, secciones y gradientes. |
| `--color-wine-700` | `#710F26` | Vino de marca en áreas expresivas. |
| `--color-wine-600` | `#8B1E35` | Acento vino para detalles, no texto pequeño sobre crema sin verificar contraste. |
| `--color-cream-50` | `#FFF8EA` | Fondo claro y texto principal sobre vino. |
| `--color-cream-100` | `#F4E7D1` | Tarjetas claras y superficie secundaria. |
| `--color-gold-400` | `#D9AF6A` | Ornamentos y detalles decorativos. |
| `--color-gold-500` | `#BE8D4E` | Filetes y acento sobre fondos muy oscuros. |
| `--color-wood-900` | `#2D1A16` | Apoyo cálido, madera y profundidad. |
| `--color-ink` | `#2B1518` | Texto sobre crema. |

### 3.1 Proporciones orientativas

- **50–60 %** de la impresión general: vino oscuro y tonos afines.
- **25–35 %:** crema/marfil y espacios de lectura.
- **5–10 %:** fotografía o detalles tostados/madera.
- **Hasta 5 %:** dorado ornamental.

Estas son pautas de composición, no porcentajes rígidos de píxeles.

### 3.2 Combinaciones preferentes

1. Vino 900 + crema 50: hero, footer, CTA sobre oscuro.
2. Crema 50 + tinta oscura: menú, información, formularios si existieran.
3. Vino 800 + oro 400: filetes y ornamentación de grandes títulos.
4. Madera oscura + crema: detalles editoriales y promociones.

### 3.3 Contraste y estados

- Texto normal: objetivo mínimo **4.5:1** (WCAG AA).
- Texto grande: mínimo **3:1**.
- Elementos no textuales y límites de controles relevantes: mínimo **3:1** respecto al entorno pertinente.
- No asumir que un dorado sobre crema es legible: para texto pequeño usar tinta/vino oscuro.
- Los estados hover, focus, active y disabled deben distinguirse por algo más que el cambio sutil de color.
- Probar los tokens en contexto y corregirlos si no alcanzan contraste.

### 3.4 Ejemplo CSS de tokens

```css
:root {
  --color-wine-950: #25070d;
  --color-wine-900: #3d0813;
  --color-wine-800: #570c1c;
  --color-wine-700: #710f26;
  --color-wine-600: #8b1e35;
  --color-cream-50: #fff8ea;
  --color-cream-100: #f4e7d1;
  --color-gold-400: #d9af6a;
  --color-gold-500: #be8d4e;
  --color-wood-900: #2d1a16;
  --color-ink: #2b1518;
}
```

Implementar estas variables como tokens del proyecto si no existe ya otro sistema; **no duplicar paletas divergentes**.

---

## 4. Tipografía

### 4.1 Roles y familias candidatas

| Rol | Dirección | Candidatas a evaluar | Uso |
|---|---|---|---|
| Display | Serif editorial con alto contraste | `Cormorant Garamond`, `Bodoni Moda` | Titulares grandes, frases cortas, nombres de sección. |
| Texto y UI | Sans sobria, cálida y bien construida | `DM Sans`, `Manrope` | Navegación, descripciones, precios, CTA, horarios. |
| Acento opcional | Script vintage moderada | Por seleccionar tras prueba visual | Máximo una o dos palabras ornamentales. |

**Recomendación inicial:** `Cormorant Garamond` para títulos + `DM Sans` para la UI. Son referencias de implementación sujetas a pruebas; el logotipo no debe reconstruirse con ninguna de ellas.

### 4.2 Jerarquía responsive propuesta

| Elemento | Móvil | Desktop | Característica |
|---|---|---|---|
| H1 | `clamp(2.8rem, 10vw, 4.2rem)` | `clamp(4rem, 6vw, 6.5rem)` | Serif, interlineado 0.95–1.05. |
| H2 | `clamp(2.2rem, 7vw, 3rem)` | `clamp(3rem, 4vw, 4.8rem)` | Serif, fuerte jerarquía. |
| H3 | 1.55–1.9rem | 1.8–2.2rem | Serif o sans semibold según contexto. |
| Body | 1rem | 1rem–1.125rem | Sans, interlineado 1.5–1.7. |
| Meta/eyebrow | 0.75–0.875rem | 0.8–0.95rem | Mayúsculas opcionales; espaciado de letras moderado. |
| Botones | 0.95–1rem | 0.95–1rem | Sans semibold. |

No forzar todo a mayúsculas; reservar esa convención para etiquetas cortas. Evitar bloques largos centrados y títulos decorativos difíciles de leer.

### 4.3 Reglas

- Hasta dos familias activas por defecto; la script debe justificarse expresamente.
- Usar pesos necesarios, no todos los disponibles; optimizar descarga de fuentes.
- Si falta la fuente, elegir fallback sin romper layout.
- Cargar recursos con `font-display: swap` o estrategia equivalente.
- No representar precios y descripciones como texto incrustado en una foto publicitaria.

---

## 5. Sistema de imágenes y assets

### 5.1 Inventario de los archivos suministrados

> Se citan los **nombres de los archivos compartidos** como referencias. El IDE debe localizar su ruta real en el repositorio antes de enlazarlos; no dar por hecho que están en `public/`.

| Archivo de referencia | Función recomendada | Prioridad | Precaución |
|---|---|---|---|
| `zaza-pizzeria-logotipo.jpeg` | Identidad de referencia, splash visual o imagen social | Alta | Tiene fondo; no asumir transparencia ni usar JPEG completo como icono diminuto. |
| `bandeja.jpeg` | Imagen teatral de presentación / hero o historia | Alta | La campana no debe reemplazar la visibilidad de la pizza. |
| `capresse-luxury-presentation.jpeg` | Campaña o featured product | Alta | Ya contiene múltiples textos: evitar superponer más copy pequeño. |
| `card-info-zaza.jpeg` | Inspiración de sello y papelería de marca | Media | Extraer lenguaje visual, no usar como bloque de información accesible. |
| `pi-zaza-70s-ad.jpeg` | Promoción especial retro/TV | Media-alta | Su precio y oferta son contenido gráfico de ejemplo; verificar vigencia antes de publicar. |
| `bg-burgundy-silk-3:4.jpeg` | Recurso textural/campaña vertical | Media | No poner texto complejo sobre brillos de satén. |
| `bodreaux-patron-bg.jpeg` | Tapiz damasco, narrativa/background | Alta | Overlay para reducir ruido visual debajo de copy. |
| `reception-bg-16:9.jpeg` | Background de panelería/escenario para sección | Media-alta | Reservar área central para contenido y respetar recorte responsivo. |

Si el repositorio contiene copias con sufijos como `(1)`, elegir una fuente canónica y evitar duplicaciones innecesarias.

### 5.2 Reglas de composición de imagen

- **Hero:** fondo ambiental con un punto de interés visual claro; la copia y los botones ocupan una región con contraste predecible.
- **Editorial:** se pueden usar recortes asimétricos, iluminación de escena y textos breves, siempre fuera de las zonas visualmente complejas.
- **Menú:** fotografías uniformes en aspecto, temperatura, exposición y encuadre; no recortar bordes críticos del alimento.
- **Campañas retro:** se tolera mayor saturación visual porque son piezas puntuales y no UI recurrente.
- **Móvil:** el encuadre se diseña específicamente; no confiar en que `object-fit: cover` conservará un logo, precio o texto integrado en el asset.

### 5.3 Imágenes informativas frente a decorativas

- Decorativas: `alt=""` y/o CSS `background-image` cuando corresponda.
- Informativas: `alt` conciso que nombre el contenido relevante (por ejemplo, el tipo de pizza) y no repita un texto contiguo.
- Las promociones, precios, horarios y canales de pedido deben existir en HTML accesible, **aunque también figuren dentro de una imagen**.
- Evitar promesas de producto o toppings que no correspondan a la oferta real.

### 5.4 Optimización y entrega

- Conservar originales y exportar derivados optimizados para web cuando la herramienta lo permita.
- Preferir AVIF/WebP; mantener fallback adecuado según la implementación.
- Definir `width`/`height` o `aspect-ratio` para evitar saltos de layout.
- Hero/LCP: tamaño responsivo y prioridad de carga si realmente corresponde a LCP.
- Imágenes fuera de la primera pantalla: lazy loading.
- No cargar como fondos completos archivos gigantes sin necesidad.
- Crear versiones para desktop/mobile si los puntos focales difieren.

---

## 6. Fondos, materiales y ornamentos

### 6.1 Jerarquía de materiales

1. **Terciopelo/cortina vino:** sello escenográfico; apropiado para hero o transición de gran impacto.
2. **Tapiz damasco:** ambientación para relato de marca; ideal con panel claro/oscuro superpuesto.
3. **Panelería clásica:** marco compositivo para contenido editorial o CTA final.
4. **Satén:** detalle de campaña o separador visual, no fondo por defecto de párrafos.
5. **Madera oscura:** acentos cálidos, fotografía y profundidad.
6. **Metal dorado:** filetes finos y pequeños ornamentos, sin gradientes brillantes en la UI funcional.

### 6.2 Aplicación de texturas

- Tratar las texturas como **escenografía localizada**, no como papel pintado del documento entero.
- Separar texto del fondo mediante superficie sólida, degradado oscuro controlado o panel crema.
- No repetir tapiz de alto contraste detrás de cards, formularios o listados largos.
- Preferir las texturas originales optimizadas frente a imitaciones complejas con CSS.
- Si el patrón ya es elaborado, simplificar marcos, tipografía y animaciones de esa sección.

### 6.3 Motivos gráficos admitidos

- Estrella de cuatro puntas / pequeño destello.
- Filetes horizontales finos.
- Marco de esquinas ornamentadas solo para piezas editoriales.
- Inscripciones tipo `EST. 2026` **si la fecha está confirmada**.
- Sellos de tradición o calidad **sin inventar premios, certificaciones o antigüedad**.

---

## 7. Grid, espacio y composición

### 7.1 Contenedores

- Ancho máximo orientativo para contenido general: **1200–1280 px**.
- Texto largo: restringir ancho a **60–75 caracteres** aprox.
- Padding horizontal mínimo recomendado: **20–24 px móvil**, **32–48 px tablet**, **48–80 px desktop** según ancho.
- Secciones editoriales: padding vertical aprox. **72–112 px desktop** y **48–80 px móvil**.
- Ajustar con `clamp()` y breakpoints existentes; evitar valores fijos que fallen en pantallas pequeñas.

### 7.2 Sistema espacial

Usar una escala consistente: `4, 8, 12, 16, 24, 32, 48, 64, 80, 96` px o equivalentes tokenizados. No introducir distancias arbitrarias por sección sin justificación.

### 7.3 Ritmo de página

**Propuesta de secuencia:**

1. **Hero oscuro y cinematográfico:** marca, propuesta de valor clara, CTA.
2. **Pausa marfil:** presentación breve de qué ofrece ZAZA o productos destacados.
3. **Menú útil y limpio:** categorías/productos en una interfaz legible.
4. **Promoción retro puntual:** TV antigua / campaña visual, solo con datos verificados.
5. **Relato de marca sobre textura:** tradición y hospitalidad.
6. **Información práctica:** delivery, zona, horarios, medios de pedido, solo si confirmados.
7. **CTA final teatral:** regreso a vino oscuro y cierre memorable.
8. **Footer sencillo:** enlaces, contacto y créditos aplicables.

La prioridad y existencia exacta de secciones deberá respetar `PROJECT-SCOPE.md`/`overview.md` si estos documentos contienen decisiones comerciales confirmadas.

### 7.4 Composición responsive

- Desktop: permitir layout de dos columnas e imágenes escenográficas de gran tamaño.
- Tablet: reequilibrar proporciones y limitar adornos laterales.
- Móvil: una columna, jerarquía lineal, CTA visible, texto nunca obligado a quedar encima del detalle más complejo de una imagen.
- Evitar texto vertical, curvado o decorativo como única fuente de información en móvil.
- Revisar navegación a 320 px, 375 px, 390 px, 768 px y desktop, además de zoom del navegador.

---

## 8. Componentes de interfaz

### 8.1 Navegación / header

**Objetivo:** orientar y permitir pedir sin competir con el hero.

- Logo de tamaño reconocible; preparar versión horizontal o palabra de marca si el asset completo no funciona en header.
- 3–5 accesos principales como máximo cuando el alcance de la página lo justifique: inicio, menú, promociones, contacto/ubicación.
- CTA persistente en desktop si aporta claridad; en móvil priorizar menú y acceso de pedido.
- Header sobre hero oscuro: fondo oscuro translúcido o sólido suficientemente contrastado, no texto flotante sobre textura complicada.
- Menu móvil operable con teclado, etiqueta accesible, `aria-expanded` y cierre claro.

### 8.2 Botones

**Primario (sobre vino):** crema sólido, texto vino oscuro, contraste alto, borde sutil.  
**Primario (sobre crema):** vino 900 sólido, texto crema.  
**Secundario:** fondo transparente y borde de contraste sólido con texto del mismo color.  
**Terciario:** enlace de texto con subrayado/indicador visible.

- Alto táctil recomendado: **mínimo 44–48 px**.
- Padding horizontal generoso, bordes apenas redondeados (radio sugerido **4–8 px**) o rectos de carácter clásico.
- No usar un botón dorado brillante como patrón principal.
- Hover: elevación muy leve, cambio de contraste o transición corta; focus visible inequívoco.
- Estados loading/disabled solo si corresponden a interacciones reales.

### 8.3 Cards de producto

**Contenido recomendado:** fotografía, nombre, ingredientes/descripción breve, precio real y opción de pedido si aplica.

- Fondo crema o vino casi sólido, según sección.
- Imagen con proporción consistente (ej. 4:3 o 1:1), sin marcos barrocos.
- Nombre dominante, descripción legible, precio destacado con estilo funcional.
- No mostrar precios ficticios ni disponibilidad que no esté confirmada.
- CTA por producto solo si el flujo real permite identificar el artículo en WhatsApp u otro canal.
- Grid orientativo: 1 columna móvil, 2 tablet, 3 desktop; adaptar a número real de items.

### 8.4 Categorías y filtros de menú

- Si existen varias categorías, usar tabs/botones/chips **semánticos** y claros.
- Filtros no necesarios para un menú corto: priorizar simplicidad.
- El filtro activo se distingue por color, borde y/o iconografía, no solo tono.
- Un listado accesible es preferible a un carrusel horizontal que esconda productos.

### 8.5 Promoción destacada

- Pieza visual de TV retro como **imagen editorial**.
- Al lado o debajo, repetir en HTML: nombre de promoción, contenido, precio y vigencia **confirmados**.
- Si el asset es conceptual y el negocio no confirmó la oferta, no publicarla como oferta real; utilizar una pieza de muestra explícitamente rotulada o esconder el módulo.

### 8.6 Sección de delivery/contacto

- CTA grande a canal real y funcional.
- Horarios, área de reparto, costo, retiro y medios de pago solo si están confirmados.
- Si no existe sistema de pedidos, no construir estados falsos de carrito, checkout o seguimiento.
- No insertar mapas, direcciones o números no proporcionados.

### 8.7 Footer

- Compacto, legible, de fondo vino 950.
- Versión simple del logotipo/marca, navegación útil, contacto verificable y redes válidas.
- El ornamento no debe reemplazar los enlaces convencionales.

---

## 9. Hero: especificación de composición

### 9.1 Objetivo

Impactar con una puesta en escena de hotel clásico y comunicar inmediatamente que ZAZA vende pizzas.

### 9.2 Composición recomendada

**Opción preferente:** layout editorial de dos zonas en desktop: una zona con logo/titular/CTA y otra con imagen campana/pizza. Cortina oscura como telón de fondo, gradiente para facilitar contraste, líneas de oro sutiles. En móvil, simplificar a hero compacto, priorizar texto y botón, conservar una imagen clara y bien recortada.

**Advertencia:** `bandeja.jpeg` muestra la campana cerrada; por sí sola comunica room service, no pizza. Combinar con un subtítulo inequívoco (por ejemplo, «Pizzería»), foto de pizza visible dentro de la primera pantalla cuando sea posible o transición directa hacia productos.

### 9.3 Orden de lectura recomendado

1. Marca ZAZA.
2. Titular corto, editorial.
3. Explicación clara de qué ofrece la pizzería.
4. CTA «Pedir por WhatsApp» (si es válido) y «Ver menú».
5. Imagen protagonista.

### 9.4 Copys de demostración (pendientes de aprobación)

- **H1 candidato:** «Un clásico que se sirve con estilo».
- **Subtítulo:** «Pizzas para disfrutar, con sabor y personalidad».
- **Eyebrow:** «ZAZA · Pizzería».
- **CTA:** «Ver menú» / «Pedir por WhatsApp».

No usar frases como «desde hace generaciones» o «receta familiar histórica» sin confirmación factual. `EST. 2026` aparece en las referencias, pero se considera dato pendiente de corroboración.

---

## 10. Estilo editorial y tono de voz

### 10.1 Personalidad verbal

- **Hospitalaria:** invita, acompaña y recibe.
- **Segura:** frases breves y con carácter.
- **Nostálgica:** guiños al servicio clásico sin lenguaje anticuado incomprensible.
- **Apetitosa:** describe sabores concretos y producto real.
- **Local y cercana:** usar español natural para público objetivo; evitar traducciones rígidas del inglés impreso en los assets.

### 10.2 Lineamientos de copy

- Títulos cortos (ideal 3–8 palabras) y subtítulos claros.
- Evitar exceso de inglés ornamental: el sitio comercial debe entenderse rápidamente en español.
- No abusar de términos como «premium», «lujo», «exclusivo»; transmitirlos mediante diseño y calidad del producto.
- Nunca prometer entregas, precios, ingredientes, zonas ni horarios sin validación.
- No incluir testimonios ficticios ni escasez/urgencia artificial.

### 10.3 Vocabulario visual verbal

**A favor:** clásico, recién hecho, tradición, especialidad, a tu mesa, para compartir, sabor, nuestra carta, servimos.  
**Con moderación:** exquisito, imperdible, lujo, experiencia, inigualable.  
**Evitar:** disruptivo, innovación tecnológica, «el mejor del país» sin evidencia, slogans inflados.

---

## 11. Movimiento y microinteracciones

### 11.1 Filosofía

Movimiento **elegante, breve y no indispensable**. Se busca el gesto de una cortina o un foco de escenario, no una aplicación futurista.

### 11.2 Comportamientos permitidos

- Aparición suave de elementos al cargar (opacidad y desplazamiento mínimo).
- Hover sutil en cards y botones.
- Transiciones de 150–300 ms como punto de partida.
- Pequeños desplazamientos de capa decorativa únicamente en desktop y cuando no afecten desempeño.
- Si se usa scroll reveal, el contenido debe estar presente y visible si JavaScript o animación fallan.

### 11.3 Comportamientos prohibidos

- Scroll controlado artificialmente (*scroll hijacking*).
- Pantallas de entrada obligatorias o cortinas animadas que retrasen el menú.
- Autoplay de sonido/video con audio.
- Parallax intenso en móvil.
- Efectos permanentes que dificulten la lectura o el clic.

### 11.4 Accesibilidad de movimiento

Respetar `prefers-reduced-motion: reduce`; no depender de animaciones para comunicar información, mostrar promociones o activar CTA.

---

## 12. Accesibilidad y usabilidad

- Usar HTML semántico (`header`, `nav`, `main`, `section`, `footer`; un solo H1 pertinente).
- Navegación operable por teclado, foco visible y orden lógico de tabulación.
- Contraste verificable en todos los fondos, especialmente tapiz y satén.
- Tamaño de texto que soporte zoom hasta 200 % sin pérdida funcional.
- Objetivos táctiles cómodos y separación suficiente.
- Etiquetas explícitas en botones («Pedir por WhatsApp», no solo un icono).
- Imágenes decorativas con `alt=""`; contenido esencial fuera de ellas.
- Evitar texto horneado en gráficos para información operativa.
- Evitar horizontal scroll, incluidos títulos display y ornamentos en móviles estrechos.
- No comunicar estados solo mediante color.
- Evitar bloquear interacción detrás de capas de textura o decoraciones absolutas.

La estética histórica del diseño **no debe implicar patrones de interacción antiguos**.

---

## 13. Performance y calidad visual

### 13.1 Objetivos iniciales

- LCP objetivo: **≤ 2.5 s** en condiciones de campo adecuadas.
- CLS objetivo: **≤ 0.1**.
- INP objetivo: **≤ 200 ms**.

Son **objetivos de calidad**, no resultados medidos. Comprobar con Lighthouse y, cuando corresponda, datos reales.

### 13.2 Reglas prácticas

- Imágenes adaptativas (`srcset`/`sizes` u optimización equivalente) y compresión.
- Cargar solo fuentes/pesos usados.
- Evitar múltiples fondos JPEG pesados apilados para construir una sección.
- Reservar dimensiones de imágenes y contenedores.
- Evitar librerías de animación grandes para efectos resolubles con CSS.
- Mantener la navegación y el menú utilizables con conexiones móviles limitadas.
- Cargar activos secundarios de forma diferida sin afectar el contenido inicial.

---

## 14. Arquitectura visual por sección

| Sección | Fondo | Objetivo | Asset sugerido | Intensidad decorativa |
|---|---|---|---|---|
| Header | Vino profundo, preferentemente sólido | Navegación y pedido | Marca/logotipo simple | Baja |
| Hero | Cortina vino + degradado | Primera impresión y CTA | `bandeja.jpeg`; posible foto gastronómica | Alta |
| Destacados | Crema | Mostrar pizzas/productos | Fotos recortadas coherentes | Baja |
| Carta/Menú | Crema o vino plano | Comparar y decidir | Fotografías de menú | Muy baja |
| Promo | Vino/madera/rojo retro | Campaña puntual | `pi-zaza-70s-ad.jpeg` | Alta, localizada |
| Historia | Tapiz vino atenuado | Comunicar tono y personalidad | `bodreaux-patron-bg.jpeg` y `card-info-zaza.jpeg` como referencia | Media |
| Delivery/Contacto | Crema o vino plano | Resolver dudas y facilitar pedido | Íconos sencillos | Baja |
| CTA final | Panelería clásica oscura | Cerrar con recordación de marca | `reception-bg-16:9.jpeg` | Media-alta |
| Footer | Vino 950 | Información legal/práctica | Logo simplificado | Muy baja |

**Adaptar a alcance real:** no añadir secciones solo para exhibir assets. La secuencia es una propuesta de dirección visual.

---

## 15. Dirección del logotipo y sistema de marca

### 15.1 Lo observado

El asset de ZAZA usa letras display clásicas en crema sobre fondo vino, una porción ilustrada, `EST. 2026`, separadores lineales y el descriptor «PIZZERÍA». El nombre tiene una terminación expresiva y fuerte reconocimiento.

### 15.2 Usos

- **Principal:** versión completa donde sea legible y haya suficiente espacio.
- **Reducido:** wordmark o versión horizontal optimizada para header (requiere preparar/exportar una variante aprobada).
- **Sello:** porción ilustrada o iniciales, solamente después de disponer de variante oficial/derivada de calidad.
- **Fotografía:** no incrustar repetidamente el logo sobre todas las imágenes.

### 15.3 Precauciones

- No deformar, estirar, aplicar sombras arbitrarias ni recolorear sin criterio.
- No extraer automáticamente un logo transparente desde JPEG sin revisar bordes.
- No recrear la tipografía del logotipo con fuentes similares como sustituto de la identidad.
- Conservar espacio libre suficiente alrededor del logo.
- Verificar que «EST. 2026» corresponda a un dato real antes de utilizarlo como reclamo factual.

---

## 16. Iconografía, bordes, radios y sombras

- **Iconos UI:** simples, de trazo claro y consistente; biblioteca del stack si ya está definida.
- **Iconos decorativos:** estrellas de cuatro puntas y filetes delicados, más cercanos al cartel vintage.
- **Bordes:** 1 px para delimitaciones discretas; 1–2 px en marcos de piezas promocionales.
- **Radios:** pequeños, 4–8 px; evitar píldoras extremas como tratamiento general si diluyen carácter clásico.
- **Sombras:** profundas pero difusas en imágenes o paneles escenográficos; casi nulas en tarjetas funcionales.
- **Brillos:** efecto material reservado a fotografía y texturas; no añadir degradados metálicos a todos los botones.

---

## 17. Antipatrones explícitos

**No hacer:**

1. Convertir el sitio en una landing de SaaS con tarjetas flotantes genéricas.
2. Aplicar damasco, satén, marco dorado y tipografía ornamental a todos los elementos simultáneamente.
3. Presentar una carta de pizzas exclusivamente mediante posters JPEG.
4. Usar el asset de promo con `$450` como precio vigente sin validación.
5. Usar `EST. 2026`, «tradición familiar» o datos comerciales como hechos si no fueron confirmados.
6. Mostrar carruseles automáticos de productos como única vía para navegar el menú.
7. Ocultar botones o reducir el contraste para preservar una composición estética.
8. Usar sliders, videos y animaciones pesadas sin retorno comercial claro.
9. Copiar literalmente texto en inglés de las referencias sin decisión editorial.
10. Optimizar únicamente desktop: la experiencia móvil es prioritaria por contexto de pedidos.
11. Saturar cada sección con rojo brillante; mantener variación tonal dentro del vino.
12. Usar estética hotelera de modo que no sea evidente que se trata de una pizzería.

---

## 18. Implementación en el proyecto

**Compatibilidad esperada:** el stack previamente propuesto para la landing es Astro + TypeScript + Tailwind CSS, con iconografía simple. Confirmar el repositorio antes de escribir componentes.

### 18.1 Reglas de implementación

- Mantener tokens de color, tipografía, espaciado y radios en un lugar único y reutilizable.
- Construir componentes semánticos y responsivos; no sustituir la web por una colección de imágenes de afiches.
- Permitir que la data de menú y promociones se gestione separada de presentación.
- Mantener rutas de assets centralizadas o claramente documentadas.
- Usar componentes reutilizables para botones, cartas, títulos de sección, divisores y CTA.
- Priorizar CSS ligero y animaciones declarativas; JS solo cuando agregue funcionalidad real.
- Mantener el contenido comercial alineado con `overview.md` y los requisitos con `PROJECT-SCOPE.md` si existe.

### 18.2 Nombres sugeridos de tokens semánticos

- `brand.background` → vino profundo.
- `brand.surface` → vino secundario.
- `brand.onDark` → crema.
- `brand.onLight` → tinta oscura.
- `brand.accent` → oro envejecido.
- `component.button.primary` → contrastante con la superficie.
- `component.card.surface` → crema o vino liso.

No es obligatorio usar estos nombres si ya existe una convención mejor en el proyecto.

### 18.3 Componentes candidatos

`SiteHeader`, `Hero`, `SectionHeading`, `PrimaryButton`, `MenuGrid`, `PizzaCard`, `RetroPromo`, `BrandStory`, `DeliveryInfo`, `FinalCTA`, `SiteFooter`.

Crear solo los que respondan al contenido y alcance confirmados.

---

## 19. Checklist de aceptación de diseño

### Identidad

- [ ] El primer pantallazo se reconoce como ZAZA y como pizzería.
- [ ] El vino domina sin tornar ilegibles los contenidos.
- [ ] Los assets evocan hotel clásico / room service y publicidad retro.
- [ ] El dorado se mantiene como acento minoritario.
- [ ] El logo no está estirado y conserva su estilo.

### UI

- [ ] Pedir y ver menú son acciones fáciles de identificar.
- [ ] Las cards de pizzas mantienen consistencia visual.
- [ ] El menú es texto HTML accesible, no una imagen solamente.
- [ ] El recorrido funciona con teclado y foco visible.
- [ ] Móvil no presenta cortes problemáticos ni scroll horizontal.

### Contenido

- [ ] Ningún precio, promoción u horario se publicó sin confirmar.
- [ ] La fecha «EST. 2026» fue validada si aparece en UI como dato histórico.
- [ ] Las afirmaciones sobre ingredientes y tradición están corroboradas.
- [ ] WhatsApp, redes y enlaces existen y funcionan antes de publicación.

### Calidad

- [ ] Tipografía, iconografía, bordes y espaciado son consistentes.
- [ ] Contraste cumple requisitos apropiados.
- [ ] Assets son responsivos y están optimizados.
- [ ] Animaciones respetan movimiento reducido.
- [ ] No hay dependencias visuales pesadas superfluas.

---

## 20. Decisiones pendientes de confirmar

Estas decisiones no deben bloquear la creación de un prototipo visual, pero sí deben resolverse antes de publicar como sitio comercial real:

1. **Paleta oficial:** contraste y fidelidad final al logotipo.
2. **Fuentes finales:** elección tras prueba en dispositivos reales.
3. **Logo vectorial/transparente:** disponibilidad de versiones maestras y reducidas.
4. **Datos reales:** WhatsApp, dirección, horarios, cobertura, precios y medios de pago.
5. **Promoción TV retro:** confirmar si la oferta existe, su contenido, precio y vigencia.
6. **«EST. 2026»:** confirmar si describe fundación/apertura de ZAZA.
7. **Slogans:** seleccionar texto definitivo y validar afirmaciones comerciales.
8. **Fotografías de productos:** determinar cuáles representan pizzas efectivamente vendidas.
9. **Hero definitivo:** decidir entre campana cerrada y producto revelado según pruebas de claridad.
10. **Prioridad de módulos:** validar con alcance real de la landing.

---

## 21. Cómo usar este documento en el IDE

1. Leer `DESIGN.md` antes de diseñar secciones o componentes.
2. Leer también `overview.md`, `tech-stack.md`, `PROJECT-SCOPE.md` y otros documentos existentes antes de asumir información comercial o tecnológica.
3. Interpretar las propuestas visuales como **sistema coherente**, no como obligación de utilizar todos los assets en una sola pantalla.
4. Resolver conflictos a favor de: **datos confirmados → accesibilidad/uso → identidad visual → ornamentación**.
5. En cada cambio visual, comprobar desktop y móvil, legibilidad y facilidad para encontrar el CTA.
6. Si un asset no resulta utilizable para el componente, no deformarlo: crear una composición distinta que conserve la dirección de arte.
7. Registrar las decisiones nuevas que pasen a ser definitivas para evitar divergencias.

---

## 22. Definición breve para agentes de código

> Diseñar ZAZA como una pizzería de estética retro y hospitalidad clásica, con inspiración en room service old school, interiores de hotel vintage y publicidad gastronómica setentosa. Usar vino/bordó como identidad dominante, crema para contraste legible, oro envejecido como acento y fotografía cálida de pizzas. Dar máxima fuerza visual al hero y a una promoción puntual; mantener menú, precios, botones y navegación simples, semánticos, accesibles y rápidos. No inventar datos comerciales. No confundir teatralidad visual con complejidad de uso.
