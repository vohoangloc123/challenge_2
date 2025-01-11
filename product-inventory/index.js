const Product = require('./models/Product');
const {
    calculateTotalInventoryValue,
    findMostExpensiveProduct,
    isProductInStock,
    sortProducts,
} = require('./utils/InventoryUtils');

// Danh sách sản phẩm
const inventory = [
    new Product("Laptop", 999.99, 5),
    new Product("Smartphone", 499.99, 10),
    new Product("Tablet", 299.99, 0),
    new Product("Smartwatch", 199.99, 3),
];

// 1. Tổng giá trị tồn kho
console.log("1. Tổng giá trị tồn kho:", calculateTotalInventoryValue(inventory).toFixed(2));

// 2. Sản phẩm đắt nhất
console.log("2. Sản phẩm đắt nhất:", findMostExpensiveProduct(inventory));

// 3. Headphones có trong kho không
console.log("3. Headphones có trong kho không:", isProductInStock(inventory, "Headphones"));

// 4. Sắp xếp sản phẩm theo giá giảm dần
console.log("4. Sắp xếp sản phẩm theo giá giảm dần:");
console.table(sortProducts(inventory, "price"));

// 5. Sắp xếp sản phẩm theo số lượng tăng dần
console.log("5. Sắp xếp sản phẩm theo số lượng tăng dần:");
console.table(sortProducts(inventory, "quantity", false));
