# Sistema de Diseño — ZAZA (DESIGN-SYSTEM.md)

Este documento especifica los fundamentos visuales, tokens de diseño, tipografía, componentes y pautas de accesibilidad para la interfaz de **ZAZA**.

---

## 1. Dirección Visual y Concepto Estético

La identidad de ZAZA combina la calidez nostálgica de las pizzerías clásicas de los años 70s, 80s y 90s con un acabado moderno, pulido y contemporáneo. 
El diseño busca generar una atmósfera apetitosa, elegante y artesanal, huyendo de las interfaces genéricas y brillantes de comida rápida tradicional.

- **Atmósfera:** Cálida, sofisticada, artesanal, acogedora.
- **Inspiración:** Trattorias italianas vintage, pizzerías tradicionales rioplatenses, estética editorial gastronómica.

---

## 2. Paleta Cromática

### Decisiones Confirmadas (Fuente: `docs/BUSINESS-INFO.md`)
- **Color Principal de Acento / Fondo Noble:** Borgoña / Vino Tinto (Bordeaux).
- **Color Secundario / Fondo Cálido:** Crema / Marfil (Off-white / Warm Cream).

### Especificación de Tokens de Color (Propuesta para Tailwind CSS)

```javascript
// tailwind.config.mjs (Propuesta)
colors: {
  zaza: {
    // Escala Vino / Borgoña
    wine: {
      900: '#3D0C11', // Fondo oscuro profundo / contrastes altos
      800: '#5A131A', // Fondo de barra de navegación / headers
      700: '#7B1B24', // Color insignia primario (Vino de marca)
      600: '#9E2430', // Hover en botones primarios
      500: '#C23140', // Toques destacados
    },
    // Escala Crema / Neutros Cálidos
    cream: {
      50: '#FDFBF7',  // Fondo de tarjetas claras / superficies
      100: '#FAF6EE', // Fondo principal claro del sitio
      200: '#F3EBD8', // Bordes sutiles y divisores
      300: '#E4D5B7', // Fondos secundarios / badges
    },
    // Acentos Dorado / Mostaza Tostada (Propuesta estética)
    gold: {
      400: '#E5A93B',
      500: '#C88A22', // Badge "Especialidad de la casa", estrellas
    },
    // Textos y Contraste
    dark: '#1C1917',   // Texto principal sobre crema (Warm Black)
    muted: '#6B5E55',  // Texto secundario / descripciones
  }
}
```

---

## 3. Tipografía

### Dirección Tipográfica
- **Títulos y Logotipos (Display / Serif Retro):** Elegante, con serifas clásicas que remiten a la época dorada de la cartelería gastronómica.
  - *Propuesta Google Fonts:* `Playfair Display`, `Cinzel` o `Fraunces` para encabezados principales (`h1`, `h2`).
- **Cuerpo de Texto e Información Funcional (Sans-Serif):** Limpia, geométrica y con alta legibilidad en pantallas móviles pequeñas.
  - *Propuesta Google Fonts:* `Plus Jakarta Sans` o `Inter`.

---

## 4. Sistema de Espaciado y Rejilla

- **Escala de espaciado:** Múltiplos de 4px (Tailwind standard: 4, 8, 12, 16, 24, 32, 48, 64, 96px).
- **Contenedores:** Ancho máximo contenido en `max-w-6xl` (1152px) para favorecer una lectura cómoda y mantener el foco en las fotografías.
- **Comportamiento Responsive:**
  - *Móvil (< 640px):* Navegación colapsable, menú en 1 columna, botón flotante de WhatsApp siempre accesible.
  - *Tablet (640px - 1024px):* Menú en 2 columnas, espaciados generosos.
  - *Escritorio (> 1024px):* Menú en 2 o 3 columnas, hero interactivo con imágenes destacadas y navegación completa fija.

---

## 5. Componentes Principales de la Interfaz

