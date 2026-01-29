//SHALLOW COPY
const user = {
                id: 101,
                name: "Ravi",
                preferences: {
                  theme: "dark",
                  language: "en"
                }
              };
const user2={...user}
//change name in the copied object
user2.name="abc"
//change preferences.theme in the copied object
user2.preferences.theme="light"
console.log(user);
console.log(user2);

//DEEP COPY
 const order = {
                  orderId: "ORD1001",
                  customer: {
                    name: "Anita",
                    address: {
                      city: "Hyderabad",
                      pincode: 500085
                    }
                  },
                  items: [
                    { product: "Laptop", price: 70000 }
                  ]
                };
const ordercopy=structuredClone(order);
//
ordercopy.customer.address.city="pune";
ordercopy.items[0].price=60000;
console.log(order);
console.log(ordercopy);