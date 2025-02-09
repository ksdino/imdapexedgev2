// Language translations object
const translations = {
    fr: {
        nav: {
            home: "Accueil",
            about: "À propos",
            market: "Prix du marché",
            contact: "Contact"
        },
        main: {
            title: "Contactez-nous",
            email: {
                title: "E-mail",
                value: "contact@immediateapexedge.com"
            },
            address: {
                title: "Adresse",
                value: "Immediate Apex Edge\n10 Avenue Montaigne\nParis 75008"
            },
            form: {
                title: "Envoyez-nous un message",
                name: "Nom complet",
                namePlaceholder: "Jean Dupont",
                email: "Adresse e-mail",
                emailPlaceholder: "jean@exemple.com",
                subject: "Sujet",
                subjectPlaceholder: "Comment pouvons-nous vous aider ?",
                message: "Message",
                messagePlaceholder: "Votre message ici...",
                sendButton: "Envoyer le message",
                sending: "Envoi en cours...",
                sent: "Message envoyé !"
            }
        },
        footer: {
            company: "Immediate Apex Edge",
            description: "Profitez d'une technologie de trading révolutionnaire combinant la puissance de l'analyse IA et la précision stratégique pour maximiser vos opportunités sur les marchés financiers.",
            startTrading: "Commencer à trader",
            quickLinks: "Liens rapides",
            privacyPolicy: "Politique de confidentialité",
            termsConditions: "Conditions générales",
            contacts: "Contacts",
            address: "10 Avenue Montaigne, 75008 Paris",
            website: "immediateapexedge.com",
            copyright: "© 2025 Immediate Apex Edge. Tous droits réservés."
        }
    },
    en: {
        nav: {
            home: "Home",
            about: "About",
            market: "Market Price",
            contact: "Contact"
        },
        main: {
            title: "Contact Us",
            email: {
                title: "E-mail",
                value: "contact@immediateapexedge.com"
            },
            address: {
                title: "Address",
                value: "Immediate Apex Edge\n10 Avenue Montaigne\nParis 75008"
            },
            form: {
                title: "Send us a message",
                name: "Full Name",
                namePlaceholder: "John Doe",
                email: "Email Address",
                emailPlaceholder: "john@example.com",
                subject: "Subject",
                subjectPlaceholder: "How can we help?",
                message: "Message",
                messagePlaceholder: "Your message here...",
                sendButton: "Send Message",
                sending: "Sending...",
                sent: "Message Sent!"
            }
        },
        footer: {
            company: "Immediate Apex Edge",
            description: "Take advantage of revolutionary trading technology combining the power of AI analysis and strategic precision to maximize your opportunities in the financial markets.",
            startTrading: "Start Trading Now",
            quickLinks: "Quick Links",
            privacyPolicy: "Privacy Policy",
            termsConditions: "Terms and Conditions",
            contacts: "Contacts",
            address: "10 Avenue Montaigne, 75008 Paris",
            website: "immediateapexedge.com",
            copyright: "© 2025 Immediate Apex Edge. All Rights Reserved."
        }
    }
};

// Initialize the page in French when the DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    // Set initial language to French
    setLanguage('fr');
    
    // Update language buttons to show current language
    document.getElementById('langBtnText').textContent = 'FR';
    document.getElementById('mobileLangBtnText').textContent = 'FR';
    
    // Set up mobile menu functionality
    setupMobileMenu();
    
    // Set up form submission handling
    setupFormHandling();
});

// Function to toggle between languages
function toggleLanguage() {
    const currentLang = document.getElementById('langBtnText').textContent.toLowerCase();
    const newLang = currentLang === 'fr' ? 'en' : 'fr';
    setLanguage(newLang);
    
    // Update language buttons
    document.getElementById('langBtnText').textContent = newLang.toUpperCase();
    document.getElementById('mobileLangBtnText').textContent = newLang.toUpperCase();
}

