// French translations for About page
const frenchTranslations = {
    // Brand Name
    'brand_name': 'Immediate Apex Edge',
    
    // Navigation
    'nav_home': 'Accueil',
    'nav_about': 'À Propos',
    'nav_market': 'Prix du Marché',
    'nav_contact': 'Contact',

    // Hero Section
    'hero_title': 'À Propos de Immediate Apex Edge',
    'hero_subtitle': 'À la tête de la révolution du trading automatisé avec une technologie IA de pointe et une analyse de marché inégalée.',

    // Mission & Vision
    'mission_title': 'Notre Mission',
    'mission_text': 'Démocratiser le trading en fournissant des outils avancés alimentés par l\'IA qui équilibrent les règles du jeu entre les traders institutionnels et particuliers.',
    'vision_title': 'Notre Vision',
    'vision_text': 'Devenir la première plateforme mondiale de trading automatisé, permettant aux traders de tous niveaux d\'atteindre leurs objectifs financiers.',

    // Why Choose Us
    'why_choose_title': 'Pourquoi Nous Choisir',
    'feature1_title': 'Analyses Avancées',
    'feature1_text': 'Analyse de marché en temps réel alimentée par des algorithmes d\'IA sophistiqués.',
    'feature2_title': 'Trading 24/7',
    'feature2_text': 'Systèmes de trading automatisés qui fonctionnent 24h/24 pour saisir les opportunités.',
    'feature3_title': 'Plateforme Sécurisée',
    'feature3_text': 'Mesures de sécurité de niveau bancaire pour protéger vos actifs et vos données.',

    // Stats
    'accuracy_rate': 'Taux de Précision',
    'trading_support': 'Support Trading',
    'active_users': 'Utilisateurs Actifs',
    'countries': 'Pays',

    // Timeline Section
    'journey_title': 'Notre Parcours',
    'timeline_2020_year': '2020',
    'timeline_2020_text': 'Fondé avec la vision de révolutionner le trading automatisé',
    'timeline_2021_year': '2021',
    'timeline_2021_text': 'Lancement de notre premier algorithme de trading alimenté par l\'IA',
    'timeline_2022_year': '2022',
    'timeline_2022_text': 'Extension à plus de 30 pays et atteinte de 50 000 utilisateurs',
    'timeline_2023_year': '2023',
    'timeline_2023_text': 'Introduction de fonctionnalités d\'analyse de marché avancées',
    'timeline_2024_year': '2024',
    'timeline_2024_text': 'Atteinte des meilleurs taux de précision et satisfaction client du secteur',

    // CTA Sections
    'cta_title': 'Prêt à Commencer le Trading ?',
    'cta_text': 'Rejoignez des milliers de traders performants qui ont déjà transformé leur trading avec Immediate Apex Edge.',
    'cta_button': 'Commencer Maintenant',
    'get_started': 'Commencer',
    'get_started_now': 'Commencer Maintenant',
    'start_trading_now': 'Commencer le Trading',

    // Footer
    'footer_company_title': 'Immediate Apex Edge',
    'footer_description': 'Profitez d\'une technologie de trading révolutionnaire combinant la puissance de l\'analyse IA et la précision stratégique pour maximiser vos opportunités sur les marchés financiers.',
    'quick_links': 'Liens Rapides',
    'privacy_policy': 'Politique de Confidentialité',
    'terms_conditions': 'Conditions Générales',
    'contacts_title': 'Contacts',
    'copyright': '© 2025 Immediate Apex Edge. Tous Droits Réservés.'
};

