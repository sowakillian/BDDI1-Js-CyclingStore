
/* -------------------
AllProductsLoadMore
------------------- */

const AllProductsLoadMore = {
    el: document.querySelector('.all-products-more__button'),
    productList: document.querySelector('.all-products-list'),

    loadMore() {
        this.el.addEventListener("click", () => {
            if (this.el.textContent === "voir tous les modèles") {
                this.el.textContent = "revenir à 5 modèles";
            }
            else {
                this.el.textContent = "voir tous les modèles";
            }
            this.productList.classList.toggle('all-products-list__opened');
        });
    },
};

export default AllProductsLoadMore;
