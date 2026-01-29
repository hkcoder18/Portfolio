// ==================== DOM Elements ====================
const header = document.getElementById('header');
const navMenu = document.getElementById('nav-menu');
const navToggle = document.getElementById('nav-toggle');
const navClose = document.getElementById('nav-close');
const navLinks = document.querySelectorAll('.nav__link');
const themeToggle = document.getElementById('theme-toggle');
const backToTop = document.getElementById('back-to-top');
const typingText = document.getElementById('typing-text');
const skillsTabs = document.querySelectorAll('.skills__tab');
const skillsContent = document.getElementById('skills-content');
const projectsGrid = document.getElementById('projects-grid');
const projectFilters = document.querySelectorAll('.projects__filter');
const experienceTimeline = document.getElementById('experience-timeline');
const contactForm = document.getElementById('contact-form');

// ==================== Skills Data ====================
const skillsData = {
    languages: [
        { icon: 'devicon-python-plain colored', name: 'Python', level: 'Expert', progress: 95 },
        { icon: 'fas fa-database', name: 'SQL', level: 'Advanced', progress: 85 },
        { icon: 'devicon-javascript-plain colored', name: 'JavaScript', level: 'Intermediate', progress: 70 },
        { icon: 'devicon-java-plain colored', name: 'Java', level: 'Intermediate', progress: 65 }
    ],
    frameworks: [
        { icon: 'devicon-fastapi-plain colored', name: 'FastAPI', level: 'Expert', progress: 95 },
        { icon: 'devicon-django-plain colored', name: 'Django', level: 'Advanced', progress: 88 },
        { icon: 'devicon-flask-original', name: 'Flask', level: 'Intermediate', progress: 75 },
        { icon: 'devicon-sqlalchemy-plain', name: 'SQLAlchemy', level: 'Advanced', progress: 85 }
    ],
    datascience: [
        { icon: 'devicon-numpy-original colored', name: 'NumPy', level: 'Advanced', progress: 88 },
        { icon: 'devicon-pandas-original colored', name: 'Pandas', level: 'Expert', progress: 92 },
        { icon: 'fas fa-chart-line', name: 'Matplotlib', level: 'Advanced', progress: 82 },
        { icon: 'fas fa-brain', name: 'Scikit-learn', level: 'Advanced', progress: 80 },
        { icon: 'fas fa-flask', name: 'SciPy', level: 'Intermediate', progress: 75 }
    ],
    databases: [
        { icon: 'devicon-postgresql-plain colored', name: 'PostgreSQL', level: 'Advanced', progress: 88 },
        { icon: 'devicon-mysql-plain colored', name: 'MySQL', level: 'Advanced', progress: 85 },
        { icon: 'devicon-mongodb-plain colored', name: 'MongoDB', level: 'Intermediate', progress: 70 },
        { icon: 'devicon-redis-plain colored', name: 'Redis', level: 'Intermediate', progress: 72 }
    ],
    tools: [
        { icon: 'devicon-docker-plain colored', name: 'Docker', level: 'Advanced', progress: 82 },
        { icon: 'devicon-git-plain colored', name: 'Git', level: 'Expert', progress: 90 },
        { icon: 'devicon-amazonwebservices-original colored', name: 'AWS', level: 'Intermediate', progress: 70 },
        { icon: 'devicon-linux-plain', name: 'Linux', level: 'Advanced', progress: 80 },
        { icon: 'devicon-github-original', name: 'GitHub Actions', level: 'Intermediate', progress: 68 }
    ]
};

