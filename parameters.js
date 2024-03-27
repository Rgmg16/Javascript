function greetings(){
    console.log("Hello people");
}

greetings();

function welcome(name){
    console.log("Welcome to class " +name)
}

welcome("Joe");
welcome("Biden");
welcome("Israel");
welcome("Sheerah");

function area(length,width){
    let areaofrectangle= length * width;
    console.log("The area of a rectangle is " +areaofrectangle);
}
area(4,2);

function add_two_numbers(x,y){
    let add =x+y;
    console.log("Sum =",add)
}
add_two_numbers (16,6);

function add_three_numbers(a,b,c){
    let add =a+b+c;
    console.log("Sum =",add)
}
add_three_numbers(3,7,6);

function multiply_two_numbers(d,c){
    let multiply=d * c;
    console.log("Product =", multiply)
}
multiply_two_numbers(8,2);

function divide_two_numbers(e,f){
    let divide=e/f;
    console.log("Dividend =",divide)
}
divide_two_numbers(21,3);

function subtracting_two_numbers(g,h){
    let subtraction= g-h;
    console.log("Remainder =",subtraction)
}
subtracting_two_numbers(10,3);

function areaofacircle(l){
    let area= Math.PI*l*l;
    console.log("Area of the circle =",area)
}
areaofacircle(7);