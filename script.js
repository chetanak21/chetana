/* ==========================================================================
   CHETANA KOLHE - PORTFOLIO INTERACTION ENGINE (COMPLETE)
   Stack: Vanilla JS, GSAP 3 + ScrollTrigger, Lucide Icons, EmailJS, Confetti
   ========================================================================== */

/* ==========================================================================
   ██████  ██████  ███    ██ ███████ ██  ██████
  ██      ██    ██ ████   ██ ██      ██ ██
  ██      ██    ██ ██ ██  ██ █████   ██ ██   ███
  ██      ██    ██ ██  ██ ██ ██      ██ ██    ██
   ██████  ██████  ██   ████ ██      ██  ██████

  ✏️  EDIT THIS SECTION TO CUSTOMISE YOUR PORTFOLIO
  ========================================================================== */
const CONFIG = {
  /* ------ Personal Details ------ */
  personal: {
    name: 'Chetana Kolhe',
    roles: ['AI Enthusiast', 'Data Science Student', 'Python Developer', 'Problem Solver'],
    email: 'chetana9960@gmail.com',
    phone: '+919960757106',
    location: 'Shirpur, Maharashtra, India',
    github: 'https://github.com/chetanak21',
    linkedin: 'https://www.linkedin.com/in/chetanakolhe-175826397',
    codechef: 'https://www.codechef.com/users/chetana_kolhe',
  },

  /* ------ Accent Color (CSS variable override) ------ */
  accent: '#ff3d5a',

  /* ------ Projects Array (add more objects here) ------ */
  projects: [
    {
      id: 'cyber-threat',
      title: 'AI Cyber Threat & Anomaly Detection in Digital Banking',
      tag: 'IBM SkillsBuild Internship Project',
      domain: 'AI / DATA SCIENCE / CYBERSECURITY',
      description:
        'A Python-based project that detects suspicious activity and anomalies in digital banking data using AI, built during my IBM SkillsBuild internship.',
      tech: ['Python', 'Scikit-Learn', 'Pandas', 'NumPy', 'Streamlit / Flask', 'Anomaly Detection'],
      github: 'https://github.com/chetanak21/AI-Cyber-Threat-Detection',
      caseStudy: {
        problem:
          'Digital banking transactions occur at high volume with microsecond latencies. Traditional rule-based fraud detection systems often struggle with novel attack vectors, high false-positive rates, and unexpected velocity drifts. The objective was to build an unsupervised AI pipeline capable of flagging suspicious transactions before settlement.',
        approach:
          'Using transactional banking data, the model extracts behavioural features including transaction frequency, amount z-scores, velocity, and time-of-day entropy. We evaluated multiple models, focusing on Isolation Forest and One-Class SVM to score anomaly confidence without needing heavily labelled fraud data.',
        tools: [
          { name: 'Python 3', desc: 'Core modeling and data pipelines' },
          { name: 'Pandas & NumPy', desc: 'Preprocessing and feature engineering' },
          { name: 'Scikit-Learn', desc: 'Anomaly detection algorithms' },
          { name: 'Streamlit', desc: 'Interactive testing dashboard demo' },
        ],
        results:
          'The project demonstrated that isolation forest models achieved high sensitivity to outlier amounts and atypical geographic velocity shifts. Key learnings included handling skewed tabular distributions, mitigating false positives, and preparing data for production streaming.',
      },
    },
  ],

  /* ------ Chatbot Knowledge (edit answers freely) ------ */
  chatbotKnowledge: {
    skills:
      "Chetana is currently learning Python, Data Analysis (Pandas & NumPy), Machine Learning basics with Scikit-Learn, Data Visualization, AI for Cybersecurity, and foundational web development. She's a 2nd-year student focused on building strong fundamentals! 💻",
    project:
      "Her featured project is 'AI Cyber Threat & Anomaly Detection in Digital Banking', built during an IBM SkillsBuild internship. It uses Python, Scikit-Learn, and Pandas to detect suspicious banking activity using unsupervised anomaly detection. Check it out on GitHub! 🛡️",
    education:
      "Chetana is a 2nd-year B.Tech student in Artificial Intelligence & Data Science at RCPIT Shirpur (2025–2029). She completed her HSC at Rashtriya Junior College, Chalisgaon with 72%. 🎓",
    certificates:
      "Chetana holds verified certifications in Data Analytics with AI (AICTE & IBM SkillsBuild), DSA in C Programming, Learn Java Programming, and Intro to Git. 📜",
    contact:
      "You can reach Chetana at chetana9960@gmail.com or call/WhatsApp +91-9960757106. She's also on GitHub (chetanak21) and LinkedIn. She's open for student internships! 📬",
    hello:
      "Hey there! 👋 I'm Chetana's virtual assistant. I can tell you about her skills, projects, education, or how to contact her. What would you like to know?",
    fallback:
      "I'm not sure about that one! Try asking about Chetana's skills, her IBM internship project, education, or how to contact her. You can also use the quick chips below! 🤔",
  },

  /* ------ EmailJS Configuration ------
     📘 SETUP GUIDE:
     1. Go to https://www.emailjs.com/ and create a free account
     2. Add an Email Service (e.g., Gmail) → copy the SERVICE_ID
     3. Create Template 1 (Notification to you):
        Subject: New Portfolio Message from {{from_name}}
        Body: Name: {{from_name}}, Email: {{from_email}}, Message: {{message}}
        → copy the TEMPLATE_ID as templateIdNotify
     4. Create Template 2 (Auto-reply to visitor):
        To: {{to_email}}
        Subject: Thanks for reaching out, {{to_name}}! — Chetana Kolhe
        Body:
          Hi {{to_name}}! 👋

          Thanks for contacting me through my portfolio! I've received your message
          and will get back to you within 24 hours.

          Your message: "{{message}}"

          Meanwhile, feel free to check out my projects on GitHub:
          https://github.com/chetanak21

          Best regards,
          Chetana Kolhe
          2nd-Year B.Tech AI & Data Science | RCPIT Shirpur
        → copy the TEMPLATE_ID as templateIdAutoReply
     5. Go to Account → API Keys → copy your PUBLIC_KEY
     6. Paste all 4 values below:
  */
  emailjs: {
    publicKey: 'YOUR_PUBLIC_KEY_HERE',        // ← paste your EmailJS public key
    serviceId: 'YOUR_SERVICE_ID_HERE',        // ← paste your EmailJS service ID
    templateIdNotify: 'YOUR_TEMPLATE_ID_1',   // ← notification email to you
    templateIdAutoReply: 'YOUR_TEMPLATE_ID_2', // ← auto-reply email to visitor
  },
};

