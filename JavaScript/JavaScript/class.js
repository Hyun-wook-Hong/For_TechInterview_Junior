'use strict';

// Open with live server on browser
// ALT + L 입력 후 ATL + O 입력

// Object-oriented programming
// class template
// object: instance of a class 
// JavaScript classes
// - introduced in ES6
// - syntactical sugar over prototype-based inheritance

// 1. Class declarations
class Person{
    //constructor
    constructor(name, age){
        //fields
        this.name = name;
        this.age = age;
    }

    // methods
    speak(){
        console.log(`${this.name}: hello!`);
    }
}

// create new object
const jeremy = new Person('jeremy', 20);
console.log(jeremy.name);
console.log(jeremy.age);
jeremy.speak();

// 2. Getter and Setters
class User{
    constructor(firstName, lastName, age){
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }

    get age(){
        return this._age;
    }

    set age(value){

        // 공격적인 방법 ㅋㅋ
        /*if(value < 0){
            throw Error("Age value cannot be negaive.");
        }*/
        // 음수값을 삼항연산자로 0으로 전부 치환하는 방법
        this._age = value < 0 ? 0 : value;
    }
}

const user1 = new User('Steve', 'Jobs', -1);
console.log(user1.age);



// 3. Field (public, private)
// Too soon!

class Experiment{
    publicField = 2;
    #privateField = 0;
}
const experiment = new Experiment();
console.log(experiment.publicField);
console.log(experiment.privateField);

// 4. Static properties and methods
// Too soon!
class Article{
    static publisher = "Dream coding";
    constructor(articleNumber){
        this.articleNumber = articleNumber;
    }

    static printPublisher(){
        console.log(Article.publisher);
    }
}

const article1 = new Article(1);
const article2 = new Article(2);
console.log(Article.publisher);
Article.printPublisher();


// 5. Inheritance
// a way for one class to extend another class
class Shape{
    constructor(width, height, color){
        this.width = width;
        this.height = height;
        this.color = color;
    }

    draw(){
        console.log(`drawing ${this.color} color of`);
    }
    getArea(){
        return (this.width * this.height);
    }
}

class Rectangle extends Shape{}
class Triangle extends Shape{

    // overriding, can be re-declaration method in same name when Developer needs
    draw(){
        // 부모의 draw method 호출
        super.draw();
        console.log('▲');
    }
    getArea(){
        return (this.width * this.height) / 2;
    }

    toString(){
        return `Triangle: color: ${this.color}`;
    }
}

const rectangle = new Rectangle(20, 20, 'blue');
const triangle = new Triangle(20, 20, 'red');

rectangle.draw();
console.log(rectangle.getArea());

triangle.draw();
console.log(triangle.getArea());

// 6. class checking: instanceOf
console.log(rectangle instanceof Rectangle);
console.log(triangle instanceof Rectangle);
console.log(triangle instanceof Triangle);
console.log(triangle instanceof Shape);
console.log(triangle instanceof Object);
console.log(triangle.toString());

// Object는 모든 객체의 최상위 클래스이다.
// 이건 Java, C#, Python 등등 OOP Language라면 똑같네요..