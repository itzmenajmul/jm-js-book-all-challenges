// Practice:

/*
একটা function লিখ, যেটা একটা income amount প্যারামিটার হিসেবে নিবে এবং কোনো tax bracket-এ পড়ে সেটা রিটার্ন করবে। ইনকাম যদি ≤ 50,000-এর নিচে হয়, তাহলে 10 রিটার্ন করবে। ইনকাম 50,001–100,000-এর মধ্যে হলে 20 ট্যাক্স হবে। আবার 100,001–200,000-এর মধ্যে হলে 30, আর $200,000 ওপরে হলে 40 পার্সেন্ট ট্যাক্স হবে। ফাংশন থেকে শুধু সংখ্যা রিটার্ন করবি। কোনো পার্সেন্টেজ চিহ্ন রিটার্ন করবি না।  */

function whichTaxBracket(incomeAmount){
    if(incomeAmount < 50000){
        return 10;
    }else if(incomeAmount >= 50001 && incomeAmount <= 100000){
        return 20;
    }else if(incomeAmount >= 100001 && incomeAmount <= 200000){
        return 30;
    }else{
        return 40;
    }
}

// console.log(whichTaxBracket(200005));


/*
একটা প্যাকেজ ডেলিভারির খরচ হিসাব কর। যেখানে 10kg-এর কম হলে 100 টাকা। আর 20kg-এর কম হলে 300 টাকা। 50 kg-এর কম হলে 1000 টাকা। আর তার বেশি হলে কেজিপ্রতি 100 টাকা করে খরচ দিতে হবে।
 */
function packageDelivery(kg){
    if(kg < 10){
        return 100;
    }else if(kg < 20){
        return 300;
    }else if(kg < 50){
        return 1000;
    }else{
        return (kg * 100);
    }
}

// console.log(packageDelivery(60));

/*
একটা function বানা, যেটা marks input নিবে এবং তারপর 80 বা তার ওপরে হলে A, 70 থেকে 79 হলে B, 60 থেকে 69-এর মধ্যে হলে C, 50 থেকে 59-এর মধ্যে হলে D, আর 50-এর নিচে হলে F গ্রেড return করবে। 
 */
function result(marks){
    if(marks >= 80){
        return "A";
    }else if(marks >= 70 && marks <= 79){
        return "B";
    }else if(marks >= 60 && marks <= 69){
        return "C";
    }else if(marks >= 50 && marks <= 59){
        return "D";
    }else{
        return "F";
    }
}

// console.log("you got: ", result(99));

/*
একটি ফাংশন লিখ যেটা ইনপুট হিসেবে একটা অ্যারে নিবে যে অ্যারের মধ্যে অনেকগুলা বছর থাকবে। তারপর সেই অ্যারের মধ্যে যতগুলো লিপ ইয়ার আছে সেটা কাউন্ট করবে। ফাইনালি মোট কয়টা লিপইয়ারওয়ালা বছর পাইছে সেই সংখ্যাটা রিটার্ন করবে।
 */

