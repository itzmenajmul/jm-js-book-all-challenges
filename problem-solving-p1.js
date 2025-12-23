// Practice: 

/*
তুই জানস, 1760 গজে একমাইল। তাহলে একটা ফাংশন লিখে ফেল, যাতে বের করতে পারিস, 13 মাইলে কত গজ।
 */

function mileToGoj(mile){
    let totalGoj = mile * 1760;
    const returnValue = mile + " mile is equal to " + totalGoj + " goj";
    return returnValue;
}

console.log(mileToGoj(13));

/*শুনতে কঠিন, কিন্তু চিন্তা করলে সহজ একটা বিষয় হচ্ছে, 1 কিলোওয়াট ঘণ্টা মানে 860 কিলো ক্যালরি। তাহলে একটা ফাংশন লিখে বের কর। যেটাতে যেকোনো কিলোওয়াট ঘণ্টা দিলে সে সেটাকে কিলো ক্যালরিতে কনভার্ট করে দিবে। 
 */


function kiloWatToKiloCalory(num){
    const kiloCalory = num * 860
    return kiloCalory;
}

console.log(kiloWatToKiloCalory(40), "kilo Calory");

/*
ঘণ্টাকে সেকেন্ডে কনভার্ট করতে একটি ফাংশন বানা। এক ঘণ্টাতে কত মিনিট বা এক মিনিটে কত সেকেন্ড। সেটা আমি বলে দিচ্ছি না। তুই চিন্তা করে বের কর এবং আমাকে একটা ফাংশন লিখে দে, যেটা ঘণ্টা দিলে আমাকে সেকেন্ডে কনভার্ট করে দিবে।
 */
function hourToSecond(hours){
    const munites = hours * 60;
    const seconds = munites * 60;
    return seconds;
}

console.log(hourToSecond(5), "total seconds")

/*
সেন্টিমিটারকে মিটারে কনভার্ট করার জন্য একটি ফাংশন তৈরি কর। তারপর বিভিন্ন মান দিয়ে সেই ফাংশনকে টেষ্টা কর। আর তুই তো জানস, 1 মিটার = 100 সেন্টিমিটার। 
 */
function centToMiter(cent){
    const miter = cent / 100
    return miter;
}

console.log(centToMiter(8000), "miter.");

/*
ইঞ্চিকে সেন্টিমিটারে রূপান্তর করার ফাংশন লিখ। 1 ইঞ্চি = 2.54 সেন্টিমিটার। 
 */
function inchToCentMiter(inch){
    const centMiter = inch * 2.54;
    return centMiter;
}

console.log(inchToCentMiter(15), "Centimiter");

/*
যদি 1 পাউন্ড = 0.453 কিলোগ্রাম হলে পাউন্ড থেকে কিলোগ্রামে কনভার্ট করার একটা ফাংশন লিখে ফেল। 
 */
function poundToKiloGram(pound){
    const kiloGram = pound * 0.453;
    return kiloGram;
}
console.log(poundToKiloGram(10), "kilo Gram");

/*
গজকে মিটারে কনভার্ট করার জন্য একটি ফাংশন তৈরি কর। 1 গজ = 0.91 মিটার */

function gojToMiter(goj){
    const miter = (goj * 0.91);
    return miter;
}
console.log(gojToMiter(50), "miter");