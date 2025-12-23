// JavaScript Include and indexOf method Practice:

/*
includes আর indexOf এর মধ্যে পার্থক্য কি ? 
My Response -> includes means finding something is this exist in particular array and if get the item then gives true. If don't find then gives false
indexOf means same finding in particular item in array but If we find then gives us index number like 0, 4, 5. If we don't find then give us -1.
*/


/*
তুই একটা প্রোগ্রাম বানাতে চাস, যেটাতে ‘আম’ নামক একটা ফল লিস্টে আছে কি না, সেটা চেক করবে। যদি থাকে, তবে আউটপুটে বলবে, ‘আম আছে’, আর না থাকলে বলবে, ‘আম নেই, গাছে উঠ’। ফলের অ্যারেতে ‘আপেল’, ‘কলা’, ‘আম’ ও ‘লিচু’ আছে।
 */
let fruitesBucket = ["Apple", "Banana", "Mango", "Litchi"];
if(fruitesBucket.includes("Apple")){
    console.log("Yes, We have Mango");
}else{
    console.log("There are have not any Mango please climb on to the tree.");
}

/*
 তুই একটা অ্যারে বানালি, যেখানে নামগুলো আছে— ‘বাবুল’, ‘আলিফ’, ‘ছোটন’। এখন প্রোগ্রাম লিখে দেখ, বাবুলের ইনডেক্স নাম্বার কত।
 */
let randomNames = ["Babul", "Alif", "Suton"];
let babulIndesNo = randomNames.indexOf("Babul");
console.log(babulIndesNo);

/*
ধর, তুই বন্ধুদের নামের একটা লিস্ট বানিয়েছিস অ্যারেতে— ‘রিমন’, ‘রিফাত’, ‘রাজিব’। এখন তোর মনে হলো, ‘রিফাত’-এর অবস্থানটা ভুলে গেছিস। একটা প্রোগ্রাম লিখে রিফাতের ইনডেক্স বের কর।
 */
let friendsList = ["Rimon", "Rifat", "Rajib"];
let findingRifatIndex = friendsList.indexOf("Rifat");
console.log(findingRifatIndex);

/*
তুই কিছু শহরের নাম লিখে রাখছিস— ‘Dhaka’, ‘Chittagong’, ‘Sylhet’। এখন তুই ভাবলি, আরেকটা শহরের নাম যোগ করবি, কিন্তু ভুলে ছোট হাতের rajshahi যোগ করে ফেললি। এবার প্রোগ্রাম লিখে চেক কর, RajShahi আছে কি না।
 */
let citiesNames = ["Dhaka", "Chittagong", "Sylhet"];
citiesNames.push("rajshahi");

if(citiesNames.includes("Rajshahi")){
    console.log("OH Taheri Bha! Asi re Bhai ase");
}else{
    console.log("Maybe you have taken any mistake, there's have not any Rajshahi");
}

/*
একটা প্রোগ্রাম বানিয়ে ‘বৃষ্টি’ নামক উপাদান আছে কি না, চেক কর। যদি থাকে, তাহলে আউটপুটে বলবি ‘I need umberalla’, না থাকলে বলবি ‘No rain no pain’। অ্যারেতে ‘দীঘি’, ‘মেঘ’, ‘বৃষ্টি’ ও ‘বর্ষা’ আছে।
 */
let seassonsName = ["Dhigi", "Meg", "Bisti", "Borsha"];
if(seassonsName.includes("Bisti")){
    console.log("I need Umbrella");
}else{
    console.log("No rain no pain");
}

/*
তোর প্রিয় খেলাধুলার একটা অ্যারে আছে— ‘ফুটবল’, ‘ক্রিকেট’, ‘ভলিবল’। এখন তুই চেক করতে চাস ‘ব্যাডমিন্টন’ নামক খেলাটি অ্যারেতে আছে কি না। 
 */
let myFavSports = ["Football", "Cricket", "Bolibol"];
if(myFavSports.includes("Badminton")){
    console.log("Ase");
}else{
    console.log("Nai");
}