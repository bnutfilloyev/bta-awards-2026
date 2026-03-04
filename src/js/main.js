/**
 * BTA Awards 2026 - Main JavaScript
 * Modern ES6+ with security features
 */

import Lenis from 'lenis';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './i18n.js';
import './modals.js';

gsap.registerPlugin(ScrollTrigger);

// ========================================
// Security Utilities
// ========================================
const Security = {
  // Generate CSRF token
  generateToken() {
    const array = new Uint8Array(32);
    crypto.getRandomValues(array);
    return Array.from(array, byte => byte.toString(16).padStart(2, '0')).join('');
  },

  // Sanitize HTML
  sanitizeHTML(str) {
    const div = document.createElement('div');
    div.textContent = str;
    return div.innerHTML;
  },

  // Validate email
  validateEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  },

  // Validate phone
  validatePhone(phone) {
    return /^[+]?[(]?[0-9]{3}[)]?[-\s.]?[0-9]{3}[-\s.]?[0-9]{4,6}$/.test(phone);
  }
};

// ========================================
// Initialize CSRF Token
// ========================================
const csrfMeta = document.querySelector('meta[name="csrf-token"]');
if (csrfMeta) {
  csrfMeta.content = Security.generateToken();
}

// ========================================
// Smooth Scroll (Lenis)
// ========================================
const lenis = new Lenis({
  duration: 1.2,
  easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
  smoothWheel: true,
});

function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}
requestAnimationFrame(raf);

// ========================================
// Scroll Progress
// ========================================
const scrollProgress = document.getElementById('scroll-progress');
window.addEventListener('scroll', () => {
  const scrollTop = window.scrollY;
  const docHeight = document.documentElement.scrollHeight - window.innerHeight;
  const progress = (scrollTop / docHeight) * 100;
  scrollProgress.style.width = `${progress}%`;
}, { passive: true });

// ========================================
// Navigation
// ========================================
const navbar = document.getElementById('navbar');
let lastScroll = 0;

window.addEventListener('scroll', () => {
  const currentScroll = window.scrollY;
  
  if (currentScroll > 100) {
    navbar.classList.add('bg-dark-900/95', 'backdrop-blur-xl');
  } else {
    navbar.classList.remove('bg-dark-900/95', 'backdrop-blur-xl');
  }
  
  lastScroll = currentScroll;
}, { passive: true });

// Mobile Menu
const mobileMenuBtn = document.getElementById('mobile-menu-btn');
const mobileMenuClose = document.getElementById('mobile-menu-close');
const mobileMenu = document.getElementById('mobile-menu');
const mobileLinks = document.querySelectorAll('.mobile-link');

function toggleMobileMenu(show) {
  if (show) {
    mobileMenu.classList.add('active');
    document.body.style.overflow = 'hidden';
  } else {
    mobileMenu.classList.remove('active');
    document.body.style.overflow = '';
  }
}

mobileMenuBtn?.addEventListener('click', () => toggleMobileMenu(true));
mobileMenuClose?.addEventListener('click', () => toggleMobileMenu(false));
mobileLinks.forEach(link => {
  link.addEventListener('click', () => toggleMobileMenu(false));
});

// Close on escape
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') toggleMobileMenu(false);
});

// ========================================
// Particle System
// ========================================
class ParticleSystem {
  constructor(canvasId) {
    this.canvas = document.getElementById(canvasId);
    if (!this.canvas) return;
    
    this.ctx = this.canvas.getContext('2d');
    this.particles = [];
    this.maxParticles = window.innerWidth < 768 ? 25 : 50;
    this.isActive = true;
    
    this.init();
  }
  
  init() {
    this.resize();
    window.addEventListener('resize', () => this.resize(), { passive: true });
    
    for (let i = 0; i < this.maxParticles; i++) {
      this.particles.push(this.createParticle());
    }
    
    this.animate();
  }
  
  resize() {
    this.canvas.width = window.innerWidth;
    this.canvas.height = window.innerHeight;
  }
  
  createParticle() {
    return {
      x: Math.random() * this.canvas.width,
      y: Math.random() * this.canvas.height,
      size: Math.random() * 2 + 0.5,
      speedX: (Math.random() - 0.5) * 0.3,
      speedY: (Math.random() - 0.5) * 0.3,
      opacity: Math.random() * 0.5 + 0.1
    };
  }
  
  animate() {
    if (!this.isActive) return;
    
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    
    this.particles.forEach(p => {
      p.x += p.speedX;
      p.y += p.speedY;
      
      if (p.x < 0) p.x = this.canvas.width;
      if (p.x > this.canvas.width) p.x = 0;
      if (p.y < 0) p.y = this.canvas.height;
      if (p.y > this.canvas.height) p.y = 0;
      
      this.ctx.beginPath();
      this.ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
      this.ctx.fillStyle = `rgba(201, 169, 98, ${p.opacity})`;
      this.ctx.fill();
    });
    
    requestAnimationFrame(() => this.animate());
  }
}