1. **Header / Navbar:**
   - Logotipo centrado o a la izquierda (`zaza-pizzeria-simple.jpeg` optimizado).
   - Enlaces ancla: Inicio, Menú, Delivery & Pagos, Contacto.
   - Botón directo de WhatsApp destacado en esquina superior derecha.
2. **Hero Section:**
   - Título impactante con tipografía serif vintage.
   - Subtítulo con propuesta de valor artesanal.
   - Botones dobles: *"Ver Menú"* (scroll suave) y *"Pedir por WhatsApp"* (acción principal).
   - Imagen destacada con sombra profunda o composición de `Assets/Presentation/`.
3. **Tarjeta de Menú (`PizzaCard`):**
   - Fotografía del producto con relación de aspecto 4:3 o 1:1, borde redondeado suave (`rounded-xl` o `rounded-2xl`).
   - Nombre de la pizza en serif semi-bold.
   - Listado de ingredientes en texto muted de alto contraste.
   - Indicador de precio provisional y botón rápido de consulta directa.
4. **Banner Informativo de Delivery y Pagos:**
   - Grilla con tarjetas de fondo crema con bordes vino sutiles.
   - Íconos Lucide para: Horario (reloj), Cobertura (map pin), Pagos (billetera/tarjeta).
5. **Botón Flotante de WhatsApp:**
   - Posicionado fijo en la esquina inferior derecha (`fixed bottom-6 right-6 z-50`).
   - Color verde oficial de WhatsApp (`#25D366`) con microanimación de pulso discreta.
6. **Footer:**
   - Logotipo resumido, copyright, mención a Rosario (Colonia), enlaces a Instagram y WhatsApp.

---

## 6. Pautas de Accesibilidad (A11y)

- **Ratio de Contraste:** Mínimo 4.5:1 para texto estándar y 3:1 para texto grande según directrices WCAG 2.1 AA.
  - El texto en color crema (`#FAF6EE`) sobre fondo vino oscuro (`#5A131A` o `#3D0C11`) supera holgadamente el ratio 7:1 (nivel AAA).
  - El texto negro cálido (`#1C1917`) sobre crema (`#FAF6EE`) proporciona legibilidad óptima.
- **Imágenes:** Todo elemento `<img>` debe contar con un atributo `alt` descriptivo (ej.: *"Pizza Capresse artesanal con tomates y albahaca fresca"*). No utilizar textos vacíos salvo en elementos puramente decorativos (`alt=""`).
- **Navegación por Teclado:** Estados de `:focus-visible` claramente perceptibles mediante anillos de enfoque de contraste adecuado.

## Aplicación tipográfica (23 de octubre de 2026)

El usuario autorizó sustituir el JPEG del logo por texto en la interfaz. `Wordmark.astro` utiliza Cormorant Garamond 600 italic, con espaciado compacto, color crema y descriptor Pizzería. Es una aproximación visual, no una identificación exacta del original. Los afiches mantienen su diseño original.

Playfair Display y Plus Jakarta Sans se mantienen para títulos y cuerpo. Las cinco variantes se sirven localmente en WOFF2 desde `public/fonts/`, con licencias OFL y `font-display: swap`. El logo tipográfico se precarga. Fuentes: Google Fonts y distribución Fontsource.

Botón fijo de contacto en vino y crema, sin pulso, con espacio inferior para evitar tapar el footer. El aviso de horario comunica el horario habitual en America/Montevideo, nunca stock ni apertura confirmada en tiempo real.

## Prueba de campana interactiva

El hero usa una escena con relación 1672:941. Fondo, bandeja, tapa y pizza comparten ese sistema de coordenadas; en móvil se recortan los laterales de la escena, conservando la mesa centrada. `clip-path` separa la base y la tapa del PNG transparente de bandeja abierta. Se anima únicamente el desplazamiento de la tapa, desactivado con movimiento reducido. Las pizzas conservan su proporción y tienen compensaciones verticales por el margen transparente de cada original.
