class Product{
    constructor(title = '', spec = '', stock = '', slug = '', images = '', hero = '', best = '') {
        this._id = Math.floor(Number(Date.now() * Math.random() )).toString();
        this._title = title;
        this._spec = spec;
        this._stock = stock;
        this._slug = slug;
        this._images = images;
        this._hero = hero;
        this._best = best;
    }
    set id(id) {
    }
    set title(title) {
        this._title = title;
    }
    set spec(spec) {
        this._spec = spec;
    }
    set stock(stock) {
        this._stock = stock;
    }
    set slug(slug) {
        this._slug = slug;
    }
    set images(images) {
        this._images = images;
    }
    set hero(hero) {
        this._hero = hero;
    }
    set best(best) {
        this._best = best;
    }
    get id() {
        return this._id;
    }
    get title() {
        return this._title;
    }
    get spec() {
        return this._spec;
    }
    get stock() {
        return this._stock;
    }
    get slug() {
        return this._slug;
    }
    get images() {
        return this._images;
    }
    get hero() {
        return this._hero;
    }
    get best() {
        return this._best;
    }
}

export default Product;
