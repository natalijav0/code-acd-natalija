/*/vezba za doma 1-self check up natalija
//1.What data type is the following variable?
const c="5";//const are constant data types aka unchangeable data types
//2.What data type is the following variable?
const c=91;//a simple data type often said as a one line data type
//3.Which one is generally better, line 1 or 2?
let empty1=undefined//line 1
let empty2=null;//line 2
//null is an intenionally empty variable while undefined is a variable stating that said var does not exist,
//so on that basis it depends on what you want to use it for
//4.What is the output for the following?
let a="Hello";
a="world";
console.log(a);
//output would be Hello because if we want it to say world we`d have to change the text in brackets in the first let
//5.Whar will be logged into the console?
let a="world";
let b="Hello"${a};
console.log(b);
//Hello world-would be logged do to usíng the $() opperator that acts as a addition tool
//6.What is the value of a?
let a="Hello";
a=prompt("world");
console.log(a);
//the value of a is Hello,the output would be Helloworld because of the added prompt
///7.What is the value of b output to the console?
let a="5";
let b="70";
let c="5"
b++
console.log(b);
//72 would be the output because of the added 1 and 1 (aka ++) to the var
//8.What is the value of result?
let result=3+4*2/8;
//4 aka the result of the equation
//9.What is the value of total and total2
let firstNum=5;
let secondNum=10;
firstNum++
secondNum--
let total=++firstNum + secondNum
//this total equals 17
let total2=500+100/5+total--
//this total equals 135
//10.What is logged into the console here?
const a=5
const b=10;
console.log(a>0 && b>0);
//would be 0
console.log(a==5 & b==4);
//==checks if values are equal which here a is true b is false
console.log(true||false);
//truthy and doesnt log the false
console.log(a==3||b==10);
//a is false and b is true
console.log(a==3||b==7);
//two false statements
*/