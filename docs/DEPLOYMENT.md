# Guía de Despliegue e Infraestructura — ZAZA (DEPLOYMENT.md)

Este documento describe la arquitectura de alojamiento, el flujo de integración y despliegue continuo (CI/CD) y la lista de comprobación de calidad para publicar la web de **ZAZA**.

---

## 1. Plataformas de Alojamiento Recomendadas

La web es un sitio puramente estático (SSG - Static Site Generation) compilado mediante Astro, lo que permite aprovechar plataformas de borde (Edge/JAMstack) globales, con costo cero en tier gratuito y máxima velocidad de respuesta:

1. **Vercel (Opción recomendada):**
   - Detección automática del framework Astro.
   - Certificados SSL/TLS automáticos y gratuitos (Let's Encrypt).
   - Optimización de imágenes en el Edge.
   - Previsualización automática de cada Pull Request.
2. **Netlify (Alternativa sólida):**
   - Integración nativa con repositorios GitHub.
   - Despliegue estático con CDN global ultrarrápida.
   - Gestión sencilla de dominios y registros DNS.

---

## 2. Configuración del Proyecto y Comandos de Compilación

A nivel de configuración en el panel de Vercel o Netlify:

| Parámetro | Valor |
| :--- | :--- |
| **Framework Preset** | Astro |
| **Root Directory** | `./` |
| **Build Command** | `npm run build` |
| **Output Directory** | `dist` |
| **Node.js Version** | `20.x` |

---

## 3. Variables de Entorno

En la fase inicial de preview informativa, el sitio no requiere secretos de backend ni llaves de bases de datos. Sin embargo, se sugiere parametrizar la información de contacto para facilitar cambios rápidos sin editar plantillas:

```bash
# .env.example (Propuesta)
PUBLIC_SITE_URL="https://pizzeriazaza.com.uy"
PUBLIC_WHATSAPP_NUMBER="59891214087"
PUBLIC_WHATSAPP_DEFAULT_MSG="Hola ZAZA! Quisiera consultar por el menú / realizar un pedido."
PUBLIC_INSTAGRAM_URL="https://www.instagram.com/lapizzeriazaza/"
```

> **Regla de seguridad:** En Astro, solo las variables con prefijo `PUBLIC_` son accesibles en el código del cliente.

---

## 4. Consideraciones de Dominio y DNS

- **Dominio provisional:** Al conectar el repositorio a Vercel o Netlify, se generará una URL automática gratuita (ej. `zaza-pizzeria.vercel.app` o `zaza-pizzeria.netlify.app`), ideal para la revisión interna y validación con los propietarios del local.
- **Dominio personalizado:** Para el lanzamiento definitivo, se coordinará la delegación DNS o configuración de registros A/CNAME en el proveedor de dominio correspondiente (por ejemplo, antel / dominios `.uy`).

---

## 5. Checklist de Verificación Pre-Lanzamiento (Production Readiness)

Antes de compartir el enlace público con clientes o promocionarlo en redes:

- [ ] **Verificación de WhatsApp:** Hacer clic en todos los botones y comprobar que se abre el chat con el número `+598 91 214 087` y el texto predeterminado.
- [ ] **Verificación de Instagram:** Comprobar que el enlace dirige al perfil real `@lapizzeriazaza` abriendo en una nueva pestaña (`target="_blank" rel="noopener noreferrer"`).
- [ ] **Validación de Horarios y Cobertura:** Comprobar que se exhibe claramente el horario (20:00 a 01:00 hs) y cobertura en Rosario.
- [ ] **Revisión de Precios e Información Provisional:** Asegurar que los datos no validados mantengan la advertencia correspondiente o hayan sido confirmados previamente.
- [ ] **Prueba de Responsive en Celulares Reales:** Probar en al menos un dispositivo Android y un iPhone para verificar que no haya desbordamiento horizontal ni tipografías ilegibles.
- [ ] **Lighthouse Audit:** Ejecutar una auditoría de rendimiento en Google Chrome DevTools comprobando un puntaje mínimo de 90 en Performance y SEO.
- [ ] **Favicon y Metadatos:** Verificar que el icono de pestaña y la tarjeta de previsualización (Open Graph) en WhatsApp muestren el isotipo oficial de ZAZA.
