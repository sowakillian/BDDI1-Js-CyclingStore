/* -------------------
Const
------------------- */
import BESTPRODUCTS from "../../../const/home/BESTPRODUCTS";

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
        BESTPRODUCTS.addEventListener('TODO::AddProduct', (event) => this.addItem(event));

        BESTPRODUCTS.fetch('best');
    },

    addItem(e) {
        const bestSellerItem = new BestSellerItem();
        bestSellerItem.build(e.detail);
        this.el.appendChild(bestSellerItem.el);
    },
};

export default BestSellerList;
