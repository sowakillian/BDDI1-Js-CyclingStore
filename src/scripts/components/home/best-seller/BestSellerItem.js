/* -------------------
Manager
------------------- */
import PRODUCTS from "../../../const/PRODUCTS";

/* -------------------
Model
------------------- */
import Product from "../../../model/Product";

/* -------------------
MainProductSlideItem
------------------- */
class MainProductItem {
    constructor() {
        this.el=null;
    }
    init(el, data){
        this.el=el;

        this.title = this.el.querySelector('.product-item__title');
        this.stock = this.el.querySelector('.product-item__stock');
        this.photo = this.el.querySelector('.product-item__photo > img');
        this.engine = this.el.querySelector('.product-item__engine');
        this.color = this.el.querySelector('.product-item__color');

        if(data){
            this.model = data.model;
        }else {
            this.model = new Product(this.title.textContent, this.stock.textContent);
        }

        //this.el.setAttribute('data-id', this.model.id);
        this.fill();
    }
    build(data){
        this.el = document.createElement('article');
        this.el.classList.add('product-item');
        this.el.innerHTML = document.getElementById('product-item-tmpl').innerHTML;
        this.init(this.el, data);
    }

    fill(){
        this.title.textContent = this.model.title;
        this.stock.textContent = this.model.stock;
        this.photo.src = this.model.images.big;
        this.engine.textContent = this.model.specs.engine;
        this.color.textContent = this.model.specs.color;
    }
}

export default MainProductItem;
