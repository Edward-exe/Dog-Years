// creating a variable to define my age
 let myAge = 25;
// as instructed creating a variable that can change called earlyYears to the number 2
 let earlyYears = 2;
 earlyYears *= 10.5;
// as the first 2 years have been accounted for in earlyYears we subtract 2 from the myAge variable.
 let laterYears = myAge - 2;
//we are multipling the laterYears variable by 4 to calculate the number of dog years accounted for by our laterYears. 
 laterYears *= 4;
// to work out my age in dog years we add the earlyYears to the laterYears variable
 let myAgeInDogYears = earlyYears + laterYears;
// creating a variable for my name then converting it all to lower case as instructed 
 let myName = 'Edward William John Green'.toLowerCase();
// making a cosnole.log and putting all the information in a string
console.log(`My name is ${myName}. I am ${myAge} years old in human years which is ${myAgeInDogYears} years old in dog years.`)