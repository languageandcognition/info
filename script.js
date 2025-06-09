// Smooth scrolling for navigation
document.querySelectorAll('.navbar a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const section = document.querySelector(this.getAttribute('href'));
        section.scrollIntoView({ behavior: 'smooth' });
        // Close menu on link click in mobile view
        const navMenu = document.querySelector('.nav-menu');
        navMenu.classList.remove('active');
    });
});

// Hamburger menu toggle
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');
hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('active');
});

// Dynamic alphabet animation
const hero = document.querySelector('.hero');
const alphabets = [
    // Devanagari
    { char: 'अ', font: 'Noto Serif Devanagari' },
    { char: 'ध', font: 'Noto Serif Devanagari' },
    { char: 'ऊ', font: 'Noto Serif Devanagari' },
    { char: 'ञ', font: 'Noto Serif Devanagari' },
    { char: 'इ', font: 'Noto Serif Devanagari' },
    { char: 'क', font: 'Noto Serif Devanagari' },
    { char: 'ट', font: 'Noto Serif Devanagari' },
    { char: 'ण', font: 'Noto Serif Devanagari' },
    { char: 'श', font: 'Noto Serif Devanagari' },
    { char: 'भ', font: 'Noto Serif Devanagari' },
    { char: 'ग', font: 'Noto Serif Devanagari' },
    { char: 'ठ', font: 'Noto Serif Devanagari' },
    { char: 'झ', font: 'Noto Serif Devanagari' },
    { char: 'ऋ', font: 'Noto Serif Devanagari' },
    { char: 'ऐ', font: 'Noto Serif Devanagari' },
    { char: 'च', font: 'Noto Serif Devanagari' },
    { char: 'त', font: 'Noto Serif Devanagari' },
    { char: 'न', font: 'Noto Serif Devanagari' },
    { char: 'ल', font: 'Noto Serif Devanagari' },
    { char: 'ह', font: 'Noto Serif Devanagari' },
    // Tamil
    { char: 'க', font: 'Noto Serif Tamil' },
    { char: 'ஷ', font: 'Noto Serif Tamil' },
    { char: 'ழ', font: 'Noto Serif Tamil' },
    { char: 'ஞ', font: 'Noto Serif Tamil' },
    { char: 'அ', font: 'Noto Serif Tamil' },
    { char: 'ந', font: 'Noto Serif Tamil' },
    { char: 'ற', font: 'Noto Serif Tamil' },
    { char: 'ப', font: 'Noto Serif Tamil' },
    { char: 'ல', font: 'Noto Serif Tamil' },
    { char: 'ம', font: 'Noto Serif Tamil' },
    { char: 'ட', font: 'Noto Serif Tamil' },
    { char: 'வ', font: 'Noto Serif Tamil' },
    { char: 'ச', font: 'Noto Serif Tamil' },
    { char: 'இ', font: 'Noto Serif Tamil' },
    { char: 'ஊ', font: 'Noto Serif Tamil' },
    { char: 'த', font: 'Noto Serif Tamil' },
    { char: 'ஜ', font: 'Noto Serif Tamil' },
    { char: 'ர', font: 'Noto Serif Tamil' },
    { char: 'ள', font: 'Noto Serif Tamil' },
    { char: 'எ', font: 'Noto Serif Tamil' },
    // Telugu
    { char: 'త', font: 'Noto Serif Telugu' },
    { char: 'ఊ', font: 'Noto Serif Telugu' },
    { char: 'జ', font: 'Noto Serif Telugu' },
    { char: 'అ', font: 'Noto Serif Telugu' },
    { char: 'ఇ', font: 'Noto Serif Telugu' },
    { char: 'న', font: 'Noto Serif Telugu' },
    { char: 'ర', font: 'Noto Serif Telugu' },
    { char: 'వ', font: 'Noto Serif Telugu' },
    { char: 'క', font: 'Noto Serif Telugu' },
    { char: 'గ', font: 'Noto Serif Telugu' },
    { char: 'శ', font: 'Noto Serif Telugu' },
    { char: 'భ', font: 'Noto Serif Telugu' },
    { char: 'ఙ', font: 'Noto Serif Telugu' },
    { char: 'ప', font: 'Noto Serif Telugu' },
    { char: 'స', font: 'Noto Serif Telugu' },
    { char: 'డ', font: 'Noto Serif Telugu' },
    { char: 'ఢ', font: 'Noto Serif Telugu' },
    { char: 'ఱ', font: 'Noto Serif Telugu' },
    { char: 'ఐ', font: 'Noto Serif Telugu' },
    { char: 'ఓ', font: 'Noto Serif Telugu' },
    // Bengali
    { char: 'ঊ', font: 'Noto Serif Bengali' },
    { char: 'ব', font: 'Noto Serif Bengali' },
    { char: 'ঘ', font: 'Noto Serif Bengali' },
    { char: 'ই', font: 'Noto Serif Bengali' },
    { char: 'আ', font: 'Noto Serif Bengali' },
    { char: 'অ', font: 'Noto Serif Bengali' },
    { char: 'ক', font: 'Noto Serif Bengali' },
    { char: 'ছ', font: 'Noto Serif Bengali' },
    { char: 'জ', font: 'Noto Serif Bengali' },
    { char: 'ঠ', font: 'Noto Serif Bengali' },
    { char: 'ড', font: 'Noto Serif Bengali' },
    { char: 'ত', font: 'Noto Serif Bengali' },
    { char: 'ন', font: 'Noto Serif Bengali' },
    { char: 'ফ', font: 'Noto Serif Bengali' },
    { char: 'ম', font: 'Noto Serif Bengali' },
    { char: 'য', font: 'Noto Serif Bengali' },
    { char: 'র', font: 'Noto Serif Bengali' },
    { char: 'ল', font: 'Noto Serif Bengali' },
    { char: 'শ', font: 'Noto Serif Bengali' },
    { char: 'হ', font: 'Noto Serif Bengali' },
    //Oriya
    { char: 'ଅ', font: 'Noto Serif Oriya' },
    { char: 'ଆ', font: 'Noto Serif Oriya' },
    { char: 'ଇ', font: 'Noto Serif Oriya' },
    { char: 'ଈ', font: 'Noto Serif Oriya' },
    { char: 'ଉ', font: 'Noto Serif Oriya' },
    { char: 'ଋ', font: 'Noto Serif Oriya' },
    { char: 'ଏ', font: 'Noto Serif Oriya' },
    { char: 'ଓ', font: 'Noto Serif Oriya' },
    { char: 'କ', font: 'Noto Serif Oriya' },
    { char: 'ଖ', font: 'Noto Serif Oriya' },
    { char: 'ଗ', font: 'Noto Serif Oriya' },
    { char: 'ଘ', font: 'Noto Serif Oriya' },
    { char: 'ଙ', font: 'Noto Serif Oriya' },
    { char: 'ଚ', font: 'Noto Serif Oriya' },
    { char: 'ଛ', font: 'Noto Serif Oriya' },
    { char: 'ଜ', font: 'Noto Serif Oriya' },
    { char: 'ଝ', font: 'Noto Serif Oriya' },
    { char: 'ଞ', font: 'Noto Serif Oriya' },
    { char: 'ଟ', font: 'Noto Serif Oriya' },
    { char: 'ଠ', font: 'Noto Serif Oriya' },
    //Urdu
    { char: 'ا', font: 'Noto Nastaliq Urdu' },
    { char: 'ب', font: 'Noto Nastaliq Urdu' },
    { char: 'پ', font: 'Noto Nastaliq Urdu' },
    { char: 'ت', font: 'Noto Nastaliq Urdu' },
    { char: 'ث', font: 'Noto Nastaliq Urdu' },
    { char: 'ج', font: 'Noto Nastaliq Urdu' },
    { char: 'چ', font: 'Noto Nastaliq Urdu' },
    { char: 'ح', font: 'Noto Nastaliq Urdu' },
    { char: 'خ', font: 'Noto Nastaliq Urdu' },
    { char: 'د', font: 'Noto Nastaliq Urdu' },
    { char: 'ذ', font: 'Noto Nastaliq Urdu' },
    { char: 'ر', font: 'Noto Nastaliq Urdu' },
    { char: 'ز', font: 'Noto Nastaliq Urdu' },
    { char: 'ژ', font: 'Noto Nastaliq Urdu' },
    { char: 'س', font: 'Noto Nastaliq Urdu' },
    { char: 'ش', font: 'Noto Nastaliq Urdu' },
    { char: 'ص', font: 'Noto Nastaliq Urdu' },
    { char: 'ض', font: 'Noto Nastaliq Urdu' },
    { char: 'ط', font: 'Noto Nastaliq Urdu' },
    { char: 'ظ', font: 'Noto Nastaliq Urdu' },
    //Gujarati
    { char: 'અ', font: 'Noto Serif Gujarati' },
    { char: 'આ', font: 'Noto Serif Gujarati' },
    { char: 'ઇ', font: 'Noto Serif Gujarati' },
    { char: 'ઈ', font: 'Noto Serif Gujarati' },
    { char: 'ઉ', font: 'Noto Serif Gujarati' },
    { char: 'ઋ', font: 'Noto Serif Gujarati' },
    { char: 'એ', font: 'Noto Serif Gujarati' },
    { char: 'ઓ', font: 'Noto Serif Gujarati' },
    { char: 'ક', font: 'Noto Serif Gujarati' },
    { char: 'ખ', font: 'Noto Serif Gujarati' },
    { char: 'ગ', font: 'Noto Serif Gujarati' },
    { char: 'ઘ', font: 'Noto Serif Gujarati' },
    { char: 'ચ', font: 'Noto Serif Gujarati' },
    { char: 'છ', font: 'Noto Serif Gujarati' },
    { char: 'જ', font: 'Noto Serif Gujarati' },
    { char: 'ઝ', font: 'Noto Serif Gujarati' },
    { char: 'ટ', font: 'Noto Serif Gujarati' },
    { char: 'ઢ', font: 'Noto Serif Gujarati' },
    { char: 'ત', font: 'Noto Serif Gujarati' },
    { char: 'ન', font: 'Noto Serif Gujarati' },
    //Panjabi
    { char: 'ਅ', font: 'Noto Serif Gurmukhi' },
    { char: 'ਆ', font: 'Noto Serif Gurmukhi' },
    { char: 'ਇ', font: 'Noto Serif Gurmukhi' },
    { char: 'ਈ', font: 'Noto Serif Gurmukhi' },
    { char: 'ਉ', font: 'Noto Serif Gurmukhi' },
    { char: 'ਊ', font: 'Noto Serif Gurmukhi' },
    { char: 'ਏ', font: 'Noto Serif Gurmukhi' },
    { char: 'ਐ', font: 'Noto Serif Gurmukhi' },
    { char: 'ਓ', font: 'Noto Serif Gurmukhi' },
    { char: 'ਕ', font: 'Noto Serif Gurmukhi' },
    { char: 'ਖ', font: 'Noto Serif Gurmukhi' },
    { char: 'ਗ', font: 'Noto Serif Gurmukhi' },
    { char: 'ਘ', font: 'Noto Serif Gurmukhi' },
    { char: 'ਙ', font: 'Noto Serif Gurmukhi' },
    { char: 'ਚ', font: 'Noto Serif Gurmukhi' },
    { char: 'ਛ', font: 'Noto Serif Gurmukhi' },
    { char: 'ਜ', font: 'Noto Serif Gurmukhi' },
    { char: 'ਝ', font: 'Noto Serif Gurmukhi' },
    { char: 'ਟ', font: 'Noto Serif Gurmukhi' },
    { char: 'ਠ', font: 'Noto Serif Gurmukhi' },
    // Malayalam
    { char: 'അ', font: 'Noto Serif Malayalam' },
    { char: 'ആ', font: 'Noto Serif Malayalam' },
    { char: 'ഇ', font: 'Noto Serif Malayalam' },
    { char: 'ഈ', font: 'Noto Serif Malayalam' },
    { char: 'ഉ', font: 'Noto Serif Malayalam' },
    { char: 'എ', font: 'Noto Serif Malayalam' },
    { char: 'ഒ', font: 'Noto Serif Malayalam' },
    { char: 'ക', font: 'Noto Serif Malayalam' },
    { char: 'ഖ', font: 'Noto Serif Malayalam' },
    { char: 'ഗ', font: 'Noto Serif Malayalam' },
    { char: 'ങ', font: 'Noto Serif Malayalam' },
    { char: 'ച', font: 'Noto Serif Malayalam' },
    { char: 'ഞ', font: 'Noto Serif Malayalam' },
    { char: 'ട', font: 'Noto Serif Malayalam' },
    { char: 'ഡ', font: 'Noto Serif Malayalam' },
    { char: 'ത', font: 'Noto Serif Malayalam' },
    { char: 'ധ', font: 'Noto Serif Malayalam' },
    { char: 'ന', font: 'Noto Serif Malayalam' },
    { char: 'മ', font: 'Noto Serif Malayalam' },
    { char: 'ശ', font: 'Noto Serif Malayalam' }
];

