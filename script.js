// Get elements
const circleButton = document.getElementById('circle-btn');
const popup = document.getElementById('popup');
const closeButton = document.getElementById('close-btn');

// Open popup when the circle button is clicked
circleButton.addEventListener('click', () => {
    popup.style.display = 'flex';
});

// Close popup when the close button is clicked
closeButton.addEventListener('click', () => {
    popup.style.display = 'none';
});

// Close the popup if clicked outside the popup content
popup.addEventListener('click', (event) => {
    if (event.target === popup) {
        popup.style.display = 'none';
    }
});

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
