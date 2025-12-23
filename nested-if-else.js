
// JavaScript Nested If-Else Practice:

/* no 1 task
বন্ধু যদি দাওয়াত দেয়, তাহলে তার জন্মদিনের পার্টিতে তুই যাবি। আর যদি তোকে দাওয়াত না দেয়, তাহলে তাকে ফ্রেন্ডলিস্ট থেকে বের করে দিবি। আর যদি বন্ধু দাওয়াত দিয়ে ফেলে, তাহলে দাওয়াতে যাওয়ার সময় চেক করে দেখবি, পকেটে কত টাকা আছে। যদি 1000 টাকার বেশি থাকে, তাহলে বন্ধুর জন্য একটা গিফট নিয়ে যাবি। না হয় খালি হাতে যাবি।
*/
const friendWeddingInvitation = true;
const pocketMoney = 100;
if (friendWeddingInvitation == true) {
    if (pocketMoney > 1000) {
        console.log("Gift niye jabo");
    } else {
        console.log("tk nai kali hate jabo")
    }
} else {
    console.log("Tu sala amar friendlist teke unfriend")
}

/*
যদি তোর বাসায় মেহমান আসে, প্রথমে জিজ্ঞেস করবি, তারা চা খাবে কি না। যদি চা খেতে চায়, তাহলে জিজ্ঞেস করবি, সাথে বিস্কুট খাবে কি না, হ্যা বললে বলবি ‘এই নাও বিস্কুট সহ চা’। না চাইলে বলবি, ‘শুধু চা রেডি।’ আর যদি চা-ও না খেতে চায়, বলবি, ‘বসে বসে স্টার জলসা দেখুন।’
 */

const tea = false;
const biskut = false;

if (tea == true) {
    if (biskut == true) {
        console.log("ai naw biskut soho cha")
    } else {
        console.log("shudu cha ready")
    }
} else {
    console.log("ghore bose bose star jolsha dekho")
}

/*
তুই একটি অ্যাপ বানিয়েছিস। প্রথমে চেক করবি, ব্যবহারকারীর অ্যাকাউন্ট অ্যাকটিভ কি না। যদি অ্যাকটিভ হয়, তার সাবস্ক্রিপশন চেক করবি। যদি প্রিমিয়াম হয়, তাকে প্রিমিয়াম ফিচার দেখাবি। না হলে বলবি, ‘ফ্রি ভার্সন দেখুন।’
*/
const isUserAccountActive = true;
const isUserHaveSubscription = "premium";
if(isUserAccountActive == true){
    if(isUserHaveSubscription == "premium"){
        console.log("you can watch premium features");
    }else{
        console.log("free version dekun - ghorib sala");
    }
}else{
    console.log("Your account is not active.")
}

/*
তোর বাসার ফ্রিজে খাবার আছে কি না, চেক করবি। যদি থাকে, খাবার গরম করবি। আর যদি না থাকে, চেক করবি, ফুড ডেলিভারি অ্যাপ কাজ করছে কি না। কাজ করলে অর্ডার করবি, না হলে বলবি, ‘আজকে আমি রোজা।’
 */

const isHaveFood = false;
const isFoodDeliveryAppWork = false;
if(isHaveFood == true){
    console.log("Kabar gorom korbo");
}else{
    if(isFoodDeliveryAppWork == true){
        console.log("food order korbo");
    }else{
        console.log("ajke ami ruja");
    }
}

/*
ধর, তুই একটা পার্টি করবি। প্রথমে দেখবি, পার্টিতে 100 জনের বেশি গেস্ট আসবে কি না। যদি আসে, তাহলে চেক করবি, সবাই গিফট আনবে কি না। যদি আনে, বলবি, ‘Lets party all night.’ নচেৎ বলবি, ‘I will party with myself.’ 
 */

const partyGuests = 101;
const isAllGuestBringGifts = true;
if(partyGuests >= 100){
    if(isAllGuestBringGifts == true){
        console.log("let's party all night.");
    }else{
        console.log("I will party with myself.")
    }
}else{
    console.log("manus nai party bondo");
}