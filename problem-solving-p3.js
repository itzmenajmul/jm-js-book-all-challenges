// Practice: 

/*
একটি অ্যারের জোড়সংখ্যাগুলোর গড় বা এভারেজ বের করার একটা ফাংশন লিখ এবং বিভিন্ন মান দিয়ে সেই ফাংশনকে চেক করবি, ঠিক রেজাল্ট দিচ্ছে কি না।
 */
function avgEven(arrayNum) {
    // console.log(arrayNum);
    let evenNums = 0;
    for (num of arrayNum) {
        // console.log(num)
        if (num % 2 === 0) {
            // console.log(num)
            evenNums += num;
        }
    }
    // console.log(evenNums)
    const avg = (evenNums / arrayNum.length);
    return avg;
}

const friendNumbers = [9, 10, 14, 19, 25, 16, 18, 80];
const totalEvenNumsAvg = avgEven(friendNumbers);
console.log("Total even numbers average is : ", totalEvenNumsAvg);

/*
একটা অ্যারের বিজোড় সংখ্যাগুলাকে 2 দিয়ে গুণ করে একটি নতুন অ্যারে বানিয়ে নতুন অ্যারে রিটার্ন কর।
 */
function oddTwoMultiplication(arrayNum) {
    let oddNums = [];
    for (num of arrayNum) {
        if (num % 2 != 0) {
            oddNums.push(num * 2)
        }
    }
    return oddNums;
}

const numbers = [97, 80, 65, 3, 45, 18, 10]
const allOddNumbersMultiplication = oddTwoMultiplication(numbers);
console.log("all odd number multiplication: ", allOddNumbersMultiplication);

/*
একটি অ্যারেতে যদি বিজোড়সংখ্যা না থাকে, তবে "No odd numbers found" দেখানোর ব্যবস্থা কর। আর যদি বিজোড়সংখ্যা থাকে, তাহলে "Odd numbers found" রিটার্ন কর।
 */
// function checkOddNums(arrayNum){

// }

// const rNumbers = [10, 20, 3];
// console.log(checkOddNums(rNumbers));

/*
একটি অ্যারেতে বিজোড়সংখ্যাগুলোর গড় বের করে দশমিকের পরে দুই ঘর পর্যন্ত মান রিটার্ন কর। 
 */
function oddAvg(arrayNums) {
    let oddSumArray = [];
    for (num of arrayNums) {
        if (num % 2 != 0) {
            oddSumArray.push(num)
        }
    }

    let oddSum = 0;
    for (num of oddSumArray) {
        oddSum += num;
        console.log(num)
    }

    const avg = oddSum / oddSumArray.length;
    return parseFloat(avg.toFixed(2));

};
const randomNums = [10, 3, 9, 17, 19, 27];

console.log("this is a odd number average :", oddAvg(randomNums));


/*
অ্যারেতে প্রতিটি বিজোড় সংখ্যা থেকে 1 বিয়োগ করে একটি নতুন অ্যারে বানিয়ে ফেল। */
function minusOdd(arrayNum) {
    let oddNums = [];
    for (num of arrayNum) {
        if (num % 2 != 0) {
            num -= 1;
            oddNums.push(num)
        }
    }
    return oddNums;
}
const oddNumsOneMinus = minusOdd([10, 9, 80, 3, 7, 15]);
console.log(oddNumsOneMinus);