// Function to set the page language
function setLanguage(lang) {
    const t = translations[lang];
    
    // Update document title
    document.title = `${t.main.title} - Immediate Apex Edge`;
    
    // Update navigation
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks[0].textContent = t.nav.home;
    navLinks[1].textContent = t.nav.about;
    navLinks[2].textContent = t.nav.market;
    navLinks[3].textContent = t.nav.contact;
    
    // Update mobile navigation
    const mobileLinks = document.getElementById('mobileMenu').getElementsByTagName('a');
    mobileLinks[0].textContent = t.nav.home;
    mobileLinks[1].textContent = t.nav.about;
    mobileLinks[2].textContent = t.nav.market;
    mobileLinks[3].textContent = t.nav.contact;
    
    // Update main content
    document.querySelector('h1').textContent = t.main.title;
    
    // Update email card
    document.querySelector('.contact-card:nth-child(1) h3').textContent = t.main.email.title;
    
    // Update address card
    document.querySelector('.contact-card:nth-child(2) h3').textContent = t.main.address.title;
    document.querySelector('.contact-card:nth-child(2) p').innerHTML = t.main.address.value.replace(/\n/g, '<br>');
    
    // Update contact form
    const form = document.getElementById('contactForm');
    form.parentElement.querySelector('h3').textContent = t.main.form.title;
    
    // Update form labels and placeholders
    document.querySelector('label[for="name"]').textContent = t.main.form.name;
    document.getElementById('name').placeholder = t.main.form.namePlaceholder;
    
    document.querySelector('label[for="email"]').textContent = t.main.form.email;
    document.getElementById('email').placeholder = t.main.form.emailPlaceholder;
    
    document.querySelector('label[for="subject"]').textContent = t.main.form.subject;
    document.getElementById('subject').placeholder = t.main.form.subjectPlaceholder;
    
    document.querySelector('label[for="message"]').textContent = t.main.form.message;
    document.getElementById('message').placeholder = t.main.form.messagePlaceholder;
    
    // Update submit button
    const submitButton = form.querySelector('button[type="submit"] span');
    submitButton.textContent = t.main.form.sendButton;
    
    // Update footer
    const footerCols = document.querySelectorAll('.footer-col');
    footerCols[0].querySelector('h3').textContent = t.footer.company;
    footerCols[0].querySelector('p').textContent = t.footer.description;
    footerCols[0].querySelector('.cta-button span').textContent = t.footer.startTrading;
    
    footerCols[1].querySelector('h3').textContent = t.footer.quickLinks;
    footerCols[1].querySelectorAll('a')[0].textContent = t.footer.privacyPolicy;
    footerCols[1].querySelectorAll('a')[1].textContent = t.footer.termsConditions;
    
    footerCols[2].querySelector('h3').textContent = t.footer.contacts;
    
    // Update copyright
    document.querySelector('.footer-section .text-gray-400').textContent = t.footer.copyright;
}

// Function to set up mobile menu functionality
function setupMobileMenu() {
    const menuBtn = document.getElementById('menuBtn');
    const mobileMenu = document.getElementById('mobileMenu');

    menuBtn.addEventListener('click', () => {
        mobileMenu.classList.toggle('hidden');
        if (!mobileMenu.classList.contains('hidden')) {
            mobileMenu.classList.add('animate__fadeIn');
        } else {
            mobileMenu.classList.remove('animate__fadeIn');
        }
    });

    document.addEventListener('click', (e) => {
        if (!menuBtn.contains(e.target) && !mobileMenu.contains(e.target)) {
            mobileMenu.classList.add('hidden');
        }
    });
}

// Function to set up form handling
function setupFormHandling() {
    const contactForm = document.getElementById('contactForm');
    const submitButton = contactForm.querySelector('button[type="submit"]');

    contactForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        
        const currentLang = document.getElementById('langBtnText').textContent.toLowerCase();
        const t = translations[currentLang];
        
        submitButton.disabled = true;
        submitButton.innerHTML = `
            <svg class="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
            <span>${t.main.form.sending}</span>
        `;

        const formData = {
            name: document.getElementById('name').value,
            email: document.getElementById('email').value,
            subject: document.getElementById('subject').value,
            message: document.getElementById('message').value
        };

        await new Promise(resolve => setTimeout(resolve, 1500));
        
        console.log('Form submitted:', formData);
        contactForm.reset();
        
        submitButton.innerHTML = `
            <svg class="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
            </svg>
            <span>${t.main.form.sent}</span>
        `;

        setTimeout(() => {
            submitButton.disabled = false;
            submitButton.innerHTML = `
                <span>${t.main.form.sendButton}</span>
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
            `;
        }, 2000);
    });
}
