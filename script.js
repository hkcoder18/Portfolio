// ==================== DOM Elements ====================
const header = document.getElementById('header');
const navMenu = document.getElementById('nav-menu');
const navToggle = document.getElementById('nav-toggle');
const navClose = document.getElementById('nav-close');
const navLinks = document.querySelectorAll('.nav__link');
const backToTop = document.getElementById('back-to-top');
const skillsGrid = document.getElementById('skills-grid');
const projectsGrid = document.getElementById('projects-grid');
const experienceTimeline = document.getElementById('experience-timeline');

// ==================== Skills Data ====================
const skillsData = [
    {
        title: 'Backend',
        items: ['Python', 'FastAPI', 'Django', 'Flask', 'SQLAlchemy']
    },
    {
        title: 'Databases',
        items: ['PostgreSQL', 'MySQL', 'MongoDB', 'Redis']
    },
    {
        title: 'Data Science',
        items: ['NumPy', 'Pandas', 'Scikit-learn', 'Matplotlib', 'SciPy']
    },
    {
        title: 'APIs & Auth',
        items: ['REST APIs', 'JWT Auth', 'OAuth', 'RBAC']
    },
    {
        title: 'DevOps & Tools',
        items: ['Docker', 'Git', 'AWS', 'Linux', 'GitHub Actions']
    }
];

// ==================== Projects Data ====================
const projectsData = [
    {
        category: 'saas',
        title: 'Trendscout — Real-time Social Listening SaaS',
        description: 'AI-powered social listening platform tracking brand mentions across Reddit, X/Twitter, and 10+ platforms with sentiment analysis and trend alerts.',
        tech: ['FastAPI', 'Python', 'Redis', 'PostgreSQL', 'Stripe', 'Docker', 'LLM APIs'],
        github: '#',
        demo: 'https://trendscout.in'
    },
    {
        category: 'traveltech',
        title: 'Localense — Local Travel Discovery Platform',
        description: 'AI-powered travel discovery platform connecting travelers with authentic local experiences, hidden gems, and community-verified recommendations.',
        tech: ['FastAPI', 'Python', 'PostgreSQL', 'Supabase', 'Redis', 'Next.js', 'Docker'],
        github: '#',
        demo: 'https://www.locallens.fun/'
    },
    {
        category: 'enterprise',
        title: 'Automated File Migration System',
        description: 'Enterprise-grade automated file migration engine for Salesforce integration with scalable batch processing, metadata validation, and full audit traceability.',
        tech: ['FastAPI', 'Python', 'SQLAlchemy', 'PostgreSQL', 'Redis', 'Celery', 'AWS S3'],
        github: '#',
        demo: 'https://dev.datamatter.tech/'
    }
];

// ==================== Experience Data ====================
const experienceData = [
    {
        title: 'Python Developer',
        company: 'Datamatter Technologies',
        duration: 'April 2024 — June 2026',
        achievements: [
            'Developed RESTful APIs using FastAPI serving 100K+ daily requests with 99.9% uptime',
            'Optimized database queries reducing API response time by 40%',
            'Implemented comprehensive test suites achieving 85% code coverage',
            'Led migration from monolith to microservices architecture'
        ],
        tech: ['FastAPI', 'PostgreSQL', 'Redis', 'GitHub Actions', 'AWS']
    },
    {
        title: 'Software Engineer',
        company: 'Sattrix Software Solutions',
        duration: 'July 2026 — Present',
        achievements: [
            'Contributed to the NewEvol cybersecurity product, working on SIEM capabilities for security monitoring and threat detection.',
            'Developed and configured SIEM detection rules to support security event analysis and threat identification.',
            'Worked on security reporting functionality to present meaningful insights from security data.',
            'Built dynamic dashboards with configurable visualizations for improved security monitoring and analytics.',
            'Collaborated on product features to improve visibility into security events and support security operations workflows.'
        ],
        tech: ['FastAPI', 'Python', 'MySQL', 'DuckDB', 'Redis', 'Gitlab', 'GCP']
    }
];

// ==================== Initialize ====================
document.addEventListener('DOMContentLoaded', () => {
    initNavigation();
    renderSkills();
    renderProjects();
    renderExperience();
    initScrollAnimations();
});

// ==================== Navigation ====================
function initNavigation() {
    navToggle?.addEventListener('click', () => {
        navMenu?.classList.add('show');
    });

    navClose?.addEventListener('click', () => {
        navMenu?.classList.remove('show');
    });

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

        // Back to top
        if (window.scrollY > 500) {
            backToTop?.classList.add('visible');
        } else {
            backToTop?.classList.remove('visible');
        }

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

// ==================== Skills ====================
function renderSkills() {
    if (!skillsGrid) return;

    const html = skillsData.map(group => `
        <div class="skills__group">
            <h3 class="skills__group-title">${group.title}</h3>
            <ul class="skills__list">
                ${group.items.map(item => `<li class="skills__item">${item}</li>`).join('')}
            </ul>
        </div>
    `).join('');

    skillsGrid.innerHTML = html;
}

// ==================== Projects ====================
function renderProjects() {
    if (!projectsGrid) return;

    const categoryLabels = {
        'saas': 'SaaS Platform',
        'traveltech': 'Travel Tech',
        'enterprise': 'Enterprise',
        'api': 'API Development',
        'ai-ml': 'AI / Machine Learning',
        'data': 'Data Science'
    };

    const html = projectsData.map(project => `
        <div class="project-item reveal">
            <div class="project-item__info">
                <span class="project-item__category">${categoryLabels[project.category] || project.category}</span>
                <h3 class="project-item__title">${project.title}</h3>
                <p class="project-item__desc">${project.description}</p>
                <div class="project-item__tech">
                    ${project.tech.map(t => `<span class="project-item__tech-tag">${t}</span>`).join('')}
                </div>
            </div>
            <div class="project-item__links">
                ${project.demo && project.demo !== '#' ? `<a href="${project.demo}" class="project-item__link" target="_blank"><i class="fas fa-external-link-alt"></i> Live</a>` : ''}
                ${project.github && project.github !== '#' ? `<a href="${project.github}" class="project-item__link" target="_blank"><i class="fab fa-github"></i> Code</a>` : ''}
            </div>
        </div>
    `).join('');

    projectsGrid.innerHTML = html;
}

// ==================== Experience ====================
function renderExperience() {
    if (!experienceTimeline) return;

    const html = experienceData.map(exp => `
        <div class="experience__item reveal">
            <div class="experience__item-header">
                <div>
                    <h3 class="experience__item-title">${exp.title}</h3>
                    <span class="experience__item-company">${exp.company}</span>
                </div>
                <span class="experience__item-duration">${exp.duration}</span>
            </div>
            <ul class="experience__item-achievements">
                ${exp.achievements.map(a => `<li>${a}</li>`).join('')}
            </ul>
            <div class="experience__item-tech">
                ${exp.tech.map(t => `<span class="experience__tech-tag">${t}</span>`).join('')}
            </div>
        </div>
    `).join('');

    experienceTimeline.innerHTML = html;
}

// ==================== Scroll Animations ====================
function initScrollAnimations() {
    // Respect reduced motion preference
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -40px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);

    document.querySelectorAll('.reveal, .reveal-stagger').forEach(el => {
        observer.observe(el);
    });
}

// ==================== Smooth Scroll ====================
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
