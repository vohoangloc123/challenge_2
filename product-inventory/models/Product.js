
class Product {
    constructor(name, price, quantity) {
        this.name = name;
        this.price = price;
        this.quantity = quantity;
    }

    totalValue() {
        return this.price * this.quantity;
    }
}

module.exports = Product;
