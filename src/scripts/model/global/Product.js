class Product{
    constructor(title = '', specs = '', stock = '', slug = '', images = '', hero = '', best = '', color='') {
        this._id = Math.floor(Number(Date.now() * Math.random() )).toString();
        this._title = title;
        this._specs = specs;
        this._stock = stock;
        this._slug = slug;
        this._images = images;
        this._hero = hero;
        this._best = best;
        this._color = color;
    }
    set id(id) {
    }
    set title(title) {
        this._title = title;
    }
    set specs(specs) {
        this._specs = specs;
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
    set color(color) {
        this._color = color;
    }
    get id() {
        return this._id;
    }
    get title() {
        return this._title;
    }
    get specs() {
        return this._specs;
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
    get color() {
        return this._color;
    }
}

export default Product;
