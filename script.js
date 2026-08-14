// ==========================================================================
// DICCIONARIO DE TRADUCCIONES / TRANSLATIONS DICTIONARY (ES / EN)
// ==========================================================================
const translations = {
  es: {
    // Meta / Doc
    doc_title: "Juntos por Nieve 🐾 | Recaudación y Apoyo",
    doc_description: "Campaña de recaudación para el tratamiento y recuperación de Nieve, una perrita maltesa de 9 años llena de vida y amor.",

    // Header & Nav
    nav_brand: 'Juntos por <strong>Nieve</strong>',
    nav_story: "Su Historia",
    nav_health: "Estado de Salud",
    nav_photos: "Fotos",
    nav_help_btn: "❤️ Cómo Ayudar",

    // Hero
    hero_badge: '<i class="fa-solid fa-heart-pulse"></i> Campaña Médica de Apoyo',
    hero_title: 'Ayúdanos a salvar a <span class="gradient-text">Nieve</span>',
    hero_subtitle: 'Una dulce perrita maltesa de <strong>9 años</strong>, sumamente juguetona, cariñosa y llena de ganas de seguir viviendo momentos felices a nuestro lado.',
    hero_pill_breed: "Perrita Maltés",
    hero_pill_age: "9 Años",
    hero_pill_personality: "Juguetona y Cariñosa",
    hero_btn_donate: '<i class="fa-solid fa-hand-holding-heart"></i> Donar o Apoyar',
    hero_btn_share: '<i class="fa-solid fa-share-nodes"></i> Compartir',
    hero_badge_floating: "Luchando con amor",
    hero_quote: '<i class="fa-solid fa-quote-left"></i> "Cada pequeña ayuda o difusión cuenta el doble para su tratamiento."',

    // Story
    story_subtitle: "Conoce a nuestra pequeña",
    story_title: "El corazón de nuestra familia",
    story_card1_title: "Espíritu Juguetón",
    story_card1_text: "A pesar de sus 9 añitos, Nieve conserva la alegría y chispa de una cachorrita. Le encanta correr, jugar con su hermana mayor Cosy (aunque no sean de sangre) y alegrar el hogar.",
    story_card2_title: "Amor Incondicional",
    story_card2_text: "Es una perrita sumamente noble y cariñosa. Siempre busca dar compañía, acurrucarse y regalar miradas llenas de gratitud y ternura.",
    story_card3_title: "Una Gran Luchadora",
    story_card3_text: "Hoy se enfrenta a un desafío de salud, pero con el tratamiento médico adecuado y nuestro apoyo colectivo, sabemos que saldrá adelante.",

    // Medical
    medical_badge: '<i class="fa-solid fa-circle-exclamation"></i> Situación Médica',
    medical_title: "El diagnóstico de Nieve",
    medical_lead: 'Recientemente se le detectó un <strong>tumor</strong>. Ya se le realizaron los <strong>estudios clínicos y biopsias</strong> para su diagnóstico, y ahora el paso más importante es su <strong>cirugía y tratamiento post-operatorio</strong>.',
    medical_desc: "El objetivo actual de esta campaña es solventar los gastos veterinarios de su operación y recuperación:",
    medical_step1_title: "Estudios, Biopsias y Análisis Clínicos",
    medical_step1_badge: '<i class="fa-solid fa-check"></i> Realizado',
    medical_step1_desc: "Diagnóstico veterinario completado para planificar la intervención médica.",
    medical_step2_title: "Procedimiento Quirúrgico / Cirugía",
    medical_step2_badge: '<i class="fa-solid fa-heart-pulse"></i> Próximo Paso',
    medical_step2_desc: "Extracción del tumor, quirófano, monitoreo y anestesia especializada.",
    medical_step3_title: "Medicamentos y Cuidados Post-operatorios",
    medical_step3_desc: "Antibióticos, analgésicos, curaciones y consultas de seguimiento veterinario.",
    medical_card_title: "Apoyo Médico Directo",
    medical_card_badge: "Campaña Activa",
    medical_card_desc: "Cada aportación se destina <strong>100%</strong> a los gastos de veterinaria, estudios clínicos y medicación de Nieve.",
    medical_card_transparency: "Estaremos compartiendo todas las recetas, notas médicas y comprobantes veterinarios con quienes nos apoyen.",
    medical_card_btn: '<i class="fa-brands fa-whatsapp"></i> Contactar para Apoyar',

    // Help & Donation
    help_subtitle: "Tu apoyo hace la diferencia",
    help_title: "¿Cómo puedes apoyar a Nieve?",
    help_desc: "Cualquier aportación o simplemente compartir este enlace nos acerca más a su recuperación.",
    help_wa_title: "Donación Directa por WhatsApp",
    help_wa_subtitle: "Coordinación personalizada y transparente",
    help_wa_text: "Escríbenos directamente para brindarte los datos correspondientes, resolver cualquier duda sobre la salud de Nieve o enviarte sus notas médicas:",
    help_wa_label: "WhatsApp de contacto:",
    btn_copy: '<i class="fa-regular fa-copy"></i> Copiar',
    help_wa_btn: '<i class="fa-brands fa-whatsapp"></i> Enviar Mensaje por WhatsApp',
    help_wa_hint: '<i class="fa-solid fa-shield-heart"></i> Te responderemos a la brevedad con mucho cariño y agradecimiento.',
    help_share_title: "Difunde su Historia",
    help_share_subtitle: "Compartir también es una gran forma de ayudar",
    help_share_text: "Comparte esta página con amigos, familiares o en grupos de amantes de las mascotas para llegar a más personas:",
    share_btn_wa: '<i class="fa-brands fa-whatsapp"></i> Compartir en WhatsApp',
    share_btn_fb: '<i class="fa-brands fa-facebook"></i> Compartir en Facebook',
    share_btn_link: '<i class="fa-solid fa-link"></i> Copiar Enlace de la Web',

    // Gallery
    gallery_subtitle: "Momentos Felices",
    gallery_title: "Galería de Nieve",
    gallery_desc: "Aquí iremos subiendo sus fotos y avances durante su recuperación.",
    gallery_cap1: "Nieve sonriendo y feliz ❤️",
    gallery_cap2: "Camino al veterinario, siempre valiente 🚗🩺",
    gallery_cap3: "Siempre atenta y cariñosa 🐶",
    gallery_video_badge: '<i class="fa-solid fa-play"></i> Video en Acción',
    gallery_video_cap: "¡Nieve corriendo con alegría! 🏃‍♀️💨",

    // Timeline
    timeline_subtitle: "Seguimiento",
    timeline_title: "Actualizaciones de Salud",
    timeline_item2_date: '<i class="fa-solid fa-circle-check"></i> Diagnóstico Confirmado',
    timeline_item2_title: "Estudios y Biopsias Realizados",
    timeline_item2_text: "Concluyeron con éxito los análisis clínicos y la biopsia de Nieve. Con el diagnóstico confirmado, el siguiente paso prioritario es realizar su cirugía y asegurar sus medicamentos post-operatorios.",
    timeline_item1_date: '<i class="fa-regular fa-calendar"></i> Actualización Inicial',
    timeline_item1_title: "Inicio de la Campaña de Apoyo",
    timeline_item1_text: "Abrimos este espacio para recaudar apoyo y mantener informados a todos los que nos quieren ayudar con los gastos veterinarios de Nieve. ¡Muchas gracias de corazón!",

    // Contact
    contact_title: "¿Tienes dudas o deseas contactarnos directamente?",
    contact_desc: "Puedes escribirnos para cualquier pregunta sobre el estado de Nieve, comprobantes médicos o enviarnos tus palabras de ánimo.",
    contact_btn: '<i class="fa-brands fa-whatsapp"></i> Escríbenos por WhatsApp (+52 999 381 4530)',

    // Sticky & Footer
    sticky_brand: '🐶 Juntos por <strong>Nieve</strong>',
    sticky_btn: "Apoyar ❤️",
    footer_copy: '© <span id="current-year">' + new Date().getFullYear() + '</span> - Campaña para Nieve 🐾',
    footer_sub: "Hecho con mucho amor y esperanza por su pronta recuperación.",

    // Alerts & dynamic texts
    toast_copied: "¡Copiado al portapapeles!",
    toast_phone_copied: "¡Número de WhatsApp copiado!",
    toast_link_copied: "¡Enlace de la página copiado!",
    btn_copied_state: '<i class="fa-solid fa-check"></i> ¡Copiado!',
    share_title: "Juntos por Nieve 🐾",
    share_msg: "Ayúdanos a apoyar el tratamiento de Nieve, una perrita maltesa de 9 años llena de vida.",
    wa_share_msg: "🐾 Hola, te comparto la campaña de apoyo para Nieve, una perrita maltesa que necesita tratamiento médico: ",
    wa_prefilled_donate: "Hola, vi la página de Nieve y me gustaría apoyar con una donación",
    wa_prefilled_contact: "Hola, vi la página de Nieve y me gustaría apoyar"
  },

  en: {
    // Meta / Doc
    doc_title: "Together for Nieve 🐾 | Medical Fundraiser & Support",
    doc_description: "Fundraising campaign for the medical treatment and recovery of Nieve, a loving 9-year-old Maltese dog full of life.",

    // Header & Nav
    nav_brand: 'Together for <strong>Nieve</strong>',
    nav_story: "Her Story",
    nav_health: "Medical Status",
    nav_photos: "Photos",
    nav_help_btn: "❤️ How to Help",

    // Hero
    hero_badge: '<i class="fa-solid fa-heart-pulse"></i> Medical Support Campaign',
    hero_title: 'Help us save <span class="gradient-text">Nieve</span>',
    hero_subtitle: 'A sweet <strong>9-year-old</strong> Maltese dog, playful, loving, and eager to keep sharing happy moments with us.',
    hero_pill_breed: "Maltese Dog",
    hero_pill_age: "9 Years Old",
    hero_pill_personality: "Playful & Loving",
    hero_btn_donate: '<i class="fa-solid fa-hand-holding-heart"></i> Donate or Support',
    hero_btn_share: '<i class="fa-solid fa-share-nodes"></i> Share',
    hero_badge_floating: "Fighting with love",
    hero_quote: '<i class="fa-solid fa-quote-left"></i> "Every bit of help and every share means the world for her treatment."',

    // Story
    story_subtitle: "Get to know our sweet girl",
    story_title: "The heart of our family",
    story_card1_title: "Playful Spirit",
    story_card1_text: "Despite being 9 years old, Nieve keeps the joy and spark of a puppy. She loves to run, play with her older sister Cosy (even if not by blood), and bring joy to our home.",
    story_card2_title: "Unconditional Love",
    story_card2_text: "She is an extremely gentle and affectionate dog. She always seeks company, loves to cuddle, and gives glances full of gratitude and tenderness.",
    story_card3_title: "A Brave Fighter",
    story_card3_text: "Today she faces a health challenge, but with proper medical treatment and our collective support, we know she will pull through.",

    // Medical
    medical_badge: '<i class="fa-solid fa-circle-exclamation"></i> Medical Condition',
    medical_title: "Nieve's Diagnosis",
    medical_lead: 'She was recently diagnosed with a <strong>tumor</strong>. <strong>Clinical tests and biopsies</strong> have already been completed for diagnosis, and the most critical next step is her <strong>surgery and post-operative care</strong>.',
    medical_desc: "The current goal of this campaign is to cover the veterinary costs of her surgery and recovery:",
    medical_step1_title: "Tests, Biopsies & Clinical Analysis",
    medical_step1_badge: '<i class="fa-solid fa-check"></i> Completed',
    medical_step1_desc: "Veterinary diagnosis completed to plan the surgical procedure.",
    medical_step2_title: "Surgical Procedure / Surgery",
    medical_step2_badge: '<i class="fa-solid fa-heart-pulse"></i> Next Step',
    medical_step2_desc: "Tumor removal surgery, operating room, monitoring, and specialized anesthesia.",
    medical_step3_title: "Medication & Post-Op Care",
    medical_step3_desc: "Antibiotics, pain relief, wound care, and veterinary follow-up visits.",
    medical_card_title: "Direct Medical Support",
    medical_card_badge: "Active Campaign",
    medical_card_desc: "Every contribution goes <strong>100%</strong> toward veterinary care, clinical studies, and Nieve's medications.",
    medical_card_transparency: "We will be sharing all medical prescriptions, veterinary invoices, and receipts with everyone who supports us.",
    medical_card_btn: '<i class="fa-brands fa-whatsapp"></i> Contact to Support',

    // Help & Donation
    help_subtitle: "Your support makes a difference",
    help_title: "How can you help Nieve?",
    help_desc: "Any contribution or simply sharing this link brings us closer to her recovery.",
    help_wa_title: "Direct Donation via WhatsApp",
    help_wa_subtitle: "Direct and transparent coordination",
    help_wa_text: "Send us a message directly so we can provide payment/bank details, answer any questions about Nieve's health, or share medical receipts:",
    help_wa_label: "Contact WhatsApp:",
    btn_copy: '<i class="fa-regular fa-copy"></i> Copy',
    help_wa_btn: '<i class="fa-brands fa-whatsapp"></i> Send WhatsApp Message',
    help_wa_hint: '<i class="fa-solid fa-shield-heart"></i> We will reply promptly with warmth and deepest gratitude.',
    help_share_title: "Spread the Word",
    help_share_subtitle: "Sharing is also a wonderful way to help",
    help_share_text: "Share this page with friends, family, or in pet lover communities to help us reach more people:",
    share_btn_wa: '<i class="fa-brands fa-whatsapp"></i> Share on WhatsApp',
    share_btn_fb: '<i class="fa-brands fa-facebook"></i> Share on Facebook',
    share_btn_link: '<i class="fa-solid fa-link"></i> Copy Website Link',

    // Gallery
    gallery_subtitle: "Happy Moments",
    gallery_title: "Nieve's Gallery",
    gallery_desc: "We will be uploading her photos and updates throughout her recovery here.",
    gallery_cap1: "Nieve smiling and happy ❤️",
    gallery_cap2: "On our way to the vet, always brave 🚗🩺",
    gallery_cap3: "Always attentive and affectionate 🐶",
    gallery_video_badge: '<i class="fa-solid fa-play"></i> Video in Action',
    gallery_video_cap: "Nieve running happily! 🏃‍♀️💨",

    // Timeline
    timeline_subtitle: "Updates & Follow-up",
    timeline_title: "Health Updates",
    timeline_item2_date: '<i class="fa-solid fa-circle-check"></i> Confirmed Diagnosis',
    timeline_item2_title: "Clinical Tests & Biopsies Completed",
    timeline_item2_text: "Nieve's clinical tests and biopsy were successfully completed. With the confirmed diagnosis, the top priority next step is her surgery and securing her post-op medications.",
    timeline_item1_date: '<i class="fa-regular fa-calendar"></i> Initial Update',
    timeline_item1_title: "Launch of the Support Campaign",
    timeline_item1_text: "We created this space to raise support and keep everyone updated who wishes to help with Nieve's veterinary care. Thank you from the bottom of our hearts!",

    // Contact
    contact_title: "Have questions or want to reach out directly?",
    contact_desc: "You can write to us with any questions about Nieve's condition, medical invoices, or just to send words of encouragement.",
    contact_btn: '<i class="fa-brands fa-whatsapp"></i> Chat with us on WhatsApp (+52 999 381 4530)',

    // Sticky & Footer
    sticky_brand: '🐶 Together for <strong>Nieve</strong>',
    sticky_btn: "Support ❤️",
    footer_copy: '© <span id="current-year">' + new Date().getFullYear() + '</span> - Campaign for Nieve 🐾',
    footer_sub: "Made with lots of love and hope for her speedy recovery.",

    // Alerts & dynamic texts
    toast_copied: "Copied to clipboard!",
    toast_phone_copied: "WhatsApp number copied!",
    toast_link_copied: "Page link copied!",
    btn_copied_state: '<i class="fa-solid fa-check"></i> Copied!',
    share_title: "Together for Nieve 🐾",
    share_msg: "Help us support the medical treatment of Nieve, a loving 9-year-old Maltese dog.",
    wa_share_msg: "🐾 Hi! I am sharing the medical support campaign for Nieve, a sweet Maltese dog in need of veterinary treatment: ",
    wa_prefilled_donate: "Hello, I saw Nieve's page and I would like to support with a donation",
    wa_prefilled_contact: "Hello, I saw Nieve's page and I would like to support"
  }
};

