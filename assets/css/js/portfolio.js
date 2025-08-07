// JavaScript for the Portfolio page

// --- Carousel functionality ---
const track = document.querySelector('.carousel-track');
const items = Array.from(track.children);
const prevButton = document.querySelector('.carousel-nav.prev');
const nextButton = document.querySelector('.carousel-nav.next');
const itemWidth = items[0].getBoundingClientRect().width;
let currentIndex = 0;

const moveToSlide = (track, currentItem, targetItem) => {
    track.style.transform = 'translateX(-' + targetItem.style.left + ')';
};

nextButton.addEventListener('click', e => {
    currentIndex = (currentIndex + 1) % items.length;
    track.style.transform = `translateX(-${itemWidth * currentIndex}px)`;
});

prevButton.addEventListener('click', e => {
    currentIndex = (currentIndex - 1 + items.length) % items.length;
    track.style.transform = `translateX(-${itemWidth * currentIndex}px)`;
});


// --- Modal functionality ---
const modal = document.getElementById('image-modal');
const modalImg = document.getElementById("full-image");
const galleryItems = document.querySelectorAll('.gallery-item img');
const modalClose = document.querySelector('.modal-close');

galleryItems.forEach(item => {
    item.addEventListener('click', () => {
        modal.style.display = "block";
        modalImg.src = item.dataset.fullSrc; // Use the data attribute for the full image
    });
});

modalClose.addEventListener('click', () => {
    modal.style.display = "none";
});

window.addEventListener('click', (event) => {
    if (event.target == modal) {
        modal.style.display = "none";
    }
});