let customerId = 3433;
let orderAmount = 10000;
let category = "Premium";
let location = "Local";

let discount = 0;
let deliveryCharge = 0;
let finalAmount = 0;
let summary = "";

category = category ? category.trim().toLowerCase() : "";
location = location ? location.trim().toLowerCase() : "";

if (
    !customerId ||
    orderAmount <= 0 ||
    !Number.isFinite(orderAmount) ||
    !["premium", "regular"].includes(category) ||
    !["local", "regional", "remote"].includes(location)
) {
    console.log("Invalid input. Please enter valid details.");

} else {
    
    if (category === "premium") {
        discount = orderAmount * 0.15;
    } else {
        discount = orderAmount * 0.05;
    }

    if (orderAmount > 5000) {
        discount += 500;
    }

    let maxDiscount = orderAmount * 0.20;

    if (discount > maxDiscount) {
        discount = maxDiscount;
    }

    
    if (orderAmount >= 3000) {
        deliveryCharge = 0;
    } else if (location === "local") {
        deliveryCharge = 50;
    } else if (location === "regional") {
        deliveryCharge = 100;
    } else {
        deliveryCharge = 200;
    }

   
    finalAmount = orderAmount - discount + deliveryCharge;


    summary = "Order placed successfully.";

    console.log("----- E-Commerce Order Summary -----");
    console.log("Customer ID:", customerId);
    console.log("Customer Category:", category);
    console.log("Original Order Amount: ₹" + orderAmount.toFixed(2));
    console.log("Discount Amount: ₹" + discount.toFixed(2));
    console.log("Delivery Charge: ₹" + deliveryCharge.toFixed(2));
    console.log("Final Payable Amount: ₹" + finalAmount.toFixed(2));
    console.log("Order Summary:", summary);
}