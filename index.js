/* Volume goes back to 0 when card is unchecked */
document.addEventListener('DOMContentLoaded', function () {
    const checkboxes = document.querySelectorAll('input[type="checkbox"]');

    checkboxes.forEach(function(checkbox) {
        const rangeInput = checkbox.nextElementSibling.querySelector('input[type="range"]');
        
        checkbox.addEventListener('change', function () {
            if (!this.checked) {
                rangeInput.value = 0; // Reset range input value to 0 when the checkbox is unchecked
            }
        });
    });
});

/* track slider */
let currentSlide = 0;

function showSlide(index) {
    const slides = document.querySelectorAll('.track-slide');
    const totalSlides = slides.length;

    if (index >= totalSlides) {
        currentSlide = 0;
    } else if (index < 0) {
        currentSlide = totalSlides - 1;
    } else {
        currentSlide = index;
    }

    const slider = document.querySelector('.track-slides');
    slider.style.transform = `translateX(-${currentSlide * 100}%)`;
}

function nextSlide() {
    showSlide(currentSlide + 1);
}

function prevSlide() {
    showSlide(currentSlide - 1);
}

/* Shows nav side menu when button inside the header is clicked */
document.addEventListener('DOMContentLoaded', () => {
    const button = document.querySelector('.menu-button');
    const header = document.querySelector('header');
    
    button.addEventListener('click', () => {
        header.classList.toggle('active');
    });

    button.addEventListener('click', () => {
        button.classList.toggle('open'); // Toggle the 'open' class on the button
        nav.classList.toggle('active'); // Toggle the 'active' class on the nav
    });
});
