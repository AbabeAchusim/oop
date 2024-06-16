//Product//
class Product {
    constructor(id, name, price) {
        this.id = id;
        this.name = name;
        this.price = price;
    }
}

//Shopping Cart Item//

class ShoppingCartItem {
    constructor(product, quantity) {
        this.product = product;
        this.quantity = quantity;
    }

    getTotalPrice() {
        return this.product.price * this.quantity;
    }
}


//Shopping Cart//

class ShoppingCart {
    constructor() {
        this.items = [];
    }

    // Method to get the total number of items in the cart
    getTotalItems() {
        return this.items.reduce((total, item) => total + item.quantity, 0);
    }

    // Method to add items to the cart
    addItem(product, quantity) {
        // Check if the product already exists in the cart
        let found = false;
        for (let item of this.items) {
            if (item.product.id === product.id) {
                item.quantity += quantity;
                found = true;
                break;
            }
        }

        // If product is not found, add it as a new item
        if (!found) {
            this.items.push(new ShoppingCartItem(product, quantity));
        }
    }

    // Method to remove items from the cart
    removeItem(productId, quantity) {
        this.items = this.items.filter(item => {
            if (item.product.id === productId) {
                item.quantity -= quantity;
            }
            // Remove items with quantity less than or equal to 0
            return item.quantity > 0;
        });
    }

    // Method to display cart items
    displayCart() {
        console.log("Cart Items:");
        this.items.forEach(item => {
            console.log(`${item.product.name} - Quantity: ${item.quantity}`);
        });
    }

    // Method to calculate the total price of all items in the cart
    getTotalPrice() {
        return this.items.reduce((total, item) => total + item.getTotalPrice(), 0);
    }
}

// Create some products
let product1 = new Product(1, 'Laptop', 1200);
let product2 = new Product(2, 'Mouse', 20);
let product3 = new Product(3, 'Keyboard', 50);

// Create a shopping cart
let cart = new ShoppingCart();

// Add items to the cart
cart.addItem(product1, 1); // Add 1 Laptop
cart.addItem(product2, 2); // Add 2 Mouses
cart.addItem(product3, 1); // Add 1 Keyboard

// Display cart items
cart.displayCart();

// Get total items in the cart
console.log(`Total Items in Cart: ${cart.getTotalItems()}`);

// Get total price of items in the cart
console.log(`Total Price: $${cart.getTotalPrice()}`);

// Remove an item from the cart
cart.removeItem(2, 1); // Remove 1 Mouse

// Display updated cart items
cart.displayCart();

// Get updated total items and total price
console.log(`Updated Total Items in Cart: ${cart.getTotalItems()}`);
console.log(`Updated Total Price: $${cart.getTotalPrice()}`);
