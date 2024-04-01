// String
let stringOne = "Hi";
let stringTwo = "i'm  a string";

// console.log(`${stringOne}  ${stringTwo}`);
console.log(stringOne, stringTwo);

// number
const mainText = "NUMBER";
console.log(mainText);

const x = 50;
const y = 32;

// addition
const resultSum = y + x;
console.log("Sum:", resultSum);
// subtraction
const resultSub = x - y;
console.log("Sub:", resultSub);
// multiplication
const resultMul = y * x;
console.log("Mul:", resultMul);
//division
const resultDiv = x / y;
console.log("Div:", resultDiv);
// remainder
const resultRem = x % y;
console.log("Rem:", resultRem);
// power
const resultPow = x ** y;
console.log("Pow:", resultPow);

let lrgNum = Number.MAX_SAFE_INTEGER;
let smallNum = Number.MIN_SAFE_INTEGER;


//Bigint
console.log(lrgNum);
console.log(smallNum);

console.log(Number.isSafeInteger(lrgNum));

lrgNum++;

console.log(smallNum);

console.log(Number.isSafeInteger(lrgNum));

lrgNum++;
console.log(lrgNum);


const  productName = "T-shirt";
const productAvailable = true;
const productColor = null;
let productBrand;
// console.log(productName,productAvailable)

if (productAvailable === true){
    console.log("T-shirt is an available")
}else{
    console.log("T-shirt is an unavailable")
}

let myName = 'Giorgi';
let myHobby = 'Reading';
let yearOfBirth = 2005;
let currentYear = 2024;
let ageResult =currentYear  - yearOfBirth ;


// console.log(`My name is ${myName} \ni'm ${ageResult} old \nand my hobby is ${myHobby} `  )
console.log(`My name is ${myName}`)
console.log(`i'm ${ageResult} old`)
console.log(`My hobby is a ${myHobby}`);



