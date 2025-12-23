// Practice: 

/*নতুন একটা অ্যারে বানা, যেখানে প্রথম উপাদান হবে "variable", তারপরের উপাদানগুলো আসবে const technologies = ["Condition", "array", "loop"], অ্যারে Spread Operator দিয়ে কপি করে।
 */

const technologies = ["Condition", "array", "Loop"];
const newArray = ["variable", ...technologies];
console.log(newArray);

/*myFruits নামে নতুন একটা অ্যারে তৈরি কর, যেখানে const fruits = ["Apple", "Banana", "Mango"], এই অ্যারেটার উপাদানগুলো থাকবে আর শেষে papaya, orange থাকবে। 
 */

const fruits = ["Apple", "Banana", "Mango"];
const myFruits = [...fruits, "papaya", "orange"];
console.log(myFruits);

/*তিনটা অ্যারে আছে const frontEnd = ["JavaScript"], const backEnd = ["Node.js"], const database = ["MongoDB"], এগুলোকে Spread Operator দিয়ে একটাতে একত্রিত কর।
 */
const frontEnd = ["JavaScript"];
const backEnd = ["Node.js"];
const database = ["MongoDB"];

const fullStack = [...frontEnd, ...backEnd, ...database];
console.log(fullStack);

/*const website = { name: "MySite", type: "e-commerce", status: "active" } এই অবজেক্টে নতুন প্রোপার্টি theme: "dark" যোগ করে নতুন অবজেক্ট তৈরি কর এবং প্রিন্ট কর।
 */
const website = {name: "MySite", type: "e-commerce", status: "active"};
const newWebsite = {...website, theme: "dark"};
console.log(newWebsite);

/*const young = { name: "Arif", age: 30, country: "B Baria" } এই অবজেক্টের একটি কপি তৈরি কর এবং country বাদে বাকিসব প্রোপার্টি নতুন অবজেক্টে রেখে প্রিন্ট কর।
 */
const young = {name: "Arif", age: 30, country: "B Baria"};
const newYoung = {...young};
console.log(newYoung.name, newYoung.age);

/*const car = { make: "Toyota", model: "Corolla", year: 2020 } এই অবজেক্টের একটি কপি তৈরি কর এবং year আপডেট করে 2032 করে নতুন অবজেক্ট তৈরি কর।
 */
const car = {make: "Toyota", model: "Corolla", year:2020};
const newCar = {...car}
newCar.year = 2032;
console.log(newCar);