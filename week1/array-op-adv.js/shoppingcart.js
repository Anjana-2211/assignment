//building a shopping cart summary for an e-commerce website.

const cart = [
  { id: 101, name: "Laptop", price: 60000, quantity: 1, inStock: true },
  { id: 102, name: "Mouse", price: 800, quantity: 2, inStock: true },
  { id: 103, name: "Keyboard", price: 1500, quantity: 1, inStock: false },
  { id: 104, name: "Monitor", price: 12000, quantity: 1, inStock: true }
];

/* Tasks:
    1. Use filter() to get only inStock products
    2. Use map() to create a new array with:  { name, totalPrice }
    3. Use reduce() to calculate grand total cart value
    4. Use find() to get details of "Mouse"
    5. Use findIndex() to find the position of "Keyboard"*/

const instock=cart.filter(item=>item.instock);
console.log("inStock products:",instock);

const newArray=cart.map(item=>{return {name:item.name,totalPrice:item.price*item.quantity}});
console.log("array with name and totalPrice:",newArray);

const grandtotal=cart.reduce((acc,ele)=>acc+(ele.price*ele.quantity),0);
console.log("grand total cart value:",grandtotal);

const m=cart.find(item=>item.name==="Mouse");
console.log("details of Mouse:",m);

const kb=cart.findIndex(item=>item.name==="Keyboard");
console.log("position of Keyboard:",kb);