// ==================== Projects Data ====================
const projectsData = [
    {
        "category": "saas",
        "icon": "fas fa-chart-line",
        "title": "Trendscout - Real-time Social Listening SaaS",
        "description": "AI-powered social listening platform tracking brand mentions across Reddit, X/Twitter, and 10+ platforms with sentiment analysis and trend alerts. Automates web scraping + LLM analysis pipeline for real-time insights.",
        "problem": "Manual social monitoring missed critical trends and competitor insights across fragmented platforms. Brands lose opportunities due to delayed detection of mentions, sentiment shifts, and emerging discussions.",
        "solution": "Built automated web scraping + LLM analysis pipeline delivering real-time alerts, sentiment analysis, trend detection, and competitor tracking. Reduces monitoring time by 85% while providing actionable dashboards and notifications.",
        "tech": ["FastAPI", "Python", "Redis (caching/real-time)", "PostgreSQL (data storage)", "Stripe (payments)", "Docker (deployment)", "LLM APIs (sentiment/trend analysis)"],
        "github": "#",
        "demo": "https://trendscout.in"
    },
    {
        "category": "traveltech",
        "icon": "fas fa-map-marked-alt",
        "title": "Localense - Local Travel Discovery Platform",
        "description": "Localense is an AI-powered travel discovery platform that connects travelers with authentic local experiences, hidden gems, and community-verified recommendations instead of biased, pay-to-play listings.",
        "problem": "Travelers are frustrated with fake reviews, influencer-driven spots, outdated listings, and manipulated rankings on platforms like TripAdvisor and traditional travel apps. Authentic local experiences are hard to find across fragmented platforms.",
        "solution": "Localense uses AI personalization, community verification, and local ambassador curation to deliver real, trusted recommendations. It combines map-based discovery, short-form video experiences, and smart itinerary building for modern travelers.",
        "tech": [
            "FastAPI",
            "Python",
            "PostgreSQL",
            "Supabase",
            "Redis",
            "React",
            "Next.js",
            "Docker",
            "Google Maps API",
            "Google Places API",
            "TikTok oEmbed API",
            "LLM APIs",
            "Stripe"
        ],
        "features": [
            "AI-personalized local recommendations",
            "Community-verified local guides",
            "Interactive map-based discovery",
            "Hidden gems and non-touristy experiences",
            "Short-form travel video integration",
            "Smart itinerary builder",
            "Verified local ambassador system",
            "Travel style profiling",
            "Offline city guides",
            "Creator monetization model"
        ],
        "mvp_features": [
            "City-specific curated guides (3–5 cities)",
            "User travel style onboarding",
            "AI recommendation engine",
            "Google Maps integration",
            "Community reviews and ratings",
            "Video experience embeds",
            "Basic itinerary builder",
            "User dashboard",
            "Authentication system"
        ],
        "monetization": [
            "Freemium model",
            "Pro subscription",
            "Premium subscription",
            "Affiliate commissions (hotels, tours, experiences)",
            "Creator revenue sharing",
            "Booking partnerships"
        ],
        "target_users": [
            "Solo travelers",
            "Digital nomads",
            "Gen Z travelers",
            "Millennials",
            "Local explorers",
            "Experience-based travelers"
        ],
        "positioning": "The Anti-TripAdvisor for modern travelers – authentic, community-driven, AI-personalized travel discovery.",
        "github": "#",
        "demo": "https://www.locallens.fun/"
    },
    {
        category: 'api',
        icon: 'fas fa-file-alt',
        title: 'Automated File Migration System',
        description: 'Enterprise-grade automated file migration engine for Salesforce integration with scalable batch processing, metadata validation, and full audit traceability.',
        problem: 'Manual file transfers for large enterprise datasets were error-prone, slow, lacked traceability, and caused frequent data loss, duplication, and compliance risks.',
        solution: 'Designed and built a fully automated migration pipeline with intelligent batching, retry mechanisms, validation layers, and audit logging, reducing migration time by 80% while achieving 99.9% success reliability.',
        features: [
            'Batch-based file migration',
            'Salesforce object mapping',
            'Metadata validation engine',
            'Schema compatibility checks',
            'Retry & auto-recovery logic',
            'Failure isolation handling',
            'Audit trail logging',
            'Migration status tracking',
            'Rollback support',
            'Checksum verification',
            'Duplicate detection',
            'Progress monitoring dashboard'
        ],
        architecture: [
            'API-driven migration orchestration',
            'Queue-based batch processing',
            'Asynchronous worker system',
            'Idempotent job execution',
            'Distributed logging pipeline',
            'Fault-tolerant processing design'
        ],
        tech: [
            'FastAPI',
            'Python',
            'SQLAlchemy',
            'PostgreSQL',
            'Redis',
            'Celery',
            'Salesforce API',
            'AWS S3',
            'Docker',
            'Alembic',
            'JWT Auth',
            'Structured Logging'
        ],
        capabilities: [
            'Enterprise-scale data handling',
            'High-availability processing',
            'Horizontal scalability',
            'Compliance-ready audit logs',
            'Secure credential handling',
            'Token-based authentication',
            'Observability & monitoring'
        ],
        metrics: {
            migration_time_reduction: '80%',
            success_rate: '99.9%',
            failure_recovery: 'Automatic',
            processing_mode: 'Asynchronous batch execution'
        },
        github: '#',
        demo: 'https://dev.datamatter.tech/'
    },
    {
        "category": "ai-ml",
        "icon": "fas fa-brain",
        "title": "SkillMatch AI – Intelligent Career Path & Skill Gap Analyzer",
        "description": "AI-powered career intelligence platform that analyzes resumes, skills, and goals to predict best-fit roles, identify skill gaps, and generate personalized learning roadmaps.",
        "problem": "Professionals lack clear visibility into career readiness, required skills for target roles, and structured learning paths, leading to inefficient upskilling and poor career decisions.",
        "solution": "Built an AI/ML pipeline using NLP, vector embeddings, clustering models, and skill gap analysis to deliver role predictions, readiness scores, and AI-generated personalized learning paths.",
        "tech": [
            "FastAPI",
            "Python",
            "PostgreSQL",
            "Redis",
            "Docker",
            "spaCy",
            "scikit-learn",
            "Sentence-Transformers",
            "FAISS",
            "NumPy",
            "Pandas",
            "MLflow",
            "LLM APIs"
        ],
        "github": "#",
        "demo": "https://skillmatch.ai"
    }

];

