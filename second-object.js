// JavaScript Object Property Practice:

/*
তুই player অবজেক্ট তৈরি করবি। নাম, বয়স, স্পোর্টস, টিম ইত্যাদি প্রোপার্টি থাকবে। তারপর সেই অবজেক্ট থেকে dot notation দিয়ে তার টিমের নাম console কর।
 */
const player = {
    name: "Johrul",
    age: 30,
    sports: "cricket",
    team: "local"
}
console.log(player.team);

/*
একটা laptop অবজেক্ট তৈরি কর। তার brand, price, hardDisc, ram, screenSize ইত্যাদি প্রোপার্টি থাকবে। dot notation দিয়ে screenSize বের করে দেখ।
 */
const laptop = {
    brand: "HP",
    price: 30000,
    hardDisc: 220,
    ram: 8,
    screenSize: "1980 x 1080"
}
console.log(laptop["screenSize"])

/*
তোর একটা প্রিয় জায়গা আছে, যার নাম favPlace। তার মধ্যে কিছু তথ্য আছে। যেমন, name: "Cox's Bazar", distance: "400km", আর popularity: "high"। bracket notation দিয়ে popularity প্রোপার্টি console log কর।
 */
const favPlace = {
    name: "Cox's Bazar",
    distance: "400km",
    popularity: "hight"
}
console.log(favPlace["popularity"]);

/*
তুই একটা phone অবজেক্ট বানাস। সেখানে brand, color, price প্রোপার্টি থাকে। ব্রান্ড দিস Nokia, কালার black আর দাম 5000। ব্র্যাকেট নোটেশন দিয়ে দাম বের কর।
 */
const phone = {
    brand: "Realme C11",
    color: "Silver",
    price: 9999,

}
console.log(phone["price"]);

/*
একটা library অবজেক্ট তৈরি কর। তার মধ্যে name Public Library, location Dhaka আর books: 5000 প্রোপার্টি থাকবে। dot notation দিয়ে location বের কর।
 */
const library = {
    name: "Public Library",
    location: "Dhaka",
    books: 5000
}
console.log(library.location);

/*
একটা movie অবজেক্ট বানা। যার title Inception, director Nolan, rating 9। bracket notation দিয়ে rating প্রোপার্টি বের কর।
 */
const movie = {
    title: "Inception",
    director: "Nolan",
    rating: 9
}
console.log(movie["rating"]);

/*
একটা college অবজেক্ট বানা। যার নাম ndc, স্থাপিত (established) 1949, গ্রুপ (groups) ['Science', 'Arts', 'Commerce']। এইবার তোর কাজ হবে সেকেন্ড groups-এর মান অর্থাৎ 1 ইনডেক্সের মান বের কর।
 */
const college = {
    name: "ndc",
    established: 1949,
    group: ['Science', 'Arts', 'Commerce'],

}
console.log(college.group[1]);

/*একটা family অবজেক্ট বানা। যার মধ্যে একটা প্রোপার্টি হবে father সেটার মানও আরেকটা অবজেক্ট এবং ফাদারের মধ্যে তোর আব্বুর নাম, বয়স এবং পেশা (profession) থাকবে। একইভাবে family অবজেক্টে mother নামে আরেকটা প্রোপার্টি থাকবে, সেই প্রোপার্টির মানও আরেকটা অবজেক্ট। আর mother-এর অবজেক্টের মধ্যে তোর আম্মুর নাম, বয়স আর পেশা থাকবে। এখন তোর কাজ হচ্ছে, mother-এর age প্রোপার্টি বের কর। তারপর তোর আব্বুর age-এর মান বের কর। তারপর এই দুইটা age-এর যোগফল বের করে সেটা আউটপুট হিসেবে দেখা। */
const family = {
    father: {name: "johrul", age: 55, profession: "unemploy"},
    mother: {name: "Banu", age: 50, profession: "housewife", }
}
const fatherAge = family.father.age;
const motherAge = family.mother.age;
const bothParentAgeSum = (fatherAge + motherAge);
console.log("mother and father age sum: ", bothParentAgeSum);