// Practice: 
/*
ডুপ্লিকেট রিমুভ করার পুরা কোড নিজে বুঝে বুঝে লিখে এই অ্যারে [1, 5, 61, 5, 87, 7, 5, 81, 61]; দিয়ে চেক করবি।  */

function removeDuplicate(numbers){
    // console.log(numbers)
    let uniqueArray = [];
    for(num of numbers){
        // console.log(num);
        if(uniqueArray.includes(num) === false){
            uniqueArray.push(num);
        }
    }
    return uniqueArray;
}

const randomNums = [1, 5, 61, 5, 87, 7, 5, 81, 61];
const freshArray = removeDuplicate(randomNums);
console.log(freshArray);

/*value অদলবদল */
let a = 15;
let b = 20;
console.log(a, b);

const temp = a;

a = b;
b = temp;
console.log(a, b);