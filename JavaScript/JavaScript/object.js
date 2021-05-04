'use strict';
//Object
console.log('Finally object!');

// Objects
// one of the JavaScript's data types.
// a collection of related data and/or functionality
// Nealy all objects in JavaScript are instances of Object
// object = {key: value}


// 1.  Literals and properties

const obj1 = {};            //object literal syntax
const obj2 = new Object();  //'object constructor syntax'

function print(person){
    console.log(person.name);
    console.log(person.age);
}

const jeremy = {name: 'jeremy', age: 4};

print(jeremy);

// with JavaScript magic (dynamically typed language)
// can add properties later

// ** 이런 패턴들을 사용 가능하지만, 지양하도록!s
jeremy.hasJob = true;
console.log(jeremy.hasJob);

// can delete properties later
delete jeremy.hasJob;
console.log(jeremy.hasJob);



// 2. Computed properties
// key should be always string type.

console.log(jeremy.name);
console.log(jeremy['name']);
jeremy['hasJob'] = true;
console.log(jeremy.hasJob);
 
// 실제 coding할때는 접근자(.)를 통해 객체에 접근하는 방식을 쓰는게 맞다.
// JavaScript는 저런식으로 C# Xml 접근하듯이 xml 접근이 됨;

function printValue(obj, key){
    console.log(obj[key]);
}
printValue(jeremy, 'name');
printValue(jeremy, 'age');

// 3. Property value shorthand
const person1 = {name: 'bob', age: 2};
const person2 = {name: 'steve', age: 3};
const person3 = {name: 'dave', age: 4};
const person4 = new Person('jeremy', 27);

console.log(person4);

// 4. Constructor function
function Person(name, age){
        // this = {};
        this.name = name;
        this.age = age;
        // return this;
}

// 5. in operator: property existence check (key in obj)
console.log('name' in jeremy);
console.log('age' in jeremy);
console.log('random' in jeremy);
console.log(jeremy.random);


console.clear();

// 6. for..in vs for..of
// for (let key in obj)
for (let key in jeremy){
    console.log(key);
}


// for (value of iterable)
const array = [1,2,3,4,5];
for(let i=0; i<array.length; i++){
    console.log(array[i]);
}

for (let value of array){
    console.log(value);
}


// 7. Fun cloning
// Object.assign(dest, [obj1, obj2, obj3...])

const user = {name: 'jeremy', age: '20'};
const user2 = user;
//user2.name = 'coder';

console.log(user);


// old way
const user3 = {};
for (let key in user){
    user3[key] = user[key];
}
console.clear();
console.log(user3);

// new way
const user4 = {};
Object.assign(user4, user);
console.log(user4);

//another example
const fruit1 = {color: 'red'};
const fruit2 = {color: 'blue', size: 'big'};

// property를 가장 마지막에 뒤집어 씌운것
const mixed = Object.assign({}, fruit1, fruit2);
console.log(mixed.color);
console.log(mixed.size);