/* -------------------
Components
------------------- */


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
            slide.style.display="none";
        });

        this.slidesSorted.forEach( (slideItem) => {
            console.log(slideItem);
            this.el.insertAdjacentHTML('beforeend', `
             <div class="product-slider__container">
              <div class="product-slider__wrapper">
              <article class="product-item product-item_soldout">
                ${slideItem[0].innerHTML}
              </article>

              <article class="product-item product-item_soldout">
                ${slideItem[1].innerHTML}
              </article>
              
              <article class="product-item product-item_soldout">
                ${slideItem[2].innerHTML}
              </article>
              
              <article class="product-item product-item_soldout">
                ${slideItem[3].innerHTML}
              </article>
              
              <article class="product-item product-item_soldout">
                ${slideItem[4].innerHTML}
              </article>
               

              </div>
            </div>
        `);
        });
    },

    moveSlides() {
        const prevButton = document.querySelector('.product-slider__arrow-left');
        prevButton.addEventListener("click", () => { alert('test'); }, false);
    },
};

export default BestSellerSlider;