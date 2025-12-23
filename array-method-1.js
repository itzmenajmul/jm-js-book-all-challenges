// Practice:

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

// with the help of filter method select some players those are grater than 70
const players = [75, 65, 67, 71, 55, 59];
const selected = players.filter(player => player > 70);
console.log("these players selected for basketball", selected);

// selected friends those are lower than 4 letter in their names
 const frnds = ['tom', 'john', 'micheal', 'oliver', 'tim', 'joshna'];
 const shortFriend = frnds.filter(f => f.length < 4)
 console.log("these are all mine short batlu: ",shortFriend);

 // use find mehtod to find a number which is lower than 58
  const nums = [75, 65, 67, 60, 71, 55, 59];
  const find = nums.find(n => n < 58)
  console.log("this is the first number according to my condition: ", find)

  // use findIndex method to give me the position of my conditional number 
    const numbers = [10, 25, 30, 50, 98];
    const fIndx = numbers.findIndex(n => n > 50);
    console.log("conditonal number index is : ", fIndx);


/*একটা স্ন্যাক্সের দোকানে বিভিন্ন আইটেম আছে, যেগুলার দাম এভাবে আছে: [30, 45, 20, 60, 10]। তুই সবগুলা আইটেমের দাম 13 টাকা করে বাড়াইতে চাস। এই কাজটা map দিয়ে করে দেখ। */
const itemPrice = [30, 45, 20, 60, 10];
const priceIncrease = itemPrice.map(i => i + 13);
console.log("update items price: ", priceIncrease);


/*ধর, তোর একটা নামের লিস্ট আছে [ 'Messi', 'Maradona', 'Pele', 'Zidane', 'Ronaldo']। তুই চাস, লিস্ট থেকে 5 অক্ষরের বেশি যাদের নাম, শুধু তাদেরকে একটা আলাদা লিস্টে রাখবি। filter দিয়ে করে দেখ কীভাবে হবে।
 */
const sPlayers = ["Messi", "Maradona", "Pele", "Zindane", "Ronaldo"];
const bigNameSelectedPlayers = sPlayers.filter(n => n.length > 5);
console.log("selected players name are: ", bigNameSelectedPlayers);

/*তোর একটা number লিস্ট আছে [10, 15, 20, 25, 30, 35]। তুই এমন একটা প্রোগ্রাম লিখে দেখ, যা 20-এর ওপরে প্রথম যে সংখ্যাটা আছে, সেটা খুঁজে বের করে দিবে।
 */
const prioNumbers = [10, 15, 20, 25, 30, 35];
const findSpecialNum = prioNumbers.find(n => n > 20);
console.log("special number is: ", findSpecialNum);

/*তোর কিছু হাইটের ডেটা আছে, যেমন: [65, 70, 68, 72, 68, 73]। 69 ইঞ্চির বেশি লম্বা যাদের হাইট আছে, তাদের শুধু খুঁজে বের কর filter দিয়ে।
 */
const height = [65, 70, 68, 72, 68, 73];
const findBigerNum = height.filter(n => n > 69);
console.log("Bigger than 69: ", findBigerNum);


/*তোর কাছে কিছু সংখ্যা আছে: [7, 10, 15, 20, 25, 30]। তুই চাস প্রত্যেক সংখ্যা 3 দিয়ে ভাগ করলে কত হয়, সেটা এক এক করে দেখতে। map ইউজ করে প্রোগ্রাম লিখ।
 */
const secondNums = [7, 10, 15, 20, 25, 30];
const devideWithThree = secondNums.map(n => n / 3);
console.log("devided by three: ", devideWithThree)

/*তোর বন্ধুদের নামের লিস্ট আবারও আছে ['Leonardo', 'Brad Pitt', 'Kate Winslet', 'Audrey Hepburn', 'Johnny Depp']। থার্ড অক্ষর বের করতে চাস প্রত্যেক বন্ধুর নামে। map দিয়ে কাজটা করে ফেল। 
 */
const sartoporFriends = ["Leonardo", "Brad Pitt", "Kate Winslet", "Audrey Hepburn", "Johnny Depp"];
const findThirdLetter = sartoporFriends.map(n => n[2]);
console.log("Every friend name thrid latters are: ", findThirdLetter);

/*ধর, তুই একটা নামের array নিয়া আছিস: ['Tom', 'Harry', 'Sam', 'Jack']। এখন এমন নাম খুঁজে বের কর, যা 'H' দিয়া শুরু হয়। find ইউজ কর।
 */
const anotherNames = ["Tom", "Harry", "Sam", "Jack"];
const findHNames = anotherNames.find(n => n[0] === "H");
console.log("H wala name is: ", findHNames)

/*তুই একটা array [1, 2, 3, 4, 5] নিয়া বসে আছিস। তুই একটা ফাংশন লিখ, যা forEach ইউজ করে প্রতিটা সংখ্যা console-এ প্রিন্ট করে।
 */
const basicNumbers = [1, 2, 3, 4, 5];
const numbersOutput = basicNumbers.forEach(n => n + 1);
console.log("this is forEach normal behaviour, that does not return anything", numbersOutput);

/*['cow', 'goat', 'sheep', 'horse'] এই অ্যারে থেকে প্রতিটা নাম forEach দিয়ে console-এ প্রিন্ট কর।
 */
const animalNames = ["cow", "goat", "sheep", "horse"];
const printAnimals = animalNames.forEach(n => n);
console.log("this is forEach normal behaviour, that does not return anything", printAnimals);