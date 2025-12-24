// Practice: 

// EXTRA PRACTICE
//use repeat method to repeat anything in several times
const greeting = 'Hello!';
const repeatTenTimes = greeting.repeat(10);
console.log("hello repeat 10 times: ", repeatTenTimes)

// use toString to convert any type of data into string
const number = 20;
const numberConvertToStr = number.toString();
console.log("number convert into string: ", numberConvertToStr);

// use replace method to replace any specific string, but at a time only one can change not all
const country = "I love Dhaka, Dhaka is a capital city.";
const replaceCity = country.replace("Dhaka", "Sylhet");
console.log("Dhaka replaced by Sylhet: ", replaceCity);

// use replaceAll(olderOne, newOne) same as like replace, but this one replace all items
const uniqueLine = "Hello, priya kali dew keno duka. Oh mor janer priya, kolijar priya";
const changePriya = uniqueLine.replaceAll("priya", "fetna");
console.log("change all priya keywords into Fitna", changePriya)

/*একটি string তৈরি কর, যার ভ্যালু হবে "Hi"। সেটি repeat দিয়ে 10 বার রিপিট করে কনসোল লগ কর।
 */
const grtHiStr = "Hi";
const repeatTenTimesHi = grtHiStr.repeat(10);
console.log(repeatTenTimesHi);

/*একটি স্ট্রিং বানা "I am learning JavaScript. JavaScript is amazing!"। replace ব্যবহার করে প্রথম "JavaScript"-কে "JS" দিয়ে রিপ্লেস কর।
 */
const thought = "I am Learning JavaScript. JavaScript is amazing!";
const replaceJS = thought.replace("JavaScript", "JS");
console.log(replaceJS);

/*
একটি স্ট্রিং বানা "I love apples and apples are tasty!". সব "apples"-কে "mangoes" দিয়ে রিপ্লেস কর।
 */
const folerRaja = "I love apples and apples are tasty!";
const appleConvertToMango = folerRaja.replaceAll("apples", "mangoes");
console.log(appleConvertToMango);