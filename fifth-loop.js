// Practice:

/*
তোর কাজ হবে 20 থেকে 50 পর্যন্ত যে সকল সংখ্যা 7 দিয়ে বিভাজ্য, তা আউটপুট হিসেবে দেখা। 
 */
for(let i = 20; i <= 50; i++){
    if(i % 7 == 1){
        console.log(i);
    }
}

/*
এইবার 40 থেকে 80 পর্যন্ত যে সকল সংখ্যা 5 দিয়ে এবং 7 দিয়ে বিভাজ্য, তা আউটপুট হিসেবে দেখা। 
 */
for(let fortyToEighty = 40; fortyToEighty <= 80; fortyToEighty++){
    if(fortyToEighty % 5 && fortyToEighty % 7 == 1){
        console.log("This is 5 and 7 Bibajjo: ", fortyToEighty);
    }
}

/*
এখন তোর প্রবলেম হলো 1 থেকে 40 পর্যন্ত যে সকল সংখ্যা 13 দিয়ে বিভাজ্য, তাদের যোগফল কর।  */
let oneToFourtySum = 0;
for(let oneToFourty = 1; oneToFourty <= 40; oneToFourty++){
    if(oneToFourty % 13 == 1){
        oneToFourtySum = oneToFourtySum + oneToFourty;
    }
}

console.log("This is one to 40 sum: ", oneToFourtySum);

/*
For লুপ দিয়ে 1 থেকে 50 পর্যন্ত লুপ চালাবি। তবে লুপ চালানোর সময় লুপ ভেরিয়েবলের মান প্রত্যেকবার 4 করে বাড়াবি। 
 */
for(let oneToFifty = 1; oneToFifty <= 50; oneToFifty += 4 ){
    console.log("EveryTime Add 4: ", oneToFifty);
}

/*
0 থেকে 100 পর্যন্ত সব সংখ্যাগুলো প্রিন্ট কর, যা 9 এবং 6 দিয়ে বিভাজ্য।
 */
for(let zeroToHundred = 0; zeroToHundred <= 100; zeroToHundred++){
    if(zeroToHundred % 9 == 1 || zeroToHundred % 6 == 0){
        console.log("This number are 9 and 6 er bibajo: ", zeroToHundred);
    }
}

/*
1 থেকে 50 পর্যন্ত এমন সংখ্যাগুলো প্রিন্ট কর, যা 3 এবং 4 উভয়ের দ্বারা বিভাজ্য এবং সংখ্যাগুলোর যোগফল বের কর।
 */
for(let oneToFiftyTwo = 1; oneToFiftyTwo <= 50; oneToFiftyTwo++){
    if(oneToFiftyTwo % 3 == 1 && oneToFiftyTwo % 4 == 0){
        console.log("This 3 and 4 er bibajo: ", oneToFiftyTwo)
    }
}
