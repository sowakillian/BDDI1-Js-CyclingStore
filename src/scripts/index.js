import '../styles/index.scss';

let slideNumber = 0;

const slideMainProduct = () => {
    let i;
    const slides = document.querySelectorAll(".main-product__item");
    let headerBackgroundColor = document.querySelector('.main-product');

    for (i = 0; i < slides.length; i++) {
        slides[i].classList.add('main-product__item_inactive');
        slides[i].classList.remove('main-product__item_active');

    }
    slideNumber++;
    if (slideNumber > slides.length) {slideNumber = 1}
    slides[slideNumber-1].classList.remove('main-product__item_inactive');
    slides[slideNumber-1].classList.add('main-product__item_active');
    headerBackgroundColor.style.backgroundColor=slides[slideNumber-1].dataset.color;
    setTimeout(slideMainProduct, 5000);
};

slideMainProduct();

