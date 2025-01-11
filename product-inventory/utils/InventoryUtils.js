function calculateTotalInventoryValue(products) {
    return products.reduce((total, product) => total + product.totalValue(), 0);
}

function findMostExpensiveProduct(products) {
    return products.reduce((max, product) => (product.price > max.price ? product : max), products[0]).name;
}

function isProductInStock(products, productName) {
    return products.some(product => product.name === productName);
}

function sortProducts(products, key, descending = true) {
    return [...products].sort((a, b) => {
        return descending ? b[key] - a[key] : a[key] - b[key];
    });
}

module.exports = {
    calculateTotalInventoryValue,
    findMostExpensiveProduct,
    isProductInStock,
    sortProducts,
};