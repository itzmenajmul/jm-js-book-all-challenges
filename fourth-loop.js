// JavaScript op Practice:

/*
For লুপ দিয়ে 150 থেকে 170 পর্যন্ত সংখ্যা প্রিন্ট কর। 
 */
for(let oneHundredFifty = 150; oneHundredFifty <= 170; oneHundredFifty++){
    console.log(oneHundredFifty);
}

/*
তুই এক স্কুলে 31 থেকে 58 পর্যন্ত ছাত্রদের রোল নম্বর লিস্ট করবি, তারপর একটা for লুপ ব্যবহার করে সেই সংখ্যাগুলোর যোগফল বের কর।
 */
let studentRollsSum = 0;
for(let studentThirtyOne = 31; studentThirtyOne <= 58; studentThirtyOne++){
  studentRollsSum = studentRollsSum + studentThirtyOne;
}

console.log("Roll 31 to 58 total sum: ",studentRollsSum);

/*
For লুপ দিয়ে 25 থেকে 75 পর্যন্ত সংখ্যাগুলোর যোগফল বের কর এবং যোগফল শেষে প্রিন্ট কর। */
let twentyFiveToSeventyFiveSum = 0;
for(let twentyFive = 25; twentyFive <= 75; twentyFive++){
  twentyFiveToSeventyFiveSum = twentyFiveToSeventyFiveSum + twentyFive;
}

console.log("25 to 75 total Sum: ",twentyFiveToSeventyFiveSum);