/* -------------------
Components
------------------- */


/* -------------------
BestSellerSlider
------------------- */

const BestSellerSlider = {
    slides: document.querySelectorAll('.product-item'),
    slidesSorted: [],
    el: document.querySelector(".product-slider-inner"),

    rangeSlidesByPackets() {
        console.log(this.slides);
        let i=0;
        for (i; i<this.slides.length; i=i+5) {
            this.slidesSorted.push([this.slides[i],this.slides[i+1],this.slides[i+2],this.slides[i+3],this.slides[i+4]]);
        }
        console.log(this.slidesSorted);
    },

    displaySlides() {
        this.slidesSorted.forEach( (slideItem) => {
            this.el.insertAdjacentHTML('beforeend', `
             <div class="product-slider__container">
              <div class="product-slider__wrapper">
                <article class="product-item product-item_soldout">
                  <div class="product-item__photo">
                    <img src="/src/assets/images/best-seller/slider/product2.png">
                  </div>
                  <div class="product-item__content">
                    <h3 class="product-item__title">Nom du modèle un peu long</h3>
                    <h4 class="product-item__description">Manuel - Vert gazon</h4>
                    <span class="product-item__stock">0 en stock</span>
                  </div>
                </article>

                <article class="product-item product-item_soldout">
                  <div class="product-item__photo">
                    <img src="/src/assets/images/best-seller/slider/product2.png">
                  </div>
                  <div class="product-item__content">
                    <h3 class="product-item__title">Nom du modèle un peu long</h3>
                    <h4 class="product-item__description">Manuel - Vert gazon</h4>
                    <span class="product-item__stock">0 en stock</span>
                  </div>

                </article>

                <article class="product-item">
                  <div class="product-item__photo">
                    <img src="/src/assets/images/best-seller/slider/product2.png">
                  </div>
                  <div class="product-item__content">
                    <h3 class="product-item__title">Nom du modèle un peu long</h3>
                    <h4 class="product-item__description">Manuel - Vert gazon</h4>
                    <span class="product-item__stock">0 en stock</span>
                  </div>
                </article>

                <article class="product-item">
                  <div class="product-item__photo">
                    <img src="/src/assets/images/best-seller/slider/product2.png">
                  </div>
                  <div class="product-item__content">
                    <h3 class="product-item__title">Nom du modèle un peu long</h3>
                    <h4 class="product-item__description">Manuel - Vert gazon</h4>
                    <span class="product-item__stock">0 en stock</span>
                  </div>
                </article>

                <article class="product-item">
                  <div class="product-item__photo">
                    <img src="/src/assets/images/best-seller/slider/product2.png">
                  </div>
                  <div class="product-item__content">
                    <h3 class="product-item__title">Nom du modèle un peu long</h3>
                    <h4 class="product-item__description">Manuel - Vert gazon</h4>
                    <span class="product-item__stock">0 en stock</span>
                  </div>
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