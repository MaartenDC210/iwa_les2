const readLine = require("readline-sync");

const products = [
  {name: "Book", price: 30},
  {name: "Clock", price: 25},
  {name: "Lamp", price: 35}
];

const purchased = [];

console.log("Welcome to our store!");
console.log("Here is an overview of our products");

products.forEach((product, index) => console.log(index + 1 , product.name));

const selectedProductIndex = readLine.question("What product do you want to buy: ") - 1;

const selectedProduct = products[selectedProductIndex];

console.log(
  `You selected ${selectedProduct.name} for: $${selectedProduct.price}`
);

let payedAmount = 0;
while(payedAmount !== selectedProduct.price){
  payedAmount = parseInt(readLine.question("What do you pay: "));

  if( payedAmount > selectedProduct.price) {
    console.log("you payed too much");
  }
  
  if(payedAmount < selectedProduct.price){
    console.log("you payed too little");
  }
}

purchased.push(selectedProduct);

console.log(`Congrats with ${selectedProduct.name}`);
console.log(purchased);
