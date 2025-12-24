// Practice: 

/*অ্যারেটাকে ছোট থেকে বড় সাজিয়ে দে: const numbers = [50, 12, 25, 8, 15];
 */
const smallToBigNums = [50, 12, 25, 8, 15];
const sBOutput = smallToBigNums.sort((num1, num2) => num1 - num2);
console.log("From small to Big Numbers :", sBOutput)

/*একটা array numbers = [13, 2, 45, 9, 6]; ব্যবহার করে descending order-এ sort কর।
 */
const bigToSmall = [13, 2, 45, 9, 6];
const bSOutput = bigToSmall.sort((num1, num2) => num2 - num1);
console.log("Big number to small numbers: ", bSOutput);

/*বন্ধুদের age অনুসারে sorting করে দেখা const friends = [{name: 'Ali', age: 29}, {name: 'Sara', age: 22}, {name: 'Tariq', age: 35}];
 */
const friends = [{name: "Ali", age: 29}, {name: "Sara", age: 22}, {name: "Tariq", age: 35}];
const sortingByAge = friends.sort((age1, age2) => age1.age - age2.age);
console.log("Sorting array of object by age : ", sortingByAge);

/*একটা নামের array দিয়ে প্রতিটি নামকে alphabetically সাজিয়ে দেখাও: const names = ['nabil', 'zubayer', 'sarwar', 'delwar'];
 */
const names = ['nabil', 'zubayer', 'sarwar', 'delwar'];
const organizeByAlph = names.sort();
console.log("All names organize by alphabetically: ", organizeByAlph);