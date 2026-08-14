// Set current year dynamically
document.addEventListener('DOMContentLoaded', () => {
  const currentYearSpan = document.getElementById('current-year');
  if (currentYearSpan) {
    currentYearSpan.textContent = new Date().getFullYear();
  }

  // Hero Share Button (Native Web Share API if supported, or fallback to copy link)
  const heroShareBtn = document.getElementById('btn-share-hero');
  if (heroShareBtn) {
    heroShareBtn.addEventListener('click', () => {
      if (navigator.share) {
        navigator.share({
          title: 'Juntos por Nieve 🐾',
          text: 'Ayúdanos a apoyar el tratamiento de Nieve, una perrita maltesa de 9 años llena de vida.',
          url: window.location.href,
        }).catch(() => {
          // Fallback
        });
      } else {
        copyPageLink(heroShareBtn);
      }
    });
  }
});

// Toast notification helper
function showToast(message = '¡Copiado al portapapeles!') {
  const toast = document.getElementById('toast');
  if (!toast) return;
  
  toast.textContent = message;
  toast.classList.add('show');
  
  setTimeout(() => {
    toast.classList.remove('show');
  }, 3000);
}

// Copy phone number helper
function copyPhoneNumber(phoneNumber, buttonElement) {
  navigator.clipboard.writeText(phoneNumber).then(() => {
    showToast('¡Número de WhatsApp copiado!');

    if (buttonElement) {
      const originalHtml = buttonElement.innerHTML;
      buttonElement.innerHTML = '<i class="fa-solid fa-check"></i> ¡Copiado!';
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
    showToast('¡Enlace de la página copiado!');
    
    if (buttonElement) {
      const originalText = buttonElement.innerHTML;
      buttonElement.innerHTML = '<i class="fa-solid fa-check"></i> ¡Copiado!';
      setTimeout(() => {
        buttonElement.innerHTML = originalText;
      }, 2000);
    }
  });
}

// WhatsApp Share
function shareOnWhatsApp() {
  const text = encodeURIComponent('🐾 Hola, te comparto la campaña de apoyo para Nieve, una perrita maltesa que necesita tratamiento médico: ' + window.location.href);
  window.open(`https://api.whatsapp.com/send?text=${text}`, '_blank');
}

// Facebook Share
function shareOnFacebook() {
  const url = encodeURIComponent(window.location.href);
  window.open(`https://www.facebook.com/sharer/sharer.php?u=${url}`, '_blank', 'width=600,height=400');
}
