/* -------------------
Manager
------------------- */
import PRODUCTS from "../../../const/home/MAINPRODUCTS";

/* -------------------
Model
------------------- */
import Product from "../../../model/home/Product";

/* -------------------
MainProductSlideItem
------------------- */
class MainProductItem {
    constructor() {
        this.el=null;
    }
    init(el, data){
        this.el=el;

        this.title = this.el.querySelector('.main-product__title');
        this.stock = this.el.querySelector('.main-product__type');
        this.image = this.el.querySelector('.main-product__photo');


        if(data){
            this.model = data.model;
        }else {
            this.model = new Product(this.title.textContent, this.stock.textContent);
        }

        //this.el.setAttribute('data-id', this.model.id);
        this.fill();
    }
    build(data){
        this.el = document.createElement('div');
        this.el.classList.add('main-product__item', 'fade', 'main-product__item_inactive');
        this.el.innerHTML = document.getElementById('main-product-tmpl').innerHTML;
        this.init(this.el, data);
    }

    fill(){
        this.title.textContent = this.model.title;
        this.stock.textContent = this.model.stock;
        this.image.src = this.model.images.big;
    }
}

export default MainProductItem;
