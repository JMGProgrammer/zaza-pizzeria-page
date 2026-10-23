# Instrucciones para Agentes de IA — ZAZA (AGENTS.md)

Este documento establece las convenciones de código, restricciones de arquitectura, directrices operativas y comandos de verificación para cualquier agente de inteligencia artificial (o desarrollador) que trabaje en el repositorio **zaza-pizzeria-page**.

---

## 1. Contexto del Negocio y del Proyecto

- **Negocio:** ZAZA — Pizzería Delivery en Rosario, Colonia, Uruguay.
- **Tipo de producto:** Web preview / Landing page informativa y de alta estética visual orientada a la conversión por WhatsApp.
- **Fuentes de verdad obligatorias:**
  - Datos de negocio: [docs/BUSINESS-INFO.md](BUSINESS-INFO.md).
  - Alcance del proyecto: [docs/PROJECT-SCOPE.md](PROJECT-SCOPE.md).
  - Guía de diseño: [docs/DESIGN-SYSTEM.md](DESIGN-SYSTEM.md).
  - Guía de contenido: [docs/CONTENT-GUIDELINES.md](CONTENT-GUIDELINES.md).

---

## 2. Reglas Críticas e Inviolables

1. **CERO INVENCIÓN DE DATOS:**
   - Jamás inventar direcciones, nombres de socios, precios, ingredientes, políticas de delivery ni promociones inexistentes.
   - Si un dato no figura en `docs/BUSINESS-INFO.md`, marcarlo expresamente como `Pendiente de confirmación`.
2. **RESPETO DEL ALCANCE (SCOPE):**
   - NO implementar pasarelas de pago online (Mercado Pago Checkout, Stripe).
   - NO incorporar bases de datos (PostgreSQL, SQLite, Supabase) ni backends dedicados.
   - NO agregar librerías pesadas o frameworks innecesarios (e.g. React/Vue completo) a menos que se justifique una necesidad de interactividad que Astro no pueda resolver nativamente.
3. **FIDELIDAD ESTÉTICA:**
   - Respetar la identidad visual acordada: Paleta Vino/Borgoña (`#5A131A`, `#7B1B24`) y Crema Cálido (`#FAF6EE`), con tipografía retro elegante y acabados cuidados.
   - Emplear siempre Tailwind CSS alineado con los tokens definidos en [docs/DESIGN-SYSTEM.md](DESIGN-SYSTEM.md).

---

## 3. Convenciones de Código y Arquitectura

- **Framework:** Astro (`.astro`) usando TypeScript en el frontmatter (`---`).
- **Estructura de Carpetas Objetivo:**
  ```text
  src/
  ├── components/    # Componentes de UI reutilizables (Navbar, Hero, PizzaCard, Footer, etc.)
  ├── data/          # Archivos de datos estáticos tipados (menu.ts, businessInfo.ts)
  ├── layouts/       # Plantilla principal (Layout.astro) con metadatos SEO y fuentes
  ├── pages/         # Rutas de Astro (index.astro)
  └── styles/        # Estilos globales o directivas de Tailwind si aplica
  ```
- **Datos Estáticos:** Los datos de las pizzas y bebidas deben residir en `src/data/menu.ts` con interfaces TypeScript estrictas:
  ```typescript
  export interface MenuItem {
    id: string;
    name: string;
    category: 'clasicas' | 'especiales' | 'acompanamientos' | 'bebidas';
    description?: string;
    price?: number;
    isPricePending?: boolean;
    image?: string;
    isFeatured?: boolean;
  }
  ```
- **Imágenes:** Emplear el componente nativo `astro:assets` (`<Image />`) para optimización automática a WebP/AVIF y prevención de Layout Shift (CLS).

---

## 4. Comandos de Verificación y Testing

Todo agente debe verificar que sus cambios compilan y respetan el tipado estricto antes de dar una tarea por finalizada:

```bash
# Comprobación de tipos en TypeScript
npm run check # o npx astro check

# Compilación de producción para validar builds sin errores
npm run build

# Formateo y estilo (si aplica)
npx prettier --check .
```

---

## 5. Protocolo de Modificación de Documentación

- Si se modifica la estructura del proyecto o se agregan nuevos archivos clave, actualizar inmediatamente el índice en `README.md` y `ROADMAP.md`.
- No duplicar párrafos extensos entre documentos; utilizar enlaces relativos de Markdown.
- Mantener la integridad de los enlaces relativos entre archivos dentro de la carpeta `docs/`.
