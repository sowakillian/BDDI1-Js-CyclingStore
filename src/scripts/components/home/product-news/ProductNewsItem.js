/* -------------------
Manager
------------------- */
import PRODUCTNEWS from "../../../const/home/PRODUCTNEWS";

/* -------------------
Model
------------------- */
import ProductNew from "../../../model/home/ProductNew";

/* -------------------
ListItem
------------------- */
class ProductNewsItem {
    constructor() {
        this.el=null;
    }
    init(el, data){
        this.el=el;

        this.title = this.el.querySelector('.product-news-slider-content__title');
        this.text = this.el.querySelector('.product-news-slider-content__description');

        if(data){
            this.model = data.model;
        }else {
            this.model = new ProductNew(this.title.textContent, this.text.textContent);
        }

        //this.el.setAttribute('data-id', this.model.id);
        this.fill();
    }
    build(data){
        this.el = document.createElement('article');
        this.el.classList.add('row');
        this.el.innerHTML = document.getElementById('news-item-tmpl').innerHTML;
        this.init(this.el, data);
    }

    fill(){
        this.title.textContent = this.model.title;
        this.text.textContent = this.model.text;
    }
}

export default ProductNewsItem;
