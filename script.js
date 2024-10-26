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
