// Practice:

/*তোর কাছে একটা array আছে: [5, 10, 15, 20, 25]। তুই একটা প্রোগ্রাম লিখে দেখ, সব সংখ্যার যোগফল কত হয় reduce দিয়ে। 
 */
const randomArray = [5, 10, 15, 20, 25];
const totalSum = randomArray.reduce((sum, num) => sum + num, 0 );
console.log("Total numbers sum is: ", totalSum)

/*তুই একটা দোকানের মালিক। তোর পণ্যগুলা: [{name: 'shampoo', price: 100}, {name: 'soap', price: 50}, {name: 'toothpaste', price: 75}]। সব পণ্যের মোট দাম বের কর reduce ব্যবহার করে।
 */
const myShop = [{name: "shampoo", price: 100}, {name: "Soap", price: 50 }, {name: "toothpaste", price: 75}];
const allProductPrice = myShop.reduce((sum, num) => sum + num.price, 0);
console.log("all product price sum are: ", allProductPrice);

/*ধর, তুই একটা product-এর list বানাইছিস: [{name: 'Pen', price: 5}, {name: 'Book', price: 50}, {name: 'Bag', price: 100}]। এবার সব পণ্যের দাম যোগ কর reduce দিয়ে। 
 */
const productList = [{name: 'Pen', price: 5}, {name: 'Book', price: 50}, {name: 'Bag', price: 100}];
const itemsSum = productList.reduce((sum, num) => sum + num.price , 0);
console.log("all items price sum is: ", itemsSum);

/*reduce দিয়ে [1, 2, 3, 4, 5] সব সংখ্যার গুণফল বের কর।
 */
const basicNums = [1, 2, 3, 4, 5];
const basicNumsSum = basicNums.reduce((sum,num) => sum * num, 1);
console.log("all basic numbers multiplication is: ", basicNumsSum);

/*[10, 20, 30, 40, 50] এই অ্যারে reduce ব্যবহার করে সর্বোচ্চ মান বের কর।
 */
// THIS ONE IS DIFFICULT FOR ME NOW, I WILL LOOK BACK LATTER.

/*একটা অ্যারে বানা [100, 200, 300, 400]। reduce দিয়ে সব সংখ্যার যোগফল বের কর এবং ইনিশিয়াল ভ্যালু হিসেবে 50 ব্যবহার কর। */
const bigNums = [100, 200, 300, 400];
const multBigN = bigNums.reduce((sum, num) => sum * num, 50);
console.log("All big numbers multiplication is: ", multBigN);