// JavaScrractice: 

/*
একটা ফাংশন লিখ, যাতে কোনো কন্ডিশনের ভিত্তিতে নাম্বার 10-এর বেশি হলে true রিটার্ন করবে, আর না হলে false রিটার্ন করবে। 
 */
function isMoreThanTen (num){
    if(num > 10){
        return true;
    }else{
        return false;
    }
}

console.log(isMoreThanTen(9));

/*
তুই একটা ফাংশন লিখ, যা সংখ্যা নিবে আর তারপর সেই সংখ্যা যদি 13 দিয়ে সমানভাবে ভাগ যায়, তাহলে true রিটার্ন দিবে, না হয় false রিটার্ন দিবে। */
function isDivideByThirteen (num){
    if(num % 13 === 0){
return true;
    }else{
        return false;
    }
}
console.log(isDivideByThirteen(27));


/*
তুই একটা রেস্টুরেন্টে গিয়েছিস, সেখানে ভাত (rice), তরকারি (curry) আর ড্রিঙ্কস (drinks) খাবি। একটা ফাংশন লিখ, যাতে খাবারের মোট দাম যোগ করে মোট বিল রিটার্ন করবে।
 */
function restaurantBill (rice, curry, drinks){
    let bill = (rice + curry + drinks);
    return bill;
}
console.log("restaurant bill: ", restaurantBill(50, 70, 25))

/*
এমন একটা ফাংশন বানা, যেখানে বয়স দিলে সেটি 18-এর বেশি হলে "Eligible for Voting" রিটার্ন করবে, আর না হলে "Not Eligible"।
 */
function isGiveBoat (num){
    if(num > 18){
        return "Eligible for Voting";
    }else{
        return "Not Eligible";
    }
}
console.log(isGiveBoat(20));

/*
একটা ফাংশন লিখ, যেখানে একটি ভেরিয়েবল স্ট্রিং হিসেবে দিবি, আর সেটার দৈর্ঘ্য রিটার্ন করবে।
 */
function giveLength (str){
    return str.length;
}
console.log(giveLength("najmul"));

/*
তুই একটা ফাংশন লিখ, যা তিনটা সংখ্যার গড় বের করে রিটার্ন করবে।
*/
function threeNumSum(num1, num2, num3){
    return (num1 + num2 + num3);
}
console.log("three number sum: ", threeNumSum(10, 20, 50));

/*
একটা ফাংশন লিখ, যেটা চেক করবে, কোনো একটা সংখ্যা নেগেটিভ কি না। যদি নেগেটিভ (negative) নাম্বার হয়, তাহলে সেটাকে -1 দিয়ে গুণ করে রেজাল্ট রিটার্ন করবে। */
// function isNegative(num){
//     if(num === -1){
//         return (num * -1);
//     }else{
// return 
//     }
// }

