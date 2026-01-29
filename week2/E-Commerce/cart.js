import { getProductById, checkStock } from './product.js';

let cartItems = [];
                          
// TODO: Implement these functions
                          
export function addToCart(productId, quantity) {
    // 1. Get product details
        let product = getProductById(productId);
        if (!product) {
            console.log("Product not found.");
        }
        // 2. Check stock availability
        if (!checkStock(productId, quantity)) {
            console.log("Insufficient stock.");
        }
        // 3. Check if product already in cart
         //    - If yes, update quantity
        //    - If no, add new item
        let cartItem = cartItems.find(item => item.productId === productId);
        if (cartItem) {
            cartItem.quantity += quantity;
        } else {
            cartItems.push({ productId, quantity });
        }
        // 4. Return success/error message
        return { success: true, message: "Product added to cart." };
    }

     export function removeFromCart(productId) {
        // Remove product from cart
        cartItems = cartItems.filter(item => item.productId !== productId);
        return { success: true, message: "Product removed from cart." };
    }

    export function updateQuantity(productId, newQuantity) {
        // Update quantity of product in cart
        // Check stock before updating
        let cartItem = cartItems.find(item => item.productId === productId);
        if (cartItem) {
            let product = getProductById(productId);
            if (checkStock(productId, newQuantity - cartItem.quantity)) {
                cartItem.quantity = newQuantity;
                return {success:true,message:"Quantity updated."};
            } else {
                return {success:false,message:"Insufficient stock."};
            }
        }
    }

    export function getCartItems() {
        // Return all cart items with product details
        return cartItems.map(item => {
            let product = getProductById(item.productId);
            return {
                ...product,
                quantity: item.quantity
            };
        });
    }


    export function getCartTotal() {
    // Calculate total price of all items in cart
    // Return total
    let total = 0;
    cartItems.forEach(item => {
        let product = getProductById(item.productId);
        total += product.price * item.quantity;
    });
    return total;
}

export function clearCart() {
    // Empty the cart
    cartItems = [];
    return { success: true, message: "Cart cleared." };
}