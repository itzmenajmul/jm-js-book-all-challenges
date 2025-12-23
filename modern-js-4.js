// Practice: 

/*একটি array-এর প্রথম ইনডেক্সের মান রিটার্ন করবে, এমন একটা অ্যারো ফাংশন লিখ।
 */
const getFirstNum = array => array[0];

const randomArray = [10, 20, 13];
console.log(getFirstNum(randomArray));

/*তিনটি সংখ্যা নিয়ে তাদের গুণফল রিটার্ন করে, এমন একটা অ্যারো ফাংশন লিখ।
 */
const getNumMultiplication = (num1, num2, num3) => num1 * num2 * num3;

console.log("three numbers multiplication result are: ", getNumMultiplication(2, 3, 4));

/*এমন একটি arrow function তৈরি কর, যা কোনো প্যারামিটার নেয় না শুধু "unknown" রিটার্ন করে।
 */
const getReturnUnknown = () => "unknown";

console.log(getReturnUnknown());

/*একটি object-এর মধ্যে নাম এবং পকেটে কত টাকা আছে এমন দুইটা প্রপার্টি আছে। এখন এমন একটা অ্যারো ফাংশন লিখ, যেটা টাকার পরিমাণকে 5 দিয়ে ভাগ করে ভাগফল রিটার্ন করবে। 
 */
const getPocketMoneyFiveTimes = (obj) => obj.pocketMoney / 5;


const currentSituationObj = {name: "Nulo", pocketMoney: 30}
console.log(getPocketMoneyFiveTimes(currentSituationObj));

/*জাভাস্ক্রিপ্টে কোনো একটা অ্যারের শেষ উপাদান পাওয়ার জন্য শেষ উপাদানের ইনডেক্স বের করতে হয়। শেষ উপাদানের ইনডেক্স বের করার সিস্টেম হচ্ছে, অ্যারের লেংথ বের করে সেটা থেকে 1 বিয়োগ করবি। এইটা আগে একটু প্র্যাকটিস করে ফেল। 
তারপর একটি array-এর প্রথম ও শেষ উপাদান যোগ করে যোগফল রিটার্ন করবে, এমন একটা arrow function লিখে ফেল।
 */

const findLengthArray = [10, 15, 3, 99, 20];
const ArrayLastItem = findLengthArray.length - 1;
// console.log("Last",ArrayLastItem);

const getArryFirstLastSum = (array) => array[0] + array[array.length - 1];

console.log("array first and last numbers sub are : ", getArryFirstLastSum([10, 2, 15, 20, 5, 60]));

/*
এমন একটা ফাংশন তৈরি কর, যা দুইটা সংখ্যা যোগ করবে। প্রথম সংখ্যা না থাকলে 10, আর দ্বিতীয় সংখ্যা না থাকলে 5 ধরে যোগফল দেখাবে। এইটা Arrow function দিয়ে করবি।  */

const getTwoNumAddition = (num1 = 10, num2 = 5) => num1 * num2;

console.log("two numbers addition are : ", getTwoNumAddition(10, 3));