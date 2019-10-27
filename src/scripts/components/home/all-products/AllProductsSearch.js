
/* -------------------
AllProductsLoadMore
------------------- */

const AllProductsSearch = {
    el: document.querySelector('#search-product'),

    searchProduct() {
        this.el.addEventListener("keyup", () => {
            var input, filter, ul, li, a, i, txtValue;
            input = this.el;
            filter = input.value.toUpperCase();
            ul = document.querySelector('.all-products-list');
            li = ul.getElementsByTagName("article");
            for (i = 0; i < li.length; i++) {
                a = li[i].getElementsByTagName("h3")[0];
                txtValue = a.textContent || a.innerText;
                if (txtValue.toUpperCase().indexOf(filter) > -1) {
                    li[i].style.display = "";
                } else {
                    li[i].style.display = "none";
                }
            }
        });
    },
};

export default AllProductsSearch;