// ==================== Experience Data ====================
const experienceData = [
    {
        title: 'Backend Developer',
        company: 'Datamatter Technologies',
        duration: 'April 2025 - Present',
        achievements: [
            'Developed RESTful APIs using FastAPI serving 100K+ daily requests with 99.9% uptime',
            'Optimized database queries reducing API response time by 40%',
            'Implemented comprehensive test suites achieving 85% code coverage',
            'Led migration from monolith to microservices architecture'
        ],
        tech: ['FastAPI', 'PostgreSQL', 'Redis', 'Github Actions', 'AWS']
    },
    {
        title: 'Python Developer',
        company: 'Datamatter Technologies',
        duration: 'April 2024 - March 2025',
        achievements: [
            'Built data pipelines processing 5M+ records daily using Pandas and NumPy',
            'Developed Django web applications for internal analytics dashboards',
            'Created ML models for customer churn prediction with 87% accuracy',
            'Automated reporting workflows saving 20+ hours weekly'
        ],
        tech: ['Django', 'Pandas', 'Scikit-learn', 'MySQL']
    }
];

// ==================== Initialize ====================
document.addEventListener('DOMContentLoaded', () => {
    initNavigation();
    initThemeToggle();
    initTypingEffect();
    initSkillsTabs();
    renderProjects();
    initProjectFilters();
    renderExperience();
    initScrollAnimations();
    initContactForm();
    initCounterAnimation();
});

// ==================== Navigation ====================
function initNavigation() {
    // Mobile menu toggle
    navToggle?.addEventListener('click', () => {
        navMenu?.classList.add('show');
    });

    navClose?.addEventListener('click', () => {
        navMenu?.classList.remove('show');
    });

    // Close menu on link click
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            navMenu?.classList.remove('show');
        });
    });

    // Header scroll effect
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header?.classList.add('scrolled');
        } else {
            header?.classList.remove('scrolled');
        }

        // Back to top visibility
        if (window.scrollY > 500) {
            backToTop?.classList.add('visible');
        } else {
            backToTop?.classList.remove('visible');
        }

        // Active nav link based on scroll
        updateActiveNavLink();
    });
}

function updateActiveNavLink() {
    const sections = document.querySelectorAll('section[id]');
    const scrollY = window.scrollY;

    sections.forEach(section => {
        const sectionTop = section.offsetTop - 100;
        const sectionHeight = section.offsetHeight;
        const sectionId = section.getAttribute('id');
        const navLink = document.querySelector(`.nav__link[href="#${sectionId}"]`);

        if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
            navLinks.forEach(link => link.classList.remove('active'));
            navLink?.classList.add('active');
        }
    });
}

