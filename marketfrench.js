// marketfrench.js
const translations = {
    en: {
        // Navigation
        navigation: {
            home: "Home",
            about: "About",
            market: "Market Price",
            contact: "Contact"
        },
        // Market Page
        market: {
            title: "Market Prices",
            refreshButton: "Refresh Prices",
            search: {
                placeholder: "Search cryptocurrencies..."
            },
            filters: {
                all: "All Coins",
                gainers: "Top Gainers",
                losers: "Top Losers",
                volume: "Highest Volume"
            },
            table: {
                name: "Name",
                price: "Price",
                changes: "24h Changes",
                marketCap: "Market Cap",
                volume: "Volume (24h)",
                supply: "Circulating Supply"
            },
            loading: "Loading market data...",
            details: {
                title: "Details",
                marketCapRank: "Market Cap Rank",
                change24h: "24h Change",
                volume24h: "Volume (24h)",
                marketCap: "Market Cap"
            },
            chartError: "Failed to load chart data"
        },
        // Footer
        footer: {
            description: "Experience revolutionary trading technology powered by AI analysis and strategic precision. Maximize your opportunities in the financial markets with our cutting-edge platform.",
            quickLinks: {
                title: "Quick Links",
                privacy: "Privacy Policy",
                terms: "Terms and Conditions"
            },
            contact: {
                title: "Contact Information",
                address: "10 Avenue Montaigne, 75008 Paris",
                email: "contact@immediateapexedge.com"
            },
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
        // Market Page
        market: {
            title: "Prix du Marché",
            refreshButton: "Actualiser les Prix",
            search: {
                placeholder: "Rechercher des cryptomonnaies..."
            },
            filters: {
                all: "Toutes les Cryptos",
                gainers: "Meilleures Hausses",
                losers: "Plus Fortes Baisses",
                volume: "Volume le Plus Élevé"
            },
            table: {
                name: "Nom",
                price: "Prix",
                changes: "Variations 24h",
                marketCap: "Capitalisation",
                volume: "Volume (24h)",
                supply: "Offre en Circulation"
            },
            loading: "Chargement des données du marché...",
            details: {
                title: "Détails",
                marketCapRank: "Rang de Capitalisation",
                change24h: "Variation 24h",
                volume24h: "Volume (24h)",
                marketCap: "Capitalisation"
            },
            chartError: "Échec du chargement des données du graphique"
        },
        // Footer
        footer: {
            description: "Découvrez une technologie de trading révolutionnaire alimentée par l'analyse IA et la précision stratégique. Maximisez vos opportunités sur les marchés financiers avec notre plateforme de pointe.",
            quickLinks: {
                title: "Liens Rapides",
                privacy: "Politique de Confidentialité",
                terms: "Conditions Générales"
            },
            contact: {
                title: "Informations de Contact",
                address: "10 Avenue Montaigne, 75008 Paris",
                email: "contact@immediateapexedge.com"
            },
            copyright: "© 2025 Immediate Apex Edge. Tous droits réservés."
        }
    }
};

// Function to update content based on selected language
function updateContent(lang) {
    const t = translations[lang];

    // Helper function to safely update text content
    function updateText(selector, text) {
        const elements = document.querySelectorAll(selector);
        elements.forEach(element => {
            if (element) element.textContent = text;
        });
    }

    // Update Navigation
    document.querySelectorAll('.nav-link').forEach(link => {
        const text = link.textContent.toLowerCase().trim();
        if (text.includes('home') || text.includes('accueil')) {
            link.textContent = t.navigation.home;
        } else if (text.includes('about') || text.includes('à propos')) {
            link.textContent = t.navigation.about;
        } else if (text.includes('market') || text.includes('prix')) {
            link.textContent = t.navigation.market;
        } else if (text.includes('contact')) {
            link.textContent = t.navigation.contact;
        }
    });

    // Update Market Page Content
    // Title and Refresh Button
    updateText('h1', t.market.title);
    const refreshButton = document.querySelector('#refreshButton span');
    if (refreshButton) refreshButton.textContent = t.market.refreshButton;

    // Search Input
    const searchInput = document.querySelector('#tableSearch');
    if (searchInput) searchInput.placeholder = t.market.search.placeholder;

    // Filter Buttons
    document.querySelectorAll('.filter-button').forEach(button => {
        const filterType = button.dataset.filter;
        if (filterType && t.market.filters[filterType]) {
            button.textContent = t.market.filters[filterType];
        }
    });

    // Table Headers
    const tableHeaders = document.querySelectorAll('.market-table th');
    if (tableHeaders.length) {
        tableHeaders[0].textContent = t.market.table.name;
        tableHeaders[1].textContent = t.market.table.price;
        tableHeaders[2].textContent = t.market.table.changes;
        tableHeaders[3].textContent = t.market.table.marketCap;
        tableHeaders[4].textContent = t.market.table.volume;
        tableHeaders[5].textContent = t.market.table.supply;
    }

    // Loading Text
    updateText('#loadingRow p', t.market.loading);

    // Footer Content
    document.querySelectorAll('.footer-col').forEach(col => {
        const title = col.querySelector('h3');
        if (title) {
            if (title.textContent.includes('Quick')) {
                title.textContent = t.footer.quickLinks.title;
            } else if (title.textContent.includes('Contact')) {
                title.textContent = t.footer.contact.title;
            }
        }
    });

    updateText('.footer-col p', t.footer.description);
    updateText('.text-gray-400', t.footer.copyright);

    // Quick Links
    const privacyLink = document.querySelector('a[href*="privacy"]');
    const termsLink = document.querySelector('a[href*="terms"]');
    if (privacyLink) privacyLink.textContent = t.footer.quickLinks.privacy;
    if (termsLink) termsLink.textContent = t.footer.quickLinks.terms;

    // Contact Information
    const addressElement = document.querySelector('.flex.items-start.gap-3 span');
    const emailElement = document.querySelector('a[href*="mailto"]');
    if (addressElement) addressElement.textContent = t.footer.contact.address;
    if (emailElement) emailElement.textContent = t.footer.contact.email;
}

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

    // Store language preference
    localStorage.setItem('preferredLanguage', newLang);
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    // Check for stored language preference
    const storedLang = localStorage.getItem('preferredLanguage') || 'en';
    
    // Set initial language button text
    document.getElementById('langBtnText').textContent = storedLang.toUpperCase();
    document.getElementById('mobileLangBtnText').textContent = storedLang.toUpperCase();
    
    // Apply initial translations
    updateContent(storedLang);
});