// Current active language
let currentLang = 'es';

// ==========================================================================
// LANGUAGE SWITCHER LOGIC
// ==========================================================================
function setLanguage(lang) {
  if (!translations[lang]) return;
  currentLang = lang;

  // Save preference
  try {
    localStorage.setItem('nieve_lang', lang);
  } catch (e) {}

  // Update HTML lang attribute
  document.documentElement.lang = lang;

  // Update Document Title & Meta Description
  const titleEl = document.getElementById('page-title');
  if (titleEl) titleEl.textContent = translations[lang].doc_title;
  
  const descEl = document.getElementById('page-desc');
  if (descEl) descEl.setAttribute('content', translations[lang].doc_description);

  // Update all elements with data-i18n
  const translatableElements = document.querySelectorAll('[data-i18n]');
  translatableElements.forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (translations[lang][key]) {
      el.innerHTML = translations[lang][key];
    }
  });

  // Update Switcher Active Button State
  const btnEs = document.getElementById('btn-lang-es');
  const btnEn = document.getElementById('btn-lang-en');
  if (btnEs && btnEn) {
    if (lang === 'es') {
      btnEs.classList.add('active');
      btnEn.classList.remove('active');
    } else {
      btnEn.classList.add('active');
      btnEs.classList.remove('active');
    }
  }

  // Update Dynamic WhatsApp links
  const donateWaText = encodeURIComponent(translations[lang].wa_prefilled_donate);
  const contactWaText = encodeURIComponent(translations[lang].wa_prefilled_contact);

  const btnWaCard = document.getElementById('btn-wa-card');
  if (btnWaCard) {
    btnWaCard.href = `https://wa.me/529993814530?text=${donateWaText}`;
  }

  const btnWaDonate = document.getElementById('btn-whatsapp-donate');
  if (btnWaDonate) {
    btnWaDonate.href = `https://wa.me/529993814530?text=${donateWaText}`;
  }

  const btnWaContact = document.getElementById('btn-wa-contact');
  if (btnWaContact) {
    btnWaContact.href = `https://wa.me/529993814530?text=${contactWaText}`;
  }

  // Ensure current year is still set
  const currentYearSpan = document.getElementById('current-year');
  if (currentYearSpan) {
    currentYearSpan.textContent = new Date().getFullYear();
  }
}

