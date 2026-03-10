/**
 * BTA Awards 2026 - Modal System
 */

import { translations } from './i18n.js';

// Modal System
class ModalSystem {
  constructor() {
    this.overlay = document.getElementById('modal-overlay');
    this.activeModal = null;
    this.init();
  }

  init() {
    // Close on overlay click
    this.overlay?.addEventListener('click', () => this.closeAll());
    
    // Close on escape key
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') this.closeAll();
    });

    // Setup forms
    this.setupRegisterForm();
    this.setupContactForm();
  }

  open(modalName) {
    const modal = document.getElementById(`modal-${modalName}`);
    if (!modal) return;

    // Show overlay
    this.overlay?.classList.remove('opacity-0', 'pointer-events-none');
    this.overlay?.classList.add('opacity-100');

    // Show modal
    modal.classList.remove('opacity-0', 'pointer-events-none');
    modal.classList.add('opacity-100');
    
    // Scale animation
    const content = modal.querySelector('div');
    content?.classList.remove('scale-95');
    content?.classList.add('scale-100');

    this.activeModal = modal;
    document.body.style.overflow = 'hidden';

    // Focus first input
    setTimeout(() => {
      modal.querySelector('input')?.focus();
    }, 100);
  }

  close(modalName) {
    const modal = document.getElementById(`modal-${modalName}`);
    if (!modal) return;

    // Hide modal
    modal.classList.add('opacity-0', 'pointer-events-none');
    modal.classList.remove('opacity-100');
    
    // Scale animation
    const content = modal.querySelector('div');
    content?.classList.add('scale-95');
    content?.classList.remove('scale-100');

    // Hide overlay if no active modals
    setTimeout(() => {
      if (!document.querySelector('[id^="modal-"].opacity-100')) {
        this.overlay?.classList.add('opacity-0', 'pointer-events-none');
        this.overlay?.classList.remove('opacity-100');
        document.body.style.overflow = '';
      }
    }, 300);

    this.activeModal = null;
  }

  closeAll() {
    document.querySelectorAll('[id^="modal-"]').forEach(modal => {
      modal.classList.add('opacity-0', 'pointer-events-none');
      modal.classList.remove('opacity-100');
    });
    this.overlay?.classList.add('opacity-0', 'pointer-events-none');
    document.body.style.overflow = '';
    this.activeModal = null;
  }

  setupRegisterForm() {
    const form = document.getElementById('register-form');
    if (!form) return;

    form.addEventListener('submit', async (e) => {
      e.preventDefault();
      
      const btn = form.querySelector('button[type="submit"]');
      const originalText = btn.textContent;
      btn.textContent = 'Yuborilmoqda...';
      btn.disabled = true;

      const formData = {
        firstname: form.firstname?.value || '',
        lastname: form.lastname?.value || '',
        phone: form.phone?.value || '',
        telegram: form.telegram?.value || '',
        field: form.field?.value || '',
        company: form.company?.value || ''
      };

      try {
        // Send to Telegram
        const response = await fetch('/api/telegram', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'X-CSRF-Token': document.querySelector('meta[name="csrf-token"]')?.content || ''
          },
          body: JSON.stringify({
            formType: 'registration',
            data: formData
          })
        });

        if (response.ok) {
          // Meta Pixel Lead tracking
          if (typeof fbq !== 'undefined') {
            fbq('track', 'Lead');
          }
          
          btn.textContent = '✓ Muvaffaqiyatli!';
          btn.classList.add('bg-green-500');
          
          setTimeout(() => {
            this.close('register');
            form.reset();
            btn.textContent = originalText;
            btn.classList.remove('bg-green-500');
            btn.disabled = false;
            
            // Show toast
            if (window.toast) {
              window.toast.success('Ro\'yxatdan o\'tish muvaffaqiyatli yakunlandi!');
            }
          }, 1500);
        } else {
          throw new Error('Failed to send');
        }
      } catch (error) {
        btn.textContent = 'Xatolik!';
        btn.classList.add('bg-red-500');
        
        setTimeout(() => {
          btn.textContent = originalText;
          btn.classList.remove('bg-red-500');
          btn.disabled = false;
          
          if (window.toast) {
            window.toast.error('Xatolik yuz berdi. Qayta urinib ko\'ring.');
          }
        }, 1500);
      }
    });
  }

  setupContactForm() {
    const form = document.getElementById('contact-form');
    if (!form) return;

    form.addEventListener('submit', async (e) => {
      e.preventDefault();
      
      const btn = form.querySelector('button[type="submit"]');
      const originalText = btn.textContent;
      btn.textContent = 'Yuborilmoqda...';
      btn.disabled = true;

      const formData = {
        name: form.name?.value || '',
        phone: form.phone?.value || '',
        field: form.field?.value || '',
        message: form.message?.value || ''
      };

      try {
        const response = await fetch('/api/telegram', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'X-CSRF-Token': document.querySelector('meta[name="csrf-token"]')?.content || ''
          },
          body: JSON.stringify({
            formType: 'contact',
            data: formData
          })
        });

        if (response.ok) {
          btn.textContent = '✓ Yuborildi!';
          btn.classList.add('bg-green-500');
          
          setTimeout(() => {
            form.reset();
            btn.textContent = originalText;
            btn.classList.remove('bg-green-500');
            btn.disabled = false;
            
            if (window.toast) {
              window.toast.success('Xabaringiz yuborildi!');
            }
          }, 1500);
        } else {
          throw new Error('Failed to send');
        }
      } catch (error) {
        btn.textContent = 'Xatolik!';
        btn.classList.add('bg-red-500');
        
        setTimeout(() => {
          btn.textContent = originalText;
          btn.classList.remove('bg-red-500');
          btn.disabled = false;
          
          if (window.toast) {
            window.toast.error('Xatolik yuz berdi. Qayta urinib ko\'ring.');
          }
        }, 1500);
      }
    });
  }
}