/* ==========================================================================
   END OF CONFIG — Below is the engine. Edit only if you know what you're doing.
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
  // ───────── Init Lucide Icons ─────────
  if (window.lucide) window.lucide.createIcons();

  // ───────── Register GSAP Plugins ─────────
  if (window.gsap) {
    if (window.ScrollTrigger) gsap.registerPlugin(ScrollTrigger);
    if (window.ScrollToPlugin) gsap.registerPlugin(ScrollToPlugin);
  }

  /* ========================================================================
     1. LOADER: YouTube Line + Counter + Curtain Reveal
     ======================================================================== */
  const loaderOverlay = document.getElementById('loaderOverlay');
  const loaderLine = document.getElementById('loaderLine');
  const loaderCounter = document.getElementById('loaderCounter');

  let currentCount = 0;
  const targetCount = 100;
  const duration = 1600;
  const intervalTime = 16;
  const increment = targetCount / (duration / intervalTime);

  const loaderInterval = setInterval(() => {
    currentCount += increment;
    if (currentCount >= targetCount) {
      currentCount = targetCount;
      clearInterval(loaderInterval);

      if (loaderLine) loaderLine.style.width = '100%';
      if (loaderCounter) loaderCounter.textContent = '100';

      setTimeout(() => {
        if (loaderOverlay) loaderOverlay.classList.add('revealed');
        triggerCoverEntrance();
        setTimeout(() => {
          if (loaderOverlay) loaderOverlay.classList.add('hidden');
        }, 850);
      }, 250);
    } else {
      const rounded = Math.floor(currentCount);
      if (loaderCounter) loaderCounter.textContent = rounded;
      if (loaderLine) loaderLine.style.width = rounded + '%';
    }
  }, intervalTime);

  /* ========================================================================
     2. CUSTOM CURSOR (Dot + Trailing Ring)
     ======================================================================== */
  const cursorDot = document.getElementById('cursorDot');
  const cursorRing = document.getElementById('cursorRing');
  let mouseX = window.innerWidth / 2;
  let mouseY = window.innerHeight / 2;

  if (cursorDot && cursorRing && window.matchMedia('(hover: hover)').matches) {
    let ringX = mouseX;
    let ringY = mouseY;

    window.addEventListener('mousemove', (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      cursorDot.style.left = `${mouseX}px`;
      cursorDot.style.top = `${mouseY}px`;
    });

    function renderCursor() {
      ringX += (mouseX - ringX) * 0.18;
      ringY += (mouseY - ringY) * 0.18;
      cursorRing.style.left = `${ringX}px`;
      cursorRing.style.top = `${ringY}px`;
      requestAnimationFrame(renderCursor);
    }
    renderCursor();

    // Hover scale on interactive elements
    document.querySelectorAll(
      'a, button, .service-card, .featured-project-card, .coming-soon-card, .floating-sticker, .hero-sticker, .channel-item, .v-step, .hobby-pill'
    ).forEach((el) => {
      el.addEventListener('mouseenter', () => document.body.classList.add('cursor-hover'));
      el.addEventListener('mouseleave', () => document.body.classList.remove('cursor-hover'));
    });
  }

  /* ========================================================================
     3. CURSOR SPOTLIGHT (soft accent glow follows mouse)
     ======================================================================== */
  const cursorSpotlight = document.getElementById('cursorSpotlight');
  if (cursorSpotlight && window.matchMedia('(hover: hover)').matches) {
    window.addEventListener('mousemove', (e) => {
      cursorSpotlight.style.setProperty('--mouse-x', e.clientX + 'px');
      cursorSpotlight.style.setProperty('--mouse-y', e.clientY + 'px');
    });
  }

  /* ========================================================================
     4. TOP PROGRESS BAR & ACTIVE SECTION DETECTION
     ======================================================================== */
  const topProgressBar = document.getElementById('topProgressBar');
  const sections = document.querySelectorAll('.page-section');
  const navLinks = document.querySelectorAll('.nav-link, .mobile-link');
  const vSteps = document.querySelectorAll('.v-step');
  const navbar = document.getElementById('navbar');

  function updateScrollProgress() {
    const scrollY = window.scrollY;
    const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
    const pct = maxScroll > 0 ? (scrollY / maxScroll) * 100 : 0;

    if (topProgressBar) topProgressBar.style.width = `${pct}%`;

    if (navbar) {
      navbar.classList.toggle('scrolled', scrollY > 50);
    }

    let currentId = 'cover';
    const triggerOffset = window.innerHeight * 0.4;
    sections.forEach((section) => {
      const top = section.offsetTop;
      const height = section.offsetHeight;
      if (scrollY + triggerOffset >= top && scrollY < top + height) {
        currentId = section.getAttribute('id');
      }
    });

    navLinks.forEach((link) => {
      const target = link.getAttribute('data-nav-target');
      link.classList.toggle('active', target === `#${currentId}`);
    });

    vSteps.forEach((step) => {
      const target = step.getAttribute('data-target');
      step.classList.toggle('active', target === `#${currentId}`);
    });
  }

  window.addEventListener('scroll', updateScrollProgress, { passive: true });
  updateScrollProgress();

  /* ========================================================================
     5. SMOOTH NAVIGATION (Desktop, Mobile & Vertical Indicator)
     ======================================================================== */
  function smoothScrollTo(targetSelector) {
    const targetEl = document.querySelector(targetSelector);
    if (!targetEl) return;
    if (window.gsap && window.ScrollToPlugin) {
      gsap.to(window, { duration: 0.85, scrollTo: { y: targetEl, offsetY: 0 }, ease: 'power2.inOut' });
    } else {
      targetEl.scrollIntoView({ behavior: 'smooth' });
    }
  }

  document.querySelectorAll('[data-nav-target]').forEach((elem) => {
    elem.addEventListener('click', (e) => {
      e.preventDefault();
      smoothScrollTo(elem.getAttribute('data-nav-target'));
      const mobileNav = document.getElementById('mobileNav');
      const mobileToggle = document.getElementById('mobileToggle');
      if (mobileNav && mobileNav.classList.contains('open')) {
        mobileNav.classList.remove('open');
        if (mobileToggle) mobileToggle.classList.remove('active');
      }
    });
  });

  vSteps.forEach((step) => {
    step.addEventListener('click', () => smoothScrollTo(step.getAttribute('data-target')));
  });

  // Mobile Hamburger Toggle
  const mobileToggle = document.getElementById('mobileToggle');
  const mobileNav = document.getElementById('mobileNav');
  if (mobileToggle && mobileNav) {
    mobileToggle.addEventListener('click', () => {
      mobileToggle.classList.toggle('active');
      mobileNav.classList.toggle('open');
    });
  }

  /* ========================================================================
     6. TYPEWRITER: Looping Roles from CONFIG
     ======================================================================== */
  const roleTextEl = document.getElementById('roleText');
  const roles = CONFIG.personal.roles;
  let roleIndex = 0;
  let charIndex = 0;
  let isDeleting = false;
  let typingDelay = 120;

  function typeRoleLoop() {
    if (!roleTextEl) return;
    const currentWord = roles[roleIndex];
    if (isDeleting) {
      charIndex--;
      typingDelay = 60;
    } else {
      charIndex++;
      typingDelay = 120;
    }
    roleTextEl.textContent = currentWord.substring(0, charIndex);

    if (!isDeleting && charIndex === currentWord.length) {
      typingDelay = 1800;
      isDeleting = true;
    } else if (isDeleting && charIndex === 0) {
      isDeleting = false;
      roleIndex = (roleIndex + 1) % roles.length;
      typingDelay = 400;
    }
    setTimeout(typeRoleLoop, typingDelay);
  }
  typeRoleLoop();

  /* ========================================================================
     7. ANIMATED COUNTERS (count up when cover enters view)
     ======================================================================== */
  let countersAnimated = false;
  function animateCounters() {
    if (countersAnimated) return;
    countersAnimated = true;
    document.querySelectorAll('.counter-stat').forEach((el) => {
      const target = parseInt(el.getAttribute('data-count'), 10);
      let current = 0;
      const step = Math.max(1, Math.floor(target / 40));
      const interval = setInterval(() => {
        current += step;
        if (current >= target) {
          current = target;
          clearInterval(interval);
        }
        el.textContent = current;
      }, 40);
    });
  }

  // Trigger counters when cover becomes visible (shortly after load)
  setTimeout(animateCounters, 2200);

  /* ========================================================================
     8. GSAP SCROLL ENTRANCE ANIMATIONS (SAFE: gsap.fromTo with visible defaults)
     ======================================================================== */
  function triggerCoverEntrance() {
    if (!window.gsap) return;
    gsap.fromTo('.cover-kicker',
      { opacity: 0, y: -20 },
      { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out' }
    );
    gsap.fromTo('.cover-title',
      { opacity: 0, scale: 0.92 },
      { opacity: 1, scale: 1, duration: 1.1, delay: 0.15, ease: 'power3.out' }
    );
    gsap.fromTo('.cover-author-line',
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.8, delay: 0.35, ease: 'power3.out' }
    );
    gsap.fromTo('.cover-caption, .cover-scroll-hint, .cover-stats-bar',
      { opacity: 0, y: 25 },
      { opacity: 1, y: 0, duration: 0.8, delay: 0.5, stagger: 0.1, ease: 'power3.out' }
    );
  }

  if (window.gsap && window.ScrollTrigger) {
    // Helper: safe scroll entrance using fromTo (never leaves opacity:0)
    function safeScrollEntrance(targets, trigger, fromVars, toVars, extra = {}) {
      const els = document.querySelectorAll(targets);
      if (!els.length) return;
      gsap.fromTo(targets,
        { ...fromVars },
        {
          ...toVars,
          scrollTrigger: {
            trigger: trigger,
            start: extra.start || 'top 75%',
            once: true,
          },
          ...extra,
        }
      );
    }

    // Page 1: Home/Intro
    safeScrollEntrance('.home-text-col > *', '#home',
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, stagger: 0.1, duration: 0.8, ease: 'power3.out' }
    );
    safeScrollEntrance('.hero-cutout-container', '#home',
      { opacity: 0, scale: 0.9 },
      { opacity: 1, scale: 1, duration: 1, delay: 0.2, ease: 'power3.out' }
    );
    safeScrollEntrance('.hero-sticker', '#home',
      { opacity: 0, scale: 0.5 },
      { opacity: 1, scale: 1, stagger: 0.12, duration: 0.7, ease: 'back.out(1.7)' },
      { start: 'top 65%' }
    );

    // Page 2: About
    safeScrollEntrance('.about-photo-col', '#about',
      { opacity: 0, x: -40 },
      { opacity: 1, x: 0, duration: 0.9, ease: 'power3.out' }
    );
    safeScrollEntrance('.about-details-col > *', '#about',
      { opacity: 0, y: 25 },
      { opacity: 1, y: 0, stagger: 0.1, duration: 0.8, ease: 'power3.out' }
    );

    // Page 3: What I'm Exploring
    safeScrollEntrance('.service-card', '#exploring',
      { opacity: 0, y: 40 },
      { opacity: 1, y: 0, stagger: 0.08, duration: 0.85, ease: 'power3.out' }
    );

    // Page 4: Skills & Journey
    ScrollTrigger.create({
      trigger: '#skills',
      start: 'top 70%',
      once: true,
      onEnter: () => {
        document.querySelectorAll('.skill-bar-item').forEach((item) => {
          const pct = item.getAttribute('data-percent');
          const fill = item.querySelector('.skill-fill');
          if (fill) fill.style.width = pct + '%';
        });
      },
    });

    safeScrollEntrance('.timeline-item', '#skills',
      { opacity: 0, x: 30 },
      { opacity: 1, x: 0, stagger: 0.15, duration: 0.85, ease: 'power3.out' }
    );

    // Page 5: Projects
    safeScrollEntrance('.featured-project-card', '#projects',
      { opacity: 0, y: 40 },
      { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out' }
    );
    safeScrollEntrance('.coming-soon-card', '#projects',
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, stagger: 0.12, duration: 0.7, delay: 0.2, ease: 'power3.out' }
    );

    // Page 6: Contact
    safeScrollEntrance('.contact-form-col, .contact-info-col', '#contact',
      { opacity: 0, y: 35 },
      { opacity: 1, y: 0, stagger: 0.15, duration: 0.85, ease: 'power3.out' }
    );
  } else {
    // Fallback: fill skill bars immediately if GSAP is unavailable
    document.querySelectorAll('.skill-bar-item').forEach((item) => {
      const pct = item.getAttribute('data-percent');
      const fill = item.querySelector('.skill-fill');
      if (fill) fill.style.width = pct + '%';
    });
  }

  /* ========================================================================
     9. HERO 3D PARALLAX (Photo + Stickers shift on mouse move)
     ======================================================================== */
  const heroPhotoParallax = document.getElementById('heroPhotoParallax');
  const heroStickers = document.querySelectorAll('.hero-sticker');

  if (heroPhotoParallax && window.matchMedia('(hover: hover)').matches) {
    const homeSection = document.getElementById('home');
    if (homeSection) {
      homeSection.addEventListener('mousemove', (e) => {
        const rect = homeSection.getBoundingClientRect();
        const x = (e.clientX - rect.left) / rect.width - 0.5; // -0.5 to 0.5
        const y = (e.clientY - rect.top) / rect.height - 0.5;

        // Subtle 3D tilt on photo container
        heroPhotoParallax.style.transform =
          `perspective(1000px) rotateY(${x * 6}deg) rotateX(${-y * 6}deg) translateX(${x * 10}px) translateY(${y * 10}px)`;

        // Stickers shift at different depths
        heroStickers.forEach((sticker) => {
          const depth = parseFloat(sticker.getAttribute('data-parallax-depth')) || 20;
          sticker.style.transform = `translate(${x * depth}px, ${y * depth}px)`;
        });
      });

      homeSection.addEventListener('mouseleave', () => {
        heroPhotoParallax.style.transform = 'perspective(1000px) rotateY(0deg) rotateX(0deg)';
        heroStickers.forEach((s) => (s.style.transform = 'translate(0px, 0px)'));
      });
    }
  }

  /* ========================================================================
     10. TEXT-SCRAMBLE HOVER EFFECT on nav links and section headings
     ======================================================================== */
  const scrambleChars = '!<>-_\\/[]{}—=+*^?#________';

  function textScramble(el, originalText) {
    let iteration = 0;
    const maxIterations = originalText.length;
    let interval;

    clearInterval(el._scrambleInterval);
    el._scrambleInterval = setInterval(() => {
      el.textContent = originalText
        .split('')
        .map((char, index) => {
          if (index < iteration) return originalText[index];
          return scrambleChars[Math.floor(Math.random() * scrambleChars.length)];
        })
        .join('');
      iteration += 1 / 2;
      if (iteration >= maxIterations) {
        clearInterval(el._scrambleInterval);
        el.textContent = originalText;
      }
    }, 30);
  }

  document.querySelectorAll('[data-scramble]').forEach((el) => {
    const originalText = el.getAttribute('data-scramble');
    el.addEventListener('mouseenter', () => textScramble(el, originalText));
  });

  /* ========================================================================
     11. DARK / LIGHT MODE TOGGLE (remembers via localStorage)
     ======================================================================== */
  const themeToggleBtn = document.getElementById('themeToggleBtn');
  const htmlEl = document.documentElement;

  // Restore saved preference
  const savedTheme = localStorage.getItem('portfolio-theme');
  if (savedTheme) {
    htmlEl.setAttribute('data-theme', savedTheme);
  }

  if (themeToggleBtn) {
    themeToggleBtn.addEventListener('click', () => {
      const current = htmlEl.getAttribute('data-theme');
      const next = current === 'dark' ? 'light' : 'dark';
      htmlEl.setAttribute('data-theme', next);
      localStorage.setItem('portfolio-theme', next);
    });
  }

  /* ========================================================================
     12. 3D CARD PERSPECTIVE TILT ON HOVER
     ======================================================================== */
  document.querySelectorAll('.featured-project-card, .service-card').forEach((card) => {
    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const rotateX = ((y - rect.height / 2) / (rect.height / 2)) * -6;
      const rotateY = ((x - rect.width / 2) / (rect.width / 2)) * 6;
      card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-6px)`;
    });
    card.addEventListener('mouseleave', () => {
      card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0px)';
    });
  });

  /* ========================================================================
     13. MAGNETIC HOVER EFFECT on buttons & icons
     ======================================================================== */
  document.querySelectorAll('.magnetic').forEach((btn) => {
    btn.addEventListener('mousemove', (e) => {
      const rect = btn.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;
      btn.style.transform = `translate(${x * 0.22}px, ${y * 0.22}px)`;
    });
    btn.addEventListener('mouseleave', () => {
      btn.style.transform = 'translate(0px, 0px)';
    });
  });

  /* ========================================================================
     14. CASE STUDY MODAL
     ======================================================================== */
  const caseStudyModal = document.getElementById('caseStudyModal');
  const openCaseStudyBtn = document.getElementById('openCaseStudyBtn');
  const caseStudyCloseBtn = document.getElementById('caseStudyCloseBtn');

  function openCaseStudy() {
    if (caseStudyModal) {
      caseStudyModal.classList.add('active');
      document.body.style.overflow = 'hidden';
    }
  }
  function closeCaseStudy() {
    if (caseStudyModal) {
      caseStudyModal.classList.remove('active');
      document.body.style.overflow = '';
    }
  }

  if (openCaseStudyBtn) openCaseStudyBtn.addEventListener('click', openCaseStudy);
  if (caseStudyCloseBtn) caseStudyCloseBtn.addEventListener('click', closeCaseStudy);
  if (caseStudyModal) {
    caseStudyModal.addEventListener('click', (e) => {
      if (e.target === caseStudyModal) closeCaseStudy();
    });
  }

  /* ========================================================================
     15. VERIFIED RESUME MODAL & PRINT HANDLER
     ======================================================================== */
  const resumeModal = document.getElementById('resumeModal');
  const modalCloseBtn = document.getElementById('modalCloseBtn');
  const modalCloseBtnFooter = document.getElementById('modalCloseBtnFooter');
  const modalPrintBtn = document.getElementById('modalPrintBtn');

  function openResume() {
    if (resumeModal) {
      resumeModal.classList.add('active');
      document.body.style.overflow = 'hidden';
    }
  }
  function closeResume() {
    if (resumeModal) {
      resumeModal.classList.remove('active');
      document.body.style.overflow = '';
    }
  }

  document.querySelectorAll('.open-resume-trigger').forEach((t) => {
    t.addEventListener('click', (e) => { e.preventDefault(); openResume(); });
  });

  if (modalCloseBtn) modalCloseBtn.addEventListener('click', closeResume);
  if (modalCloseBtnFooter) modalCloseBtnFooter.addEventListener('click', closeResume);
  if (resumeModal) {
    resumeModal.addEventListener('click', (e) => { if (e.target === resumeModal) closeResume(); });
  }

  // Close ANY modal on Escape
  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeResume();
      closeCaseStudy();
    }
  });

  if (modalPrintBtn) {
    modalPrintBtn.addEventListener('click', () => window.print());
  }

  /* ========================================================================
     16. COPY TO CLIPBOARD BUTTONS (Email, Phone)
     ======================================================================== */
  document.querySelectorAll('.channel-copy-btn').forEach((btn) => {
    btn.addEventListener('click', () => {
      const textToCopy = btn.getAttribute('data-copy');
      if (!textToCopy) return;
      navigator.clipboard.writeText(textToCopy).then(() => {
        const original = btn.innerHTML;
        btn.innerHTML = '<i data-lucide="check" style="color:#2ecc71;"></i>';
        if (window.lucide) window.lucide.createIcons();
        setTimeout(() => {
          btn.innerHTML = original;
          if (window.lucide) window.lucide.createIcons();
        }, 2000);
      });
    });
  });

  /* ========================================================================
     17. SMART AUTO-REPLY CONTACT FORM (EmailJS + Chat Bubble)
     ======================================================================== */
  const contactForm = document.getElementById('contactForm');
  const autoReplyContainer = document.getElementById('autoReplyContainer');
  const chatTypingBubble = document.getElementById('chatTypingBubble');
  const chatReplyBubble = document.getElementById('chatReplyBubble');
  const replyBodyText = document.getElementById('replyBodyText');
  const submitBtn = document.getElementById('submitBtn');
  const formCooldownNotice = document.getElementById('formCooldownNotice');
  const sendAnotherBtn = document.getElementById('sendAnotherBtn');

  let lastSendTime = 0;
  const COOLDOWN_MS = 30000; // 30-second spam cooldown

  function getSmartReply(name, message) {
    const msg = (message || '').toLowerCase();
    if (msg.includes('internship') || msg.includes('job') || msg.includes('hiring') || msg.includes('opportunity')) {
      return `Hi ${name}! 👋 Thanks for reaching out about an opportunity! Chetana is very interested in student internships and would love to discuss further. She'll reply within 24 hours. Meanwhile, check out her IBM SkillsBuild project!`;
    }
    if (msg.includes('project') || msg.includes('collab') || msg.includes('github') || msg.includes('collaborate')) {
      return `Hey ${name}! 👋 Love your interest in collaborating! Chetana is always excited about project partnerships, especially in AI and data science. She'll get back to you soon. Check out her featured cybersecurity project!`;
    }
    if (msg.includes('question') || msg.includes('help') || msg.includes('ask') || msg.includes('doubt')) {
      return `Hi ${name}! 👋 Great question! Chetana loves discussing AI, data science, and tech in general. She'll reply with a detailed answer within 24 hours. In the meantime, her portfolio has lots of useful info!`;
    }
    return `Hi ${name}! 👋 Thanks for reaching out through the portfolio. Chetana has received your message and will reply soon (usually within 24 hours). Meanwhile, check out her featured IBM internship project!`;
  }

  if (contactForm) {
    contactForm.addEventListener('submit', async (e) => {
      e.preventDefault();

      // Honeypot check
      const botCheck = document.getElementById('botCheck');
      if (botCheck && botCheck.value) return;

      // Cooldown check
      const now = Date.now();
      if (now - lastSendTime < COOLDOWN_MS) {
        const remaining = Math.ceil((COOLDOWN_MS - (now - lastSendTime)) / 1000);
        if (formCooldownNotice) {
          formCooldownNotice.textContent = `⏳ Please wait ${remaining}s before sending again.`;
        }
        return;
      }

      const name = document.getElementById('userName').value.trim();
      const email = document.getElementById('userEmail').value.trim();
      const subject = document.getElementById('userSubject')?.value.trim() || 'Portfolio Message';
      const message = document.getElementById('userMessage').value.trim();

      if (!name || !email || !message) return;

      // Show loading state
      const btnText = submitBtn?.querySelector('.btn-text');
      const btnIcon = submitBtn?.querySelector('.btn-icon');
      const spinner = submitBtn?.querySelector('.spinner-loader');
      if (btnText) btnText.textContent = 'Sending...';
      if (btnIcon) btnIcon.style.display = 'none';
      if (spinner) spinner.style.display = 'inline-block';
      if (submitBtn) submitBtn.disabled = true;

      let emailSent = false;

      // Try EmailJS if configured
      if (CONFIG.emailjs.publicKey !== 'YOUR_PUBLIC_KEY_HERE' && window.emailjs) {
        try {
          emailjs.init(CONFIG.emailjs.publicKey);

          // Send notification email to Chetana
          await emailjs.send(CONFIG.emailjs.serviceId, CONFIG.emailjs.templateIdNotify, {
            from_name: name,
            from_email: email,
            subject: subject,
            message: message,
          });

          // Send auto-reply to visitor
          await emailjs.send(CONFIG.emailjs.serviceId, CONFIG.emailjs.templateIdAutoReply, {
            to_name: name,
            to_email: email,
            message: message,
          });

          emailSent = true;
        } catch (err) {
          console.warn('EmailJS failed, falling back to mailto:', err);
        }
      }

      // Fallback: open mailto if EmailJS not configured or failed
      if (!emailSent) {
        const mailtoUrl = `mailto:${CONFIG.personal.email}?subject=${encodeURIComponent(
          `${subject} (from ${name})`
        )}&body=${encodeURIComponent(
          `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`
        )}`;
        window.open(mailtoUrl, '_blank');
      }

      lastSendTime = Date.now();

      // Hide form, show chat-style auto-reply
      contactForm.style.display = 'none';
      if (autoReplyContainer) autoReplyContainer.style.display = 'flex';

      // Show typing bubble for 1.5s
      if (chatTypingBubble) chatTypingBubble.style.display = 'flex';
      if (chatReplyBubble) chatReplyBubble.style.display = 'none';

      setTimeout(() => {
        if (chatTypingBubble) chatTypingBubble.style.display = 'none';
        if (chatReplyBubble) chatReplyBubble.style.display = 'flex';
        if (replyBodyText) replyBodyText.textContent = getSmartReply(name, message);
        if (window.lucide) window.lucide.createIcons();

        // Confetti burst!
        if (window.confetti) {
          confetti({ particleCount: 80, spread: 70, origin: { y: 0.7 } });
        }
      }, 1500);

      // Reset button state
      if (btnText) btnText.textContent = 'Send Message';
      if (btnIcon) btnIcon.style.display = '';
      if (spinner) spinner.style.display = 'none';
      if (submitBtn) submitBtn.disabled = false;

      contactForm.reset();
    });
  }

  // "Send Another Note" button
  if (sendAnotherBtn) {
    sendAnotherBtn.addEventListener('click', () => {
      if (autoReplyContainer) autoReplyContainer.style.display = 'none';
      if (contactForm) contactForm.style.display = 'flex';
    });
  }

  /* ========================================================================
     18. MINI AI CHATBOT WIDGET
     ======================================================================== */
  const chatbotToggleBtn = document.getElementById('chatbotToggleBtn');
  const chatbotWindow = document.getElementById('chatbotWindow');
  const chatbotCloseBtn = document.getElementById('chatbotCloseBtn');
  const chatbotMessages = document.getElementById('chatbotMessages');
  const chatbotForm = document.getElementById('chatbotForm');
  const chatbotInput = document.getElementById('chatbotInput');
  const chatbotChips = document.querySelectorAll('.chat-chip');

  if (chatbotToggleBtn && chatbotWindow) {
    chatbotToggleBtn.addEventListener('click', () => {
      const isOpen = chatbotWindow.style.display !== 'none';
      chatbotWindow.style.display = isOpen ? 'none' : 'flex';
      if (window.lucide) window.lucide.createIcons();
    });
  }

  if (chatbotCloseBtn && chatbotWindow) {
    chatbotCloseBtn.addEventListener('click', () => {
      chatbotWindow.style.display = 'none';
    });
  }

  function addChatMessage(text, sender = 'bot') {
    if (!chatbotMessages) return;
    const msg = document.createElement('div');
    msg.className = `chat-msg ${sender}-msg`;
    msg.innerHTML = `<p>${text}</p>`;
    chatbotMessages.appendChild(msg);
    chatbotMessages.scrollTop = chatbotMessages.scrollHeight;
  }

  function showBotTyping() {
    if (!chatbotMessages) return;
    const typing = document.createElement('div');
    typing.className = 'chat-msg bot-msg bot-typing-indicator';
    typing.innerHTML = '<div class="typing-dots"><span></span><span></span><span></span></div>';
    chatbotMessages.appendChild(typing);
    chatbotMessages.scrollTop = chatbotMessages.scrollHeight;
    return typing;
  }

  function getChatbotResponse(query) {
    const q = query.toLowerCase();
    const kb = CONFIG.chatbotKnowledge;

    if (q.includes('cert') || q.includes('achieve') || q.includes('award')) return kb.certificates;
    if (q.includes('skill') || q.includes('python') || q.includes('learn')) return kb.skills;
    if (q.includes('project') || q.includes('ibm') || q.includes('cyber') || q.includes('intern')) return kb.project;
    if (q.includes('edu') || q.includes('college') || q.includes('degree') || q.includes('study')) return kb.education;
    if (q.includes('contact') || q.includes('email') || q.includes('phone') || q.includes('reach')) return kb.contact;
    if (q.includes('hi') || q.includes('hello') || q.includes('hey')) return kb.hello;
    return kb.fallback;
  }

  function handleChatQuery(query) {
    addChatMessage(query, 'user');
    const typingEl = showBotTyping();

    setTimeout(() => {
      if (typingEl && typingEl.parentNode) typingEl.parentNode.removeChild(typingEl);
      addChatMessage(getChatbotResponse(query));
    }, 800 + Math.random() * 600);
  }

  // Chip clicks
  chatbotChips.forEach((chip) => {
    chip.addEventListener('click', () => {
      const query = chip.getAttribute('data-query') || chip.textContent.trim();
      addChatMessage(chip.textContent.trim(), 'user');
      const typingEl = showBotTyping();

      setTimeout(() => {
        if (typingEl && typingEl.parentNode) typingEl.parentNode.removeChild(typingEl);
        addChatMessage(getChatbotResponse(query));
      }, 650 + Math.random() * 350);
    });
  });

  // Form submit
  if (chatbotForm && chatbotInput) {
    chatbotForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const query = chatbotInput.value.trim();
      if (!query) return;
      handleChatQuery(query);
      chatbotInput.value = '';
    });
  }

  /* ========================================================================
     19. ROCKET BACK-TO-TOP BUTTON
     ======================================================================== */
  const rocketTopBtn = document.getElementById('rocketTopBtn');
  if (rocketTopBtn) {
    rocketTopBtn.addEventListener('click', () => {
      smoothScrollTo('#cover');
    });
  }

  /* ========================================================================
     20. EASTER EGG: Press "H" → Confetti + Loader Bounce + Toast
     ======================================================================== */
  const easterEggToast = document.getElementById('easterEggToast');
  let easterEggCooldown = false;

  window.addEventListener('keydown', (e) => {
    // Only trigger on 'H' key when not typing in an input/textarea
    if (e.key !== 'h' && e.key !== 'H') return;
    if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') return;
    if (easterEggCooldown) return;

    easterEggCooldown = true;

    // Confetti burst
    if (window.confetti) {
      confetti({ particleCount: 150, spread: 100, origin: { y: 0.5 } });
      setTimeout(() => confetti({ particleCount: 80, spread: 60, origin: { y: 0.3, x: 0.3 } }), 200);
      setTimeout(() => confetti({ particleCount: 80, spread: 60, origin: { y: 0.3, x: 0.7 } }), 400);
    }

    // Bounce the loader shapes briefly
    const cubes = document.querySelectorAll('.cube');
    const balls = document.querySelectorAll('.ball');
    if (loaderOverlay) {
      loaderOverlay.classList.remove('hidden');
      loaderOverlay.style.zIndex = '10001';
      loaderOverlay.style.opacity = '0.9';
      loaderOverlay.style.pointerEvents = 'none';

      // Remove curtains temporarily
      const curtains = loaderOverlay.querySelectorAll('.loader-curtain');
      curtains.forEach(c => c.style.display = 'none');

      const loaderContent = loaderOverlay.querySelector('.loader-content');
      if (loaderContent) loaderContent.style.opacity = '1';

      setTimeout(() => {
        loaderOverlay.style.opacity = '0';
        setTimeout(() => {
          loaderOverlay.classList.add('hidden');
          loaderOverlay.style.zIndex = '';
          curtains.forEach(c => c.style.display = '');
        }, 400);
      }, 1800);
    }

    // Show toast
    if (easterEggToast) {
      easterEggToast.classList.add('show');
      setTimeout(() => easterEggToast.classList.remove('show'), 3000);
    }

    setTimeout(() => { easterEggCooldown = false; }, 5000);
  });

  /* ========================================================================
     21. PARTICLES ON COVER PAGE (optional lightweight particles)
     ======================================================================== */
  const particlesCanvas = document.getElementById('particlesCanvas');
  if (particlesCanvas) {
    // Create a few subtle floating particles
    for (let i = 0; i < 20; i++) {
      const particle = document.createElement('div');
      particle.style.cssText = `
        position: absolute;
        width: ${2 + Math.random() * 3}px;
        height: ${2 + Math.random() * 3}px;
        background: rgba(255, 61, 90, ${0.15 + Math.random() * 0.2});
        border-radius: 50%;
        left: ${Math.random() * 100}%;
        top: ${Math.random() * 100}%;
        animation: floatParticle ${5 + Math.random() * 10}s linear infinite;
        pointer-events: none;
      `;
      particlesCanvas.appendChild(particle);
    }
  }

  // Inject the float animation if not in CSS
  if (!document.getElementById('particleKeyframes')) {
    const style = document.createElement('style');
    style.id = 'particleKeyframes';
    style.textContent = `
      @keyframes floatParticle {
        0% { transform: translateY(0) translateX(0); opacity: 0; }
        10% { opacity: 1; }
        90% { opacity: 1; }
        100% { transform: translateY(-120px) translateX(${Math.random() > 0.5 ? '' : '-'}40px); opacity: 0; }
      }
      @keyframes fadeIn {
        from { opacity: 0; }
        to { opacity: 1; }
      }
      @keyframes slideUp {
        from { opacity: 0; transform: translateY(15px); }
        to { opacity: 1; transform: translateY(0); }
      }
    `;
    document.head.appendChild(style);
  }

  /* ========================================================================
     DONE! All interactive features loaded.
     ======================================================================== */
  console.log(
    '%c🚀 Chetana Kolhe Portfolio — Engine Loaded',
    'background: #ff3d5a; color: #fff; padding: 6px 14px; border-radius: 4px; font-weight: bold;'
  );
});
