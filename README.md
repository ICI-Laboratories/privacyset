# Centro de Privacidad — ICI Laboratories

Portal web oficial y generador estático del **Centro de Privacidad de ICI Laboratories** para las aplicaciones, servicios de identidad y plataformas del ecosistema **SARA**.

- **Naturaleza del desarrollador:** **ICI Laboratories** es un **club educativo** e iniciativa de desarrollo tecnológico independiente gestionada por estudiantes.
- **Deslinde institucional:** Se deslinda totalmente de cualquier responsabilidad institucional, jurídica u operativa a la **Universidad de Colima (UdeC)** y a la **Facultad de Ingeniería Electromecánica (FIME)**.
- **Asesoramiento académico:** Contamos con el asesoramiento y mentoría técnica del **Dr. Walter Alexander Mata López**, profesor investigador y director de la facultad (FIME).
- **Dominio de producción:** [https://privacy.ici-labs.com](https://privacy.ici-labs.com) (Versión multilingüe `ES` / `EN`).
- **Repositorio canónico:** `privacyset`
- **Revisión general:** Octubre 2026.
- **Stack tecnológico:** [Astro 5](https://astro.build/) (Static Site Generation - SSG), TypeScript, Content Collections.
- **Sistema de diseño:** [ICI Brand Assets](../ici-brand-assets/) (SARA v0.5.0 · Prisma Cognitivo & Glass OS).

---

## 🏛️ Catálogo de Políticas Publicadas

Cada servicio cuenta con una política específica e independiente, accesible en su propia ruta permanente:

| Documento | Alcance y funciones | Ruta en Español | English Route |
| :--- | :--- | :--- | :--- |
| **SARA ID — Cuenta SARA** | Servicio de identidad central, credenciales criptográficas, sesiones unificadas, acceso con Google, envío transaccional de correo (*ICI Identity Mail Backend*), aplicaciones conectadas y revocación. | [`/sara-id/`](https://privacy.ici-labs.com/sara-id/) | [`/en/sara-id/`](https://privacy.ici-labs.com/en/sara-id/) |
| **SARA — Plataforma educativa** | Asignaturas, tareas multimedia, evaluaciones formativas, retroalimentación pedagógica, SARA Drive, DocMD y asistencia de IA (sin entrenamiento de modelos públicos). | [`/sara/`](https://privacy.ici-labs.com/sara/) | [`/en/sara/`](https://privacy.ici-labs.com/en/sara/) |
| **SARA Eventos** | Gestión de agendas, simposios y semanas académicas (ej. *TecnoFIME*), inscripciones, listas de espera, control de aforos, comités organizadores y folios de constancias. | [`/sara-eventos/`](https://privacy.ici-labs.com/sara-eventos/) | [`/en/sara-eventos/`](https://privacy.ici-labs.com/en/sara-eventos/) |
| **SARA MD** | Editor Markdown para Android y iOS con fórmulas LaTeX y diagramas Mermaid. Modelo 100% *local-first* sin sincronización en la nube ni telemetría. | [`/sara-md/`](https://privacy.ici-labs.com/sara-md/) | [`/en/sara-md/`](https://privacy.ici-labs.com/en/sara-md/) |
| **InSituLab** | Registro y geoetiquetado bajo demanda para visitas escolares de campo. Modelo *offline-first* educativo. | [`/insitulab/`](https://privacy.ici-labs.com/insitulab/) | [`/en/insitulab/`](https://privacy.ici-labs.com/en/insitulab/) |

---

## 🔑 Referencia Oficial para Google (OAuth & Gmail API)

Para la verificación y pantallas de consentimiento de Google Cloud Platform y Google Identity:

1. **Pantalla de consentimiento de SARA ID (Google Sign-In):**
   - **URL de la Política de Privacidad:** `https://privacy.ici-labs.com/sara-id/`
   - **Nombre de la aplicación visible:** **SARA ID** (o **Cuenta SARA**).
   - **Scopes solicitados a usuarios:** `openid`, `email`, `profile`.
   - **Finalidad:** Autenticación directa y verificación de titularidad del correo. No se solicita acceso a buzones personales de los usuarios.

2. **ICI Identity Mail Backend (`gmail.send`):**
   - El envío de correos de verificación y recuperación de cuenta se realiza exclusivamente desde el buzón operativo oficial `icilaboratories@gmail.com`.
   - Si el nombre técnico **“ICI Identity Mail Backend”** continúa apareciendo en registros de auditoría o pantallas administrativas de Google Cloud, queda expresamente cubierto y explicado en la sección **04 de la política de SARA ID**.
   - Los usuarios finales **no** otorgan permisos sobre sus cuentas personales de Gmail.

---

## 📖 Estructura de Dos Niveles de Lectura

Cada página de política implementa dos niveles de lectura para asegurar máxima transparencia:

1. **Nivel 1 &middot; Resumen inicial:** Bloque destacado superior con 4 puntos clave:
   - *1. Qué es este servicio*
   - *2. Qué datos utiliza*
   - *3. Para qué se utilizan*
   - *4. Cómo contactar o gestionar*
2. **Nivel 2 &middot; Documento completo:** Articulado en secciones numeradas con índice lateral interactivo (*sticky*) en computadoras y menú desplegable accesible en dispositivos móviles.

---

## 🎨 Sistema de Diseño (ICI Brand Assets)

El portal implementa los design tokens canónicos de **SARA v0.5.0**:
- **Tipografías:** `Manrope` (titulares y display), `Inter` (cuerpo y controles UI) y `JetBrains Mono` (claves, códigos y parámetros técnicos).
- **Paleta Prisma:** Azul Zafiro ingeniería (`#1A367A` en claro / `#5882E6` en oscuro), Acento Cian Eléctrico (`#159AB3` / `#26C4CE`) y Coral Magma (`#E65642` / `#FF7659`).
- **Superficies Glass OS:** Barra superior y tarjetas con bisel especular de 1 px (`--sara-rim-specular`), caústicas ambientales suaves en fondo y paneles de lectura opacos de alto contraste (WCAG AAA).
- **Modo Claro / Oscuro:** Selector persistente en `localStorage` con detección automática de preferencia del sistema.

---

## 🛠️ Comandos de Desarrollo

```bash
# Instalar dependencias
npm install

# Iniciar servidor de desarrollo local
npm run dev

# Compilar para producción (SSG)
npm run build

# Previsualizar la compilación de producción localmente
npm run preview
```

---

## 🚢 Despliegue

El proyecto se compila a archivos HTML estáticos en `dist/` y se sirve bajo el dominio `privacy.ici-labs.com` (configurado en `public/CNAME`).