// Gallery Modal
class GalleryModal {
  constructor() {
    this.modal = document.getElementById('modal-gallery');
    this.img = document.getElementById('gallery-modal-img');
    this.yearEl = document.getElementById('gallery-modal-year');
    this.descEl = document.getElementById('gallery-modal-desc');
    
    // Gallery data
    this.galleryData = {
      2025: {
        img: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=1200&h=675&fit=crop',
        descKey: 'gallery.years.2025'
      },
      2024: {
        img: 'https://images.unsplash.com/photo-1475721027785-f74eccf877e2?w=1200&h=675&fit=crop',
        descKey: 'gallery.years.2024'
      },
      2023: {
        img: 'https://images.unsplash.com/photo-1515187029135-18ee286d815b?w=1200&h=675&fit=crop',
        descKey: 'gallery.years.2023'
      },
      2022: {
        img: 'https://images.unsplash.com/photo-1505373877841-8d25f7d46678?w=1200&h=675&fit=crop',
        descKey: 'gallery.years.2022'
      },
      2021: {
        img: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=1200&h=675&fit=crop',
        descKey: 'gallery.years.2021'
      },
      2020: {
        img: 'https://images.unsplash.com/photo-1429962714451-bb934ecdc4ec?w=1200&h=675&fit=crop',
        descKey: 'gallery.years.2020'
      },
      2019: {
        img: 'https://images.unsplash.com/photo-1511578314322-379afb476865?w=1200&h=675&fit=crop',
        descKey: 'gallery.years.2019'
      },
      2018: {
        img: 'https://images.unsplash.com/photo-1478146896981-b80c46346d5b?w=1200&h=675&fit=crop',
        descKey: 'gallery.years.2018'
      }
    };
  }

  open(year) {
    const data = this.galleryData[year];
    if (!data) return;

    // Get current language description
    const lang = window.i18n?.currentLang || 'uz';
    const desc = translations[lang];
    let description = '';
    
    // Navigate nested object
    const keys = data.descKey.split('.');
    let current = desc;
    for (const key of keys) {
      current = current?.[key];
    }
    description = current || '';

    this.img.src = data.img;
    this.yearEl.textContent = year;
    this.descEl.textContent = description;

    // Show modal
    const overlay = document.getElementById('modal-overlay');
    overlay?.classList.remove('opacity-0', 'pointer-events-none');
    overlay?.classList.add('opacity-100');

    this.modal?.classList.remove('opacity-0', 'pointer-events-none');
    this.modal?.classList.add('opacity-100');

    const content = this.modal?.querySelector('div');
    content?.classList.remove('scale-95');
    content?.classList.add('scale-100');

    document.body.style.overflow = 'hidden';
  }

  close() {
    const overlay = document.getElementById('modal-overlay');
    
    this.modal?.classList.add('opacity-0', 'pointer-events-none');
    this.modal?.classList.remove('opacity-100');

    const content = this.modal?.querySelector('div');
    content?.classList.add('scale-95');
    content?.classList.remove('scale-100');

    setTimeout(() => {
      overlay?.classList.add('opacity-0', 'pointer-events-none');
      document.body.style.overflow = '';
    }, 300);
  }
}

// Initialize
document.addEventListener('DOMContentLoaded', () => {
  window.modalSystem = new ModalSystem();
  window.galleryModal = new GalleryModal();
});

export { ModalSystem, GalleryModal };
