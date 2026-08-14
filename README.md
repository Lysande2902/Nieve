# 🐾 Juntos por Nieve - Campaña de Recaudación

Página web estática (HTML5, CSS3, JavaScript) lista para publicar en **GitHub Pages** para apoyar a Nieve, una dulce perrita maltesa de 9 años.

---

## 📁 Archivos del proyecto

- [`index.html`](index.html): Estructura principal de la página con etiquetas de traducción bilingüe.
- [`styles.css`](styles.css): Diseño visual, colores, animaciones, selector de idioma y adaptación móvil.
- [`script.js`](script.js): Sistema bilingüe dinámico (Español / Inglés), copiar contacto, compartir en WhatsApp/Facebook y notificaciones.

---

## 🌐 Soporte Bilingüe (Español / English)

La página incluye un selector de idioma instantáneo en la cabecera (🇲🇽 ES / 🇺🇸 EN).
- Guarda la preferencia del visitante automáticamente.
- Permite enlaces directos por parámetro de URL:
  - Versión en Español: `https://lysande2902.github.io/Nieve/?lang=es`
  - English Version: `https://lysande2902.github.io/Nieve/?lang=en`

---

## 📸 Archivos multimedia incluidos

La página ya tiene conectadas las fotos y el video de Nieve:

1. **`Nieve.jpeg`** → Foto principal en la portada.
2. **`Feliz.jpeg`** → Foto sonriendo en la galería.
3. **`Nieve_Coche.jpeg`** → Foto de camino al veterinario, siempre valiente.
4. **`Woof.jpeg`** → Foto cariñosa y atenta.
5. **`Nieve_Corriendo.mp4`** → Video reproductor en la galería.

---

## ✏️ Configuración de Donaciones y Contacto

La página está configurada para recibir apoyo directamente a través de **WhatsApp**:
- **Número configurado**: `+52 999 381 4530`
- **Enlace directo**: `https://wa.me/529993814530`
- **Botón interactivo de copiado rápido** del número para los donantes.
- **Botones de difusión** para compartir por WhatsApp, Facebook y enlace directo.

---

## 🚀 Cómo publicarla en GitHub Pages (Paso a Paso)

1. **Crea un repositorio en GitHub**:
   - Ve a [GitHub](https://github.com/new) y crea un nuevo repositorio público (ejemplo: `juntos-por-nieve` o el nombre que prefieras).
2. **Sube los archivos**:
   - Puedes arrastrar `index.html`, `styles.css`, `script.js` y tus fotos directamente al repositorio en la web de GitHub, o usar Git por terminal:
     ```bash
     git init
     git add .
     git commit -m "Web de Nieve"
     git branch -M main
     git remote add origin https://github.com/TU_USUARIO/TU_REPOSITORIO.git
     git push -u origin main
     ```
3. **Activa GitHub Pages**:
   - En tu repositorio en GitHub, ve a **Settings** > **Pages**.
   - En **Branch**, selecciona `main` y la carpeta `/ (root)`.
   - Haz clic en **Save**.
   - ¡Listo! En 1 minuto tendrás un enlace público como `https://tu-usuario.github.io/tu-repositorio/` para compartirlo con todo el mundo.
