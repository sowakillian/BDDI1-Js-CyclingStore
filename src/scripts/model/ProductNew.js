class ProductNew {
    constructor(title = '', text = '') {
        this._id = Math.floor(Number(Date.now() * Math.random() )).toString();
        this._title = title;
        this._text = text;
    }
    set id(id) {
    }
    set title(title) {
        this._title = title;
    }
    set text(text) {
        this._text = text;
    }
    get id() {
        return this._id;
    }
    get title() {
        return this._title;
    }
    get text() {
        return this._text;
    }
}

export default ProductNew;
