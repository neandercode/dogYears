//how old I am this year
var myAge = 35;

//dogs early years
var earlyYears = 2 * 10.5;

//subtracts 2 from my current age
var laterYears = (myAge - 2) * 4;

//totals early and later years to dog years
var myAgeInDogYears = earlyYears + laterYears;

//should lower case the string
var myName = "Joseph";
var myLowerName = myName.toLowerCase();
console.log(myLowerName);

console.log(
  "My name is " +
    myName +
    " I am " +
    myAge +
    " years old in human years which is " +
    myAgeInDogYears +
    " years old in dog years."
);
