function makePhoneClickable(text) {
    if (!text) return text;
    const phoneRegex = /(\+?250|0)?[7][2-8][0-9]{7}/g;
    return text.replace(phoneRegex, match => {
        const cleanNumber = match.startsWith('0') ? '+250' + match.substring(1) :
                           match.startsWith('250') ? '+' + match :
                           match.startsWith('+') ? match : '+250' + match;
        return `<a href="tel:${cleanNumber}" class="contact-link">${match}</a>`;
    });
}

function makeEmailClickable(text) {
    if (!text) return text;
    const emailRegex = /[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}/g;
    return text.replace(emailRegex, match => `<a href="mailto:${match}" class="contact-link">${match}</a>`);
}

function processContactInfo(contactInfo) {
    if (!contactInfo || typeof contactInfo !== 'string') return "Not provided";
    return makeEmailClickable(makePhoneClickable(contactInfo));
}

function processContactElements() {
    document.querySelectorAll('.item-card [data-contact-info]:not([data-contact-processed])').forEach(el => {
        el.innerHTML = processContactInfo(el.textContent);
        el.setAttribute('data-contact-processed', 'true');
    });
}

const observer = new MutationObserver(mutations => {
    mutations.forEach(mutation => {
        if (mutation.addedNodes.length) processContactElements();
    });
});

function initContactLinks() {
    processContactElements();
    observer.observe(document.body, { childList: true, subtree: true });
}

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initContactLinks);
} else {
    initContactLinks();
}