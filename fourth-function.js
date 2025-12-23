//  JavaScript Function Practice:

/*
তোর দেওয়া array-এর মধ্যে যতগুলো উপাদান আছে, উপাদানের সংখ্যা জোড় নাকি বিজোড়, তা চেক কর। ফাংশন লিখে এটা করে দেখ।
 */
function numberOfElement(nums) {
    const len = nums.length;
    if (len % 2 === 0) {
        return "length is even";
    } else {
        return "length is Odd"
    }

}
const len = numberOfElement([12, 45, 78, 45, 121254, 4, 5]);
console.log(len);

/*
ধর, তোকে এমন একটা ফাংশন বানাতে হবে, যেটাতে একটা নাম পাস করলে সেটার প্রথম অক্ষরটা রিটার্ন করবে। ধর 'Raju' দিলে 'R' রিটার্ন করবে।
*/
function returnFirstLetter (name){
    return name[0];
}

console.log(returnFirstLetter("Nukul"));

/*
তুই একটা ফাংশন বানাবি, যেটাতে একটা সংখ্যা দিবি। ফাংশনটা চেক করবে, সংখ্যাটা 10-এর বড় কি না। বড় হলে 10 দিয়ে ভাগ করবে। আর 10-এর ছোট হলে 10 দিয়ে গুণ করবে। তারপর রেজাল্ট রিটার্ন করবে। 
 */
function tenDvideMultiple(num){
    if(num > 10){
        return num / 10;
    }else{
        return num * 10;
    }
}

console.log(tenDvideMultiple(15));

/*
একটা ফাংশন বানা, যেটা একটা array নিবে এবং array-এর প্রথম এবং দ্বিতীয় উপাদান যোগ করে যোগফল রিটার্ন করবে।
 */
function firsLastNumsSum(array){
    let first = array[0];
    let last = array.pop();
    return first + last;
}

let totalSum = firsLastNumsSum([10, 13, 10, 20]);
console.log(totalSum);

/*
একটা ফাংশন বানাবি, যেটা কোনো সংখ্যা n পাবে, আর সেই সংখ্যা দ্বিগুণ করে রিটার্ন করবে, যদি n পজিটিভ হয়। যদি n নেগেটিভ হয়, তাহলে তিনগুণ করে রিটার্ন করবে।
 */
function multipleTripple(n){
    if(n % 2 < 0){
        return n * 2;
    }else{
        return n * 3;
    }
}

let finalResult = multipleTripple(-5);
console.log(finalResult);

/*
তুই এমন একটা ফাংশন লিখবি, যা দুইটা নাম নিবে, প্রথম নাম আর দ্বিতীয় নাম। যদি প্রথম নামের দৈর্ঘ্য দ্বিতীয় নামের দৈর্ঘ্যের চেয়ে বেশি হয়, তাহলে true রিটার্ন করবে, না হলে false।
 */
function twoNames(name1, name2){
    if( name1.length > name2.length){
        return true;
    }else{
        return false;
    }
}

console.log(twoNames("he", "hello"));

/* তুই এমন একটি ফাংশন লিখ, যা দুইটি সংখ্যা নিবে এবং তাদের গুণফল রিটার্ন করবে। তবে, গুণফল 100-এর বেশি হলে শুধু তার অর্ধেক রিটার্ন করবে। */
function twoNums(num1, num2){
    let multiplication = num1 * num2;
    if(multiplication > 100){
        return multiplication / 2;
    }else{
        return "your value below 100"
    }
}
console.log(twoNums(10, 2));
