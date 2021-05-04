/*
1. 직접 작성할 수 있음
2. API(Application Programming Interface) 이용 시 사용
*/
// function: get input -> return output

/*
-. Function
 - fundamental building block in the program
 - subprogram can be used multiple times
 - performs a task or calculates a value

 1. Function declaration
 function name(para1, para2) { body... return; }
 one function === one thing
 naming: doSomething, command, verb (especially carmel pattern)

 e.g. createCardAndPoint --> createCard, createPoint
 function is object in JS
 */

 // example (no parameter형)
 "use strict";
 function printHello(){
    console.log("Hellow");
 }
 printHello();

 // 어떤 형태의 parameter를 전달해야하는지 명확하지 않음
 // 아래 형태는 TypeScript 형태임 --> 세세한 코딩이 가능하므로 꼭 배우길 추천
 //function log(message: string){
 //    console.log(message);
 //}
//log("This is string value");


// 2. Parameters
// premitive parameters: passed by value
// object parameters: passed by reference
function changeName(obj){
    obj.name =  'coder';
}
const jeremy = { name: 'jeremy' };
changeName(jeremy);
console.log(jeremy);

// 3. Default parameters (added in ES6)
function showMessage(message, from='unknown'){
    /* 이렇게 안해도 됨, c++의 default parameter 개념과 똑같음
    if (from === undefined){
        from = 'unknown';
    }*/

    console.log(`${message} by ${from}`);
}

showMessage('Hi!');


// 4. Rest parameters (add in ES6)
// --> array 형태로, 처음부터 순서대로 parameter를 받음
function printAll(...args){

    // 1) 일반적인 방법
    for (let i=0; i<args.length; i++){
        console.log(args[i]);
    }

    // 2) 'args의 element' 변수 선언해서 loop 돌리는 방법 (C#의 foreach와 비슷)
    for(const arg of args){
        console.log(arg);
    }

    // 3) 2)번보다 더 간단한 방법, forEach
    // (위에 연상해서 적어놨더니.. 이미 그런 기능이 있네요..ㅋ)
    args.forEach((arg) => console.log(arg));
}
printAll('Band', 'Yoondal', 'Jeremy');

// 5. Local Scope
let globalMessage = 'global'; //global variable
function printMessage(){
    let message = 'hello';
    console.log(message);     //local variable
    console.log(globalMessage);

    function printAnother(){
        console.log(message);
        let childMessage = 'hello';
    }
    // return undefined;
}
printMessage();
// p.s: 하지만 과도한 global variable 선언은 좋지 않음..
// '밖에서는 안이 보이지 않고 안에서만 밖을 볼 수 있다.'

// 6. Return a value
function sum(a, b){
    return a + b;
}
const result = sum(1, 2);
console.log(result);
console.log(`sum: ${sum(1, 2)}`);

// 7. Early return, early exit
// bad
function upgradeUser(user){
    if (user.point > 10){
        // long upgrade logic
    }
}

//good 
function upgradeUser(user){
    if (user.point > 10){
        return;
    }
    // long upgrade logic
}




// First-class function
// functions are treate like any other variable
// can be assigned as a value to variable
// can be passed as an argument to other functions
// can be returnedby another function

// 1. Function expression
// a function declaration can be called earlier than it is defined (hoisted)
// a function is created when the execution reaches it.

const print = function(){ // No named func = anonymous function (무명함수)
    console.log('print'); // <-> named function
};
print();
const printAgain = print;
printAgain();
const sumAgain = sum;
console.log(sumAgain(1, 3));

// 2. Callback function using function expression
// function can be used some function's parameter
function randomQuiz(answer, printYes, printNo){
    if (answer === 'love you'){
        printYes();      
    }
    else{
        printNo();
    }
}

// anonymous function
const printYes = function(){
    console.log('yes!');
}

// named function
// better debugginf in debugger's stack traces
// recursions --> 너무 남발하면 메모리 에러터져서 사이트 죽음
const printNo = function print(){
    console.log('no!');
}

randomQuiz('wrong', printYes, printNo);
randomQuiz('love you', printYes, printNo);

// Arrow function: JS에서는 함수를 아래 패턴으로 좀더 간략하게 작성 가능 
const simplePrint = () => console.log('simplePrint');
const add = (a, b) => a + b;

// IIFE: Immediately Invoked Function Expression
// 선언과 동시에 즉시 호출.. 와우 ㅋ 근데 잘 쓰이지는 않는다고 함
(function hello(){
    console.log ('IIFE');
})();