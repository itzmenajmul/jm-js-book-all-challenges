// JavaScript While Loop Practice:

/*
while লুপ দিয়ে 50 থেকে 100 পর্যন্ত সংখ্যা প্রিন্ট কর। 
 */
let fiftyToHundred = 50;
while (fiftyToHundred <= 100) {
    console.log(fiftyToHundred);
    fiftyToHundred++;
}

/*
while লুপ দিয়ে 5 থেকে 15 পর্যন্ত সংখ্যাগুলোর যোগফল বের কর।
 */
let sumOfFiveToFifteen = 5;
let totalSum = 0;
while (sumOfFiveToFifteen <= 15) {
    totalSum = totalSum + sumOfFiveToFifteen;
    sumOfFiveToFifteen++;
}
console.log("Sum: ", totalSum);

/*
তুই এক স্কুলে 1 থেকে 50 পর্যন্ত ছাত্রদের রোল নম্বর লিস্ট করবি, তারপর একটা while লুপ ব্যবহার করে সেই সংখ্যাগুলোর যোগফল বের কর।
 */
let schoolStudentsRoll = 1;
let totalRollSum = 0;
while(schoolStudentsRoll <= 50){
    totalRollSum = totalRollSum + schoolStudentsRoll;
    console.log("Students Roll List: ",schoolStudentsRoll)
    schoolStudentsRoll++;
}
console.log("Student Rolls Sum: ", totalRollSum);

/*
while লুপ ব্যবহার করে 21 থেকে 50 পর্যন্ত সংখ্যাগুলোর যোগফল বের কর এবং প্রতিবারের যোগফল দেখাবি।
 */
let twentyOneToFiftySum = 21;
while(twentyOneToFiftySum < 50){
        twentyOneToFiftySum++;
        console.log("Every Time Sum: ", twentyOneToFiftySum);
}

/*
20 থেকে 40 পর্যন্ত সংখ্যাগুলোর যোগফল বের কর এবং শুধু ফাইনাল যোগফলটা আউটপুট হিসেবে দেখবি।
 */
let twentyToFourtySum = 20;
let finalSum = 0;
while(twentyToFourtySum <= 40){
    finalSum = finalSum + twentyToFourtySum;
    twentyToFourtySum++;
}

console.log("Twenty to fourty total sum: ", finalSum);