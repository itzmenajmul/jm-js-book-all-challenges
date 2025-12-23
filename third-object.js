
// JavaScript Object Keys and Values Practice: 

/*
বই নামে একটা অবজেক্ট বানিয়ে ফেল। সেটার মধ্যে বইয়ের নাম, লেখক, দাম ইত্যাদি থাকবে। তারপর অবজেক্টের সব প্রোপার্টি (keys) এবং সব ভ্যালু (values) কনসোল লগ কর। */
const book = {
    name: "himu",
    writer: "humayun ahmed",
    price: 250
}

console.log(Object.keys(book));
console.log(Object.values(book));
/*Extra practice 👇
const bookKeys = Object.keys(book);
const hasWriter = bookKeys.includes("writer");
console.log(hasWriter) 
for(let key in book){
    const value = book[key];
    console.log(key, value);
}
*/

/*
এই অবজেক্টটিতে চেক কর, author প্রোপার্টি আছে কি না। const article = { title: "Learning JS", category: "Programming" };
*/
const article = {
    title: "Learning JS",
    category: "Programing"
};

const articleKeys = Object.keys(article);
const hasAuthor = articleKeys.includes("author")
console.log(hasAuthor);

/* extra practice
for(let key in article){
    const value = article[key];
    console.log(key, value);
}
*/

/*
তোকে ল্যাপটপ নামের একটা অবজেক্ট দেয়া হলো— const laptop = { brand: "Dell", model: "Inspiron", price: 45000 }; এইবার 
for...in লুপ চালিয়ে প্রতিটি প্রোপার্টি এবং তার মান প্রিন্ট কর।
 */
const laptop = { brand: "Dell", model: "Inspiron", price: 45000 };
for(let item in laptop){
    const value = laptop[item];
    console.log(item, value);
}

/*
একটা phone নামের অবজেক্ট আছে। const phone = { brand: "Samsung", model: "Galaxy S21", price: 85000 }; এইটার জন্য Object.keys ব্যবহার করে for...of লুপ চালিয়ে প্রতিটি প্রোপার্টি এবং তার মান কনসোল লগ কর।
 */
const phone = { brand: "Samsung", model: "Galaxy S21", price: 85000 };
// for(let key in phone){
//     const value = phone[key];
//     console.log(key, value);
// };

const phoneKeys = Object.keys(phone);
for(let key of phoneKeys){
    console.log(key, phone[key]);
};

/*
তুই একটা bike অবজেক্ট বানাস, যেখানে brand: "Hero", price: 120000, আর model: "Splendor" প্রোপার্টিগুলো থাকবে। Object.values() মেথড ব্যবহার করে সব ভ্যালুগুলো বের কর।
 */
const bike = {
    brand: "Hero",
    price: 120000,
    model: "Splendor"
}
console.log(Object.values(bike));

/*
const books = { book1 "Harry Potter", book2 "The Hobbit", book3 "Game of Thrones" }; এর ওপরে লুপ চালিয়ে সব বইয়ের নাম কনসোল লগ কর।
 */
const books = { book1: "Harry Potter", book2: "The Hobbit", book3: "Game of Thrones" };
for(let name in books){
    console.log(name);
}

/*
সংখ্যার একটি অবজেক্ট দিলাম— const numbers = { a: 10, b: 20, c: 30, d: 40 }; এইবার বুদ্ধি খাটিয়ে এই অবজেক্টের সব প্রোপার্টির ভ্যালুগুলোর যোগফল বের কর।
 */
const numbers = { a: 10, b: 20, c: 30, d: 40 };
let numbersSum = 0;
for(number in numbers){
    const value = numbers[number];
    numbersSum = numbersSum + value;
}
console.log("all values sum: ", numbersSum)

/*
একটা player অবজেক্ট বানা, যেখানে name Messi, team Argentina, আর goals 91 থাকবে। Object.values ব্যবহার করে সব ভ্যালু বের কর।
 */
const player = {
    name: "messi",
    team: "Argentina",
    goals: 91
}
console.log(Object.values(player));

/*একটা building অবজেক্ট বানা, যার মধ্যে floors 10, address {street Main Road, city Dhaka}, আর type Commercial। এখন একটা for...in লুপ চালিয়ে সব প্রোপার্টি আর ভ্যালু প্রিন্ট কর। */

const building = {
    floors: 10,
    address: {street: "Main Road", city: "Dhaka"},
    type: "Commercial"
}
for(value in building){
    console.log(value, building[value]);
}