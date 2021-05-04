'use strict';
// Very importantest data structure!

// 검색 정렬 삽입 삭제
// 1. Declaration

const arr1 = new Array();
const arr2 = [1,2];

// 2. Index position
const fruits = ['apple', 'banana'];
console.log(fruits);
console.log(fruits.length);
console.log(fruits[0]);
console.log(fruits[1]);
console.log(fruits[fruits.length - 1]);

// 3. Looping over an array
// print all fruits
console.clear();

// a. for loop. 어느 언어에서나 모두 쓸수있는 전형적인 방법
for(let i=0; i<fruits.length; i++){
    console.log(fruits[i]);
}

// b. for of.. C#의 foreach와 비슷
for(let fruit of fruits){
    console.log(fruit);
}

// c. forEach
fruits.forEach((fruit, index, array) => console.log(fruit) );

// 4. Addtion, deletion, copy
// push: add an item to the end
fruits.push('strawnerry', 'peach');
console.log(fruits);

// pop: remove an item from the end
fruits.pop();
console.log(fruits);
fruits.pop();
console.log(fruits);

// unshift: add an item to the beginning
fruits.unshift('strawberry', 'lemon');
console.log(fruits);

// shift: remove an item from the beginning
fruits.shift();
console.log(fruits);
fruits.shift();
console.log(fruits);

// note!! shift, unshift are slower than pop push
// shift, unshift는 첫번째 인덱스 자료를 지우고, 모든 인덱스 자료를 한칸씩 움직이는
// 연산을 한번 더 실행해야함 (내 예상이 맞았군)

// splice: remove an item by index position
fruits.push('strawberry', 'peach', 'lemon');
console.log(fruits);


fruits.splice(1,1);
console.log(fruits);

fruits.splice(1,1,'greenapple', 'watermelon');
console.log(fruits);


// combine two arrays
const fruits2 = ['pear', 'coconut'];
fruits.concat(fruits);

// 5. Serching
// find the index

console.clear();
console.log(fruits);
console.log(fruits.indexOf('apple'));
console.log(fruits.indexOf('watermelon'));
// is include this elements in array? : true or false
console.log(fruits.includes('watermelon'));
console.log(fruits.includes('coconut'));
console.log(fruits.indexOf('coconut'));
// if you gotta index not exist thing in array, then print -1

// lastIndexOf
console.clear();
fruits.push('apple');
console.log(fruits.indexOf('apple'));
console.log(fruits.lastIndexOf('apple'));