// Determine initial language
function initLanguage() {
  // 1. Check URL query param (e.g. ?lang=en)
  const urlParams = new URLSearchParams(window.location.search);
  const paramLang = urlParams.get('lang');
  if (paramLang && (paramLang === 'es' || paramLang === 'en')) {
    setLanguage(paramLang);
    return;
  }

  // 2. Check localStorage
  let savedLang = null;
  try {
    savedLang = localStorage.getItem('nieve_lang');
  } catch (e) {}

  if (savedLang && (savedLang === 'es' || savedLang === 'en')) {
    setLanguage(savedLang);
    return;
  }

  // Default to Spanish
  setLanguage('es');
}

// ==========================================================================
// APP INITIALIZATION & INTERACTIONS
// ==========================================================================
document.addEventListener('DOMContentLoaded', () => {
  // Initialize language
  initLanguage();

  // Dynamic Year
  const currentYearSpan = document.getElementById('current-year');
  if (currentYearSpan) {
    currentYearSpan.textContent = new Date().getFullYear();
  }

  // Hero Share Button (Native Web Share API or fallback)
  const heroShareBtn = document.getElementById('btn-share-hero');
  if (heroShareBtn) {
    heroShareBtn.addEventListener('click', () => {
      if (navigator.share) {
        navigator.share({
          title: translations[currentLang].share_title,
          text: translations[currentLang].share_msg,
          url: window.location.href,
        }).catch(() => {});
      } else {
        copyPageLink(heroShareBtn);
      }
    });
  }
});

