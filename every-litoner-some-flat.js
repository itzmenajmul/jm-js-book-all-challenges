// Practice:

// EXTRA PRACTICE
// use some method to check true or false
const scores = [30, 45, 55, 80, 90];
const hasPassed = scores.some(s => s >= 50);
console.log(hasPassed);

// use every method to check are all students pass or not : >= 50
const marks = [60, 70, 55, 80, 90];
const allPassed = marks.every(m => m => 50);
console.log(allPassed);

/*একটা অ্যারে বানা, যেটার নাম numbers এবং দেখা, এই অ্যারেতে 100-এর বড় কোনো সংখ্যা আছে কি না।
 */
const numbers = [20, 35, 20, 150, 120, 500];
const isBigNumbers = numbers.some(n => n > 100);
console.log("Is there any number bigger than 100", isBigNumbers);

/*
একটা অ্যারে বানা, যেখানে সব এলিমেন্টের মান 5 দিয়ে ভাগ যায় কি না, তা চেক করার জন্য every মেথড ব্যবহার কর।
 */
const randomNumbers = [5, 10, 20, 33, 100];
const isAllDevidedFive = randomNumbers.every(n => n / 5 === 0);
console.log("is all numbers divided by 5", isAllDevidedFive);

/*words নামের একটা অ্যারে তৈরি কর এবং চেক কর, অন্তত একটি শব্দ "hello"-এর সমান কি না।
 */
const words = ["kalo", "hello", "valo"];
const isHelloExist = words.some(w => w === "hello");
console.log("find hello", isHelloExist);

/*ages নামের একটা অ্যারে তৈরি কর এবং দেখা, সবার বয়স 18-এর বেশি কি না। */

const age = [20, 25, 35, 88, 45, 90];
const isAllOld = age.every(a => a > 18);
console.log("Is all are bigger than 18: ", isAllOld);
