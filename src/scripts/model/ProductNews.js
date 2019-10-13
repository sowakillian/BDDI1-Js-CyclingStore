import Loader from '../utils/Loader';
import ProductNew from './ProductNew';

class ProductNews {
    constructor() {
        this.loader = new Loader();
        this._models = [];
    }
    fetch() {
        this.loader.load('/src/datas/news.json').then(datas => {
            let datasArray = [...datas];
            datasArray.forEach(data => {
                this.add(new ProductNew(data.title, data.text));
            });
            console.log(datasArray)
        }).catch(error => {
            console.log(`Erreur Todos.fetch() :: ${error}`);
        });
    }
    add(model) {
        this._models.push(model);
    }
}

export default ProductNews;
