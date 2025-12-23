// Practice: 

/*
এমন একটি ফাংশন তৈরি কর যা তিনটি সংখ্যার যোগফল বের করবে। ডিফল্ট মান হিসেবে প্রতিটি প্যারামিটারের জন্য 0 সেট কর।
 */
function threeNumsSum(num1 = 0, num2 = 0, num3 = 0) {
    const totalSum = num1 + num2 + num3;
    return totalSum;
}
console.log("total three numbers sum is: ", threeNumsSum(10, 5, 25))

/*
তুই এমন একটি ফাংশন লিখবি, যেখানে টাকা জমা দেওয়ার সুযোগ থাকবে। যদি কোনো টাকার পরিমাণ না দেওয়া হয়, তাহলে জমা হিসেবে ডিফল্ট 50 টাকা দেখাবে।
 */
function depositeMoney(taka = 50) {
    return taka;
}
console.log("total deposite money is: ", depositeMoney())

/*
এমন একটি ফাংশন তৈরি কর, যেখানে নাম আর তার মাসিক আয় নিবি। যদি নাম না দেওয়া হয়, তাহলে ডিফল্ট হিসেবে anonymous ইউজ করবি। আর মাসিক আয় দেয়া না থাকলে সেখানে ডিফল্ট হিসেবে 0 ইউজ করবি। 
 */
function monthlyEarning(name = "anonymous", money = 0) {
    const personNameAndMoney = name + " " + money;
    return personNameAndMoney;
}

console.log("this is person's earning and his/her name: ", monthlyEarning("Hipu", 50000))

/*
এমন একটি ফাংশন লিখ, যা একটি সংখ্যা নেবে এবং সেটার বর্গ বের করবে। যদি সংখ্যা না দেওয়া হয়, সেটার ডিফল্ট মান 1 রাখ।
 */
function numSquare(num = 1) {
    const square = (num * num);
    return square;
}
console.log("number square is: ", numSquare(3))

/*এমন একটি ফাংশন বানা, যেটা কোনো পণ্যের নাম ও তার মূল্য নিবে। যদি নাম না দেওয়া হয়, তাহলে "Unknown product" এবং মূল্য না থাকলে 1 সেট কর।
 */
function productInfo(prdName = "Unknown product", prdPrice = 1) {
    const productNameAndPrice = prdName + " " + prdPrice;
    return productNameAndPrice;
}

console.log("product name and price is: ", productInfo("Brash", 90))

/*
একটা ফাংশন তৈরি কর, যা তোর সব প্রিয় বইয়ের নাম অ্যারে প্যারামিটার হিসেবে নিবে। যদি কোনো প্যারামিটার না পাঠানো হয়, তাহলে ডিফল্ট একটা অ্যারে রাখবি, সেটার মধ্যে একটা মান থাকবে JS book নামে।
 */
function booksArray(array = ["JS book"]) {
    return array;
}
const books = ["Himu", "Shubro", "Aj rupar biye", "Opekha"];

console.log("fav total book are: ", booksArray(books))

/*
একটি ফাংশন তৈরি কর, যেখানে একটি অবজেক্ট প্যারামিটার নিবে। অবজেক্টে price এবং quantity থাকবে। যদি অবজেক্ট না পাঠানো হয়, ডিফল্ট মান হিসেবে price 10 এবং quantity 1 সেট কর। ফাংশন total price রিটার্ন করবে।
 */
function randomProduct(obj = { price: 10, quantity: 1 }) {
    const totalPrice = obj.price * obj.quantity;
    return totalPrice;
}

const randomObject = {
    price: 50,
    quantity: 2
}
console.log("ur product toal price is: ", randomProduct(randomObject));

/*
এমন একটি ফাংশন বানা, যেখানে একটি অ্যারে প্যারামিটার নিবে। প্রতিটি উপাদানকে 2 দিয়ে গুণ করে নতুন অ্যারে রিটার্ন করবে। যদি অ্যারে না দেওয়া হয়, ডিফল্ট হিসেবে [5, 10, 15] সেট কর।
 */
function randomArray(array = [5, 10, 15]) {
    let multipleValue = [];
    for (num of array) {
        multipleValue.push(num * 2);
    }
    return multipleValue;
}

const randomArrayNums = [20, 25, 15, 3];
console.log("ur array value become multiple", randomArray(randomArrayNums))

/*
একটি ফাংশন তৈরি কর, যা একটি অবজেক্ট প্যারামিটার নিবে। অবজেক্টে principal এবং rate থাকবে। যদি অবজেক্ট না পাঠানো হয়, ডিফল্ট principal 1000 এবং rate 5 রাখ। ফাংশন simple interest হিসাব কর, এই ফর্মুলা দিয়ে (principal * rate / 100), তাহলে রেজাল্ট রিটার্ন করবে।
 */
function calculateInterest(obj = { principal: 1000, rate: 5 }) {
    const result = obj.principal * obj.rate / 100;
    return result;
}

const calculateValue = { principal: 2000, rate: 5 }
console.log("your total interest is: ", calculateInterest(calculateValue));

/*
একটি ফাংশন তৈরি কর, যা একটি অবজেক্ট প্যারামিটার নিবে। অবজেক্টে salary এবং tax থাকবে। যদি অবজেক্ট না পাঠানো হয়, ডিফল্ট salary 50000 এবং tax 10 সেট কর। ফাংশন এর ভিতরে ট্যাক্স এর পার্সেন্ট দিয়ে ট্যাক্স এর টাকার পরিমান বের করবি তারপর স্যালারি থেকে ট্যাক্স এর টাকার পি পরিমান বিয়োগ করে রেজাল্ট রিটার্ন করবি। */
function salaryTaxCalculate(obj = { salary: 50000, tax: 10 }) {
    const totalMoney = obj.tax * 100;
    const remainTax = obj.salary - totalMoney;
    return remainTax;
};

const incomeObj = { salary: 100000, tax: 18 };
console.log("you have to pay: ", salaryTaxCalculate(incomeObj));
