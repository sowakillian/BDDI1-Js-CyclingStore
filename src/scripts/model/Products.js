import Loader from '../utils/Loader';
import EventManager from '../utils/EventManager';
import Product from './Product';
import ProductNew from "./ProductNew";

class Products extends EventManager {
    constructor() {
        super();
        this.loader = new Loader();
        this._models = [];
    }
    fetch(type) {
        this.loader.load('/src/datas/products.json').then(datas => {
            let datasArray = [...datas];
            datasArray.forEach(data => {

                switch (type) {
                    case 'hero':
                        if (data.hero === true) {
                            this.addProduct(data);
                        }
                        break;
                    case 'best':
                        if (data.best === true) {
                            this.addProduct(data);
                        }
                        break;
                    case 'all':
                        this.addProduct(data);
                        break;
                    default:
                        this.addProduct(data);
                }

            });
        }).catch(error => {
            console.log(`Erreur ProductNews.fetch() :: ${error}`);
        });
    }
    add(model) {
        this._models.push(model);
        this.dispatchEvent(new CustomEvent('TODO::AddProduct', {detail: {model}} ));
    }

    addProduct(data) {
        this.add(new Product(data.title, data.specs, data.stock, data.slug, data.images, data.hero, data.best));
    }
}

export default Products;
