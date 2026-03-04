/**
 * BTA Awards 2026 - UI/UX JavaScript
 * All modern UI improvements
 */

// ========================================
// 1. Dark/Light Mode Toggle
// ========================================
class ThemeManager {
  constructor() {
    this.theme = localStorage.getItem('theme') || 'dark';
    this.toggleBtn = null;
    this.init();
  }

  init() {
    this.createToggleButton();
    this.applyTheme();
    this.listenToSystemChanges();
  }

  createToggleButton() {
    const btn = document.createElement('button');
    btn.className = 'theme-toggle';
    btn.setAttribute('aria-label', 'Toggle theme');
    btn.innerHTML = this.getIcon();
    document.body.appendChild(btn);
    this.toggleBtn = btn;

    btn.addEventListener('click', () => this.toggle());
  }

  getIcon() {
    return this.theme === 'dark' 
      ? `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
           <circle cx="12" cy="12" r="5"/>
           <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"/>
         </svg>`
      : `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
           <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
         </svg>`;
  }

  toggle() {
    this.theme = this.theme === 'dark' ? 'light' : 'dark';
    this.applyTheme();
    localStorage.setItem('theme', this.theme);
    if (this.toggleBtn) {
      this.toggleBtn.innerHTML = this.getIcon();
    }
  }

  applyTheme() {
    document.documentElement.setAttribute('data-theme', this.theme);
    document.body.classList.toggle('light-mode', this.theme === 'light');
  }

  listenToSystemChanges() {
    if (!localStorage.getItem('theme')) {
      const mediaQuery = window.matchMedia('(prefers-color-scheme: light)');
      mediaQuery.addEventListener('change', (e) => {
        this.theme = e.matches ? 'light' : 'dark';
        this.applyTheme();
      });
    }
  }
}

// ========================================
// 2. Toast Notification System
// ========================================
class ToastSystem {
  constructor() {
    this.container = null;
    this.toasts = [];
    this.init();
  }

  init() {
    this.container = document.createElement('div');
    this.container.className = 'toast-container';
    document.body.appendChild(this.container);
  }

  show(message, type = 'info', duration = 3000) {
    const toast = document.createElement('div');
    toast.className = `toast toast-${type}`;
    toast.innerHTML = `
      <svg class="w-5 h-5 flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        ${this.getIcon(type)}
      </svg>
      <span class="flex-1 text-sm font-medium">${message}</span>
      <button class="opacity-60 hover:opacity-100 transition-opacity" aria-label="Close">
        <svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <path d="M18 6L6 18M6 6l12 12"/>
        </svg>
      </button>
      <div class="toast-progress"></div>
    `;

    this.container.appendChild(toast);
    
    // Trigger animation
    requestAnimationFrame(() => toast.classList.add('show'));

    // Close button
    toast.querySelector('button').addEventListener('click', () => {
      this.remove(toast);
    });

    // Auto remove
    setTimeout(() => this.remove(toast), duration);

    this.toasts.push(toast);
    return toast;
  }

  getIcon(type) {
    const icons = {
      success: '<path d="M20 6L9 17l-5-5"/>',
      error: '<circle cx="12" cy="12" r="10"/><path d="M15 9l-6 6M9 9l6 6"/>',
      warning: '<path d="M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z"/><path d="M12 9v4"/><path d="M12 17h.01"/>',
      info: '<circle cx="12" cy="12" r="10"/><path d="M12 16v-4"/><path d="M12 8h.01"/>'
    };
    return icons[type] || icons.info;
  }

  remove(toast) {
    toast.classList.remove('show');
    setTimeout(() => {
      toast.remove();
      this.toasts = this.toasts.filter(t => t !== toast);
    }, 300);
  }

  success(message, duration) { return this.show(message, 'success', duration); }
  error(message, duration) { return this.show(message, 'error', duration); }
  warning(message, duration) { return this.show(message, 'warning', duration); }
  info(message, duration) { return this.show(message, 'info', duration); }
}

// ========================================
// 3. Skeleton Loading System
// ========================================
class SkeletonLoader {
  static show(container, template = 'card') {
    const skeleton = document.createElement('div');
    skeleton.className = `skeleton skeleton-${template}`;
    skeleton.dataset.skeleton = 'true';
    
    if (template === 'list') {
      skeleton.innerHTML = Array(5).fill('<div class="skeleton skeleton-text mb-3"></div>').join('');
    }
    
    container.appendChild(skeleton);
    return skeleton;
  }

  static hide(container) {
    const skeletons = container.querySelectorAll('[data-skeleton]');
    skeletons.forEach(s => {
      s.style.opacity = '0';
      setTimeout(() => s.remove(), 300);
    });
  }

