// Practice: 

/*একটা product অবজেক্ট আছে const product = { name: "Laptop", price: 50000, brand: "Dell" }; এইটা থেকে name বাদে বাকি প্রোপার্টিগুলা আলাদা একটা অবজেক্টে রাখ। 
 */
const product = { name: "Laptop", price: 50000, brand: "Dell" };
const { name, ...remainInfo } = product;
console.log(name);
console.log(remainInfo);

/*const project = { id: 101, title: "Web App", budget: 3000, client: "Tech Corp" }; এখানে title বাদে বাকি প্রোপার্টিগুলা আলাদা একটা অবজেক্টে রাখ।
 */
const project = { id: 101, title: "Web App", budget: 3000, client: "Tech Corp" };
const { title, ...projectInfo } = project;
console.log(title)
console.log(projectInfo);

/*const programmer = { name: "Sophia", language: "JavaScript", experience: 5, specialty: "Frontend", tools: "React" }; এখানে language আর specialty আলাদা প্রোপার্টি হিসেবে রেখে বাকিগুলা details নামে একটা অবজেক্টে রাখ।
 */
const programmer = { name: "Sophia", language: "JavaScript", experience: 5, specialty: "Frontend", tools: "Reach" };
const { language, specialty, ...details } = programmer;
console.log(language, specialty);
console.log(details);

/*একটা সংখ্যার array আছে। [10, 20, 3, 30, 300, 3000] এইটা থেকে প্রথম দুইটা উপাদান বাদে বাকিগুলা আলাদা আরেকটা array-এর মধ্যে রাখ। 
 */
const numbers = [10, 20, 3, 30, 300, 3000];
const [firstNum, secondNum, ...remainingNums] = numbers;
console.log(firstNum, secondNum);
console.log(remainingNums);

/*একটা function লেখ, যেটা দুইটা প্যারামিটার বাদে বাকিসব প্যারামিটারকে রেস্ট অপারেটর দিয়ে ধরে রাখবে। ফাংশনটি সেই বাকি প্যারামিটারগুলোর যোগফল রিটার্ন করবে।
 */
const rest = (num1, num2, ...restNums) => {

    let sumOfRestNums = 0;
    for (num of restNums) {
        console.log(num);
        sumOfRestNums += num;
    }

    return sumOfRestNums;
};

console.log("all rest parameter numbers sum are: ", rest(10, 20, 3, 2, 8, 15));

/*
একটা ফাংশন লেখ, যে সব প্যারামিটারকে রেস্ট অপারেটর দিয়ে একটা array-তে রাখবে, তারপর আর্গুমেন্টগুলো যোগ করবে। ফাংশনটি array-এর উপাদানগুলোর গড় রিটার্ন করবে। */
const getRestAvg = (...avg) => {
    let avgSum = 0;
    for (num of avg) {
        avgSum += num;
    }
    return (avgSum / avg.length);
};

console.log("all arguments average is : ", getRestAvg(5, 30, 2, 10, 50, 80))