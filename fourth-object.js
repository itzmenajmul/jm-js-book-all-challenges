// JavaScript Object Protection Practice:

/*
ধর, তোর একটা headphone অবজেক্ট আছে, যার মধ্যে brand: "Sony", price: 3000, আর color: "red"। Object.freeze() মেথড ব্যবহার করে অবজেক্টটা freeze কর। এরপর আরেকটা নতুন প্রোপার্টি যোগ করতে চেষ্টা কর। দেখ, কাজ করে কি না।
 */
const headphone = {
    brand: "Sony",
    price: 3000,
    color: "red",
}
Object.freeze(headphone);
delete headphone.price;
headphone.color = "blue";
console.log(headphone);

/*
const player = { name Messi, goals 800, club Inter Miami }; Object.freeze() মেথড ব্যবহার করে অবজেক্ট ফ্রিজ কর। তারপর নতুন প্রোপার্টি যোগ করে দেখ, কাজ করে কি না।
 */
const player = {
    name: "Messi",
    goals: 800,
    club: "Inter Miami"
}
Object.freeze(player);
player.name = "Ronaldo";
console.log(player);

/*
const book = { title Harry Potter, author JK Rowling, pages 500 }; Object.seal() ব্যবহার করে অবজেক্ট সিল কর। তারপর author প্রোপার্টি চেঞ্জ করে দেখ।
 */
const book = {
    title: "Harry Potter",
    autor: "JK Rowling",
    page: 500
}
Object.seal(book);
book.page = 30;
console.log(book);

/*
একটা gadget অবজেক্ট বানা, যার মধ্যে name iPhone, price 120000, আর color Black থাকবে। delete ব্যবহার করে price ডিলিট কর।
 */
const gadget = {
    name: "iPhone",
    price: 120000,
    color: "Black"
}
delete gadget.price;
console.log(gadget);

/*
একটা animal অবজেক্ট বানা, যার মধ্যে name Tiger, location Sundarban থাকবে। এখন এমন কিছু কর, যাতে টাইগারের লোকেশন চেইঞ্জ করা না যায়।
 */
const animal = {
    name: "Tiger",
    location: "Sundarban"
}
Object.freeze(animal);
animal.name = "Lion";
console.log(animal);

/*
const food = { name Pizza, price 500, size Large }; এমন কিছু কর, যাতে food-এর মধ্যে নতুন প্রোপার্টি যোগ করা যাবে না। তবে চাইলে দাম বাড়ানো বা কমানো যাবে।  */

const food = {
    name: "Pizza",
    price: 500,
    size: "Large"
}
Object.seal;
food.price = 700;
console.log(food);