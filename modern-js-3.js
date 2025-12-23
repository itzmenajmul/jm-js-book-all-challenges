// Practice: 

/*
টেমপ্লেট স্ট্রিংয়ের মাধ্যমে দুটি সংখ্যার বিয়োগফল দেখা। যেমন: The difference between 100 and 20 is 80।
 */
const x = 60;
const y = 20;
const subtraction = `The difference between ${x} and ${y} is ${x - y}`;
console.log(subtraction);

/*
একটি অবজেক্ট employee তৈরি কর, যেখানে name, age এবং salary থাকবে। টেমপ্লেট স্ট্রিং দিয়ে তার নাম, বয়স এবং স্যালারি দেখা।
 */
const objectEmployee = { name: "mobarok", age: 30, salary: 30000 };

console.log(`${objectEmployee.name} ${objectEmployee.age} ${objectEmployee.salary}`);

/*fruits নামে একটি অ্যারে তৈরি কর। টেমপ্লেট স্ট্রিং ব্যবহার করে দেখা যে, তোর পছন্দের তৃতীয় ফলটি কী।
 */
const fruits = ["Apple", "Banana", "Orange", "Mango"];
console.log(`${fruits[2]}`)

/*const a = 50 এবং const b = 10 থাকলে টেমপ্লেট স্ট্রিং দিয়ে দেখা The division of a and b is 5।
 */
const a = 50;
const b = 10;
const division = `The division of ${a} and ${b} is ${a / b}`;
console.log(division);

/*const person = { firstName: "Amit", lastName: "Kumar" }; টেমপ্লেট স্ট্রিং ব্যবহার করে দেখা Full Name: Amit Kumar।
 */
const person = { firstName: "Amit", lastName: "Kumar" };
const fullName = `Full Name: ${person.firstName} ${person.lastName}`;
console.log(fullName)

/*
একটি অ্যারে animals = ["Cat", "Dog", "Elephant"] তৈরি কর এবং টেমপ্লেট স্ট্রিং ব্যবহার করে দেখা My favorite animals are Cat, Dog, Elephant।
 */
const animalsArray = ["Cat", "Dog", "Elephant"];
const finalAnimalResult = `My favourite animals are ${animalsArray[0]}, ${animalsArray[1]}, ${animalsArray[2]}`;
console.log(finalAnimalResult);

/*তোর কাছে স্টুডেন্ট নামে একটা অবজেক্ট আছে, সেই স্ট্রিংয়ের মধ্যে তার নাম আছে, তার বয়স আছে এবং তার তিনটা সাবজেক্টের মার্কস দেয়া আছে results নামক একটা প্রোপার্টির মধ্যে। যেটার মান একটা অ্যারে। এখন তোর কাজ হবে একটা টেমপ্লেট স্ট্রিং দিয়ে একটা স্ট্রিংয়ের মধ্যে এই স্টুডেন্টের নাম, তার তিনটা সাবজেক্টের রেজাল্টের গড় দেখানো। গড় দেখানোর জন্য তিনটা সাবজেক্টের মান যোগ করে তিন দিয়ে ভাগ করবি।  */


const student = { name: "Topu", age: 21, results: [80, 90, 70] };
const studentInfo = `Student name is ${student.name} and his three subjects average marks are ${(student.results[0] + student.results[1] + student.results[2]) / 3} `;
console.log(studentInfo); 