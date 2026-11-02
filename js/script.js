const roles = [
    "Python Full Stack Developer",
    "Web Developer",
    "Python Programmer",
    "Machine Learning Enthusiast"
];

let roleIndex = 0;
let charIndex = 0;
let deleting = false;

function typingEffect() {

    const typingText = document.getElementById("typing-text");

    if (!typingText) return;

    const currentRole = roles[roleIndex];

    if (!deleting) {
        typingText.textContent =
            currentRole.substring(0, charIndex + 1);

        charIndex++;

        if (charIndex === currentRole.length) {
            deleting = true;
            setTimeout(typingEffect, 1200);
            return;
        }

    } else {
        typingText.textContent =
            currentRole.substring(0, charIndex - 1);

        charIndex--;

        if (charIndex === 0) {
            deleting = false;
            roleIndex = (roleIndex + 1) % roles.length;
        }
    }

    setTimeout(typingEffect, deleting ? 60 : 100);
}

typingEffect();