import Loader from '../../../utils/Loader';
import ProductNew from './ProductNew';
import EventManager from '../../../utils/EventManager';

class ProductNews extends EventManager {
    constructor() {
        super();
        this.loader = new Loader();
        this._models = [];
    }
    fetch() {
        this.loader.load('/src/datas/news.json').then(datas => {
            let datasArray = [...datas];
            datasArray.forEach(data => {
                this.add(new ProductNew(data.title, data.text));
            });
        }).catch(error => {
            console.log(`Erreur ProductNews.fetch() :: ${error}`);
        });
    }
    add(model) {
        this._models.push(model);
        this.dispatchEvent(new CustomEvent('TODO::AddProductNews', {detail: {model}} ));
    }
}

export default ProductNews;
