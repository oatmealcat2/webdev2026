const productPrices = {
    laptop: 150.99,
    tablet: 899.99,
    phone: 1199.99,
    monitor: 210.99
};

const discountCodes = {
    SAVE10: 0.10,
    SAVE20: 0.20,
    STUDENT: 0.15
};

const calculateTax = subtotal => {return subtotal * 0.0825};

const applyDiscount = function (subtotal, code) {
    if (code !== discountCodes) {
        return console.log("0");
    };

    if (code.toUpperCase().toLowerCase() === SAVE10) {
        return subtotal * 0.10;
    } else if (code.toUpperCase().toLowerCase() === SAVE20) {
        return subtotal * 0.20;
    } else if (code.toUpperCase().toLowerCase() === STUDENT) {
        return subtotal * 0.15;
    };

};

const orderForm = document.querySelector("#orderForm");
const selectedProduct = document.querySelector("#product");
const selectedQuantity = document.querySelector("#quantity");
const discountCode = document.querySelector("#discountCode");
const resultsContainer = document.querySelector("#results");

orderForm.addEventListener("submit", function(event) {
    event.preventDefault();

    if (selectedProduct.value = productPrices && selectedQuantity >= 1) {
        selectedProduct = productPrices[selectedProduct];
        selectedQuantity = parseInt[quantity].trim();
    } else {
        alert("Select a valid product and enter a valid quantity!");
        return console.log("0");
    };

});

console.log(selectedProduct.value);