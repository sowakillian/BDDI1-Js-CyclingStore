import Loader from '../../../utils/Loader';
import EventManager from '../../../utils/EventManager';
import Product from '../../global/Product';

class MainProducts extends EventManager {
    constructor() {
        super();
        this.loader = new Loader();
        this._models = [];
    }
    fetch() {
        this.loader.load('/src/datas/products.json').then(datas => {
            let datasArray = [...datas];
            datasArray.forEach(data => {
                if (data.hero === true) {
                    this.addProduct(data);
                }
            });
        }).catch(error => {
            console.log(`Erreur MainProducts.fetch() :: ${error}`);
        });
    }
    add(model) {
        this._models.push(model);
        this.dispatchEvent(new CustomEvent('TODO::AddProduct', {detail: {model}} ));
    }

    addProduct(data) {
        this.add(new Product(data.title, data.specs, data.stock, data.slug, data.images, data.hero, data.best, data.color));
    }
}

export default MainProducts;
