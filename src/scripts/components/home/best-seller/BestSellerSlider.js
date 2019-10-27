

/* -------------------
BestSellerSlider
------------------- */

const BestSellerSlider = {
    slides: '',
    slidesSorted: [],
    el: document.querySelector(".product-slider-inner"),

    rangeSlidesByPackets() {
        this.slides = this.el.querySelectorAll('.product-item');
        let i=0;
        for (i; i<this.slides.length; i=i+5) {
            this.slidesSorted.push([this.slides[i],this.slides[i+1],this.slides[i+2],this.slides[i+3],this.slides[i+4]]);
        }
    },

    displaySlides() {
        this.slides.forEach( (slide) => {
            slide.parentNode.removeChild(slide);
        });

        this.slidesSorted.forEach( (slideItem) => {
            console.log(slideItem);
            this.el.insertAdjacentHTML('beforeend', `
             <div class="product-slider__container">
              <div class="product-slider__wrapper">

              ${ slideItem[0] ?`
                    <article class="product-item">
                        ${slideItem[0].innerHTML}
                    </article>`
                : ''}
              
              ${ slideItem[1] ?`
                    <article class="product-item">
                        ${slideItem[1].innerHTML}
                    </article>`
                : ''}
              
                ${ slideItem[2] ?`
                    <article class="product-item">
                        ${slideItem[2].innerHTML}
                    </article>`
                : ''}
              
                ${ slideItem[3] ?`
                    <article class="product-item">
                        ${slideItem[3].innerHTML}
                    </article>`
                : ''}
              
              
                ${ slideItem[4] ?`
                    <article class="product-item">
                        ${slideItem[4].innerHTML}
                    </article>`
                : ''}
              </div>
            </div>
        `);
        });
    },

    moveSlides() {
        let direction;
        const carousel = document.querySelector('.best-seller-slider-wrapper');
        const slider = document.querySelector('.best-seller-slider');
        const prevButton = document.querySelector('.product-slider__arrow-left');
        const nextButton = document.querySelector('.product-slider__arrow-right');
        prevButton.addEventListener("click", () => {
            if (direction === -1) {
                direction = 1;
                slider.appendChild(slider.firstElementChild);
            }
            carousel.style.justifyContent = 'flex-end';
            slider.style.transform = 'translate(20%)';

        }, false);

        nextButton.addEventListener("click", () => {
            direction = -1;
            carousel.style.justifyContent = 'flex-start';
            slider.style.transform = 'translate(-20%)';
        }, false);

        slider.addEventListener('transitionend', function() {
            if (direction === 1) {
                slider.prepend(slider.lastElementChild);
            } else {
                slider.appendChild(slider.firstElementChild);
            }

            slider.style.transition = 'none';
            slider.style.transform = 'translate(0)';
            setTimeout(() => {
                slider.style.transition = 'all 0.5s';
            });
        }, false);
    },
};

export default BestSellerSlider;