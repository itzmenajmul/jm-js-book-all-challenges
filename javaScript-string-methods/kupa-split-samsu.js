// Practice:

// EXTRA PRACTICE 👇
// use trim to cut extra spaces from starting and ending of the string
const actor1 = '  Sakib';
const actor2 = 'Sakib  '
const isEqual = actor1.trim() === actor2.trim();
console.log(isEqual);

// use slice to copy specific strings from main one.
const enemy = 'relatives';
const cutRel = enemy.slice(2, 5);
console.log(cutRel);

// with the use of split can distinguish into little parts
const friend = 'buka sele parent er samne ideal sera';
const friendCharcter = friend.split(' ');
console.log("always friends characters are: ", friendCharcter);

// join method use to replace your by default split symbol like , = |
const myFriends = ['rahim', 'karim', 'jabbar', 'mia', 'nur', 'bahlu'];
const divideFrn = myFriends.join(' | ');
console.log(divideFrn);

// concat kind of same as like join
const word1 = "I";
const word2 = "Love You";
const finalOutput = word1.concat(" ", word2);
console.log(finalOutput);

// substring kind of same as like slice
const bd = 'Bangladeshis';
const cutSomeL = bd.substring(6, 10);
console.log(cutSomeL);


/*তোর একগাদা বন্ধুর নাম তোকে একটা স্ট্রিং আকারে দিছে "Raju,Rana,Hasan,Kabir,Mahi"। এদের নামগুলো আলাদা বের করে একটা অ্যারে বানিয়ে ফেল। 
 */
const allFriends = "Raju,Rana,Hasan,Kabir,Mahi";
const seperateFrndName = allFriends.split(",");
console.log("all friend names seperate into ,: ", seperateFrndName);

/*তুই একটা অ্যারের মধ্যে তোর বন্ধুদের নাম লিখেছিস। এবার নামগুলো একটা স্ট্রিং আকারে বের করবি, আর প্রতিটা নামের মাঝে কমা(“,”) থাকবে।
 */
const arrayToStr = seperateFrndName.join(', ');
console.log("all friends name ", arrayToStr);

/*"function if else while" এই স্ট্রিংটাকে স্পেস দিয়ে ভাগ করে প্রতিটা কি-ওয়ার্ড আলাদা করে অ্যারেতে রাখ।
 */
const conditonString = "function if else while";
const dividedWords = conditonString.split(" ");
console.log("all conditional words divided: ", dividedWords)

/*একটি অ্যারে আছে languages=["JavaScript", "Python", "Java"]। এই অ্যারের প্রতিটা ভাষার নামকে একটি স্ট্রিং বানিয়ে প্রতিটার মাঝে সেমিকোলন যোগ কর।
 */
const languages = ["JavaScript", "Python", "Java"];
const lanSemicolon = languages.join(":");
console.log("all languages split into semicolon", lanSemicolon)

/*একটি স্ট্রিং দেওয়া আছে "for,while,for-in,for-of,do-while"। এই স্ট্রিং থেকে লুপগুলোর নাম আলাদা করার জন্য split ব্যবহার কর।
 */
const loopStr = "for,while,for-in,for-of,do-while";
const dividedLoop = loopStr.split(",");
console.log("all loop word divided by , ", dividedLoop);

/*একটা স্ট্রিং দেওয়া আছে " console log debug "। এই স্ট্রিং থেকে শুরুর এবং শেষের ফাঁকা জায়গা রিমুভ করে ফেল।
 */
const spaceStr = " console log debug ";
const removeSpace = spaceStr.trim();
console.log("remove before and after spaces", removeSpace)

/*const str1 = "push"; const str2= "pop"; const str3 = "shift"; const str4 = "unshift" এই এই স্ট্রিংগুলাকে জোড়া দিয়ে একটা স্ট্রিং বানিয়ে ফেল। concat ইউজ করে।
 */
const str1 = "push"; const str2= "pop"; const str3 = "shift"; const str4 = "unshift";
const addStr4 = str1.concat("", str2 ,str3 , str4 ,);
console.log("all string merge into one", addStr4);

/*"Hello JavaScript Developers" এই স্ট্রিং থেকে "JavaScript" অংশটা বের কর।
 */
const greeting = "Hello JavaScript Developers";
const removeJS = greeting.slice(6, 15);
console.log(removeJS);

/*একটা স্ট্রিং আছে "Code more learn more"। স্ট্রিংটা থেকে "learn" অংশটা substring দিয়ে বের কর।
 */
const quote = "Code more learn more";
const learn = quote.substring(10, 16);
console.log(learn);