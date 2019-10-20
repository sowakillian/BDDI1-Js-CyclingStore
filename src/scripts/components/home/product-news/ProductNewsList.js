/* -------------------
Const
------------------- */
import PRODUCTNEWS from "../../../const/PRODUCTNEWS";

/* -------------------
Components
------------------- */
import ProductNewsItem from './ProductNewsItem';

/* -------------------
List
------------------- */
const ProductNewsList = {
    el: document.querySelector('.product-news-slider'),
    init() {
        PRODUCTNEWS.addEventListener('TODO::AddProductNews', (event) => this.addItem(event));
        PRODUCTNEWS.fetch();
    },

    addItem(e) {
        const productNewsItem = new ProductNewsItem();
        productNewsItem.build(e.detail);
        this.el.appendChild(productNewsItem.el);
    },
};

export default ProductNewsList;
