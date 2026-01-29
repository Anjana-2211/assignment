import { reduceStock } from './product.js';
import { getCartItems, getCartTotal, clearCart } from './cart.js';
import { applyDiscount } from './discount.js';

export function processPayment(paymentMethod, couponCode = null) {
    // 1. Get cart items and total
    let cartItems = getCartItems();
    let cartTotal = getCartTotal();

    // 2. Apply discount if coupon provided
    let finalAmount = cartTotal;
    let discountDetails = null;
    if (couponCode) {
        let discountResult = applyDiscount(cartTotal, couponCode, cartItems);
        finalAmount = discountResult.finalTotal;
        discountDetails = discountResult;
    }

    // 3. Validate payment method (card/upi/cod)
    const validMethods = ['card', 'upi', 'cod'];
    if (!validMethods.includes(paymentMethod)) {
        console.log("Invalid payment method.");
    }
    
    // 4. Process payment (simulate)
    console.log(`Processing ${paymentMethod} payment of ₹${finalAmount}`);

     // 5. Reduce stock for all items
    cartItems.forEach(item => {
        reduceStock(item.id, item.quantity);
    });

    // 6. Clear cart
    clearCart();

    // 7. Generate order summary
    /* Return order summary:
    // {
    //   orderId: ...,
    //   items: [...],
    //   subtotal: ...,
    //   discount: ...,
    //   total: ...,
    //   paymentMethod: ...,
    //   status: 'success/failed',
    //   message: '...'*/
    let orderSummary = {
        orderId:12345,
        items:cartItems,
        subtotal:cartTotal,
        discount: discountDetails ? discountDetails.discount : 0,
        total:finalAmount,
        paymentMethod:paymentMethod,
        status:'success',
        message:'Payment processed successfully.'
    };
    return orderSummary;

}


 export function validatePaymentMethod(method) {
    // Check if method is valid (card/upi/cod)
    const validMethods = ['card', 'upi', 'cod'];
    return validMethods.includes(method);
                      }

function generateOrderId() {
    // Generate random order ID

        return 'ORD' + Date.now();
                          }

