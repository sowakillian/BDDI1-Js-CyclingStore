/* -------------------
Components
------------------- */


/* -------------------
MainProductSlider
------------------- */
const BestSellerSlider = () => {
    const el = document.querySelector(".best-seller")



    /* -------------------
    Transition between slides
    ------------------- */
    const moveSlides = () => {
        const prevButton = el.querySelector('.product-slider__arrow-left')
        prevButton.addEventListener("click", () => { alert('test') }, false);
    };
    moveSlides();
};

export default BestSellerSlider();