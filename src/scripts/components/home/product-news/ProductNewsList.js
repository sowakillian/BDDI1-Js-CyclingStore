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
        PRODUCTNEWS.fetch();
    },
};

export default ProductNewsList;
