// ===== TYPING ANIMATION =====
const typedText = document.getElementById('typed-text');
const words = ['Frontend Developer', 'Designer', 'Creative Thinker', 'Problem Solver'];
let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;

function typeEffect() {
    const currentWord = words[wordIndex];
    if (isDeleting) {
        typedText.textContent = currentWord.substring(0, charIndex - 1);
        charIndex--;
    } else {
        typedText.textContent = currentWord.substring(0, charIndex + 1);
        charIndex++;
    }

    if (!isDeleting && charIndex === currentWord.length) {
        isDeleting = true;
        setTimeout(typeEffect, 2000);
        return;
    }

    if (isDeleting && charIndex === 0) {
        isDeleting = false;
        wordIndex = (wordIndex + 1) % words.length;
        setTimeout(typeEffect, 500);
        return;
    }

    const speed = isDeleting ? 80 : 150;
    setTimeout(typeEffect, speed);
}

// පිටුව Load වූ වහාම ඇනිමේෂන් එක පටන් ගන්න
typeEffect();