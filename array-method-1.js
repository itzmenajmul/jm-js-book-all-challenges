/*Practice:


ধর, তোর একটা নামের লিস্ট আছে [ 'Messi', 'Maradona', 'Pele', 'Zidane', 'Ronaldo']। তুই চাস, লিস্ট থেকে 5 অক্ষরের বেশি যাদের নাম, শুধু তাদেরকে একটা আলাদা লিস্টে রাখবি। filter দিয়ে করে দেখ কীভাবে হবে।

তোর একটা number লিস্ট আছে [10, 15, 20, 25, 30, 35]। তুই এমন একটা প্রোগ্রাম লিখে দেখ, যা 20-এর ওপরে প্রথম যে সংখ্যাটা আছে, সেটা খুঁজে বের করে দিবে।

তোর কিছু হাইটের ডেটা আছে, যেমন: [65, 70, 68, 72, 68, 73]। 69 ইঞ্চির বেশি লম্বা যাদের হাইট আছে, তাদের শুধু খুঁজে বের কর filter দিয়ে।

তোর কাছে কিছু সংখ্যা আছে: [7, 10, 15, 20, 25, 30]। তুই চাস প্রত্যেক সংখ্যা 3 দিয়ে ভাগ করলে কত হয়, সেটা এক এক করে দেখতে। map ইউজ করে প্রোগ্রাম লিখ।

তোর বন্ধুদের নামের লিস্ট আবারও আছে ['Leonardo', 'Brad Pitt', 'Kate Winslet', 'Audrey Hepburn', 'Johnny Depp']। থার্ড অক্ষর বের করতে চাস প্রত্যেক বন্ধুর নামে। map দিয়ে কাজটা করে ফেল। 

ধর, তুই একটা নামের array নিয়া আছিস: ['Tom', 'Harry', 'Sam', 'Jack']। এখন এমন নাম খুঁজে বের কর, যা 'H' দিয়া শুরু হয়। find ইউজ কর।

তুই একটা array [1, 2, 3, 4, 5] নিয়া বসে আছিস। তুই একটা ফাংশন লিখ, যা forEach ইউজ করে প্রতিটা সংখ্যা console-এ প্রিন্ট করে।

['cow', 'goat', 'sheep', 'horse'] এই অ্যারে থেকে প্রতিটা নাম forEach দিয়ে console-এ প্রিন্ট কর।
 */

/*একটা স্ন্যাক্সের দোকানে বিভিন্ন আইটেম আছে, যেগুলার দাম এভাবে আছে: [30, 45, 20, 60, 10]। তুই সবগুলা আইটেমের দাম 13 টাকা করে বাড়াইতে চাস। এই কাজটা map দিয়ে করে দেখ।
 */

// EXTRA PRACTICE
// অ্যারের ওপরে map চালাইছিস, তার সবগুলা উপাদান ডাবল হইয়া সেই ডাবল উপাদানগুলা তোকে রিটার্ন করে দিবে
const mulArray = [2, 6, 10, 15, 20];
const mulResult = mulArray.map(num => num * 2);
const addFiveResult = mulArray.map(num => num + 5);
const divedeResult = mulArray.map(num => num / 2); 
console.log(mulResult);
console.log(addFiveResult);
console.log(divedeResult);

// with the help of map bring only first letter
const friends = ['Tom', 'Jhon', 'Micheal', 'Oliver'];
const firstLetter = friends.map(friend => friend[0]);
const lengthOfFriends = friends.map(friend => friend.length);

console.log(firstLetter);
console.log(lengthOfFriends);