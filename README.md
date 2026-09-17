# Portal de Políticas de Privacidad - ICI Laboratories

Portal web oficial y generador estático de políticas de privacidad para las aplicaciones móviles y servicios tecnológicos desarrollados por **ICI Laboratories**.

- **Dominio de producción:** [https://privacy.ici-labs.com](https://privacy.ici-labs.com)
- **Stack tecnológico:** [Astro](https://astro.build/) (Static Site Generation - SSG), TypeScript, Content Collections (Markdown).

---

## 📱 URLs para Google Play Store y Apple App Store

Ambas tiendas exigen URLs públicas, directas y específicas por aplicación, así como un enlace para la eliminación de cuenta y datos personales.

| Aplicación | URL de Política de Privacidad | URL de Eliminación de Cuenta |
| :--- | :--- | :--- |
| **SARA** | `https://privacy.ici-labs.com/sara/` | `https://privacy.ici-labs.com/sara/#eliminacion-de-cuenta` |
| **InSituLab** | `https://privacy.ici-labs.com/insitulab/` | *N/A (Modelo Offline-first, sin nube)* |

---

## 🚀 Cómo agregar una nueva aplicación al laboratorio

Para agregar la política de una nueva app, **no necesitas modificar componentes ni programar**. Solo crea un archivo Markdown en `src/content/apps/` con el slug deseado (ej. `mi-nueva-app.md`):

```markdown
---
title: "Mi Nueva App"
shortDescription: "Descripción breve de una o dos líneas sobre la app."
category: "Productividad" # o Educación, Salud, etc.
lastUpdated: "17 de septiembre de 2026"
platforms: ["Android", "iOS"]
developer: "ICI Laboratories"
collaboration: "Opcional: mención de cuerpos académicos o aliados"
contactEmail: "soporte@ici-labs.com"
accountDeletion:
  supported: true
  email: "icilaboratories@gmail.com"
  subject: "Solicitud de eliminación de cuenta - Mi Nueva App"
  processingDays: 15
offlineOnly: false
---

Texto legal de la política en formato Markdown estándar con títulos (#, ##), listas y párrafos.
```

Al hacer `git push`, el sistema compilará y generará automáticamente:
1. Su tarjeta en el catálogo de inicio con buscador (`/`).
2. Su página dedicada en `https://privacy.ici-labs.com/mi-nueva-app/`.
3. Tabla de contenidos automática y botones para Play Store y PDF.

---

## 🛠️ Comandos de Desarrollo

```bash
# Instalar dependencias
npm install

# Iniciar servidor de desarrollo local
npm run dev

# Compilar para producción
npm run build

# Previsualizar la compilación de producción localmente
npm run preview
```

---

## 🚢 Despliegue Continuo (GitHub Pages)

El repositorio incluye un workflow en `.github/workflows/deploy.yml`. Al hacer push a la rama `main`:
1. GitHub Actions compila el sitio mediante Astro.
2. Despliega el directorio `dist/` a GitHub Pages.
3. El archivo `public/CNAME` preserva de forma transparente el dominio `privacy.ici-labs.com`.
