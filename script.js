// In script.js
const h1Elements = document.querySelectorAll('h1');
h1Elements.forEach(title => {
    title.addEventListener('mouseover', () => {
        title.style.color = 'red'; // Change color to red
    });
    title.addEventListener('mouseout', () => {
        title.style.color = '';  // Reset color
    });
});
const loadingBar = document.querySelector('.loading-bar');
let width = 0;

const loadingAnimation = setInterval(() => {
    width++;
    loadingBar.style.width = width + '%'; 
    if (width >= 100) {
        clearInterval(loadingAnimation); 
    }
}, 20); // Update every 20 milliseconds
const starsDiv = document.querySelector('.stars');
let position = 0;

function animateStars() {
    position--; 
    starsDiv.style.backgroundPosition = position + 'px 0'; 
    requestAnimationFrame(animateStars); 
}

function playClickSound() {
    const audio = new Audio('SAD.mp3'); 
    audio.play()
        .catch(error => {
            console.error("Error playing sound:", error); 
        });
}

const mainPageButton = document.querySelector('.custom-button');
document.addEventListener('click', playClickSound); 

const images = document.querySelectorAll('img'); 
images.forEach(image => {
    image.addEventListener('mouseover', () => {
        image.style.transform = 'scale(1.1)'; 
    });
    image.addEventListener('mouseout', () => {
        image.style.transform = ''; 
    });
});

image.classList.add('hover-effect'); 
    image.classList.remove('hover-effect'); 
