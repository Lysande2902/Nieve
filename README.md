# 🐾 Juntos por Nieve - Campaña de Recaudación

Página web estática (HTML5, CSS3, JavaScript) lista para publicar en **GitHub Pages** para apoyar a Nieve, una dulce perrita maltesa de 10 años.

---

## 📁 Archivos del proyecto

- [`index.html`](index.html): Estructura principal de la página con datos bancarios y evidencias médicas.
- [`styles.css`](styles.css): Diseño visual, colores, tarjetas bancarias, filtros de evidencia y adaptación móvil.
- [`script.js`](script.js): Interactividad (copiar tarjeta bancaria/WhatsApp, compartir en WhatsApp/Facebook, filtros de galería y traducciones i18n).

---

## 💳 Datos Bancarios de la Campaña

- **Titular**: `JOSE ILDEFONSO SALAS EUAN`
- **Tarjeta de Débito**: `4152 3141 7343 3080`
- **Concepto Sugerido**: `Donación Nieve`

---

## 📸 Archivos Multimedia y Evidencias Clínicas Incluidas

La página incluye fotos, videos, radiografías, diagnóstico visual y reportes en PDF:

1. **Fotos de Nieve**:
   - `Nieve.jpeg` → Foto principal en la portada.
   - `Feliz.jpeg` → Foto sonriendo en la galería.
   - `Nieve_Coche.jpeg` → Foto de camino al veterinario.
   - `Woof.jpeg` → Foto cariñosa.
   - `Nieve_Corriendo.mp4` → Video en acción.

2. **Radiografías (Tórax Limpio / Sin Metástasis)**:
   - `Analisis 1.jpg`, `Analisis 2.jpg`, `Analisis 3.jpg`

3. **Diagnóstico Tumoral (Valoración Médica Visual)**:
   - `1.jpg`, `ec24a0a1-507f-4755-87d8-10adc6274c82.jpg`

4. **Documentos PDF de Análisis Clínicos Oficiales**:
   - `11371-CHBA (CANINO) NIEVE, MALIX VETERINARIA.pdf` (Biometría Hemática)
   - `11371-PBDG (CANINO) NIEVE, MALIX VETERINARIA.pdf` (Perfil Bioquímico)
   - `NIEVE MARCO MALIX.pdf` (Estudio Radiológico Malix)
   - `Y-11371 Cx Nieve.pdf` (Presupuesto Quirúrgico Mastectomía)

---

## ✏️ Configuración de Donaciones, Presupuesto y Contacto

La página está configurada para recibir apoyo directo a través de **Transferencia Bancaria** y **WhatsApp**:
- **Tarjeta para Transferencia**: `4152 3141 7343 3080` (con botón de copia rápida)
- **Titular**: `JOSE ILDEFONSO SALAS EUAN`
- **WhatsApp de contacto**: `+52 999 381 4530`
- **Enlace directo a WhatsApp**: `https://wa.me/529993814530`

- **Termómetro / Barra de Progreso**: En [`script.js`](script.js), al inicio del archivo, puedes modificar la meta y el monto recaudado:
  ```javascript
  const fundraisingConfig = {
    goalAmount: 15000,    // Meta total estimada en MXN
    raisedAmount: 0,      // Monto recaudado actual en MXN (actualízalo con los donativos recibidos)
    currency: 'MXN',
    currencySymbol: '$'
  };
  ```
- **Secciones incluidas**:
  - **¡Sin Metástasis!**: Noticia destacada sobre los resultados favorables de los estudios.
  - **Diagnóstico y Plan Quirúrgico**: Mastectomía en dos tiempos (1ª y 2ª cadena mamaria), cuidados y visitas extras.
  - **Presupuesto Estimado**: Desglose transparente de costos quirúrgicos, medicación y curaciones.
  - **Consejo de Esterilización**: Espacio de concientización sobre la importancia de esterilizar a tiempo a perritas y gatitas.
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
