/* -------------------
Const
------------------- */
import PRODUCTNEWS from "../../../const/home/PRODUCTNEWS";

/* -------------------
Components
------------------- */
import ProductNewsItem from './ProductNewsItem';

/* -------------------
List
------------------- */
const ProductNewsList = {
    el: document.querySelector('.product-news-slider'),
    slideList: [],
    slideIndex: 0,
    init() {
        PRODUCTNEWS.addEventListener('TODO::AddProductNews', (event) => this.addItem(event));
        PRODUCTNEWS.fetch();
    },

    addItem(e) {
        const productNewsItem = new ProductNewsItem();
        productNewsItem.build(e.detail);
        this.el.appendChild(productNewsItem.el);
    },

    slideItem() {
        let i;
        const slides = document.querySelectorAll(".product-news-slider-item");

        slides[0].classList.remove('product-news-slider-item_inactive');
        slides[0].classList.add('product-news-slider-item_active');

        setInterval(() => {
            for (i = 0; i < slides.length; i++) {
                slides[i].classList.add('product-news-slider-item_inactive');
                slides[i].classList.remove('product-news-slider-item_active');
            }
            this.slideIndex++;
            if (this.slideIndex > slides.length) {this.slideIndex = 1;}
            slides[this.slideIndex-1].classList.remove('product-news-slider-item_inactive');
            slides[this.slideIndex-1].classList.add('product-news-slider-item_active');
        }, 5000);
    },
};

export default ProductNewsList;
