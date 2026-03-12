/**
 * Portfolio Site - Interactive Features
 * Vanilla JS, no dependencies
 */

document.addEventListener('DOMContentLoaded', () => {

  // ============================================================
  // 1. Dark / Light Mode Toggle
  // ============================================================

  const themeToggleBtn = document.getElementById('theme-toggle');

  /**
   * Apply the given theme ('dark' | 'light') to the document and
   * update the toggle button icon.
   */
  function applyTheme(theme) {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    updateThemeIcon(theme);
  }

  /** Swap the toggle button between sun and moon icons. */
  function updateThemeIcon(theme) {
    if (!themeToggleBtn) return;
    if (theme === 'dark') {
      // In dark mode show sun icon (click to switch to light)
      themeToggleBtn.innerHTML = '<i class="fas fa-sun"></i>';
    } else {
      // In light mode show moon icon (click to switch to dark)
      themeToggleBtn.innerHTML = '<i class="fas fa-moon"></i>';
    }
  }

  /** Determine the initial theme: localStorage first, then system preference. */
  function getInitialTheme() {
    const stored = localStorage.getItem('theme');
    if (stored === 'dark' || stored === 'light') return stored;
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      return 'dark';
    }
    return 'light';
  }

  // Set initial theme on load
  applyTheme(getInitialTheme());

  // Toggle on button click
  if (themeToggleBtn) {
    themeToggleBtn.addEventListener('click', () => {
      const isDark = document.documentElement.classList.contains('dark');
      const newTheme = isDark ? 'light' : 'dark';
      localStorage.setItem('theme', newTheme);
      applyTheme(newTheme);
    });
  }

  // ============================================================
  // 2. Smooth Scroll for Anchor Links
  // ============================================================

  const NAV_OFFSET = 80; // px – accounts for fixed nav height

  document.querySelectorAll('a[href^="#"]').forEach((link) => {
    link.addEventListener('click', (e) => {
      const targetId = link.getAttribute('href');
      if (targetId === '#') return;

      const target = document.querySelector(targetId);
      if (!target) return;

      e.preventDefault();
      const top = target.getBoundingClientRect().top + window.scrollY - NAV_OFFSET;
      window.scrollTo({ top, behavior: 'smooth' });
    });
  });

  // ============================================================
  // 3. Scroll Animations (Intersection Observer)
  // ============================================================

  // Inject the base CSS for scroll-section elements so they start hidden
  const scrollStyle = document.createElement('style');
  scrollStyle.textContent = `
    .scroll-section {
      opacity: 0;
      transform: translateY(30px);
      transition: opacity 0.6s ease, transform 0.6s ease;
    }
    .scroll-section.visible {
      opacity: 1;
      transform: translateY(0);
    }
  `;
  document.head.appendChild(scrollStyle);

  const scrollSections = document.querySelectorAll('.scroll-section');

  if (scrollSections.length > 0) {
    const sectionObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1 }
    );

    scrollSections.forEach((section) => sectionObserver.observe(section));
  }

  // ============================================================
  // 4. Mobile Nav Toggle
  // ============================================================

  const mobileMenuBtn = document.getElementById('mobile-menu-btn');
  const navLinks = document.getElementById('nav-links');
  const mobileMenu = document.getElementById('mobile-menu');

  /** Toggle the mobile navigation menu open/closed. */
  function toggleMobileMenu(forceClose) {
    if (!mobileMenuBtn) return;

    const menu = mobileMenu || navLinks;
    if (!menu) return;

    const isOpen = !menu.classList.contains('hidden');
    const shouldClose = forceClose === true || isOpen;

    if (shouldClose) {
      menu.classList.add('hidden');
      mobileMenuBtn.innerHTML = '<i class="fas fa-bars"></i>';
    } else {
      menu.classList.remove('hidden');
      mobileMenuBtn.innerHTML = '<i class="fas fa-times"></i>';
    }
  }

  if (mobileMenuBtn) {
    mobileMenuBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      toggleMobileMenu();
    });
  }

  // Close nav when a link inside the mobile menu is clicked
  const mobileNavTarget = mobileMenu || navLinks;
  if (mobileNavTarget) {
    mobileNavTarget.querySelectorAll('a').forEach((link) => {
      link.addEventListener('click', () => toggleMobileMenu(true));
    });
  }

  // Close nav when clicking outside
  document.addEventListener('click', (e) => {
    const menu = mobileMenu || navLinks;
    if (
      menu &&
      !menu.classList.contains('hidden') &&
      !menu.contains(e.target) &&
      e.target !== mobileMenuBtn
    ) {
      toggleMobileMenu(true);
    }
  });

  // Also handle the mobile theme toggle
  const themeToggleMobile = document.getElementById('theme-toggle-mobile');
  if (themeToggleMobile) {
    themeToggleMobile.addEventListener('click', () => {
      const isDark = document.documentElement.classList.contains('dark');
      const newTheme = isDark ? 'light' : 'dark';
      localStorage.setItem('theme', newTheme);
      applyTheme(newTheme);
    });
  }

  // ============================================================
  // 5. Active Nav Highlighting
  // ============================================================

  const sections = document.querySelectorAll('section[id]');
  const allNavLinks = document.querySelectorAll('#nav-links a[href^="#"]');

  function highlightActiveNav() {
    const scrollPos = window.scrollY + NAV_OFFSET + 1;
    let currentId = '';

    sections.forEach((section) => {
      if (section.offsetTop <= scrollPos) {
        currentId = section.getAttribute('id');
      }
    });

    allNavLinks.forEach((link) => {
      link.classList.remove('active', 'text-accent-light', 'dark:text-accent-dark');
      if (link.getAttribute('href') === '#' + currentId) {
        link.classList.add('active', 'text-accent-light', 'dark:text-accent-dark');
      }
    });
  }

  // ============================================================
  // 6. Navbar Background on Scroll
  // ============================================================

  const nav = document.querySelector('nav');
  const scrollBgClasses = [
    'bg-ink-50/80',
    'dark:bg-ink-950/80',
    'backdrop-blur-md',
    'shadow-sm',
  ];

  function updateNavBackground() {
    if (!nav) return;

    if (window.scrollY > 50) {
      nav.classList.add(...scrollBgClasses);
    } else {
      nav.classList.remove(...scrollBgClasses);
    }
  }

  // ============================================================
  // Scroll event — throttled with requestAnimationFrame
  // ============================================================

  let ticking = false;

  window.addEventListener('scroll', () => {
    if (!ticking) {
      window.requestAnimationFrame(() => {
        highlightActiveNav();
        updateNavBackground();
        ticking = false;
      });
      ticking = true;
    }
  });

  // Run once on load so initial state is correct
  highlightActiveNav();
  updateNavBackground();
});