// ==================== Theme Toggle ====================
function initThemeToggle() {
    const savedTheme = localStorage.getItem('theme') || 'dark';
    document.documentElement.setAttribute('data-theme', savedTheme);
    updateThemeIcon(savedTheme);

    themeToggle?.addEventListener('click', () => {
        const currentTheme = document.documentElement.getAttribute('data-theme');
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';

        document.documentElement.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
        updateThemeIcon(newTheme);
    });
}

function updateThemeIcon(theme) {
    const icon = themeToggle?.querySelector('i');
    if (icon) {
        icon.className = theme === 'dark' ? 'fas fa-sun' : 'fas fa-moon';
    }
}

// ==================== Typing Effect ====================
function initTypingEffect() {
    const texts = ['Backend Developer', 'Python Expert', 'API Architect', 'Data Enthusiast'];
    let textIndex = 0;
    let charIndex = 0;
    let isDeleting = false;

    function type() {
        const currentText = texts[textIndex];

        if (isDeleting) {
            typingText.textContent = currentText.substring(0, charIndex - 1);
            charIndex--;
        } else {
            typingText.textContent = currentText.substring(0, charIndex + 1);
            charIndex++;
        }

        let typeSpeed = isDeleting ? 50 : 100;

        if (!isDeleting && charIndex === currentText.length) {
            typeSpeed = 2000;
            isDeleting = true;
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            textIndex = (textIndex + 1) % texts.length;
            typeSpeed = 500;
        }

        setTimeout(type, typeSpeed);
    }

    if (typingText) {
        type();
    }
}

// ==================== Skills Tabs ====================
function initSkillsTabs() {
    renderSkillsPanel('languages');

    skillsTabs.forEach(tab => {
        tab.addEventListener('click', () => {
            skillsTabs.forEach(t => t.classList.remove('active'));
            tab.classList.add('active');

            const tabId = tab.getAttribute('data-tab');
            renderSkillsPanel(tabId);
        });
    });
}

function renderSkillsPanel(category) {
    const skills = skillsData[category];
    if (!skills || !skillsContent) return;

    const html = `
        <div class="skills__panel active" id="${category}">
            <div class="skills__grid">
                ${skills.map(skill => `
                    <div class="skill-card">
                        <div class="skill-card__icon">
                            <i class="${skill.icon}"></i>
                        </div>
                        <h3 class="skill-card__title">${skill.name}</h3>
                        <span class="skill-card__level">${skill.level}</span>
                        <div class="skill-card__bar">
                            <div class="skill-card__progress" style="--progress: ${skill.progress}%"></div>
                        </div>
                    </div>
                `).join('')}
            </div>
        </div>
    `;

    skillsContent.innerHTML = html;
}

// ==================== Projects ====================
function renderProjects(filter = 'all') {
    if (!projectsGrid) return;

    const filteredProjects = filter === 'all'
        ? projectsData
        : projectsData.filter(p => p.category === filter);

    const html = filteredProjects.map(project => `
        <article class="project-card" data-category="${project.category}">
            <div class="project-card__image">
                <div class="project-card__placeholder">
                    <i class="${project.icon}"></i>
                </div>
                <div class="project-card__overlay">
                    <div class="project-card__links">
                        <a href="${project.demo}" class="project-card__link" title="View Live" target="_blank">
                            <i class="fas fa-external-link-alt"></i>
                        </a>
                        <a href="${project.github}" class="project-card__link" title="View Code" target="_blank">
                            <i class="fab fa-github"></i>
                        </a>
                    </div>
                </div>
            </div>
            <div class="project-card__content">
                <span class="project-card__category">${project.category === 'api' ? 'API Development' : project.category === 'data' ? 'Data Science' : 'Full Stack'}</span>
                <h3 class="project-card__title">${project.title}</h3>
                <p class="project-card__description">${project.description}</p>
                <div class="project-card__details">
                    <div class="project-card__problem"><strong>Challenge:</strong> ${project.problem}</div>
                    <div class="project-card__solution"><strong>Solution:</strong> ${project.solution}</div>
                </div>
                <div class="project-card__tech">
                    ${project.tech.map(t => `<span class="tech-badge">${t}</span>`).join('')}
                </div>
            </div>
        </article>
    `).join('');

    projectsGrid.innerHTML = html;
}

