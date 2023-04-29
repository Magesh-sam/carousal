const images = document.querySelectorAll('.carousel-image');
const prevButton = document.querySelector('#prev');
const nextButton = document.querySelector('#next');
const indicators = document.querySelectorAll('.carousel-indicator');
let currentImageIndex = 0;
let intervalId = null;

function showImage(index) {
    images[currentImageIndex].classList.remove('active');
    images[index].classList.add('active');
    indicators[currentImageIndex].classList.remove('active');
    indicators[index].classList.add('active');
    currentImageIndex = index;
}

function nextImage() {
    const nextIndex = currentImageIndex === images.length - 1 ? 0 : currentImageIndex + 1;
    showImage(nextIndex);
}

function prevImage() {
    const prevIndex = currentImageIndex === 0 ? images.length - 1 : currentImageIndex - 1;
    showImage(prevIndex);
}

function goToImage(index) {
    showImage(index);
}

function startAutoMove() {
    intervalId = setInterval(() => {
        nextImage();
    }, 3000);
}

function stopAutoMove() {
    clearInterval(intervalId);
}

nextButton.addEventListener('click', () => {
    stopAutoMove();
    nextImage();
    startAutoMove();
});

prevButton.addEventListener('click', () => {
    stopAutoMove();
    prevImage();
    startAutoMove();
});

for (let i = 0; i < indicators.length; i++) {
    indicators[i].addEventListener('click', () => {
        stopAutoMove();
        goToImage(i);
        startAutoMove();
    });
}

startAutoMove();
