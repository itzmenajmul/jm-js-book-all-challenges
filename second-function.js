// JavaScript Function Parameter Practice:

/*
পিতা ও পুত্রের বয়সের সমষ্টি বের করার একটা ফাংশন লিখ। 
 */
function fatherAndSonAgeSum(num1, num2){
    let sum = num1 - num2;
    console.log(num1, "and", num2, "difference is: ",sum);
}
const fatherAge = 70;
const sonAge = 10;
fatherAndSonAgeSum(fatherAge, sonAge);

/*
তোর এক বন্ধু তোকে বলল ক্যালকুলেটর বানাতে, কিন্তু ক্যালকুলেটরে শুধু যোগ বা বিয়োগ করার অপশন থাকলে হবে না। একটা ফাংশন লিখ, যেখানে দুইটা সংখ্যার গুণ বের করে দেখাস। যেমন, যদি 20 আর 15 পাঠালে আউটপুট হবে 300।
 */
function multiplication(num1, num2){
    const numsMultiplication = num1 * num2;
    console.log(num1, "and", num2, "multiplication is: ", numsMultiplication);
}
multiplication(2, 4);

/*
একটা ফাংশন লিখ, যেটা তিনটা সাবজেক্টের পরীক্ষার মার্কসের সমষ্টি তোকে দিবে।
 */
function threeSubSum(num1, num2, num3){
    let totalSubSum = num1 + num2 + num3;
    console.log(num1, "," ,num2, ",", num3, "total sum: ", totalSubSum);
}

threeSubSum(10, 25, 15);

/*
বয়স বের করার একটা ফাংশন লিখ। যেটাকে তুই তোর কোন বছর জন্ম, সেটা বলবি। তারপর ফাংশনের ভিতরে এই-বছর থেকে তোর জন্মসাল বিয়োগ করলে তোকে বলবে, তুই কত বছর বুইড়া হইছস (মানে তোর বয়স কত হইছে)।
 */
function totalAge(num1){
    let currentAge = 2025 - num1;
    console.log("Your age is -", currentAge);
}

totalAge(2005);

/*
তুই একটা দোকানে গেছিস, যেখানে প্রতিটা লাউ কেনার জন্য 35 টাকা লাগবে। এখন একটা ফাংশন লিখ, যা প্যারামিটার হিসেবে নিবে, তুই লাউয়ের জন্য কত টাকা দিতে চাস। তারপর ভাগ করে বলবে, তুই কয়টা লাউ কিনতে পারবি।
 */
function buyLau(num1){
    const howManyLauBuy =( num1 / 35);
    console.log("You can buy - ", parseInt(howManyLauBuy.toFixed()),  "lau");
}
buyLau(700);

/*
একটি ফাংশন লিখ, যেখানে চারটা সংখ্যার গড় বের করবে।
 */
function fourNumsAverage(num1, num2, num3, num4){
    let allNumsSum = num1 + num2 + num3 + num4;
    let allNumAverage = (allNumsSum / 4);
    console.log("Four numbers Average: ", allNumAverage);
}
fourNumsAverage(10, 20, 30, 40);

/*
একজন দোকানদার প্রত্যেকটা আইটেমে 250 টাকা লাভ করে। একটা ফাংশন লিখ, যেখানে কোনো একটা জিনিসের কেনা দাম দিবি, তাহলে সে বিক্রির দাম (selling price) দিবে।  */
function shopSellingProfit(num1){
    let profit = num1 + 250;
    console.log("selling price: ", profit);
}
shopSellingProfit(150);


/*
একটি ফাংশন লিখ, তারপর সেই ফাংশনকে তোর জন্মসাল প্যারামিটার হিসেবে দিবি। তারপর সে বলে দিবে, কোন বছর তোর বয়স 100 বছর হবে।
 */
// function becomeHundredYears(num1){
//     let hundredYears = (num1 * 100);
//     console.log()
// }

// I can't think how actually I tackel this problem.

/*
একটি ফাংশন লিখ, যেখানে প্যারামিটার হিসেবে দিবি, প্রতিদিন তুই কয় ঘণ্টা সময় মোবাইল ফোন ইউজ করস। তারপর সেই ফাংশন বের করবে, মাসে তুই কত ঘণ্টা সময় মোবাইল ফোন ইউজ করস। ধরে নে, এক মাসে 30 দিন হয়। */

function useMobile (num1){
    let hours = (num1 * 30);
    console.log("I use total -", hours, "hours");
    
}
useMobile(5);

