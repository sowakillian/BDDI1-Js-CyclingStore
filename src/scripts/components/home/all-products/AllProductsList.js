/* -------------------
Const
------------------- */
import PRODUCTS from "../../../const/PRODUCTS";

/* -------------------
Components
------------------- */
import AllProductsItem from './AllProductsItem';

/* -------------------
AllProductsList
------------------- */
const AllProductsList = {
    el: document.querySelector('.all-products-list'),

    init() {
        PRODUCTS.addEventListener('TODO::AddProduct', (event) => this.addItem(event));

        PRODUCTS.fetch('all');
    },

    addItem(e) {
        const allProductsItem = new AllProductsItem();
        allProductsItem.build(e.detail);
        this.el.appendChild(allProductsItem.el);
    },
};

export default AllProductsList;
