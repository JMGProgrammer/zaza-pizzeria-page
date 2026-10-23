<p align="center">
  <img src="Assets/ZAZA-pizzeria-banner.png" alt="ZAZA Pizzería" width="100%" />
</p>

Sitio web preview e informativo para **ZAZA**, pizzería delivery artesanal ubicada en Rosario, Colonia, Uruguay.

Este proyecto tiene como objetivo presentar la identidad de la marca, su propuesta gastronómica y habilitar el canal directo de pedidos y consultas a través de WhatsApp y redes sociales. No es un e-commerce transaccional con pasarela de pagos ni procesamiento automatizado de pedidos, sino una web de presentación y conversión directa.

---

## 🍕 Propuesta del Proyecto

- **Negocio:** ZAZA - Pizzería Delivery
- **Propuesta de valor:** Masa artesanal/casera, cultura pizzera mixta, ingredientes seleccionados y estilo visual nostálgico/elegante (años 70s/80s/90s).
- **Tipo de proyecto:** Web preview / Landing page informativa de alta calidad visual.
- **Canal principal de pedidos:** WhatsApp directo (+598 91 214 087).

---

## 🛠️ Stack Tecnológico

- **Framework:** [Astro](https://astro.build/) (Arquitectura basada en componentes, zero-JS por defecto)
- **Lenguaje:** TypeScript
- **Estilos:** Tailwind CSS
- **Iconografía:** Lucide (`lucide-astro`)
- **Tipografía y recursos visuales:** Google Fonts e imágenes optimizadas
- **Control de versiones:** Git & GitHub
- **Despliegue objetivo:** Vercel o Netlify

---

## 📂 Estructura del Repositorio

```text
zaza-pizzeria-page/
├── Assets/                 # Recursos gráficos originales (logos, fondos, fotos de menú)
│   ├── Backgrounds/
│   ├── Logos/
│   ├── Menu/
│   └── Presentation/
├── docs/                   # Documentación técnica, de negocio y guías de desarrollo
│   ├── AGENTS.md           # Instrucciones operativas para agentes de IA
│   ├── BUSINESS-INFO.md    # Ficha original de relevamiento del comercio
│   ├── CONTENT-GUIDELINES.md # Pautas de redacción, voz de marca y manejo de datos
│   ├── DEPLOYMENT.md       # Procedimientos de despliegue en Vercel/Netlify
│   ├── DESIGN.md           # Manual de identidad visual temática y escenográfica
│   ├── DESIGN-SYSTEM.md    # Identidad visual, paleta cromática y lineamientos UI
│   ├── DEVELOPMENT-RULES.md # Reglas de nombramiento, estructura de src/ y workflow
│   ├── ITERATION-PLAN.md   # Plan de ejecución secuencial e iteraciones técnicas
│   ├── OVERVIEW.md         # Resumen general del proyecto
│   ├── PROJECT-SCOPE.md    # Alcance funcional, requerimientos y exclusiones
│   ├── ROADMAP.md          # Estado actual y plan de evolución por fases
│   ├── SEO-AND-PERFORMANCE.md # Estrategia SEO, optimización web y Core Web Vitals
│   └── TECH-STACK.md       # Decisiones técnicas y arquitectura frontend
├── AGENTS.md               # Instrucciones de IA en raíz para herramientas
├── CHANGELOG.md            # Registro histórico de versiones y cambios notables
├── LICENSE
└── README.md
```

> **Nota sobre el código fuente (`src/`):** El repositorio se encuentra actualmente en fase de relevamiento documental y preparación de assets. La estructura del proyecto Astro se generará siguiendo la arquitectura descrita en [docs/TECH-STACK.md](docs/TECH-STACK.md) y [docs/DEVELOPMENT-RULES.md](docs/DEVELOPMENT-RULES.md).

---

## 🚀 Requisitos e Instalación

### Prerrequisitos
- **Node.js:** Versión `>= 18.17.1` o `>= 20.x`
- **Gestor de paquetes:** `npm` (o `pnpm` / `bun`)
- **Git**

### Comandos de Desarrollo (Proyecto Astro estándar)

Una vez inicializado el proyecto en `src/`:

```bash
# Instalar dependencias
npm install

# Iniciar servidor de desarrollo local
npm run dev

# Generar compilación de producción
npm run build

# Previsualizar la compilación de producción localmente
npm run preview
```

---

## 📚 Índice de Documentación

Toda la documentación detallada se encuentra centralizada en la carpeta [`docs/`](docs/) y en la raíz:

1. **Visión y Alcance:**
   - [docs/OVERVIEW.md](docs/OVERVIEW.md) — Visión ejecutiva y resumen del emprendimiento.
   - [docs/PROJECT-SCOPE.md](docs/PROJECT-SCOPE.md) — Requerimientos funcionales, no funcionales y exclusiones explícitas.
   - [docs/BUSINESS-INFO.md](docs/BUSINESS-INFO.md) — Ficha de relevamiento comercial y datos de contacto.
2. **Diseño y Contenido:**
   - [docs/DESIGN.md](docs/DESIGN.md) — Manual integral de concepto escenográfico y publicitario vintage.
   - [docs/DESIGN-SYSTEM.md](docs/DESIGN-SYSTEM.md) — Paleta (Borgoña/Crema), tipografías, componentes y accesibilidad.
   - [docs/CONTENT-GUIDELINES.md](docs/CONTENT-GUIDELINES.md) — Tono de voz, catálogo oficial con precios y tratamiento de assets.
3. **Ingeniería, Estándares y Operaciones:**
   - [docs/TECH-STACK.md](docs/TECH-STACK.md) — Stack técnico, dependencias y arquitectura del código.
   - [docs/DEVELOPMENT-RULES.md](docs/DEVELOPMENT-RULES.md) — Convenciones de nombres, estructura interna y control de calidad.
   - [docs/ITERATION-PLAN.md](docs/ITERATION-PLAN.md) — Plan de construcción por iteraciones y criterios de salida (DoD).
   - [docs/SEO-AND-PERFORMANCE.md](docs/SEO-AND-PERFORMANCE.md) — Metadatos, marcado semántico, compresión y rendimiento.
   - [docs/DEPLOYMENT.md](docs/DEPLOYMENT.md) — Guía de despliegue en Vercel/Netlify y checklist pre-lanzamiento.
   - [docs/ROADMAP.md](docs/ROADMAP.md) — Cronograma de hitos: desde la documentación hasta el preview y mejoras futuras.
4. **Gobierno y Agentes:**
   - [AGENTS.md](AGENTS.md) — Reglas y directrices para agentes de IA que colaboren en el repositorio.
   - [CHANGELOG.md](CHANGELOG.md) — Registro de cambios y versiones del proyecto.

---

## 📄 Licencia

Este proyecto está bajo la Licencia MIT. Consulta el archivo [LICENSE](LICENSE) para más detalles.
