// function calculate(command, a, b)

const cal = function calculate(command, a, b){
    switch(command){
        case "add":
            console.log(a + b);
            break;
        case "substract":
            console.log(a - b);
            break;
        case "multiply":
            console.log(a * b);
            break;
        case "remainder":
            console.log(a % b);
            break;
        default:
            console.log("Wrong command!");
            break;
    }
};

cal('add', 3, 4);
cal('substract', 7, 3);
cal('multiply', 5, 3);
cal('remainder', 6, 27);
cal('blah blah', 1, 2);