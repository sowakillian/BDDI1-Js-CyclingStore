/* -------------------
Components
------------------- */


/* -------------------
MainProductSlider
------------------- */

const BestSellerSlider = () => {

    let slides = null;
    let slidesSorted = [];
    const el = document.querySelector(".product-slider-inner");

    const getSlidesFromJson = () => {
        const req = new XMLHttpRequest();
        req.open('GET', '/src/datas/bestSellerSlides.json', false);
        req.send();
        slides = JSON.parse(req.response);
    };
    getSlidesFromJson();

    const rangeSlidesByPackets = () => {
        let i=0;
        for (i; i<slides.length; i=i+5) {
            slidesSorted.push([slides[i],slides[i+1],slides[i+2],slides[i+3],slides[i+4]]);
        }
    };
    rangeSlidesByPackets();

    const displaySlides = () => {
        slidesSorted.forEach( (slideItem) => {
            el.insertAdjacentHTML('beforeend', `
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
    };
    displaySlides();

    const moveSlides = () => {
        const prevButton = document.querySelector('.product-slider__arrow-left');
        prevButton.addEventListener("click", () => { alert('test'); }, false);
    };
    moveSlides();
};

export default BestSellerSlider();