/* -------------------
Manager
------------------- */
import PRODUCTNEWS from "../../../const/PRODUCTNEWS";

/* -------------------
Model
------------------- */
import ProductNew from "../../../model/ProductNew";

/* -------------------
ListItem
------------------- */
class ProductNewsItem {
    constructor() {
        this.el=null;
    }
    init(el, data){
        this.el=el;

        this.title = this.el.querySelector('h4');
        this.texte = this.el.querySelector('p');

        if(data){
            this.model = data.model;
        }else {
            this.model = new Todo(this.title.textContent, this.texte.textContent);
        }

        this.el.setAttribute('data-id', this.model.id);
        this.fill();
        this.model.addEventListener('TODO::EditTodo', () => this.fill());
    }
    build(data){
        this.el = document.createElement('article');
        this.el.classList.add('row');
        this.el.innerHTML = document.getElementById('list-item-tmpl').innerHTML;
        this.init(this.el, data);
    }
}

export default ProductNewsItem;
