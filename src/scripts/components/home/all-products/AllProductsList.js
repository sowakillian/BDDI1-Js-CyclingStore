/* -------------------
Const
------------------- */
import ALLPRODUCTS from "../../../const/home/ALLPRODUCTS";

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
        ALLPRODUCTS.addEventListener('TODO::AddProduct', (event) => this.addItem(event));

        ALLPRODUCTS.fetch();
    },

    addItem(e) {
        const allProductsItem = new AllProductsItem();
        allProductsItem.build(e.detail);
        this.el.appendChild(allProductsItem.el);
    },
};

export default AllProductsList;
