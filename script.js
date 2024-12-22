document.addEventListener("DOMContentLoaded", () => {
    const projectCards = document.querySelectorAll('.project-card');
    const modal = document.getElementById('projectModal');
    const modalTitle = document.getElementById('modalTitle');
    const modalDescription = document.getElementById('modalDescription');
    const modalFeatures = document.getElementById('modalFeatures');
    const modalTechStack = document.getElementById('modalTechStack');
    const closeModal = document.querySelector('.close-modal');

    const projectDetails = {
        1: {
            title: "E-commerce Website",
            description: "Moderna e-commerce platforma dizajnirana za optimalno korisničko iskustvo i jednostavnu online kupovinu. Implementiran kompletan sistem za upravljanje proizvodima, narudžbama i korisnicima.",
            features: [
                "Napredna pretraga i filtriranje proizvoda",
                "Sistem košarice sa real-time ažuriranjem",
                "Sigurna online naplata preko Stripe-a",
                "Praćenje statusa narudžbe u realnom vremenu",
                "Administratorski panel za upravljanje proizvodima",
                "Sistem za upravljanje korisničkim računima"
            ],
            technologies: [
                "React.js", "Node.js", "Express", "MongoDB",
                "Redux", "Stripe API", "AWS S3", "Docker"
            ]
        },
        2: {
            title: "Portfolio Website",
            description: "Moderno dizajnirana portfolio stranica sa fokusom na prezentaciju projekata i profesionalnih dostignuća. Implementirane napredne animacije i interakcije za poboljšano korisničko iskustvo.",
            features: [
                "Dinamički prikaz projekata sa filterima",
                "Napredne CSS animacije i tranzicije",
                "Integrisana kontakt forma sa validacijom",
                "Optimizovano učitavanje slika",
                "Blog sekcija sa CMS funkcionalnošću",
                "Višejezična podrška"
            ],
            technologies: [
                "HTML5", "CSS3", "JavaScript", "GSAP",
                "Webpack", "Sass", "i18next", "Firebase"
            ]
        },
        3: {
            title: "Blog Platform",
            description: "Skalabilna blog platforma sa naprednim sistemom za upravljanje sadržajem. Fokus na performanse i SEO optimizaciju uz podršku za više autora i kategorija.",
            features: [
                "Rich text editor sa podrškom za markdown",
                "Sistem za upravljanje kategorijama i tagovima",
                "Napredna pretraga sadržaja",
                "Automatsko generisanje SEO meta podataka",
                "Sistem za komentare sa moderacijom",
                "Analitika i praćenje performansi"
            ],
            technologies: [
                "PHP", "Laravel", "MySQL", "Redis",
                "TinyMCE", "ElasticSearch", "AWS", "Nginx"
            ]
        },
        4: {
            title: "Task Manager App",
            description: "Kolaborativna aplikacija za upravljanje projektima i zadacima u realnom vremenu. Dizajnirana za timove koji rade na daljinu sa fokusom na produktivnost.",
            features: [
                "Real-time kolaboracija i chat",
                "Kanban board sa drag-and-drop funkcionalnosti",
                "Sistem za praćenje vremena rada",
                "Automatizacija radnih tokova",
                "Integracija sa kalendarem",
                "Napredni sistem notifikacija"
            ],
            technologies: [
                "Vue.js", "Vuex", "Firebase", "Vuetify",
                "WebSocket", "Cloud Functions", "Jest", "PWA"
            ]
        }
    };

    projectCards.forEach(card => {
        card.addEventListener('click', () => {
            const projectId = card.getAttribute('data-project');
            const project = projectDetails[projectId];
            
            modalTitle.textContent = project.title;
            modalDescription.textContent = project.description;
            
            modalFeatures.innerHTML = project.features
                .map(feature => `<li class="feature-item">${feature}</li>`)
                .join('');
            
            modalTechStack.innerHTML = project.technologies
                .map(tech => `<span class="tech-tag">${tech}</span>`)
                .join('');
            
            modal.style.display = 'flex';
        });
    });

    closeModal.addEventListener('click', () => {
        modal.style.display = 'none';
    });

    window.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.style.display = 'none';
        }
    });

    projectCards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.style.transform = 'translateY(-10px)';
            card.style.boxShadow = '0 5px 15px rgba(183, 75, 75, 0.3)';
        });

        card.addEventListener('mouseleave', () => {
            card.style.transform = 'translateY(0)';
            card.style.boxShadow = 'none';
        });
    });
});