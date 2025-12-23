// JavaScript Logical Not Operator Practice:

/*
তুই নিজের দোকান খুলছিস। তোর দোকানে কেউ 3000 টাকার বেশি কেনাকাটা করলে ক্যাশব্যাক 500 টাকা। আর তার কম কেনাকাটা করলে ক্যাশব্যাক 0 টাকা। এখন এই জিনিসটা এক লাইনে লিখ। ভেরিয়েবলের নাম হবে cashback, আর মান সেট করবি টার্নারি অপারেটর ইউজ করে। 
*/
const shopping = 3000;
const cashback = 3000 < shopping ? 500 : 0;
console.log(cashback);

/*
তোর বয়স যদি 15-এর বেশি হয়, তাহলে "Teenager" দেখাবে। আর যদি কম হয়, তাহলে "Child" দেখাবে। এটা টার্নারি অপারেটর দিয়ে এক লাইনে লিখ।
*/

let myAge = 14;
myAge = 15 < myAge ? "Teenager" : "Child";
console.log(myAge)


/*
যদি isLoggedIn-এর মান true হয়, তাহলে "Welcome back"-কে message হিসেবে সেট করবি। আর যদি false হয়, তাহলে "Please login"-কে message হিসেবে সেট করবি। এই জিনিসটা টার্নারি অপারেটর দিয়ে এক লাইনে লিখ।
 */

let isLoggedIn = false;
isLoggedIn = isLoggedIn ? "Welcome back" : "please login";
console.log(isLoggedIn)

/*
তোর গাড়ির তেলের ট্যাংক যদি full হয়, তাহলে "Ready for a long drive" দেখাবি। আর না হলে "Fill the tank" দেখাবি।
 */
let carTank = "full";
carTank = carTank == "full" ? "Ready for a long drive" : "fill the tank";
console.log(carTank);

/*
 
তুই যদি পরীক্ষায় পাস করিস, তাহলে "Party time" দেখাবি। আর যদি ফেল করিস, তাহলে "Next Semester e serious study korbo" দেখাবি। এক লাইনে টার্নারি অপারেটর দিয়ে কর।
 */

let examResult = false;
examResult = examResult ? "Party time" : "Next Semester e serious study korbo";
console.log(examResult);

/*
যদি sunny ভেরিয়েবলের মান false হয়, তাহলে "Stay home"-কে কনসোল লগ করবি।

 */

let sunny = false;
sunny = !sunny ? "Stay home" : "Go outsite";
console.log(sunny);

/*
যদি Expensive ভেরিয়েবলের মান false হয়, তাহলে কনসোল লগ করবি "I will buy this item." 
*/

let expensive = false;
expensive = !expensive ? "I will buy this item" : "Kichu nimu na ajke amar mon valo na";
console.log(expensive);