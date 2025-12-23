// JavaScript Push-Pop Methods Practice:

/*
সংখ্যার একটা অ্যারে আছে: [10, 20, 30, 40, 50]। এখন এই অ্যারেতে 60 যোগ করে অ্যারেটি আউটপুটে দেখা। */
let firstNumsArray = [10, 20, 30, 40, 50];
firstNumsArray.push(60);
console.log(firstNumsArray);

/*
তুই কিছু নাম লিখে রাখছিস অ্যারেতে: 'সজিব', 'সাগর', 'সাকিব', 'সোহেল'। এখন তোর মনে হলো নতুন বন্ধু 'সুমন'কে এই অ্যারেতে যোগ করতে হবে। একটা প্রোগ্রাম লিখে দেখ, সুমনকে সবার শেষে যোগ কর।
 */
let myExistingFriends = ["Sojib", "Sagor", "Sakib", "Sohel"];
myExistingFriends.push("Sumon");
console.log(myExistingFriends);

/*
তোর মোবাইলে যে যে গেম ইনস্টল করা আছে, সেগুলা একটা অ্যারেতে রাখ। তারপর সবার শেষে যে গেমের নাম দেয়া আছে, সেটা রিমুভ করে ফেল। এরপর তোর অ্যারেতে কী কী গেম বাকি রইল, সেগুলা আউটপুট হিসেবে দেখা।
 */
let mobileInstalledGames = ["Free Fire", "Pubg", "Temp Run", "Class of Clans", "Bubble"];
mobileInstalledGames.pop();
console.log(mobileInstalledGames);

/*
এই অ্যারেতে [24, 36, 48, 60]। একদম প্রথম উপাদান হিসেবে 12-কে যোগ করে পুরা অ্যারেটা আউটপুট হিসেবে দেখা।
 */
let secondNumsArray = [24, 36, 48, 60];
secondNumsArray.unshift(12);
console.log(secondNumsArray);

/*
তোর কাছে 5টি বইয়ের নাম দিয়ে একটা অ্যারে আছে। এখন তুই সবার প্রথম বইটা পড়ে শেষ করে ফেলছস। তাই প্রথম বইয়ের নামটা অ্যারে থেকে রিমুভ করে ফেল। তারপর বাকি নামগুলো আউটপুটে দেখা। */

let readWishBooksList = ["Himu", "Ai Shubro Ai", "Aj Himu Mamar Biye", "Moyurakhi", "Angul Kata Joglu" ];
readWishBooksList.shift();
console.log(readWishBooksList);