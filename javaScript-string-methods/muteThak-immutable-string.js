// Practice: 

/*একটা স্ট্রিং বানা city, যার মান হবে Chattogram। এবার indexOf দিয়ে বের কর, g কোন ইনডেক্সে আছে।
 */
const city = 'Chattogram';
const findIndexNum = city.indexOf("g");
console.log("g index no is: ", findIndexNum);

/*একটা স্ট্রিং বানা division, যার মান হবে Sylhet। includes দিয়ে দেখ, এই স্ট্রিংয়ের মধ্যে y আছে কি না।
 */
const division = 'Sylhet';
const findY = division.includes('y');
console.log("y found or not in division: ", findY)

/*const name = 'Rifat'; স্ট্রিংয়ের শেষ ক্যারেক্টার বের কর।
 */
const name = 'Rifat';
const findLastLetter = name[name.length - 1];
console.log("name last latter is : ", findLastLetter);

/*একটা স্ট্রিং বানা language, যার মান হবে javascript। এবার indexOf দিয়ে চেক কর, rip কোন ইনডেক্সে শুরু হয়েছে।
 */
const language = 'javascript';
const findStartingIndx = language.indexOf('rip');
console.log("rip start from this index number: ", findStartingIndx);

/*const text = 'Immutable'; স্ট্রিংয়ের দৈর্ঘ্য বের কর এবং চেক কর এটি mutable কি না। */

const text = 'Immutable';
const text2 = 'Immu table';
const getLength = text.length;
const getText2Length = text2.length;
console.log("text length is: ", getLength);
console.log("Is text2 immutable: ", getText2Length);