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
                            this.add(new Product(data.title, data.spec, data.stock, data.slug, data.images, data.hero, data.best));
                        }
                        break;
                    case 'best':
                        if (data.best === true) {
                            this.add(new Product(data.title, data.spec, data.stock, data.slug, data.images, data.hero, data.best));
                        }
                        break;
                    case 'all':
                        this.add(new Product(data.title, data.spec, data.stock, data.slug, data.images, data.hero, data.best));
                        break;
                    default:
                        this.add(new Product(data.title, data.spec, data.stock, data.slug, data.images, data.hero, data.best));
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
}

export default Products;