// ========================================
// Countdown Timer
// ========================================
class CountdownTimer {
  constructor(targetDate, elements) {
    this.targetDate = new Date(targetDate).getTime();
    this.elements = elements;
    this.init();
  }
  
  init() {
    this.update();
    setInterval(() => this.update(), 1000);
  }
  
  update() {
    const now = new Date().getTime();
    const distance = this.targetDate - now;
    
    if (distance < 0) {
      Object.values(this.elements).forEach(el => {
        if (el) el.textContent = '00';
      });
      return;
    }
    
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
    if (this.elements.days) this.elements.days.textContent = String(days).padStart(2, '0');
    if (this.elements.hours) this.elements.hours.textContent = String(hours).padStart(2, '0');
    if (this.elements.minutes) this.elements.minutes.textContent = String(minutes).padStart(2, '0');
    if (this.elements.seconds) this.elements.seconds.textContent = String(seconds).padStart(2, '0');
  }
}

// Initialize countdowns
document.addEventListener('DOMContentLoaded', () => {
  // March 1, 2026
  new CountdownTimer('2026-03-01T00:00:00', {
    days: document.querySelector('.countdown-days'),
    hours: document.querySelector('.countdown-hours'),
    minutes: document.querySelector('.countdown-minutes'),
    seconds: document.querySelector('.countdown-seconds')
  });
  
  // March 20, 2026
  new CountdownTimer('2026-03-20T00:00:00', {
    days: document.querySelector('.countdown-days-2'),
    hours: document.querySelector('.countdown-hours-2'),
    minutes: document.querySelector('.countdown-minutes-2'),
    seconds: document.querySelector('.countdown-seconds-2')
  });
  
  // April 1, 2026
  new CountdownTimer('2026-04-01T00:00:00', {
    days: document.querySelector('.countdown-days-3'),
    hours: document.querySelector('.countdown-hours-3'),
    minutes: document.querySelector('.countdown-minutes-3'),
    seconds: document.querySelector('.countdown-seconds-3')
  });
});

// ========================================
// Loader Hide Function
// ========================================
function hideLoader() {
  const loader = document.getElementById('loader');
  if (!loader) return;
  
  // CSS fallback
  loader.style.opacity = '0';
  loader.style.transition = 'opacity 0.5s ease';
  
  setTimeout(() => {
    loader.style.display = 'none';
  }, 500);
}

// ========================================
// GSAP Animations
// ========================================
// Loader
document.addEventListener('DOMContentLoaded', () => {
  const loader = document.getElementById('loader');
  const loaderBar = document.getElementById('loader-bar');
  
  // Fallback: always hide loader after 3 seconds max
  const fallbackTimeout = setTimeout(hideLoader, 3000);
  
  try {
    // Animate loader bar
    if (loaderBar && gsap) {
      gsap.to(loaderBar, {
        width: '100%',
        duration: 1.5,
        ease: 'power2.inOut',
        onComplete: () => {
          clearTimeout(fallbackTimeout);
          if (gsap) {
            gsap.to(loader, {
              opacity: 0,
              duration: 0.5,
              onComplete: () => {
                if (loader) loader.style.display = 'none';
              }
            });
          } else {
            hideLoader();
          }
        }
      });
    } else {
      // No GSAP or loader bar, hide immediately
      clearTimeout(fallbackTimeout);
      hideLoader();
    }
  } catch (error) {
    console.error('Loader animation error:', error);
    clearTimeout(fallbackTimeout);
    hideLoader();
  }
});

// Reveal animations
const revealElements = document.querySelectorAll('.reveal');
revealElements.forEach((el, i) => {
  gsap.fromTo(el, 
    { opacity: 0, y: 30 },
    {
      opacity: 1,
      y: 0,
      duration: 0.8,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: el,
        start: 'top 85%',
        toggleActions: 'play none none none'
      },
      delay: el.classList.contains('animate-delay-100') ? 0.1 :
              el.classList.contains('animate-delay-200') ? 0.2 :
              el.classList.contains('animate-delay-300') ? 0.3 : 0
    }
  );
});

// ========================================
// Modal System
// ========================================
window.openModal = function(type) {
  console.log('Opening modal:', type);
  // Modal implementation would go here
};

