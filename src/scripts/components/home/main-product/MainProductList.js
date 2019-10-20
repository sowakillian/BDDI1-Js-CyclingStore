/* -------------------
Const
------------------- */
import PRODUCTS from "../../../const/PRODUCTS";

/* -------------------
Components
------------------- */
import MainProductItem from './MainProductItem';

/* -------------------
List
------------------- */
const MainProductList = {
    el: document.querySelector('.main-product > .wrap'),
    slideList: [],
    slideIndex: 0,
    slideDiv: document.querySelector(".main-product > .wrap"),

    init() {
        PRODUCTS.addEventListener('TODO::AddProduct', (event) => this.addItem(event));

        PRODUCTS.fetch('hero');
    },

    addItem(e) {
        const mainProductItem = new MainProductItem();
        mainProductItem.build(e.detail);
        this.el.appendChild(mainProductItem.el);
    },

    slideItem() {
        console.log(this.slideIndex);
        let i;

        const slides = document.querySelectorAll("main-product__item");
        console.log('ouonenest');

        console.log(slides);
        slides[0].classList.remove('main-product__item_inactive');
        slides[0].classList.add('main-product__item_active');


        setInterval(() => {
            for (i = 0; i < slides.length; i++) {
                slides[i].classList.add('main-product__item_inactive');
                slides[i].classList.remove('main-product__item_active');
            }
            this.slideIndex++;
            if (this.slideIndex > slides.length) {this.slideIndex = 1;}
            slides[this.slideIndex-1].classList.remove('main-product__item_inactive');
            slides[this.slideIndex-1].classList.add('main-product__item_active');
        }, 5000);
    }
};

export default MainProductList;