// Function to update the page content with French translations
function translateToFrench() {
    // Update document title
    document.title = frenchTranslations.page_title;

    // Update navigation
    document.querySelectorAll('.nav-link, .mobile-menu a').forEach(link => {
        const text = link.textContent.trim();
        if (text === 'Home') link.textContent = frenchTranslations.nav_home;
        if (text === 'About') link.textContent = frenchTranslations.nav_about;
        if (text === 'Market Price') link.textContent = frenchTranslations.nav_market;
        if (text === 'Contact') link.textContent = frenchTranslations.nav_contact;
    });

    // Update hero section
    document.querySelector('h1').textContent = frenchTranslations.hero_title;
    document.querySelector('h1 + p').textContent = frenchTranslations.hero_subtitle;

    // Update mission & vision
    document.querySelectorAll('.about-card').forEach(card => {
        const heading = card.querySelector('h2');
        const text = card.querySelector('p');
        if (heading.textContent.includes('Mission')) {
            heading.textContent = frenchTranslations.mission_title;
            text.textContent = frenchTranslations.mission_text;
        } else if (heading.textContent.includes('Vision')) {
            heading.textContent = frenchTranslations.vision_title;
            text.textContent = frenchTranslations.vision_text;
        }
    });

    // Update features section
    const whyChooseTitle = document.querySelector('.mb-16 h2');
    if (whyChooseTitle) whyChooseTitle.textContent = frenchTranslations.why_choose_title;
    
    const features = document.querySelectorAll('.feature-card');
    if (features.length >= 3) {
        features[0].querySelector('h3').textContent = frenchTranslations.feature1_title;
        features[0].querySelector('p').textContent = frenchTranslations.feature1_text;
        features[1].querySelector('h3').textContent = frenchTranslations.feature2_title;
        features[1].querySelector('p').textContent = frenchTranslations.feature2_text;
        features[2].querySelector('h3').textContent = frenchTranslations.feature3_title;
        features[2].querySelector('p').textContent = frenchTranslations.feature3_text;
    }

    // Update stats section
    const statsCards = document.querySelectorAll('.stats-card');
    statsCards[0].querySelector('.text-gray-300').textContent = frenchTranslations.accuracy_rate;
    statsCards[1].querySelector('.text-gray-300').textContent = frenchTranslations.trading_support;
    statsCards[2].querySelector('.text-gray-300').textContent = frenchTranslations.active_users;
    statsCards[3].querySelector('.text-gray-300').textContent = frenchTranslations.countries;

    // Update timeline section
    const timelineTitle = document.querySelector('.timeline').previousElementSibling;
    if (timelineTitle) {
        timelineTitle.textContent = frenchTranslations.journey_title;
    }

    const timelineItems = document.querySelectorAll('.timeline-item');
    timelineItems.forEach((item, index) => {
        const year = 2020 + index;
        const yearElement = item.querySelector('h3');
        const textElement = item.querySelector('p');
        
        if (yearElement) {
            yearElement.textContent = frenchTranslations[`timeline_${year}_year`];
        }
        if (textElement) {
            textElement.textContent = frenchTranslations[`timeline_${year}_text`];
        }
    });

    // Update CTA sections
    document.querySelectorAll('.cta-button').forEach(button => {
        const span = button.querySelector('span');
        if (span) span.textContent = frenchTranslations.get_started_now;
    });

    const mainCTA = document.querySelector('.about-card.text-center');
    if (mainCTA) {
        mainCTA.querySelector('h2').textContent = frenchTranslations.cta_title;
        mainCTA.querySelector('p').textContent = frenchTranslations.cta_text;
        const ctaButton = mainCTA.querySelector('.cta-button span');
        if (ctaButton) ctaButton.textContent = frenchTranslations.cta_button;
    }

    // Update footer
    const footer = document.querySelector('footer');
    footer.querySelector('h3').textContent = frenchTranslations.footer_company_title;
    footer.querySelector('.space-y-6:first-child p').textContent = frenchTranslations.footer_description;
    
    const quickLinksSection = footer.querySelector('.space-y-6:nth-child(2)');
    quickLinksSection.querySelector('h3').textContent = frenchTranslations.quick_links;
    const quickLinks = quickLinksSection.querySelectorAll('a');
    quickLinks[0].textContent = frenchTranslations.privacy_policy;
    quickLinks[1].textContent = frenchTranslations.terms_conditions;

    const contactsSection = footer.querySelector('.space-y-6:nth-child(3)');
    contactsSection.querySelector('h3').textContent = frenchTranslations.contacts_title;
    
    footer.querySelector('.text-gray-400').textContent = frenchTranslations.copyright;

    // Update language toggle buttons
    document.getElementById('langBtnText').textContent = 'FR';
    document.getElementById('mobileLangBtnText').textContent = 'FR';
}

// Function to toggle between languages
function toggleLanguage() {
    const currentLang = document.getElementById('langBtnText').textContent;
    if (currentLang === 'EN') {
        translateToFrench();
    } else {
        location.reload(); // Reload page to get English version
    }
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', () => {
    const storedLang = localStorage.getItem('preferredLanguage') || 'en';
    if (storedLang === 'fr') {
        document.getElementById('langBtnText').textContent = 'FR';
        document.getElementById('mobileLangBtnText').textContent = 'FR';
        translateToFrench();
    }
});