function createAlphabet() {
    const alphabet = document.createElement('div');
    const randomAlphabet = alphabets[Math.floor(Math.random() * alphabets.length)];
    alphabet.className = 'alphabet';
    alphabet.textContent = randomAlphabet.char;
    alphabet.style.fontFamily = randomAlphabet.font;
    alphabet.style.left = `${Math.random() * 100}vw`;
    alphabet.style.top = `${Math.random() * 100}vh`;
    alphabet.style.animationDuration = `${10 + Math.random() * 10}s`;
    alphabet.style.animationDelay = `${Math.random() * 5}s`;
    hero.appendChild(alphabet);

    setTimeout(() => {
        alphabet.remove();
    }, 10000);
}

// Generate alphabets at intervals
setInterval(createAlphabet, 100);
for (let i = 0; i < 10; i++) {
    setTimeout(createAlphabet, i * 100);
}

// Slideshow functionality
const SLIDE_INTERVAL = 4000; // Adjustable time in milliseconds
const slides = document.querySelectorAll('.slide');
let currentSlide = 0;

function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.classList.toggle('active', i === index);
    });
}

function nextSlide() {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
}

// Initialize slideshow
if (slides.length > 0) {
    showSlide(currentSlide);
    setInterval(nextSlide, SLIDE_INTERVAL);
}