// contactfrench.js
const translations = {
    en: {
        // Navigation
        navigation: {
            home: "Home",
            about: "About",
            market: "Market Price",
            contact: "Contact"
        },
        // Main content
        main: {
            title: "Contact Us",
            email: {
                title: "E-mail",
                address: "contact@immediateapexedge.com"
            },
            address: {
                title: "Address",
                line1: "Immediate Apex Edge",
                line2: "10 Avenue Montaigne",
                line3: "Paris"
            },
            form: {
                title: "Send us a message",
                fullName: "Full Name",
                fullNamePlaceholder: "John Doe",
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
        // Footer
        footer: {
            description: "Take advantage of revolutionary trading technology combining the power of AI analysis and strategic precision to maximize your opportunities in the financial markets.",
            startTrading: "Start Trading Now",
            quickLinks: "Quick Links",
            privacyPolicy: "Privacy Policy",
            termsConditions: "Terms and Conditions",
            contacts: "Contacts",
            copyright: "© 2025 Immediate Apex Edge. All Rights Reserved."
        }
    },
    fr: {
        // Navigation
        navigation: {
            home: "Accueil",
            about: "À propos",
            market: "Prix du Marché",
            contact: "Contact"
        },
        // Main content
        main: {
            title: "Contactez-nous",
            email: {
                title: "E-mail",
                address: "contact@immediateapexedge.com"
            },
            address: {
                title: "Adresse",
                line1: "Immediate Apex Edge",
                line2: "10 Avenue Montaigne",
                line3: "Paris"
            },
            form: {
                title: "Envoyez-nous un message",
                fullName: "Nom Complet",
                fullNamePlaceholder: "Jean Dupont",
                email: "Adresse E-mail",
                emailPlaceholder: "jean@exemple.com",
                subject: "Sujet",
                subjectPlaceholder: "Comment pouvons-nous vous aider ?",
                message: "Message",
                messagePlaceholder: "Votre message ici...",
                sendButton: "Envoyer le Message",
                sending: "Envoi en cours...",
                sent: "Message Envoyé !"
            }
        },
        // Footer
        footer: {
            description: "Profitez d'une technologie de trading révolutionnaire combinant la puissance de l'analyse IA et la précision stratégique pour maximiser vos opportunités sur les marchés financiers.",
            startTrading: "Commencer à Trader",
            quickLinks: "Liens Rapides",
            privacyPolicy: "Politique de Confidentialité",
            termsConditions: "Conditions Générales",
            contacts: "Contacts",
            copyright: "© 2025 Immediate Apex Edge. Tous droits réservés."
        }
    }
};

function updateContent(lang) {
    // Update main title
    document.querySelector('main h1').textContent = translations[lang].main.title;

    // Update navigation links (desktop)
    const desktopNavLinks = document.querySelectorAll('.hidden.md\\:flex .nav-link');
    desktopNavLinks.forEach(link => {
        const href = link.getAttribute('href');
        if (href.includes('index')) link.textContent = translations[lang].navigation.home;
        else if (href.includes('about')) link.textContent = translations[lang].navigation.about;
        else if (href.includes('market')) link.textContent = translations[lang].navigation.market;
        else if (href.includes('contact')) link.textContent = translations[lang].navigation.contact;
    });

    // Update navigation links (mobile)
    const mobileNavLinks = document.querySelectorAll('#mobileMenu a');
    mobileNavLinks.forEach(link => {
        const href = link.getAttribute('href');
        if (href.includes('index')) link.textContent = translations[lang].navigation.home;
        else if (href.includes('about')) link.textContent = translations[lang].navigation.about;
        else if (href.includes('market')) link.textContent = translations[lang].navigation.market;
        else if (href.includes('contact')) link.textContent = translations[lang].navigation.contact;
    });

    // Update Email and Address cards
    const contactCards = document.querySelectorAll('.contact-card');
    contactCards.forEach(card => {
        const title = card.querySelector('h3');
        if (title.textContent.includes('E-mail')) {
            title.textContent = translations[lang].main.email.title;
        } else if (title.textContent.includes('Address')) {
            title.textContent = translations[lang].main.address.title;
            const addressLines = card.querySelectorAll('p');
            addressLines.forEach(line => {
                if (line.textContent.includes('Immediate')) {
                    line.innerHTML = `${translations[lang].main.address.line1}<br>${translations[lang].main.address.line2}<br>${translations[lang].main.address.line3} <span class="text-blue-400">75008</span>`;
                }
            });
        }
    });

    // Update Contact Form
    const formSection = document.querySelector('.contact-form-card');
    formSection.querySelector('h3').textContent = translations[lang].main.form.title;
    
    // Update form labels
    const labels = formSection.querySelectorAll('label');
    labels[0].textContent = translations[lang].main.form.fullName;
    labels[1].textContent = translations[lang].main.form.email;
    labels[2].textContent = translations[lang].main.form.subject;
    labels[3].textContent = translations[lang].main.form.message;

    // Update form placeholders
    document.getElementById('name').placeholder = translations[lang].main.form.fullNamePlaceholder;
    document.getElementById('email').placeholder = translations[lang].main.form.emailPlaceholder;
    document.getElementById('subject').placeholder = translations[lang].main.form.subjectPlaceholder;
    document.getElementById('message').placeholder = translations[lang].main.form.messagePlaceholder;

    // Update submit button
    const submitButton = document.querySelector('.submit-button span');
    if (!submitButton.parentElement.disabled) {
        submitButton.textContent = translations[lang].main.form.sendButton;
    }

    // Update Footer content
const footerCols = document.querySelectorAll('.footer-col');
footerCols.forEach(col => {
    const description = col.querySelector('p');
    const footerTitle = col.querySelector('h3');
    const links = col.querySelectorAll('a');
    const startTradingBtn = col.querySelector('.cta-button span');

    // Update company description and start trading button
    if (description && description.textContent.includes('trading') || description.textContent.includes('trading technology')) {
        description.textContent = translations[lang].footer.description;
        if (startTradingBtn) {
            startTradingBtn.textContent = translations[lang].footer.startTrading;
        }
    }

    // Update Quick Links section
    if (footerTitle && (footerTitle.textContent.includes('Quick') || footerTitle.textContent.includes('Liens'))) {
        footerTitle.textContent = translations[lang].footer.quickLinks;
        // Update the links under Quick Links
        if (links && links.length >= 2) {
            links[0].textContent = translations[lang].footer.privacyPolicy;
            links[1].textContent = translations[lang].footer.termsConditions;
        }
    }

    // Update Contacts section
    if (footerTitle && (footerTitle.textContent.includes('Contacts') || footerTitle.textContent.includes('Contact'))) {
        footerTitle.textContent = translations[lang].footer.contacts;
    }
});

// Update copyright
const copyrightText = document.querySelector('.border-t p');
if (copyrightText) {
    copyrightText.textContent = translations[lang].footer.copyright;
}
}

// Initialize with English
document.addEventListener('DOMContentLoaded', () => {
    updateContent('en');
});

// Function to toggle language
function toggleLanguage() {
    const currentLang = document.getElementById('langBtnText').textContent.toLowerCase();
    const newLang = currentLang === 'en' ? 'fr' : 'en';
    
    // Update language button text
    document.getElementById('langBtnText').textContent = newLang.toUpperCase();
    document.getElementById('mobileLangBtnText').textContent = newLang.toUpperCase();
    
    // Update content
    updateContent(newLang);
    
    // Add animation class
    const buttons = document.querySelectorAll('.lang-switch');
    buttons.forEach(button => {
        button.classList.add('active');
        setTimeout(() => button.classList.remove('active'), 300);
    });
}