// 1. Use Strict
// JavaScript is very flexible
// flexible == dangerous
// added ECMAScript 5
'use strict';


// 2. Variable (read/write)
// let (added in ES6)
let globalName = 'global Name';
{
let name = 'jeremy';
console.log(name);
name = 'hello';
console.log(name);
}

console.log(name);
console.log(globalName);

// var (don't ever use this!!)
// var hoisting: move declaration from bottom to top 
//              어디에 선언했는지 상관없이 항상 제일 위로 선언을 끌어올려주는 것
// has no block scope (위에 쓴 block에 의한 global, local 패턴을 철저히 무시함)

// 3. Constant (상수, read only)
// favor immutable data type always for
const DAYS_IN_WEEK = 7
const DAYS_SIZE = 7.1

console.log(`value: ${DAYS_IN_WEEK}, type: ${typeof DAYS_IN_WEEK}`);
console.log(`value: ${DAYS_SIZE}, type: ${typeof DAYS_SIZE}`);


// Note!
// Immutable data types: primitive types, frozen objects (i.e. object.freeze())
// Mutable data types: All objects by default are mutable in JS
// favor immutable data type always for a few reasons

// 4. Variable types
// primive type: number, string, boolean, null, object ...
// function, first-class function

// 숫자타입 -> number

const infinity = 1 / 0;
const negativeInfinity = -1 / 0
const nAn = 'not a number' / 2;

console.log(infinity);
console.log(negativeInfinity);
console.log(nAn);


// bigInt (fairly new, don't use it yet)
const bigInt = 123456789012345678901234567890n;
console.log(`value: ${bigInt}, type: ${typeof bigInt}`);
Number.MAX_SAFE_INTEGER;

// (참고만, 아직 상용화되진 않음)

// String, 한가지든 여러가지든 모두 string
const char = 'c';
const brendan = 'brendan';
const greeting = 'hello ' + brendan;
console.log(`value: ${greeting}, type: ${typeof greeting}`);
const helloBob = `hi ${brendan}!`; // template literals (string)
console.log(`value: ${helloBob}, type: ${typeof helloBob}`);
console.log('value: ' +  helloBob + ' type: ' + typeof helloBob);


// Boolean (True or False)
// false: 0, null, undefined, NaN, ''
// true: any other values

const canRead = true; //true
const test = 3 < 1;   //false
console.log(`value: ${canRead}, type: ${typeof canRead}`);
console.log(`value: ${test}, type: ${typeof test}`);


// null
let nothing = null;
console.log(`value: ${nothing}, type: ${typeof nothing}`);

// undefined
let x = undefined;
console.log(`value: ${x}, type: ${typeof x}`);

// symbol, create unique identifiers for objects
const symbol1 = Symbol('id');
const symbol2 = Symbol('id');
console.log(symbol1 === symbol2) //false

const gSymbol1 = Symbol.for('id');
const gSymbol2 = Symbol.for('id');
console.log(gSymbol1 === gSymbol2) //true
console.log(`value: ${symbol1.description}, type: ${typeof symbol1.description}`);


// object, real-life, data structure
const jeremy = {name: 'jeremy', age: 20};
jeremy.age = 21;

// 5. Dynamic typing: dynamically typed language
// == 프로그램이 돌면서 데이터 타입이 유동적으로 바뀔 수 있다 (자바스크립트만의 특징)
let text = 'hello';
console.log(`value: ${text}, type: ${typeof text}`);
text = 1;
console.log(`value: ${text}, type: ${typeof text}`);
// 맨 앞에있는 첫 문자열을 가지고 string으로 판단하여 붙임
text = '7' + 5;
console.log(`value: ${text}, type: ${typeof text}`);
// string과 string을 연산하면 number로 판단하여 계산
text = '8' / '2';
console.log(`value: ${text}, type: ${typeof text}`);