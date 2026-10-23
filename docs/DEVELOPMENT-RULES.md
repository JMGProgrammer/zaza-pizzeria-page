# Reglas y Estándares de Desarrollo — ZAZA (DEVELOPMENT-RULES.md)

Este documento formaliza las normas de desarrollo, convenciones de nombramiento de archivos, pautas de código, arquitectura y flujo de trabajo para el proyecto **zaza-pizzeria-page**.

---

## 1. Convenciones de Nombramiento (Naming Conventions)

Para mantener la coherencia y evitar colisiones entre sistemas operativos:

### A. Archivos y Directorios
- **Componentes Astro:** `PascalCase.astro` (ejemplo: `Navbar.astro`, `Hero.astro`, `PizzaCard.astro`, `MenuSection.astro`).
- **Layouts:** `PascalCase.astro` (ejemplo: `Layout.astro`, `BaseLayout.astro`).
- **Páginas de Astro:** `kebab-case.astro` o `index.astro` dentro de rutas en minúscula (ejemplo: `src/pages/index.astro`, `src/pages/404.astro`).
- **Archivos de datos, utilidades y scripts TypeScript:** `camelCase.ts` (ejemplo: `menu.ts`, `businessInfo.ts`, `formatters.ts`).
- **Recursos gráficos y multimedia:** `kebab-case.extension` (ejemplo: `zaza-logo-main.webp`, `pizza-capresse-artesanal.webp`, `bg-burgundy-silk.webp`). Evitar caracteres especiales, espacios y acentos en nombres de imágenes.
- **Documentación Markdown:** `UPPERCASE-HYPHEN.md` en la carpeta `docs/` (ejemplo: `PROJECT-SCOPE.md`, `DESIGN-SYSTEM.md`, `DEVELOPMENT-RULES.md`) con excepción de los archivos históricos de relevamiento.

### B. Código y Tipado (TypeScript & CSS)
- **Interfaces y Types:** `PascalCase` con nombres descriptivos (ejemplo: `MenuItem`, `CategoryType`, `BusinessDetails`).
- **Constantes:** `UPPER_SNAKE_CASE` para valores inmutables globales (ejemplo: `WHATSAPP_PHONE_NUMBER`, `DEFAULT_CURRENCY`).
- **Variables y Funciones:** `camelCase` (ejemplo: `formatPrice()`, `generateWhatsAppLink()`).
- **Clases CSS / Tailwind:** Utilizar nombres de utilidades de Tailwind estándar o tokens definidos bajo el prefijo `zaza-*` (ejemplo: `bg-zaza-wine-800`, `text-zaza-cream-100`).

---

## 2. Estructura del Código Fuente (`src/`)

El código de la aplicación debe estructurarse estrictamente de la siguiente forma:

```text
src/
├── assets/         # Imágenes y vectores procesados por el pipeline de Astro
│   ├── images/
│   └── icons/
├── components/     # Componentes de interfaz reutilizables
│   ├── ui/         # Componentes atómicos (Badge.astro, Button.astro, etc.)
│   ├── Navbar.astro
│   ├── Hero.astro
│   ├── MenuSection.astro
│   ├── PizzaCard.astro
│   ├── DeliveryInfo.astro
│   └── Footer.astro
├── data/           # Datos estáticos tipados (fuente única de verdad del menú)
│   ├── menu.ts
│   └── businessInfo.ts
├── layouts/        # Plantillas maestras con etiquetas SEO y Open Graph
│   └── Layout.astro
├── pages/          # Rutas del sitio web
│   └── index.astro
├── styles/         # Directivas globales de Tailwind y tipografías
│   └── global.css
└── types/          # Definiciones e interfaces globales de TypeScript
    └── index.ts
```

---

## 3. Principios de Arquitectura Frontend

1. **Astro First (Zero-JS por defecto):**
   - No añadir JavaScript del lado del cliente a menos que sea estrictamente indispensable.
   - Las secciones de presentación, tarjetas de menú e información de delivery deben compilarse a HTML estático puro.
2. **Optimización con `astro:assets`:**
   - Todas las imágenes de pizzas y logos deben renderizarse mediante el componente `<Image />` de Astro para garantizar compresión automática a WebP/AVIF y prevención de CLS.
3. **Tipado Estricto:**
   - Mantener activado `strict: true` en `tsconfig.json`. Prohibido el uso de `any` sin justificación documentada.
4. **Separación de Datos y Vista:**
   - Ningún precio o texto descriptivo de pizzas debe estar hardcodeado en la plantilla `.astro`. Todos los datos del menú provienen de `src/data/menu.ts`.

---

## 4. Flujo de Trabajo y Git (Workflow)

### A. Ramas (Branching)
- `main`: Rama de producción estable. Todo commit que ingresa a `main` debe compilar sin errores.
- `feat/*`: Para nuevas funcionalidades o componentes (ejemplo: `feat/menu-section`, `feat/whatsapp-cta`).
- `fix/*`: Para corrección de errores o inconsistencias.
- `docs/*`: Para revisiones documentales.

### B. Convención de Commits (Conventional Commits)
Se deben redactar mensajes de commit claros en español o inglés siguiendo el formato estándar:
- `feat: agregar componente PizzaCard con soporte de imágenes optimizadas`
- `fix: corregir número de teléfono en enlace de WhatsApp`
- `docs: actualizar carta oficial de precios en CONTENT-GUIDELINES.md`
- `style: ajustar contraste en tokens de color crema`
- `refactor: modularizar datos del menú en src/data/menu.ts`

### C. Estrategia de Versionado Semántico y Etiquetas Git (Tags)
El versionado del proyecto sigue una progresión estricta ligada a las Iteraciones (IT), correcciones y despliegues estables:

| Tipo de Evento / Cambio | Incremento de Versión | Formato del Tag | Ejemplo |
| :--- | :--- | :--- | :--- |
| **Cierre de Iteración (IT)** | Minor (`+ v0.1.0`) | `v0.X.0` | `v0.1.0` (Cierre IT-0), `v0.2.0` (Cierre IT-1) |
| **Hotfix / Bugfix / Parche** | Patch (`+ v0.0.1`) | `v0.X.Y` | `v0.1.1` (Ajuste menor o corrección de bug) |
| **Versión Estable / Deploy** | Major (`+ v1.0.0`) | `vX.0.0` | `v1.0.0` (1er deploy funcional en producción) |

#### Reglas de Creación de Tags:
1. Al finalizar y verificar cada Iteración definida en [docs/ITERATION-PLAN.md](ITERATION-PLAN.md), se debe realizar un commit de cierre y generar un tag anotado:
   ```bash
   git commit -m "chore(release): completar Iteración 0 - Documentación y Arquitectura"
   git tag -a v0.1.0 -m "Release v0.1.0: Cierre de Iteración 0 (Documentación completa)"
   ```
2. Cualquier corrección puntual posterior sobre una iteración cerrada incrementa el dígito de parche (`v0.1.1`).
3. El primer despliegue público y estable en producción (Vercel o Netlify) validado con el cliente se etiquetará como `v1.0.0`.

---

## 5. Control de Calidad y Verificación

Antes de realizar un commit o abrir un Pull Request, el desarrollador o agente debe ejecutar y aprobar la siguiente secuencia de validación:

```bash
# 1. Comprobación estricta de tipos de Astro y TypeScript
npx astro check

# 2. Compilación de producción (validar que no haya assets faltantes o rutas rotas)
npm run build

# 3. Formateo y linter de código (si aplica Prettier/ESLint)
npx prettier --check .
```
