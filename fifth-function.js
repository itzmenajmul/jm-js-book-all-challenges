// JavaScript Function Practice:

/*
তোর এক বন্ধুর কাছে কিছু নম্বর আছে: [5, 15, 8, 7]। ওর চাওয়া অনুযায়ী, শুধু বিজোড় সংখ্যাগুলার যোগফল বের করে দে। এই কাজের জন্য একটা ফাংশন লিখে ফলাফলটা রিটার্ন কর।
 */
function friendNums(nums) {
    let evenNums = 0;
    for (let num of nums) {
        if (num % 2 !== 0) {
            evenNums += num;
        } else {

        }
    }
    return evenNums;
}

const friendArrayNums = [5, 15, 8, 7, 10, 3];

console.log("all even numbers sum is: ", friendNums(friendArrayNums));

/*
একটা ফাংশন লিখে দেখ, যেটা array-এর প্রথম দুইটা উপাদানের মধ্যে যেটা ছোট সেটাকে রিটার্ন করবে। উদাহরণস্বরূপ, তুই যদি [20, 45, 78] পাঠাস, ফাংশন 20 রিটার্ন করবে।
 */
function fristSmallNums(arrayNums) {
    if (arrayNums[0] < arrayNums[1]) {
        return arrayNums[0];
    } else {
        return arrayNums[1];
    }
}

const numsArray = [9, 5, 20, 25];
console.log(fristSmallNums(numsArray));

/*
তুই তোর বয়স একটু লুকিয়ে-চুপিয়ে দেখাতে চাস। ধর, তোর বয়স 18-এর কম হলে তুই রিটার্ন 18, আবার 45-এর বেশি হলে তুই বলবি 45, আর এই দুইটার মাঝখানে কোনো সংখ্যা হলে সরাসরি সেই সংখ্যাটা রিটার্ন করে পাঠিয়ে দিবি। এমন একটা ফাংশন লিখ।
 */
function age (num){
    if(num < 18){
        return 18;
    }else if(num > 45){
        return 45;
    }else{
        return num;
    }
}
console.log(age(30));

/*
তোর এক বন্ধুর কাছে একটা array আছে, যেমন: [2, 4, 5, 7, 8, 32, 45]। এখন এমন একটা ফাংশন তৈরি কর, যেটা শুধু array-এর 4 দিয়ে ভাগ যায়, এমন সংখ্যাগুলোর যোগফল দেখাবে।
 */

function onlyFourDividable(frnArray){
    let fourDvideSum = 0;
    for(num of frnArray){
        if(num % 4 === 0){
            fourDvideSum += num;
        }
    }
    return fourDvideSum;
}
const frndNum = [2, 4, 5, 7, 8, 32, 45];
console.log(onlyFourDividable(frndNum));

/*
একটা ফাংশন লিখ, যা একটি নাম্বার নিবে এবং সেটি যদি 20-এর কম হয়, তবে নাম্বারটিকে দ্বিগুণ করবে, না হলে 20 দিয়ে ভাগ করবে।
 */
function judgeTwenty(num){
    if(num < 20){
        return num * 2;
    }else{
        return num / 20;
    }
}

console.log("judge Nmber according to 20: ", judgeTwenty(40));

/*
এমন একটা ফাংশন লিখ, যা array-এর মধ্যে শুধু নেগেটিভ সংখ্যাগুলোর যোগফল রিটার্ন করবে।
 */
function negetiveNumsAddition(arrayNums){
    // console.log(arrayNums);
    let negSum = 0;
    for(num of arrayNums){
        console.log(num);
        if(num < 0){
            negSum += num
        }
    }
    return negSum;
    
}

console.log("negative numbers sub : ", negetiveNumsAddition([10, -15, -5, 45]));

/*
একটা ফাংশন লিখ, যা একটি array নিবে এবং array-এর মধ্যে যে সংখ্যাগুলা 3 দিয়ে ভাগ যায়, তাদের গুণফল রিটার্ন করবি।
 */
function threeDividable(dvidableThreeArray){
    let threeDSum = 0;
    for(num of dvidableThreeArray){
        if(num % 3 === 0){
            threeDSum += num;
        }
    }
    return threeDSum;
}

console.log("total three dividable numbers sum: ", threeDividable([9, 27, 50, 33, 18, 20]));