// Update Footer Content
updateText('.footer-col p.text-gray-300', t.footer.description);
updateText('.border-t.border-gray-800 p', t.footer.copyright);

// Quick Links
const quickLinksTitle = document.querySelector('.space-y-6 h3');
if (quickLinksTitle) quickLinksTitle.textContent = t.footer.quickLinks.title;

const privacyLink = document.querySelector('a[href*="privacy"]');
const termsLink = document.querySelector('a[href*="terms"]');
if (privacyLink) privacyLink.textContent = t.footer.quickLinks.privacy;
if (termsLink) termsLink.textContent = t.footer.quickLinks.terms;

// Contact Info
const contactTitle = document.querySelector('.space-y-6 h3:last-of-type');
if (contactTitle) contactTitle.textContent = t.footer.contact.title;

const addressSpan = document.querySelector('.flex.items-start.gap-3 span');
if (addressSpan) addressSpan.textContent = t.footer.contact.address;

const emailLink = document.querySelector('a[href*="mailto"]');
if (emailLink) emailLink.textContent = t.footer.contact.email;





function updateContent(lang) {
    const t = translations[lang];function updateContent(lang) {
        const t = translations[lang];
        
        // ... (keep existing header/content updates) ...
    
        // Footer Updates
        // Quick Links title
        const quickLinksTitle = document.querySelector('.Quick\\ Links, h3:contains("Quick Links")');
        if (quickLinksTitle) {
            quickLinksTitle.textContent = t.footer.quickLinks.title;
        }
    
        // Footer Description
        const footerDescription = document.querySelector('footer .Experience');
        if (footerDescription) {
            footerDescription.textContent = t.footer.description;
        }
    
        // Privacy and Terms links
        const privacyLink = document.querySelector('a:contains("Privacy Policy")');
        const termsLink = document.querySelector('a:contains("Terms and Conditions")');
        if (privacyLink) privacyLink.textContent = t.footer.quickLinks.privacy;
        if (termsLink) termsLink.textContent = t.footer.quickLinks.terms;
    
        // Contact Information
        const contactTitle = document.querySelector('.Contact\\ Information, h3:contains("Contact Information")');
        if (contactTitle) {
            contactTitle.textContent = t.footer.contact.title;
        }
    
        // Address and Email
        const address = document.querySelector('footer span:contains("10 Avenue")');
        const email = document.querySelector('footer a[href*="mailto"]');
        if (address) address.textContent = t.footer.contact.address;
        if (email) email.textContent = t.footer.contact.email;
    
        // Copyright
        const copyright = document.querySelector('footer p:contains("© 2025")');
        if (copyright) {
            copyright.textContent = t.footer.copyright;
        }
    }

    // Update main title
    const mainTitle = document.querySelector('h1.text-3xl.sm\\:text-4xl.font-bold.text-white');
    if (mainTitle) mainTitle.textContent = t.market.title;

    // Update refresh button
    const refreshButton = document.querySelector('#refreshButton span');
    if (refreshButton) refreshButton.textContent = t.market.refreshButton;

    // Update search placeholder
    const searchInput = document.querySelector('#tableSearch');
    if (searchInput) searchInput.placeholder = t.market.search.placeholder;

    // Update filter buttons
    const filterButtons = document.querySelectorAll('.filter-button');
    filterButtons.forEach(button => {
        const filterType = button.dataset.filter;
        if (filterType === 'all') button.textContent = t.market.filters.all;
        if (filterType === 'gainers') button.textContent = t.market.filters.gainers;
        if (filterType === 'losers') button.textContent = t.market.filters.losers;
        if (filterType === 'volume') button.textContent = t.market.filters.volume;
    });

    // Update table headers
    const tableHeaders = document.querySelectorAll('.market-table th');
    if (tableHeaders.length) {
        tableHeaders[0].textContent = t.market.table.name;
        tableHeaders[1].textContent = t.market.table.price;
        tableHeaders[2].textContent = t.market.table.changes;
        tableHeaders[3].textContent = t.market.table.marketCap;
        tableHeaders[4].textContent = t.market.table.volume;
        tableHeaders[5].textContent = t.market.table.supply;
    }

    // Update navigation
    document.querySelectorAll('.nav-link').forEach(link => {
        const text = link.textContent.toLowerCase().trim();
        if (text.includes('home') || text.includes('accueil')) {
            link.textContent = t.navigation.home;
        } else if (text.includes('about') || text.includes('à propos')) {
            link.textContent = t.navigation.about;
        } else if (text.includes('market') || text.includes('prix')) {
            link.textContent = t.navigation.market;
        } else if (text.includes('contact')) {
            link.textContent = t.navigation.contact;
        }
    });

   
}