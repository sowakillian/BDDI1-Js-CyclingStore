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
    wrapper: document.querySelector('.product-news-slider'),
    el: document.querySelector('.product-news-slider-inner'),
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
        let direction;

        setInterval(() => {
            direction = -1;
            this.wrapper.style.justifyContent = 'flex-start';
            this.el.style.transform = 'translate(-20%)';
        }, 5000);

        this.el.addEventListener('transitionend', () => {

            if (direction === 1) {
                this.el.prepend(this.el.lastElementChild);
            } else {
                console.log(this.el.firstElementChild)
                this.el.appendChild(this.el.firstElementChild);
            }

            this.el.style.transition = 'none';
            this.el.style.transform = 'translate(0)';
            setTimeout(() => {
                this.el.style.transition = 'all 2s';
            });
        }, false);
    },
};

export default ProductNewsList;