function initProjectFilters() {
    projectFilters.forEach(filter => {
        filter.addEventListener('click', () => {
            projectFilters.forEach(f => f.classList.remove('active'));
            filter.classList.add('active');

            const filterValue = filter.getAttribute('data-filter');
            renderProjects(filterValue);
        });
    });
}

// ==================== Experience ====================
function renderExperience() {
    if (!experienceTimeline) return;

    const html = experienceData.map(exp => `
        <div class="timeline__item">
            <div class="timeline__marker">
                <div class="timeline__dot"></div>
            </div>
            <div class="timeline__content">
                <div class="timeline__header">
                    <div class="timeline__info">
                        <h3 class="timeline__title">${exp.title}</h3>
                        <span class="timeline__company">
                            <i class="fas fa-building"></i>
                            ${exp.company}
                        </span>
                    </div>
                    <span class="timeline__duration">
                        <i class="fas fa-calendar-alt"></i>
                        ${exp.duration}
                    </span>
                </div>
                <ul class="timeline__achievements">
                    ${exp.achievements.map(a => `
                        <li>
                            <i class="fas fa-check-circle"></i>
                            ${a}
                        </li>
                    `).join('')}
                </ul>
                <div class="timeline__tech">
                    ${exp.tech.map(t => `<span class="tech-badge tech-badge--small">${t}</span>`).join('')}
                </div>
            </div>
        </div>
    `).join('');

    experienceTimeline.innerHTML = html;
}

// ==================== Scroll Animations ====================
function initScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
            }
        });
    }, observerOptions);

    document.querySelectorAll('.section__header, .skill-card, .project-card, .timeline__item, .contact__card').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });

    // Add animation class styles
    const style = document.createElement('style');
    style.textContent = `
        .animate-in {
            opacity: 1 !important;
            transform: translateY(0) !important;
        }
    `;
    document.head.appendChild(style);
}

// ==================== Counter Animation ====================
function initCounterAnimation() {
    const counters = document.querySelectorAll('.stat__number');

    const observerOptions = {
        threshold: 0.5
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const counter = entry.target;
                const target = parseInt(counter.getAttribute('data-count'));
                animateCounter(counter, target);
                observer.unobserve(counter);
            }
        });
    }, observerOptions);

    counters.forEach(counter => observer.observe(counter));
}

function animateCounter(element, target) {
    let current = 0;
    const increment = target / 50;
    const duration = 1500;
    const stepTime = duration / 50;

    const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
            element.textContent = target;
            clearInterval(timer);
        } else {
            element.textContent = Math.floor(current);
        }
    }, stepTime);
}

// ==================== Contact Form ====================
// ==================== Contact Form ====================
function initContactForm() {
    // Initialize EmailJS
    try {
        emailjs.init("a7PGVuzX-DVqabcRX");
    } catch (error) {
        console.error("EmailJS initialization failed:", error);
        return;
    }

    contactForm?.addEventListener('submit', (e) => {
        e.preventDefault();

        const submitBtn = contactForm.querySelector('button[type="submit"]');
        const originalText = submitBtn.innerHTML;

        // Show loading state
        submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';
        submitBtn.disabled = true;

        // Send email using EmailJS
        emailjs.sendForm('service_v3vwky3', 'template_yot8ka5', contactForm)
            .then(() => {
                // Success
                submitBtn.innerHTML = '<i class="fas fa-check"></i> Message Sent!';
                submitBtn.style.background = 'linear-gradient(135deg, #22c55e 0%, #16a34a 100%)';
                contactForm.reset();

                setTimeout(() => {
                    submitBtn.innerHTML = originalText;
                    submitBtn.style.background = '';
                    submitBtn.disabled = false;
                }, 3000);
            })
            .catch((error) => {
                // Error
                console.error('FAILED...', error);
                submitBtn.innerHTML = '<i class="fas fa-exclamation-circle"></i> Failed to send';
                submitBtn.style.background = 'linear-gradient(135deg, #ef4444 0%, #dc2626 100%)';

                setTimeout(() => {
                    submitBtn.innerHTML = originalText;
                    submitBtn.style.background = '';
                    submitBtn.disabled = false;
                }, 3000);
            });
    });
}

// ==================== Smooth Scroll for Anchor Links ====================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});
