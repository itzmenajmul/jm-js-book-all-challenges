const iHaveMoney = 50;
const myFriendHaveMoney = "50";
const isOurMoneySame = (iHaveMoney == myFriendHaveMoney);
const secondIsOurMoneySame = (iHaveMoney === myFriendHaveMoney);

// in these program the values would be come up true and true
// because firstly both of their value same and secondly 
// both of their value and type same that's the reason.
const noteBookOne = "JavaScript";
const noteBookTwo = "JavaScript";
const firstCompareTool = (noteBookOne == noteBookTwo);
const secondCompareTool = (noteBookOne === noteBookTwo);

// first result would be true and second one false 
// because == program means their only value but second program which is === that's mean their value and type both should be same. But in this scenario that's completely different

const twentyFive = 25;
const twentyFiveStr = "25";
const firstTwentyFiveCompare = (twentyFive == twentyFiveStr);
const secondTwentyFiveCompare = (twentyFive === twentyFiveStr);

// both would be true because their value and type are same
const appleOne = "Apple";
const appleTwo = "Apple";
const firstAppleCompare = (appleOne == appleTwo);
const secondAppleCompare = (appleOne === appleTwo);

// both result would be false the reason is both value and their type are different
const smallerTest = "test";
const upperTest = "TEST";
const firstTestCompare = (smallerTest == upperTest);
const secondTestCompare = (smallerTest === upperTest);

// both result would be true because at first their value is not equal and secondly their types are same but values are different.{second one one criteria finished but another one is not reliable so that also true}

const variableX = 15;
const variableY = 20;
const firstVariableCompare = (variableX != variableY);
const secondVariableCompare = (variableX !== variableY);

// both results are false because their values are different doesn't matter if the types are same.
const variableA = "hello";
const variableB = "HELLO";
const firstHelloCompare = (variableA == variableB);
const secondHelloCompare = (variableA === variableB);


console.log(isOurMoneySame);
console.log(secondIsOurMoneySame);
console.log(firstCompareTool);
console.log(secondCompareTool);
console.log(firstTwentyFiveCompare);
console.log(secondTwentyFiveCompare);
console.log(firstAppleCompare);
console.log(secondAppleCompare);
console.log(firstTestCompare);
console.log(secondTestCompare);
console.log(firstVariableCompare);
console.log(secondVariableCompare);
console.log(firstHelloCompare);
console.log(secondHelloCompare);