// Toast notification helper
function showToast(message) {
  const toast = document.getElementById('toast');
  if (!toast) return;
  
  toast.textContent = message || translations[currentLang].toast_copied;
  toast.classList.add('show');
  
  setTimeout(() => {
    toast.classList.remove('show');
  }, 3000);
}

// Copy phone number helper
function copyPhoneNumber(phoneNumber, buttonElement) {
  navigator.clipboard.writeText(phoneNumber).then(() => {
    showToast(translations[currentLang].toast_phone_copied);

    if (buttonElement) {
      const originalHtml = buttonElement.innerHTML;
      buttonElement.innerHTML = translations[currentLang].btn_copied_state;
      buttonElement.style.background = '#2ec4b6';

      setTimeout(() => {
        buttonElement.innerHTML = originalHtml;
        buttonElement.style.background = '';
      }, 2000);
    }
  }).catch(err => {
    console.error('Error al copiar: ', err);
  });
}

// Copy website URL
function copyPageLink(buttonElement) {
  const url = window.location.href;

  navigator.clipboard.writeText(url).then(() => {
    showToast(translations[currentLang].toast_link_copied);
    
    if (buttonElement) {
      const originalHtml = buttonElement.innerHTML;
      buttonElement.innerHTML = translations[currentLang].btn_copied_state;
      setTimeout(() => {
        buttonElement.innerHTML = originalHtml;
      }, 2000);
    }
  });
}

// WhatsApp Share
function shareOnWhatsApp() {
  const text = encodeURIComponent(translations[currentLang].wa_share_msg + window.location.href);
  window.open(`https://api.whatsapp.com/send?text=${text}`, '_blank');
}

// Facebook Share
function shareOnFacebook() {
  const url = encodeURIComponent(window.location.href);
  window.open(`https://www.facebook.com/sharer/sharer.php?u=${url}`, '_blank', 'width=600,height=400');
}
