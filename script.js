function toggleMenu() {
    var navbarLinks = document.getElementById('navbar-links');
    navbarLinks.classList.toggle('active');
}

const algorithms = ["Discover", "Shop", "Smile", "Explore", "Indluge"];
const parentElement = document.getElementById('headings');

let algorithmIndex = 0;
let charIndex = 0;
let isDisplaying = false;
let isRemoving = false;

function displayAlgorithms() {
    if (!isDisplaying && !isRemoving) {
        isDisplaying = true;
        const algorithm = algorithms[algorithmIndex];
        const interval = setInterval(() => {
            if (charIndex <= algorithm.length) {
                parentElement.textContent = algorithm.substring(0, charIndex);
                charIndex++;
            } else {
                clearInterval(interval);
                isDisplaying = false;
                isRemoving = true;
                setTimeout(() => {
                    removeCharacters();
                }, 1000); 
            }
        }, 100);
    }
}

function removeCharacters() {
    const interval = setInterval(() => {
        if (charIndex >= 0) {
            parentElement.textContent = algorithms[algorithmIndex].substring(0, charIndex);
            charIndex--;
        } else {
            clearInterval(interval);
            algorithmIndex = (algorithmIndex + 1) % algorithms.length;
            charIndex = 0;
            isRemoving = false;
            setTimeout(() => {
                displayAlgorithms();
            }, 500); 
        }
    }, 50); 
}

setInterval(displayAlgorithms, 1000);