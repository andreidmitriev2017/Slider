function createSlider(sliderIndex) {
    let slider = document.querySelector('.slider'),
        slides = slider.querySelectorAll('.slider__item'),
        prev = slider.querySelector('.slider__prev'),
        next = slider.querySelector('.slider__next'),
        dotsWrapper = slider.querySelector('.slider__dots'),
        sliderDots = slider.querySelectorAll('.slider__dot');

    showSlides(sliderIndex);

    function showSlides(n) {
        if(n < 1) {
            sliderIndex = slides.length;
        }
    
        if(n > slides.length) {
            sliderIndex = 1;
        }
    
        slides.forEach((item) => item.style.display = "none");
        sliderDots.forEach((item) => item.classList.remove('slider__dot_active'));
        slides[sliderIndex - 1].style.display = "block";
        sliderDots[sliderIndex - 1].classList.add('slider__dot_active');
    }
    
    function plusSlide(n) {
        showSlides(sliderIndex += n);
    }
    
    function currentSlide(n) {
        showSlides(sliderIndex = n);
    }
    
    prev.addEventListener('click', function() {
        plusSlide(-1)
    });
    
    next.addEventListener('click', function() {
        console.log('Huli ne tak');
        plusSlide(1);
    });
    
    dotsWrapper.addEventListener('click', function(e) {
        let target = e.target;

        for(let i = 0; i < sliderDots.length + 1; i++) {
            if (target.classList.contains('slider__dot') && target == sliderDots[i - 1]) {
                currentSlide(i);
            }
        }
    });
}