  static hideAll() {
    document.querySelectorAll('[data-skeleton]').forEach(s => s.remove());
  }
}

// ========================================
// 4. Bottom Mobile Navigation
// ========================================
class BottomNav {
  constructor() {
    this.nav = null;
    this.currentSection = '';
    this.init();
  }

  init() {
    if (window.innerWidth >= 1024) return;
    
    this.createNav();
    this.setupScrollSpy();
    this.highlightCurrent();
  }

  createNav() {
    this.nav = document.createElement('nav');
    this.nav.className = 'bottom-nav';
    this.nav.innerHTML = `
      <div class="bottom-nav-inner">
        <a href="#" class="bottom-nav-item active" data-section="hero">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z"/>
            <path d="M9 22V12h6v10"/>
          </svg>
          <span>Bosh sahifa</span>
        </a>
        <a href="#pricing" class="bottom-nav-item" data-section="pricing">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
          </svg>
          <span>Tariflar</span>
        </a>
        <a href="#gallery" class="bottom-nav-item" data-section="gallery">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <rect x="3" y="3" width="18" height="18" rx="2" ry="2"/>
            <circle cx="8.5" cy="8.5" r="1.5"/>
            <path d="M21 15l-5-5L5 21"/>
          </svg>
          <span>Galereya</span>
        </a>
        <a href="#contact" class="bottom-nav-item" data-section="contact">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"/>
          </svg>
          <span>Aloqa</span>
        </a>
      </div>
    `;
    
    document.body.appendChild(this.nav);
    document.body.classList.add('pb-20');

    // Click handlers
    this.nav.querySelectorAll('.bottom-nav-item').forEach(item => {
      item.addEventListener('click', (e) => {
        e.preventDefault();
        const href = item.getAttribute('href');
        if (href && href !== '#') {
          document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
        } else {
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }
      });
    });
  }

  setupScrollSpy() {
    const sections = ['hero', 'pricing', 'gallery', 'contact'];
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          this.highlightSection(entry.target.id);
        }
      });
    }, { threshold: 0.3 });

    sections.forEach(id => {
      const section = document.getElementById(id);
      if (section) observer.observe(section);
    });
  }

  highlightSection(id) {
    this.nav?.querySelectorAll('.bottom-nav-item').forEach(item => {
      item.classList.toggle('active', item.dataset.section === id);
    });
  }

  highlightCurrent() {
    const scrollPos = window.scrollY;
    // Default to hero
    if (scrollPos < 100) {
      this.highlightSection('hero');
    }
  }
}

// ========================================
// 5. Image Lazy Loading with Blur
// ========================================
class LazyImageLoader {
  constructor() {
    this.images = [];
    this.init();
  }

  init() {
    // Find all images with data-src
    document.querySelectorAll('img[data-src]').forEach(img => {
      this.setupImage(img);
    });

    // Use Intersection Observer
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          this.loadImage(entry.target);
          observer.unobserve(entry.target);
        }
      });
    }, { rootMargin: '50px' });

    document.querySelectorAll('.blur-load').forEach(container => {
      observer.observe(container);
    });
  }

  setupImage(img) {
    const container = img.closest('.blur-load') || img.parentElement;
    container.classList.add('blur-load');
  }

  loadImage(container) {
    const img = container.querySelector('img[data-src]') || container.querySelector('img');
    if (!img) return;

    const src = img.dataset.src;
    if (!src) {
      container.classList.add('loaded');
      return;
    }

    // Create temp image to preload
    const tempImg = new Image();
    tempImg.src = src;
    
    tempImg.onload = () => {
      img.src = src;
      img.removeAttribute('data-src');
      container.classList.add('loaded');
    };

    tempImg.onerror = () => {
      container.classList.add('loaded');
      img.classList.add('img-error');
    };
  }
}

// ========================================
// 6. Button Loading States
// ========================================
class ButtonState {
  static setLoading(btn, text = 'Yuklanmoqda...') {
    btn.classList.add('btn-loading');
    btn.dataset.originalText = btn.innerHTML;
    btn.innerHTML = `<span class="btn-text">${text}</span>`;
    btn.disabled = true;
  }

  static setSuccess(btn, text = 'Muvaffaqiyatli!') {
    btn.classList.remove('btn-loading');
    btn.classList.add('btn-success');
    btn.innerHTML = `<span class="btn-text">${text}</span>`;
    
    setTimeout(() => this.reset(btn), 2000);
  }

  static setError(btn, text = 'Xatolik!') {
    btn.classList.remove('btn-loading');
    btn.classList.add('btn-error');
    btn.innerHTML = `<span class="btn-text">${text}</span>`;
    
    setTimeout(() => this.reset(btn), 2000);
  }

