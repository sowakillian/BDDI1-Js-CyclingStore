/* -------------------
Const
------------------- */
import PRODUCTS from "../../../const/PRODUCTS";

/* -------------------
Components
------------------- */
import BestSellerItem from './BestSellerItem';

/* -------------------
BestSellerItem
------------------- */
const BestSellerList = {
    el: document.querySelector('.best-seller-slider'),

    init() {
        PRODUCTS.addEventListener('TODO::AddProduct', (event) => this.addItem(event));

        PRODUCTS.fetch('best');
    },

    addItem(e) {
        const bestSellerItem = new BestSellerItem();
        bestSellerItem.build(e.detail);
        this.el.appendChild(bestSellerItem.el);
    },
};

export default BestSellerList;
