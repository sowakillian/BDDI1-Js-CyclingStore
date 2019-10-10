/* -------------------
Components
------------------- */
import MainProductSlideItem from "./MainProductSlideItem";

/* -------------------
MainProductSlider
------------------- */
const MainProductSlider = () => {
    let slideList = [];
    let slideIndex = 0;
    const slideDiv = document.querySelector(".main-product > .wrap");

    const slide1 =  new MainProductSlideItem("#009f55","/src/images/main-product/velo.png", "Modèle 1", "Taille S - Mécanique", "Vert feu");
    const slide2 =  new MainProductSlideItem("#e73025","/src/images/main-product/velo2.png", "Modèle 2", "Taille L - Mécanique", "Rouge feu");

    slideList.push(slide1, slide2);

    /* -------------------
    Display slides in the DOM
    ------------------- */
    const displaySlides = () => {
        slideList.forEach( (slideItem) => {
            slideDiv.insertAdjacentHTML('beforeend', `
             <div class="main-product__item fade" data-color="${slideItem.backgroundColor}">
                <h2 class="main-product__title">${slideItem.title}</h2>
                <p class="main-product__type">${slideItem.type}</p>
                <p class="main-product__color">${slideItem.description}</p>

                <img class="main-product__photo" src="${slideItem.image}">

                <button class="main-product__button-buy base-button">commander</button>
             </div>
        `);
        });
    };
    displaySlides();

    /* -------------------
    Transition between slides
    ------------------- */
    const moveSlides = () => {
        let i;
        const slides = document.querySelectorAll(".main-product__item");
        let headerBackgroundColor = document.querySelector('.main-product');

        for (i = 0; i < slides.length; i++) {
            slides[i].classList.add('main-product__item_inactive');
            slides[i].classList.remove('main-product__item_active');
        }
        slideIndex++;
        if (slideIndex > slides.length) {slideIndex = 1}
        slides[slideIndex-1].classList.remove('main-product__item_inactive');
        slides[slideIndex-1].classList.add('main-product__item_active');

        headerBackgroundColor.style.backgroundColor=slides[slideIndex-1].dataset.color;
        setTimeout(moveSlides, 6000);
    };
    moveSlides();
};

export default MainProductSlider();