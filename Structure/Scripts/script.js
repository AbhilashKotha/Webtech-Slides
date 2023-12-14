// script.js
document.addEventListener("DOMContentLoaded", function () {
    const prevButton = document.querySelector(".carousel-control-prev");
    const nextButton = document.querySelector(".carousel-control-next");
    const images = document.querySelectorAll('img');
    
    let currentSlide = 0;
    let tempSlide = 0;

    prevButton.addEventListener("click", prevSlide);
    nextButton.addEventListener("click", nextSlide);

    //rightImage.classList.add('zoomed');

    function showSlide(slideIndex) {
        // Update navigation buttons
        prevButton.disabled = slideIndex === 0;
        nextButton.disabled = slideIndex === maxSlides - 1;

         // Hide previous slide button on the first slide
         prevButton.style.display = slideIndex === 0 ? 'none' : 'block';
         nextButton.style.display = slideIndex === maxSlides - 1 ? 'none' : 'block';

         currentSlide = slideIndex;
         console.log("currentSlide"+currentSlide);
  
         images.forEach(img => {

            img.classList.toggle('zoomed');
        
          });
        
    }

    function prevSlide() {
        if (currentSlide > 0) {
            currentSlide--;
            showSlide(currentSlide);
        }
    }

    function nextSlide() {
        if (currentSlide < maxSlides - 1) {
            currentSlide++;
            showSlide(currentSlide);
        }
    }

    // Initial load
    const maxSlides = 23; // Update with the total number of slides
    showSlide(currentSlide);
});
