// HW% - COSC2328 - Professor McCurry
// Implemented by: Amelia Jaimes Alcauter

console.log("===== BOOKSTORE CALCULATOR =====");

const book1 = {
    title: "Goodnight Punpun",
    author: "Inio Asano",
    price: 19.99
}

const book2 = {
    title: "Paradise Kiss",
    author: "Ai Yazawa",
    price: 29.99
}

const book3 = {
    title: "Nana",
    author: "Ai Yazawa",
    price: 9.99
}

const TAX_RATE = 0.0825;
let isMember = false;

console.log("--- Book Inventory ---");
console.log("Title: " + book1.title + ", Author: " + book1.author + ", Price: $" + book1.price);
console.log("Title: " + book2.title + ", Author: " + book2.author + ", Price: $" + book2.price);
console.log("Title: " + book3.title + ", Author: " + book3.author + ", Price: $" + book3.price);

function calculateSubtotal (price, quantity) {
    let subTotal = price * quantity;
    return subTotal;
}

function formatCurrency(amount) {
    let toFixed = "$" + amount;
    return toFixed;
}

console.log("---Function Declarations Test---");
console.log(formatCurrency(calculateSubtotal(book1.price, 2)));

const calculateTax = subtotal => {return subtotal * TAX_RATE};
const applyMemberDiscount = (subtotal, isMember) => (isMember? subtotal * 0.9 : subtotal);

console.log("--- Arrow Functions ---");
console.log(calculateTax(calculateSubtotal(book1.price, 1)));
console.log(applyMemberDiscount(calculateSubtotal(book1.price, 1), true));

const calculateTotal = function calculateTotal(price, quantity, isMember) {
    if (quantity < 1) {
        quantity = 1;
    }

    let subtotal = calculateSubtotal(price, quantity);
    let subtotalWithMemberDiscount = applyMemberDiscount(subtotal, isMember);

    return subtotalWithMemberDiscount;
}

console.log("--- Function Expressions with Defaults ---");
console.log(calculateTotal(book1.price, 1));

function calculateBulkOrder(...prices) {
    let sum = 0;

    for (let i of prices) {
        sum += i;
    }

    return sum;
}

console.log("--- Rest Operator Test ---");
console.log(calculateBulkOrder(book1.price, book2.price, book3.price));

function processOrder (book, quantity, callback) {
    let pricing = book.name + " : " + callback(book.price, quantity);

    return pricing;
}

const standardPricing = function standardPricing(price, quantity) {
    let subtotal = price * quantity;

    return subtotal;
}

const memberPricing = function memberPricing(price, quantity) {
    let subtotal = price * quantity;
    let memberDiscount = subtotal * 0.1;

    let subtotalMemberPricing = subtotal - memberDiscount;

    return subtotalMemberPricing;
}

console.log("--- Callback Functions ---");
console.log(processOrder(book1, 2, memberPricing))
