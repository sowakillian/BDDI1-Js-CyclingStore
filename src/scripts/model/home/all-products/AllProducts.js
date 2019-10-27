import Loader from '../../../utils/Loader';
import EventManager from '../../../utils/EventManager';
import Product from '../../global/Product';

class AllProducts extends EventManager {
    constructor() {
        super();
        this.loader = new Loader();
        this._models = [];
    }
    fetch() {
        this.loader.load('/src/datas/products.json').then(datas => {
            let datasArray = [...datas];
            datasArray.forEach(data => {
               this.addProduct(data);
            });
        }).catch(error => {
            console.log(`Erreur AllProducts.fetch() :: ${error}`);
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

export default AllProducts;