  static reset(btn) {
    btn.classList.remove('btn-loading', 'btn-success', 'btn-error');
    btn.innerHTML = btn.dataset.originalText || 'Submit';
    btn.disabled = false;
  }
}

// ========================================
// 7. Page Transition Animation
// ========================================
class PageTransition {
  constructor() {
    this.init();
  }

  init() {
    // Fade in on page load
    document.body.classList.add('page-transition-enter');
    
    requestAnimationFrame(() => {
      document.body.classList.add('page-transition-enter-active');
      setTimeout(() => {
        document.body.classList.remove('page-transition-enter', 'page-transition-enter-active');
      }, 500);
    });

    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(link => {
      link.addEventListener('click', (e) => {
        const href = link.getAttribute('href');
        // Skip empty anchors (just "#")
        if (!href || href === '#' || href.length < 2) return;
        
        const target = document.querySelector(href);
        if (target) {
          e.preventDefault();
          target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      });
    });
  }
}

// ========================================
// 8. Accessibility Improvements
// ========================================
class AccessibilityManager {
  constructor() {
    this.init();
  }

  init() {
    this.addSkipLink();
    this.manageFocus();
    this.addAriaLabels();
  }

  addSkipLink() {
    const skipLink = document.createElement('a');
    skipLink.href = '#main-content';
    skipLink.className = 'skip-link';
    skipLink.textContent = 'Skip to main content';
    document.body.prepend(skipLink);

    // Add main-content id to main section
    const main = document.querySelector('main') || document.querySelector('section');
    if (main && !main.id) {
      main.id = 'main-content';
      main.tabIndex = -1;
    }
  }

  manageFocus() {
    // Trap focus in modals
    document.querySelectorAll('.modal').forEach(modal => {
      const focusable = modal.querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])');
      const first = focusable[0];
      const last = focusable[focusable.length - 1];

      modal.addEventListener('keydown', (e) => {
        if (e.key === 'Tab') {
          if (e.shiftKey && document.activeElement === first) {
            e.preventDefault();
            last.focus();
          } else if (!e.shiftKey && document.activeElement === last) {
            e.preventDefault();
            first.focus();
          }
        }
      });
    });
  }

  addAriaLabels() {
    // Add aria-label to icons
    document.querySelectorAll('svg:not([aria-label])').forEach(svg => {
      const parent = svg.closest('button, a');
      if (parent && !parent.getAttribute('aria-label')) {
        svg.setAttribute('aria-hidden', 'true');
      }
    });
  }
}

// ========================================
// 9. Ripple Effect for Buttons
// ========================================
class RippleEffect {
  constructor() {
    this.init();
  }

  init() {
    document.querySelectorAll('.btn').forEach(btn => {
      btn.addEventListener('click', (e) => this.createRipple(e, btn));
    });
  }

  createRipple(e, btn) {
    const ripple = document.createElement('span');
    const rect = btn.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height);
    const x = e.clientX - rect.left - size / 2;
    const y = e.clientY - rect.top - size / 2;

    ripple.style.cssText = `
      position: absolute;
      width: ${size}px;
      height: ${size}px;
      left: ${x}px;
      top: ${y}px;
      background: rgba(255,255,255,0.3);
      border-radius: 50%;
      transform: scale(0);
      animation: ripple 0.6s ease-out;
      pointer-events: none;
    `;

    btn.appendChild(ripple);
    setTimeout(() => ripple.remove(), 600);
  }
}

// Add ripple animation
const style = document.createElement('style');
style.textContent = `
  @keyframes ripple {
    to {
      transform: scale(4);
      opacity: 0;
    }
  }
`;
document.head.appendChild(style);

// ========================================
// Initialize Everything
// ========================================
document.addEventListener('DOMContentLoaded', () => {
  // Core systems
  window.themeManager = new ThemeManager();
  window.toast = new ToastSystem();
  window.bottomNav = new BottomNav();
  window.lazyLoader = new LazyImageLoader();
  window.pageTransition = new PageTransition();
  window.accessibility = new AccessibilityManager();
  window.ripple = new RippleEffect();

  // Expose utilities
  window.ButtonState = ButtonState;
  window.SkeletonLoader = SkeletonLoader;

  console.log('✨ UI/UX Improvements loaded successfully!');
});

// Export for modules
export {
  ThemeManager,
  ToastSystem,
  SkeletonLoader,
  BottomNav,
  LazyImageLoader,
  ButtonState,
  PageTransition,
  AccessibilityManager,
  RippleEffect
};
