const reviewCards = document.querySelector('.review-cards');
const prevBtn = document.getElementById('prev-btn');
const nextBtn = document.getElementById('next-btn');

let currentIndex = 0;
const cardCount = reviewCards.children.length;

// Show the current card based on index
function showCard(index) {
    // Adjust the transform based on the card's width
    reviewCards.style.transform = `translateX(-${index * 100}%)`;
}

// Auto-slide every 5 seconds
let autoSlide = setInterval(() => {
    currentIndex = (currentIndex + 1) % cardCount;
    showCard(currentIndex);
}, 5000);

// Move to the next card
nextBtn.addEventListener('click', () => {
    clearInterval(autoSlide);
    currentIndex = (currentIndex + 1) % cardCount;
    showCard(currentIndex);
    resetAutoSlide();
});

// Move to the previous card
prevBtn.addEventListener('click', () => {
    clearInterval(autoSlide);
    currentIndex = (currentIndex - 1 + cardCount) % cardCount;
    showCard(currentIndex);
    resetAutoSlide();
});

// Reset auto-slide when a button is manually clicked
function resetAutoSlide() {
    autoSlide = setInterval(() => {
        currentIndex = (currentIndex + 1) % cardCount;
        showCard(currentIndex);
    }, 5000);
}

const navbarToggle = document.querySelector('.navbar-toggle');
const navLinks = document.querySelector('.nav-links');

navbarToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active'); // Toggle the 'active' class
});