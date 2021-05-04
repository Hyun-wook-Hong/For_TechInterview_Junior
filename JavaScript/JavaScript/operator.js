// 1. String concatenation
console.log('my' + ' cat');
console.log('1' + 2);
console.log(`String literals: 1 + 2 = ${1 + 2}`);

console.log("Jeremy's Book")

// 2. Numeric operators
console.log(1 + 1); //add
console.log(1 - 1); //substarct
console.log(1 / 1); //divide
console.log(1 * 1); //multiply
console.log(5 % 2); //remainder
console.log(2 ** 3); //exponentiation

// 3. Increment & decrement operators
let counter = 2;
const preIncrement = ++counter;
// counter = counter + 1;
// preInrement = counter;
console.log(`preIncrement: ${preIncrement}, counter: ${counter}`);

const postIncrement = counter++;
// postIncrement = counter;
// counter = counter + 1;
console.log(`preIncrement: ${postIncrement}, counter: ${counter}`);

// post, pre decrement is same (--)

// 4. Assignment operators
let x = 3;
let y = 2;

////////////////////




// 8. if-else
const name = "jeremy";
if (name === "jeremy"){
    console.log("Welcome jeremy!");
}else if(name === "coder"){
    console.log("You are amazing coder");
}else{
    console.log("Unknown");
}

// 9. Ternary operator
// condition ? value1 : value2

console.log(name === "jeremy" ? "Yes" : "No");

// 10. Switch statement
// use for multiple if checks
// use for enum-like value check
// use for multiple type check in TS
const browser = "IE"
switch(browser){
    case 'IE':
        console.log("go away!");
        break;
    case 'Chrome':
    case 'Firefox':
        console.log("love you!");
        break;
    default:
        console.log("same all!");
        break;
}

// 11. loops
// while loop, while the condition is truthy,
// body code is executed
let i = 3;
while(i > 0){
    console.log(`while: ${i}`);
    i--;
}

// do while loop, body code is executed first,
// then check the condition

do{
    console.log(`while: ${i}`);
    i--;   
}while(i > 0)

// for loop, for(begin; condition; step)
for(i=3; i>0; i--){
    console.log(`for: ${i}`);
}

for(let i=3; i>0; i=i-2){
    //inline variable declaration
    console.log(`inline variable for: ${i}`);
}

//nasted loops
for(let i=0; i<10; i++){
    for(let j=0; j<10; j++){
        console.log(`i: ${i}, j: ${j}`);
    }

}