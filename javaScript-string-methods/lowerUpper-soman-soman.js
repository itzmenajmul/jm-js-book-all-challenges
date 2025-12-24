// Practice:

/*একটা ই-মেইল আছে const email = 'User@Example.Com'; এই ই-মেইলকে ছোট হাতের অক্ষরে কনভার্ট কর।
 */
const email = 'User@Example.Com';
const converSmall = email.toLowerCase();
console.log("emil converted into lower case: ", converSmall);

/*const greeting = 'hELlo WoRLd'; এই স্ট্রিং পুরোটা বড় হাতের অক্ষরে এবং ছোট হাতের অক্ষরে কনভার্ট করে দেখ।
 */
const greeting = 'hEllo WoRld';
const bgGreeting = greeting.toUpperCase();
const smGreeting = greeting.toLowerCase();
console.log("greeting converted into upper case", bgGreeting);
console.log("greeting converted into lower case", smGreeting);

/*কেইস ইগনোর করে চেক কর const language = 'JavaScript'; এর মধ্যে script আছে কি না। 
 */
const language = 'JavaScript';
const findScript = language.includes('Script');
console.log("is script available in language", findScript)

/*const text = 'NodeJs'; এই স্ট্রিংয়ের প্রথম ক্যারেক্টার বড় হাতের কি না, তা চেক কর।
 */
const text = 'NodeJs';
const isFirstLetterUpper = text[0] === text[0].toUpperCase();
console.log("is text first latter upper latter or not: ", isFirstLetterUpper)