// ========================================
// Telegram Integration
// ========================================
const TelegramAPI = {
  async sendForm(formType, formData) {
    const csrfToken = document.querySelector('meta[name="csrf-token"]')?.content;
    
    try {
      const response = await fetch('/api/telegram', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'X-CSRF-Token': csrfToken
        },
        body: JSON.stringify({
          formType,
          data: formData
        })
      });
      
      if (!response.ok) throw new Error('Failed to send');
      return await response.json();
    } catch (error) {
      console.error('Telegram API Error:', error);
      throw error;
    }
  }
};

// ========================================
// Form Handling with Security
// ========================================
function handleFormSubmit(form, formType) {
  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    
    const formData = new FormData(form);
    const data = {};
    
    formData.forEach((value, key) => {
      data[key] = Security.sanitizeHTML(value);
    });
    
    // Validation
    if (data.email && !Security.validateEmail(data.email)) {
      alert('Email noto\'g\'ri formatda');
      return;
    }
    
    if (data.phone && !Security.validatePhone(data.phone)) {
      alert('Telefon noto\'g\'ri formatda');
      return;
    }
    
    try {
      await TelegramAPI.sendForm(formType, data);
      form.reset();
      alert('Muvaffaqiyatli yuborildi!');
    } catch (error) {
      alert('Xatolik yuz berdi. Qayta urinib ko\'ring.');
    }
  });
}

// ========================================
// Ambassador Calculator
// ========================================
class AmbassadorCalculator {
  constructor() {
    this.silverInput = document.getElementById('calc-silver');
    this.goldInput = document.getElementById('calc-gold');
    this.proInput = document.getElementById('calc-pro');
    this.vipInput = document.getElementById('calc-vip');
    this.commissionEl = document.getElementById('calc-commission');
    this.levelEl = document.getElementById('calc-level');
    this.benefitsEl = document.getElementById('calc-benefits');
    
    if (!this.silverInput) return;
    
    this.init();
  }
  
  init() {
    const inputs = [this.silverInput, this.goldInput, this.proInput, this.vipInput];
    inputs.forEach(input => {
      input?.addEventListener('input', () => this.calculate());
    });
    this.calculate();
  }
  
  calculate() {
    const silver = parseInt(this.silverInput?.value) || 0;
    const gold = parseInt(this.goldInput?.value) || 0;
    const pro = parseInt(this.proInput?.value) || 0;
    const vip = parseInt(this.vipInput?.value) || 0;
    
    const total = silver + gold + pro + vip;
    const commission = silver * 50000 + gold * 150000 + pro * 300000 + vip * 500000;
    
    let level = "Boshlang'ich";
    let benefits = "5 ta ishtirokchi olib kelsangiz → Ambassador + Silver bepul";
    
    if (total >= 10 && gold >= 10 && pro >= 2 && vip >= 1) {
      level = "Super Ambassador";
      benefits = "🎉 Statuetka + Sovg'a + Taqdirlash! (10+ Gold, 2+ Pro, 1+ VIP)";
    } else if (total >= 10 && gold >= 10 && pro >= 2) {
      level = "Pro Ambassador";
      benefits = "⭐ PRO TARIFI BEPUL! (10+ Gold va 2+ Pro)";
    } else if (total >= 10) {
      level = "Top Ambassador";
      benefits = "🥇 Gold tarifi bepul! (10+ ishtirokchi)";
    } else if (total >= 5) {
      level = "Ambassador";
      benefits = "🎁 Silver tarifi bepul! (5+ ishtirokchi)";
    }
    
    if (this.commissionEl) {
      this.commissionEl.textContent = `${commission.toLocaleString()} so'm`;
    }
    if (this.levelEl) {
      this.levelEl.textContent = level;
    }
    if (this.benefitsEl) {
      this.benefitsEl.textContent = benefits;
    }
  }
}

// ========================================
// Back to Top
// ========================================
function initBackToTop() {
  const btn = document.getElementById('back-to-top');
  if (!btn) return;
  
  window.addEventListener('scroll', () => {
    if (window.pageYOffset > 500) {
      btn.classList.remove('opacity-0', 'invisible');
      btn.classList.add('opacity-100', 'visible');
    } else {
      btn.classList.add('opacity-0', 'invisible');
      btn.classList.remove('opacity-100', 'visible');
    }
  }, { passive: true });
  
  btn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}

// ========================================
// Initialize
// ========================================
document.addEventListener('DOMContentLoaded', () => {
  // Initialize particles
  new ParticleSystem('particles');
  
  // Initialize calculator
  new AmbassadorCalculator();
  
  // Initialize back to top
  initBackToTop();
  
  // Initialize forms
  document.querySelectorAll('form').forEach(form => {
    const formType = form.dataset.type;
    if (formType) handleFormSubmit(form, formType);
  });
});

// ========================================
// Export for global access
// ========================================
window.Security = Security;
window.TelegramAPI = TelegramAPI;
