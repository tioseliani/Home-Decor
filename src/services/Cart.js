export default class Cart {
    constructor(key){
        this.storage = window.localStorage;
        this.key = key;
        this.products = [];
    }

    add(product){
        this.products.push(product);
        this.update();
    }

    update() {
        this.storage.setItem(this.key, JSON.stringify(this.products))
    }

    read(){
        this.products = JSON.parse(this.storage.getItem(this.key)) || [];
    }
}