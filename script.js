// ==========================================================================
// CONFIGURACIÓN DEL TERMÓMETRO / RECAUDACIÓN (EDITA AQUÍ TUS VALORES)
// ==========================================================================
// Puedes modificar estos valores conforme recibas aportaciones o cambien los costos estimados:
const fundraisingConfig = {
  goalAmount: 15000,    // Meta total estimada en MXN (puedes ajustarla según el presupuesto)
  raisedAmount: 500,      // Monto recaudado actual en MXN (cámbialo con las donaciones que vayas recibiendo)
  currency: 'MXN',
  currencySymbol: '$'
};

// ==========================================================================
// DICCIONARIO DE TRADUCCIONES / TRANSLATIONS DICTIONARY (ES / EN)
// ==========================================================================
const translations = {
  es: {
    // Meta / Doc
    doc_title: "Juntos por Nieve 🐾 | Recaudación y Apoyo",
    doc_description: "Campaña de recaudación para el tratamiento y recuperación de Nieve, una perrita maltesa de 10 años llena de vida y amor.",

    // Header & Nav
    nav_brand: 'Juntos por <strong>Nieve</strong>',
    nav_story: "Su Historia",
    nav_health: "Salud y Cirugía",
    nav_budget: "Presupuesto y Meta",
    nav_prevention: "Prevención",
    nav_photos: "Fotos y Evidencias",
    nav_help_btn: "❤️ Cómo Ayudar",

    // Hero
    hero_badge: '<i class="fa-solid fa-heart-pulse"></i> Campaña Médica de Apoyo',
    hero_title: 'Ayúdanos a salvar a <span class="gradient-text">Nieve</span>',
    hero_subtitle: 'Una dulce perrita maltesa de <strong>10 años</strong>, sumamente juguetona, cariñosa y llena de ganas de seguir viviendo momentos felices a nuestro lado.',
    hero_pill_breed: "Perrita Maltés",
    hero_pill_age: "10 Años",
    hero_pill_personality: "Juguetona y Cariñosa",
    hero_btn_donate: '<i class="fa-solid fa-hand-holding-heart"></i> Donar o Apoyar',
    hero_btn_share: '<i class="fa-solid fa-share-nodes"></i> Compartir',
    hero_badge_floating: "Luchando con amor",
    hero_quote: '<i class="fa-solid fa-quote-left"></i> "Cada pequeña ayuda o difusión cuenta el doble para su tratamiento."',

    // Story
    story_subtitle: "Conoce a nuestra pequeña",
    story_title: "El corazón de nuestra familia",
    story_card1_title: "Espíritu Juguetón",
    story_card1_text: "A pesar de sus 10 añitos, Nieve conserva la alegría y chispa de una cachorrita. Le encanta correr, jugar con su hermana mayor Cosy (aunque no sean de sangre) y alegrar el hogar.",
    story_card2_title: "Amor Incondicional",
    story_card2_text: "Es una perrita sumamente noble y cariñosa. Siempre busca dar compañía, acurrucarse y regalar miradas llenas de gratitud y ternura.",
    story_card3_title: "Una Gran Luchadora",
    story_card3_text: "Hoy se enfrenta a un desafío de salud, pero con el tratamiento médico adecuado y nuestro apoyo colectivo, sabemos que saldrá adelante.",

    // Good News Alert
    good_news_title: "🎉 ¡Excelente Noticia: Los análisis confirman que NO TIENE METÁSTASIS!",
    good_news_text: "Los estudios de ultrasonido y radiografías mostraron que sus pulmones y órganos abdominales (riñones, hígado, vesícula y bazo) están completamente limpios de tumores. Esto es una maravillosa noticia: el cáncer no se ha extendido a ningún órgano, lo que le da a Nieve una gran oportunidad de superar esto y seguir viviendo muchos años felices a nuestro lado.",

    // Medical Status & Steps
    medical_badge: '<i class="fa-solid fa-circle-exclamation"></i> Situación Médica',
    medical_title: "El diagnóstico de Nieve",
    medical_lead: 'A Nieve se le detectaron <strong>tumores en las glándulas mamarias</strong>. Tras realizar sus estudios completos, el Dr. Novelo (Pet Doctor) indicó que <strong>es necesario retirarle las cadenas mamarias en dos cirugías separadas</strong> (primero una cadena ganglionar y OVH, y tras 1 mes de recuperación, la segunda).',
    medical_desc: "La recuperación de cada cirugía será un proceso de 3 a 4 semanas. Se requerirá <strong>material de curación constante</strong> (gasas estériles, apósitos, faja/cono, antisépticos), hospitalización posoperatoria, medicación para el dolor y <strong>visitas veterinarias extras</strong> de seguimiento:",
    medical_step1_title: "1. Ultrasonido y Radiografías Completadas",
    medical_step1_badge: '<i class="fa-solid fa-check"></i> ¡Sin Metástasis!',
    medical_step1_desc: "Ultrasonido abdominal y radiografías confirman que riñones, hígado, vesícula, bazo y pulmones están completamente limpios.",
    medical_step2_title: "2. Primera Mastectomía + OVH (Pet Doctor)",
    medical_step2_badge: '<i class="fa-solid fa-heart-pulse"></i> Próximo Paso',
    medical_step2_desc: "Cirugía de resección de la 1ª cadena ganglionar y Ovariohisterectomía (OVH) a cargo del Dr. Novelo ($4,000 MXN).",
    medical_step3_title: "3. Segunda Mastectomía (2ª Cadena Ganglionar)",
    medical_step3_desc: "Segunda intervención programada 1 mes después de la primera cirugía una vez cicatrizada la herida.",
    medical_step4_title: "4. Posoperatorio, Hospitalización y Curaciones",
    medical_step4_desc: "Hospitalización inicial para cuidado de drenaje, control del dolor, antibióticos y 3 a 4 semanas de curaciones.",
    medical_card_title: "Apoyo Médico Directo",
    medical_card_badge: "Campaña Activa",
    medical_card_desc: "Cada aportación se destina <strong>100%</strong> a los gastos de las cirugías, estudios clínicos, curaciones y medicación de Nieve.",
    medical_card_transparency: "Estaremos compartiendo todas las recetas, notas médicas y comprobantes veterinarios con quienes nos apoyen.",
    medical_card_btn: '<i class="fa-brands fa-whatsapp"></i> Contactar para Apoyar',

    // Budget & Breakdown
    budget_subtitle: "Transparencia y Próximos Pasos",
    budget_title: "Presupuesto Estimado y Meta de Apoyo",
    budget_desc: "A continuación detallamos las etapas quirúrgicas y costos cotizados por el veterinario especialista (MVZ. Enrique Novelo de Pet Doctor):",
    budget_item1_title: "1ª Cirugía: Resección Cadena Ganglionar + OVH",
    budget_item1_tag: "Etapa 1 · Prioritaria",
    budget_item1_desc: "Extracción quirúrgica de la primera cadena ganglionar y Ovariohisterectomía (OVH) por el Dr. Enrique Novelo ($4,000 MXN).",
    budget_item1_sub1: '<i class="fa-solid fa-check"></i> Resección Cadena Ganglionar ($4,000 MXN)',
    budget_item1_sub2: '<i class="fa-solid fa-check"></i> Ovariohisterectomía (OVH) Incluida',
    budget_item1_sub3: '<i class="fa-solid fa-check"></i> Quirófano y Anestesia Inhalatoria',
    budget_item2_title: "Estudios Pre-quirúrgicos: Panel Cardíaco",
    budget_item2_tag: "Estudios Previos",
    budget_item2_desc: "Evaluación cardiológica obligatoria para asegurar que Nieve tolerará la anestesia y la cirugía sin complicaciones.",
    budget_item2_sub1: '<i class="fa-solid fa-check"></i> Ecocardiograma Dopler ($1,500 MXN)',
    budget_item2_sub2: '<i class="fa-solid fa-check"></i> Electrocardiograma ($750 MXN)',
    budget_item2_sub3: '<i class="fa-solid fa-check"></i> Evaluación Médica Cardíaca',
    budget_item3_title: "Posoperatorio, Hospitalización y Curaciones",
    budget_item3_tag: "Recuperación (3-4 Semanas)",
    budget_item3_desc: "Hospitalización posterior a cirugía para cuidado del drenaje, tratamiento del dolor, antibióticos y desinflamatorios.",
    budget_item3_sub1: '<i class="fa-solid fa-check"></i> Hospitalización y Cuidado de Drenaje',
    budget_item3_sub2: '<i class="fa-solid fa-check"></i> Control del Dolor y Medicación',
    budget_item3_sub3: '<i class="fa-solid fa-check"></i> Antibióticos, Gasas y Curaciones',
    budget_item4_title: "2ª Cirugía: Segunda Cadena Ganglionar",
    budget_item4_tag: "Etapa 2 · Programada",
    budget_item4_desc: "Segunda mastectomía programada a 1 mes de la primera cirugía para retirar la otra cadena mamaria y erradicar riesgos.",
    budget_item4_sub1: '<i class="fa-solid fa-check"></i> Programada 1 Mes Después',
    budget_item4_sub2: '<i class="fa-solid fa-check"></i> Resección de 2ª Cadena Ganglionar',
    budget_item4_sub3: '<i class="fa-solid fa-check"></i> Consultas de Retiro de Puntos',
    budget_btn_donate: '<i class="fa-brands fa-whatsapp"></i> Apoyar con una Donación',

    // Progress Thermometer Card
    progress_card_title: "📊 Avance de Recaudación",
    progress_card_subtitle: "Termómetro actualizado de donaciones para el tratamiento de Nieve.",
    progress_raised_label: "Recaudado",
    progress_goal_label: "Meta Estimada",
    progress_percent_label: "Progreso alcanzado:",
    progress_note: "Actualizamos este contador periódicamente conforme recibimos las aportaciones. ¡Cada granito de arena cuenta enormemente!",

    // Prevention & Awareness (Spaying)
    prev_badge: '<i class="fa-solid fa-shield-dog"></i> Consejo de Amor y Prevención',
    prev_title: "💡 Esterilizar a tus mascotas salva vidas",
    prev_subtitle: "Queremos que la historia de Nieve sirva también para ayudar y concientizar a más familias con perritas y gatitas:",
    prev_card1_title: "Previene Tumores Mamarios",
    prev_card1_text: "Esterilizar a perritas y gatitas a temprana edad reduce hasta en un <strong>90% a 95%</strong> la probabilidad de que desarrollen tumores en las glándulas mamarias.",
    prev_card2_title: "Elimina Infecciones Mortales",
    prev_card2_text: "Evita completamente la <strong>piometra</strong> (infección uterina grave y de urgencia) y reduce problemas hormonales o quistes ováricos comunes en la adultez.",
    prev_card3_title: "Mayor Esperanza de Vida",
    prev_card3_text: "Las mascotas esterilizadas viven vidas más largas, saludables y libres del estrés del celo. Consulta a tu veterinario de confianza para hacerlo a tiempo.",
    prev_quote: '"La esterilización temprana es el mejor regalo de salud preventiva que podemos darle a nuestros compañeros peludos."',

    // Help & Donation
    help_subtitle: "Tu apoyo hace la diferencia",
    help_title: "¿Cómo puedes apoyar a Nieve?",
    help_desc: "Puedes donar directamente a la cuenta bancaria o enviarnos un mensaje por WhatsApp. Cualquier ayuda es infinitamente valiosa.",
    
    // Bank Transfer Card
    help_bank_badge: '<i class="fa-solid fa-building-columns"></i> Transferencia Directa',
    help_bank_title: "Datos Bancarios para Transferir",
    help_bank_subtitle: "Donación inmediata sin comisiones",
    help_bank_subtitle_desc: "Transfiere directamente para que tu aportación llegue al 100% sin intermediarios ni comisiones:",
    help_bank_institution_label: "Banco / Institución:",
    help_bank_institution_val: "BBVA",
    help_bank_holder_label: "Titular de la Cuenta:",
    help_bank_holder_val: "JOSE ILDEFONSO SALAS EUAN",
    help_bank_card_label: "Tarjeta de Débito:",
    help_bank_card_val: "4152 3141 7343 3080",
    help_bank_concept_label: "Concepto Sugerido:",
    help_bank_concept_val: "Donación Nieve",
    help_bank_btn_copy: '<i class="fa-regular fa-copy"></i> Copiar Tarjeta',
    help_bank_hint: '<i class="fa-solid fa-shield-check"></i> Puedes realizar transferencia SPEI o depósito en ventanilla/tiendas autorizadas.',

    // WhatsApp Contact
    help_wa_title: "Contacto Directo por WhatsApp",
    help_wa_subtitle: "Coordinación y confirmación de donaciones",
    help_wa_text: "Escríbenos para enviarnos el comprobante de tu transferencia, resolver cualquier duda sobre la salud de Nieve o recibir actualizaciones directas:",
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

    // Gallery & Evidence
    gallery_subtitle: "Transparencia y Diagnóstico",
    gallery_title: "Galería de Nieve y Evidencias Médicas",
    gallery_desc: "Consulta las fotos de Nieve, sus radiografías, el estudio de ultrasonido y los presupuestos médicos oficiales del Dr. Novelo.",
    tab_all: "Todos los Archivos",
    tab_photos: "Fotos de Nieve",
    tab_rx: "Radiografías (Tórax Limpio)",
    tab_tumors: "Diagnóstico de Tumores",
    tab_pdfs: "Análisis y Documentos Médicos",

    gallery_cap1: "Nieve sonriendo y feliz ❤️",
    gallery_cap2: "Camino al veterinario, siempre valiente 🚗🩺",
    gallery_cap3: "Siempre atenta y cariñosa 🐶",
    gallery_video_badge: '<i class="fa-solid fa-play"></i> Video en Acción',
    gallery_video_cap: "¡Nieve corriendo con alegría! 🏃‍♀️💨",

    gallery_rx1_cap: "Radiografía de Tórax (Sin Metástasis)",
    gallery_rx2_cap: "Estudio Lateral Torácico de Nieve",
    gallery_rx3_cap: "Radiografía: Masa Tumoral Marcada en Glándula",

    gallery_tumor1_cap: "Valoración Clínica: Tumores Mamarios (Vista 1)",
    gallery_tumor2_cap: "Valoración Clínica: Tumores Mamarios (Vista 2)",

    pdf_card1_title: "Biometría Hemática Completa",
    pdf_card1_desc: "Análisis sanguíneo inicial (Malix Veterinaria).",
    pdf_card2_title: "Perfil Bioquímico Diagnóstico",
    pdf_card2_desc: "Evaluación de función renal, hepática y órganos vitales.",
    pdf_card3_title: "Estudio de Ultrasonido Abdominal",
    pdf_card3_desc: "Ultrasonido abdominal confirmando que riñones, hígado, vesícula y bazo están sin rastro de tumores.",
    presu_card1_title: "Presupuesto Dr. Novelo: Plan Quirúrgico",
    presu_card1_desc: "Indicaciones de cirugías (cadena ganglionar y OVH), hospitalización y posoperatorio por Dr. Novelo (Pet Doctor).",
    presu_card2_title: "Presupuesto Dr. Novelo: Desglose de Costos",
    presu_card2_desc: "Cotización oficial: Ecocardiograma ($1,500), Electrocardiograma ($750) y Cirugía ($4,000).",
    pdf_btn_open: '<i class="fa-solid fa-file-pdf"></i> Ver PDF Oficial',
    presu_btn_open1: '<i class="fa-solid fa-file-image"></i> Ver Presupuesto 1 (Plan)',
    presu_btn_open2: '<i class="fa-solid fa-file-image"></i> Ver Presupuesto 2 (Costos)',

    // Timeline
    timeline_subtitle: "Seguimiento",
    timeline_title: "Actualizaciones de Salud",
    timeline_item3_date: '<i class="fa-solid fa-circle-check"></i> Estudios de Ultrasonido y RX',
    timeline_item3_title: "¡Sin Metástasis y Órganos Sanos!",
    timeline_item3_text: "El ultrasonido y las radiografías confirmaron que no hay metástasis en órganos (riñones, hígado, vesícula y bazo limpios) ni en pulmones. Con este gran resultado, avanzamos con los estudios cardíacos y su primera cirugía.",
    timeline_item2_date: '<i class="fa-solid fa-hospital"></i> Diagnóstico Veterinario',
    timeline_item2_title: "Plan Quirúrgico: Mastectomía en Dos Fases",
    timeline_item2_text: "Debido a la ubicación de los tumores en las glándulas mamarias, el equipo veterinario determinó operar en dos cirugías independientes para no comprometer su piel y permitir una cicatrización segura.",
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
    toast_card_copied: "¡Número de Tarjeta copiado!",
    toast_link_copied: "¡Enlace de la página copiado!",
    btn_copied_state: '<i class="fa-solid fa-check"></i> ¡Copiado!',
    share_title: "Juntos por Nieve 🐾",
    share_msg: "Ayúdanos a apoyar el tratamiento de Nieve, una perrita maltesa de 10 años llena de vida.",
    wa_share_msg: "🐾 Hola, te comparto la campaña de apoyo para Nieve, una perrita maltesa que necesita tratamiento médico: ",
    wa_prefilled_donate: "Hola, vi la página de Nieve y me gustaría apoyar con una donación",
    wa_prefilled_contact: "Hola, vi la página de Nieve y me gustaría apoyar"
  },

  en: {
    // Meta / Doc
    doc_title: "Together for Nieve 🐾 | Medical Fundraiser & Support",
    doc_description: "Fundraising campaign for the medical treatment and recovery of Nieve, a loving 10-year-old Maltese dog full of life.",

    // Header & Nav
    nav_brand: 'Together for <strong>Nieve</strong>',
    nav_story: "Her Story",
    nav_health: "Health & Surgery",
    nav_budget: "Budget & Goal",
    nav_prevention: "Prevention",
    nav_photos: "Photos & Proofs",
    nav_help_btn: "❤️ How to Help",

    // Hero
    hero_badge: '<i class="fa-solid fa-heart-pulse"></i> Medical Support Campaign',
    hero_title: 'Help us save <span class="gradient-text">Nieve</span>',
    hero_subtitle: 'A sweet <strong>10-year-old</strong> Maltese dog, playful, loving, and eager to keep sharing happy moments with us.',
    hero_pill_breed: "Maltese Dog",
    hero_pill_age: "10 Years Old",
    hero_pill_personality: "Playful & Loving",
    hero_btn_donate: '<i class="fa-solid fa-hand-holding-heart"></i> Donate or Support',
    hero_btn_share: '<i class="fa-solid fa-share-nodes"></i> Share',
    hero_badge_floating: "Fighting with love",
    hero_quote: '<i class="fa-solid fa-quote-left"></i> "Every bit of help and every share means the world for her treatment."',

    // Story
    story_subtitle: "Get to know our sweet girl",
    story_title: "The heart of our family",
    story_card1_title: "Playful Spirit",
    story_card1_text: "Despite being 10 years old, Nieve keeps the joy and spark of a puppy. She loves to run, play with her older sister Cosy (even if not by blood), and bring joy to our home.",
    story_card2_title: "Unconditional Love",
    story_card2_text: "She is an extremely gentle and affectionate dog. She always seeks company, loves to cuddle, and gives glances full of gratitude and tenderness.",
    story_card3_title: "A Brave Fighter",
    story_card3_text: "Today she faces a health challenge, but with proper medical treatment and our collective support, we know she will pull through.",

    // Good News Alert
    good_news_title: "🎉 Great News: Medical Tests Confirm NO METASTASIS!",
    good_news_text: "Ultrasound and X-ray examinations confirmed that her lungs and abdominal organs (kidneys, liver, gallbladder, and spleen) are completely clear of tumors. This is wonderful news: the cancer has not spread, giving Nieve a fantastic chance to overcome this and live happily!",

    // Medical Status & Steps
    medical_badge: '<i class="fa-solid fa-circle-exclamation"></i> Medical Condition',
    medical_title: "Nieve's Diagnosis",
    medical_lead: 'Nieve was diagnosed with <strong>tumors in her mammary glands</strong>. After full evaluation by Dr. Novelo (Pet Doctor), it was determined that <strong>her mammary chains must be removed in two separate surgeries</strong> (first chain & OVH, and after 1 month, the second).',
    medical_desc: "Recovery from each surgery will take 3 to 4 weeks. It requires <strong>wound care supplies</strong> (sterile gauze, dressings, recovery cone, antiseptics), post-op hospitalization, pain management, and <strong>follow-up vet visits</strong>:",
    medical_step1_title: "1. Ultrasound & X-Rays Completed",
    medical_step1_badge: '<i class="fa-solid fa-check"></i> No Metastasis!',
    medical_step1_desc: "Abdominal ultrasound and chest X-rays confirm kidneys, liver, gallbladder, spleen, and lungs are clear.",
    medical_step2_title: "2. First Mastectomy + OVH (Dr. Novelo)",
    medical_step2_badge: '<i class="fa-solid fa-heart-pulse"></i> Next Step',
    medical_step2_desc: "First ganglionic chain removal surgery and Ovariohysterectomy (OVH) by Dr. Novelo ($4,000 MXN).",
    medical_step3_title: "3. Second Mastectomy (2nd Ganglionic Chain)",
    medical_step3_desc: "Second scheduled surgery 1 month after the first surgery once healed.",
    medical_step4_title: "4. Post-Op Care, Hospitalization & Recovery",
    medical_step4_desc: "Post-op hospitalization for drain care, pain management, antibiotics, and 3 to 4 weeks of daily dressing changes.",
    medical_card_title: "Direct Medical Support",
    medical_card_badge: "Active Campaign",
    medical_card_desc: "Every contribution goes <strong>100%</strong> toward surgeries, clinical studies, wound care, and Nieve's medications.",
    medical_card_transparency: "We will be sharing all medical prescriptions, veterinary invoices, and receipts with everyone who supports us.",
    medical_card_btn: '<i class="fa-brands fa-whatsapp"></i> Contact to Support',

    // Budget & Breakdown
    budget_subtitle: "Transparency & Next Medical Steps",
    budget_title: "Estimated Budget & Campaign Goal",
    budget_desc: "Below is the breakdown of surgical phases and costs quoted by veterinary specialist MVZ. Enrique Novelo (Pet Doctor):",
    budget_item1_title: "1st Surgery: Ganglionic Chain Mastectomy + OVH",
    budget_item1_tag: "Phase 1 · Priority",
    budget_item1_desc: "Surgical removal of the first ganglionic chain and Ovariohysterectomy (OVH) by Dr. Novelo ($4,000 MXN).",
    budget_item1_sub1: '<i class="fa-solid fa-check"></i> Ganglionic Chain Resection ($4,000 MXN)',
    budget_item1_sub2: '<i class="fa-solid fa-check"></i> Ovariohysterectomy (OVH) Included',
    budget_item1_sub3: '<i class="fa-solid fa-check"></i> Operating Room & Inhaled Anesthesia',
    budget_item2_title: "Pre-Surgical Studies: Cardiac Panel",
    budget_item2_tag: "Pre-Op Testing",
    budget_item2_desc: "Mandatory cardiology assessment to ensure Nieve safely tolerates anesthesia and surgery.",
    budget_item2_sub1: '<i class="fa-solid fa-check"></i> Doppler Echocardiogram ($1,500 MXN)',
    budget_item2_sub2: '<i class="fa-solid fa-check"></i> Electrocardiogram ($750 MXN)',
    budget_item2_sub3: '<i class="fa-solid fa-check"></i> Cardiology Evaluation',
    budget_item3_title: "Post-Op Care, Hospitalization & Dressings",
    budget_item3_tag: "Recovery (3-4 Weeks)",
    budget_item3_desc: "Post-operative hospitalization for drain care, pain management, antibiotics, and anti-inflammatory treatment.",
    budget_item3_sub1: '<i class="fa-solid fa-check"></i> Hospitalization & Drain Care',
    budget_item3_sub2: '<i class="fa-solid fa-check"></i> Pain Control & Medications',
    budget_item3_sub3: '<i class="fa-solid fa-check"></i> Antibiotics & Daily Wound Care',
    budget_item4_title: "2nd Surgery: Second Ganglionic Chain",
    budget_item4_tag: "Phase 2 · Scheduled",
    budget_item4_desc: "Second mastectomy scheduled 1 month after the first surgery to remove the remaining chain and eliminate risks.",
    budget_item4_sub1: '<i class="fa-solid fa-check"></i> Scheduled 1 Month Later',
    budget_item4_sub2: '<i class="fa-solid fa-check"></i> 2nd Ganglionic Chain Resection',
    budget_item4_sub3: '<i class="fa-solid fa-check"></i> Suture Removal Check-ups',
    budget_btn_donate: '<i class="fa-brands fa-whatsapp"></i> Support with a Donation',

    // Progress Thermometer Card
    progress_card_title: "📊 Fundraising Progress",
    progress_card_subtitle: "Updated donation thermometer for Nieve's treatment.",
    progress_raised_label: "Raised",
    progress_goal_label: "Estimated Goal",
    progress_percent_label: "Progress achieved:",
    progress_note: "We update this counter periodically as donations are received. Every single contribution makes a world of difference!",

    // Prevention & Awareness (Spaying)
    prev_badge: '<i class="fa-solid fa-shield-dog"></i> Prevention & Love Tip',
    prev_title: "💡 Spaying Your Pets Saves Lives",
    prev_subtitle: "We hope Nieve's journey also helps spread vital awareness to other pet families:",
    prev_card1_title: "Prevents Mammary Tumors",
    prev_card1_text: "Spaying female dogs and cats at an early age reduces the risk of developing mammary gland tumors by up to <strong>90% to 95%</strong>.",
    prev_card2_title: "Eliminates Deadly Infections",
    prev_card2_text: "Completely eliminates the risk of <strong>pyometra</strong> (severe and life-threatening uterine infection) and prevents hormonal disorders.",
    prev_card3_title: "Longer & Healthier Life",
    prev_card3_text: "Spayed pets live longer, healthier lives free from the physical and hormonal stress of heat cycles. Consult your trusted veterinarian.",
    prev_quote: '"Early spaying is the greatest gift of preventive healthcare we can give our furry companions."',

    // Bank Transfer Card
    help_bank_badge: '<i class="fa-solid fa-building-columns"></i> Direct Transfer',
    help_bank_title: "Bank Details for Transfer",
    help_bank_subtitle: "Immediate donation without fees",
    help_bank_subtitle_desc: "Transfer directly so 100% of your contribution goes to Nieve without fees or intermediaries:",
    help_bank_institution_label: "Bank / Institution:",
    help_bank_institution_val: "BBVA",
    help_bank_holder_label: "Account Holder:",
    help_bank_holder_val: "JOSE ILDEFONSO SALAS EUAN",
    help_bank_card_label: "Debit Card:",
    help_bank_card_val: "4152 3141 7343 3080",
    help_bank_concept_label: "Suggested Concept:",
    help_bank_concept_val: "Donación Nieve",
    help_bank_btn_copy: '<i class="fa-regular fa-copy"></i> Copy Card Number',
    help_bank_hint: '<i class="fa-solid fa-shield-check"></i> Direct bank transfer (SPEI), teller deposit, or convenience store deposit.',

    // WhatsApp Contact
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
    tab_all: "All Files",
    tab_photos: "Nieve's Photos",
    tab_rx: "X-Rays (Clear Chest)",
    tab_tumors: "Tumor Diagnosis",
    tab_pdfs: "Medical Documents & Quotes",

    gallery_cap1: "Nieve smiling and happy ❤️",
    gallery_cap2: "On our way to the vet, always brave 🚗🩺",
    gallery_cap3: "Always attentive and affectionate 🐶",
    gallery_video_badge: '<i class="fa-solid fa-play"></i> Video in Action',
    gallery_video_cap: "Nieve running happily! 🏃‍♀️💨",

    gallery_rx1_cap: "Chest X-Ray (No Metastasis)",
    gallery_rx2_cap: "Lateral Thoracic Study",
    gallery_rx3_cap: "X-Ray: Marked Glandular Mass",

    gallery_tumor1_cap: "Clinical Evaluation: Mammary Tumors (View 1)",
    gallery_tumor2_cap: "Clinical Evaluation: Mammary Tumors (View 2)",

    pdf_card1_title: "Complete Blood Count (CBC)",
    pdf_card1_desc: "Initial blood test (Malix Veterinaria).",
    pdf_card2_title: "Diagnostic Biochemical Profile",
    pdf_card2_desc: "Evaluation of kidney, liver, and vital organ function.",
    pdf_card3_title: "Abdominal Ultrasound Study",
    pdf_card3_desc: "Abdominal ultrasound confirming kidneys, liver, gallbladder, and spleen clear of tumors.",
    presu_card1_title: "Dr. Novelo Budget: Surgical Plan",
    presu_card1_desc: "Surgical indications (ganglionic chain & OVH) and post-op care by Dr. Novelo (Pet Doctor).",
    presu_card2_title: "Dr. Novelo Budget: Cost Breakdown",
    presu_card2_desc: "Official quote: Echocardiogram ($1,500), Electrocardiogram ($750), and Surgery ($4,000).",
    pdf_btn_open: '<i class="fa-solid fa-file-pdf"></i> View Official PDF',
    presu_btn_open1: '<i class="fa-solid fa-file-image"></i> View Quote 1 (Plan)',
    presu_btn_open2: '<i class="fa-solid fa-file-image"></i> View Quote 2 (Costs)',

    // Timeline
    timeline_subtitle: "Updates & Follow-up",
    timeline_title: "Health Updates",
    timeline_item3_date: '<i class="fa-solid fa-circle-check"></i> Ultrasound & X-Rays Done',
    timeline_item3_title: "No Metastasis & Healthy Organs!",
    timeline_item3_text: "Ultrasound and X-rays confirmed no metastasis in organs (kidneys, liver, gallbladder, and spleen clear) or lungs. With this milestone, we proceed with cardiac studies and her first surgery.",
    timeline_item2_date: '<i class="fa-solid fa-hospital"></i> Veterinary Diagnosis',
    timeline_item2_title: "Surgical Plan: Two-Phase Mastectomy",
    timeline_item2_text: "Due to the location of tumors in her mammary glands, veterinarians determined to perform two separate surgeries to protect skin elasticity and promote safe healing.",
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
// RENDER FUNDRAISING PROGRESS & THERMOMETER
// ==========================================================================
function formatCurrency(amount) {
  return `${fundraisingConfig.currencySymbol}${Number(amount).toLocaleString('es-MX')} ${fundraisingConfig.currency}`;
}

function renderFundraisingProgress() {
  const goalEl = document.getElementById('fund-goal-display');
  const raisedEl = document.getElementById('fund-raised-display');
  const barEl = document.getElementById('fund-progress-bar');
  const badgeEl = document.getElementById('fund-percent-badge');

  const goal = fundraisingConfig.goalAmount || 15000;
  const raised = fundraisingConfig.raisedAmount || 0;
  const percent = Math.min(100, Math.round((raised / goal) * 100));

  if (goalEl) goalEl.textContent = formatCurrency(goal);
  if (raisedEl) raisedEl.textContent = formatCurrency(raised);
  if (badgeEl) badgeEl.textContent = `${percent}%`;
  
  if (barEl) {
    // Delay slightly for CSS transition animation
    setTimeout(() => {
      barEl.style.width = `${percent}%`;
    }, 150);
  }
}

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

  // Update thermometer display
  renderFundraisingProgress();

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

  // Render fundraising progress
  renderFundraisingProgress();

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

// Copy bank card number helper
function copyBankCard(cardNumber, buttonElement) {
  // Remove spaces for cleaner clipboard copy or preserve format
  const cleaned = cardNumber.replace(/\s+/g, '');
  navigator.clipboard.writeText(cleaned).then(() => {
    showToast(translations[currentLang].toast_card_copied || "¡Tarjeta copiada al portapapeles!");

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
    console.error('Error al copiar tarjeta: ', err);
  });
}

// Gallery Filtering Logic
function filterGallery(category, tabBtn) {
  // Update active tab styling
  const tabButtons = document.querySelectorAll('.gallery-tab-btn');
  tabButtons.forEach(btn => btn.classList.remove('active'));
  if (tabBtn) tabBtn.classList.add('active');

  // Show/Hide items based on data-category
  const items = document.querySelectorAll('.gallery-grid .gallery-item, .gallery-grid .pdf-card-item');
  items.forEach(item => {
    const itemCat = item.getAttribute('data-category');
    if (category === 'all' || itemCat === category) {
      item.style.display = '';
    } else {
      item.style.display = 'none';
    }
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

