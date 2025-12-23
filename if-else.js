const groceryPrice = 7000;
// Elligable for 15% discount
if(groceryPrice >= 6000){
    const firstDiscount = ((groceryPrice / 100) * 15);
    const firstPay = (groceryPrice - firstDiscount);
    console.log(firstPay);

}else if(groceryPrice >= 3000){  // for 5% discount
    const groceryDiscount = ((groceryPrice / 100) * 5);
    const groceryPay = (groceryPrice - groceryDiscount);
    console.log(groceryPay);
}else{
    console.log(groceryPrice);
}


const childAge = 12;
const olderAge = 50
if(childAge > 20){
    console.log("Bachara tuder jonno free kawa");
}else if(olderAge < 45){
 console.log("babra tuder jonno 50% discount");
}else{
    console.log("young pulapan tuder sob taka dite hobe");
}

/* 3 NO TASK: 
যদি কারো ব্যাংক একাউন্টে ব্যালেন্স 1000 টাকার কম হয়, তাহলে বলবি, "ডিপোজিট কর।" 1000 থেকে 5000-এর মধ্যে হলে বলবি, "বিন্দাস লাইফ এনজয় কর।" আর 5000-এর বেশি হলে বলবি, "তুই ধনী, আমাকে বিয়া কর।"

Below this program take so many time to do, now I feel so exited because I solve something
*/
const bankBalance = 5001;
if(bankBalance >= 1000 && bankBalance <= 5000){
    console.log("Bindas life enjoy kor");
} else if(bankBalance > 5000){
    console.log("tui done amake biye kor")
}else{
    console.log("mona tumi Deposit koro");
}


/* 4 NO TAKS:
একটা পরীক্ষায় যদি কোনো ছাত্রের মার্কস 50-এর কম হলে বলবি "Fail", 50 থেকে 80-এর মধ্যে হলে বলবি "Pass", আর 80-এর বেশি হলে বলবি "A+"।
*/
const studentExamMarks = 81;
if(studentExamMarks > 80){
    console.log("A+");
} else if(studentExamMarks >= 50){
    console.log("pass");
}else{
    console.log("Fail");
}


/* 5 NO TASK
কোনো বইয়ের পৃষ্ঠাসংখ্যা 100-এর কম হলে বলবি "Small book", 100 থেকে 500-এর মধ্যে হলে বলবি "Mid-size book", আর 500-এর বেশি হলে বলবি "heart-attack size book"। 
*/

const bookPages = 501;
if(bookPages > 500){
    console.log("hear attack size book");
}else if(bookPages >= 100){
    console.log("Mid size book");
}else{
    console.log("small book");
}


/* 6 no task
একটা প্রোগ্রাম লিখ। যা চেক করবে, তাপমাত্রা 0 ডিগ্রির কম হলে বলবে "Ice", 0 থেকে 20-এর মধ্যে হলে বলবে "Cool Cool", আর 20-এর বেশি হলে বলবে "Hot Hot"।
*/

const temparature = -1;
if(temparature >= 20){
    console.log("Hot Hot");
} else if(temparature >= 0){
    console.log("Cool Cool");
}else{
    console.log("Ice");
}

/* 7 no task
তোর একটা গেমিং অ্যাপ আছে। প্লেয়ারের লেভেল 10-এর কম হলে বলবি "novice", 10 থেকে 50-এর মধ্যে হলে বলবি "Expert", আর 50-এর বেশি হলে বলবি "Pro Gamer"।
 */

const playerLever = 9;
if(playerLever > 50){
    console.log("Pro Gamier");
}else if(playerLever >= 10){
    console.log("Expert")
}else{
    console.log("novice");
}

