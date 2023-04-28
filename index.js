// console.log("I like pizza");
// console.log("It's really good!");

// window.alert("I Really love pizza");
//This is comment
/*
 this is 
 multi line comment
*/

// Declaration of varaiable 
/* Two step 
1. Declearation(var, let, const)
2. Assignment (=assignment operator)
*/
// let age;
// age = "23";
// console.log(age);

// let firstname = "MY NAME IS KUNAL";
// console.log(firstname);

// let student = true;
// console.log(student);

//concatination of string
// let age = "21";
//  age+=1;
//  console.log(age);


//if we want to change in inner HTML then we use
// document.getElementById("p1").innerHTML = "Hello" + age ; 
/*
arithmatic expression is a combination of....
operands(values, variable, etc.)
operators (+ - * /)
that can be evaluated to a value 
ex y = x+5;
*/

// let students = 20;

// students= students + 1;
// console.log(students);
// students=students%2;
// console.log(students);
// students+=2;
// console.log(students);

/*
operator precedence
1.paranthesis ()
2.exponents
3.multiplication & division
4.addition & subtraction
*/
// let result = 1 + 2*(3 + 4);
// console.log(result);

/* 
How to take input in javascript
1.Easy way
*/
// let username = window.prompt("what's your name?");
// console.log(username);
/*
2.hard way
*/


// let username;
// document.getElementById("mybutton").onclick = function(){
//      username = document.getElementById("mytext").value;
//      console.log(username);
// }

// Type Conversion = change the datatype of a value to another
//                     (string, numbers, booleans)

// let age = window.prompt("How old are you?");
// age = Number(age);
// age+=1;
// console.log("Happy Birthay! You are", age, "Year old")

// let x;
// let y;
// let z;

// x = Number("3.14");
// y = String(3.14);
// z = Boolean("pizza")
// console.log(x, typeof x);
// console.log(y, typeof y);
// console.log(z, typeof z);


// const = a variable that can't ba changed

// const pi = 3.14159;
// let radius;
// let circumference;

// radius = window.prompt("Enter the radius of a circle");
// radius = Number(radius);

// //pi = 420;
// // someone change above pi
// circumference = 2 * pi * radius;

// console.log("The circumference is:", circumference);

// let x=3.14;
/*
x = Math.round(x);
x = Math.floor(x);
x = Math.ceil(x);
x = Math.pow(x);
x = Math.sqrt(x);
x = Math.abs(x);
maximum = Math.max(x, y, z);
minimum = Math.min(z, y, z);
*/
//  z = Math.PI;

//  console.log(x);

// let a,b,c;

// a=window.prompt("Enter side A");
// a=Number(a);

// b=window.prompt("Enter side B");
// b=Number(b);

// c = Math.pow(a, 2) + Math.pow(b,2);
// c= Math.sqrt(c);
// console.log("side of c", c);


// program to find the hypotenous of triangle 
// document.getElementById("R").onclick = function(){
//     a = document.getElementById("P").value;
//     a = Number(a);

//     b = document.getElementById("Q").value;
//     b = Number(b);
     
//     c = Math.pow(a, 2) + Math.pow(b,2);
//     c= Math.sqrt(c);
//     document.getElementById("S").innerHTML = + c;
// }

// let count=0;

// document.getElementById("Q").onclick = function(){
//      count +=1;
//      document.getElementById("P").innerHTML = count;
// }

// document.getElementById("R").onclick = function(){
//     count =0;
//     document.getElementById("P").innerHTML = count; 
// }

// document.getElementById("S").onclick = function(){
//     count -=1;
//     document.getElementById("P").innerHTML = count; 
// }

// let x=Math.random()*6;
// console.log(x);

// let x,y,z;

// document.getElementById("S").onclick = function(){
     
//     x=Math.floor(Math.random()*6)+1;
//     y=Math.floor(Math.random()*6)+1;
//     z=Math.floor(Math.random()*6)+1;

//     document.getElementById("P").innerHTML = x;
//     document.getElementById("Q").innerHTML = y;
//     document.getElementById("R").innerHTML = z;
// }


//useful string properties & methods

// let username = "XYZ";

// console.log(username.length);
// console.log(username.charAt(0));
// console.log(username.indexOf("Z"));

// username = username.toLowerCase();
// console.log(username);

// let phoneNumber = "123-456-7890";
// phoneNumber = phoneNumber.replaceAll("-","/");
// console.log(phoneNumber);

//slice() extracts a section of a string
// and return it as a new string
// without modifiyng the original string

// let fullName = "Bro Code";
// let firstName;
// let lastName;

// firstName = fullName.slice(0,3);
// lastName = fullName.slice(4);
// console.log(firstName);
// console.log(lastName);


// method chaining = calling one method after another
//                   in one continuous line of code

// let username = "kunal";

// let letter = username.charAt(0).toUpperCase();
// console.log(letter);

// if statement = a basic form of decision making
//                if a condition is true, then do something
//                if not, don't do it!

// let age = 21;
// if(age>=18){
//     console.log("You are an adult!");
// }
// else{
//     console.log("You are a child!");
// }

// let age;

// document.getElementById("R").onclick = function(){
//     age = document.getElementById("Q").value;
//     age =  Number(age);
//     if(age>=18 && age<=65){
//         document.getElementById("S").innerHTML = "You are adult!";
//     }
//     else if(age >65){
//         document.getElementById("S").innerHTML = "You are Senior Citizens!";
//     }
//     else if(age<0){
//         document.getElementById("S").innerHTML = "You are born Yet!";
//     }
//     else{
//         document.getElementById("S").innerHTML = "You are child!";
//     }
// }

// document.getElementById("mybutton").onclick = function(){
//      let myCheckBox=document.getElementById("P");
//      if(myCheckBox.checked==true){
//         document.getElementById("S").innerHTML = "You are subscribe!";
//      }
//      else{
//         document.getElementById("S").innerHTML = "You are not subscribe!";
//      }
// }

// switch = statement that examines a value
//          for a match against many case clause.
//          More efficient that many "else if" statements

//let grade = "A";

// if(grade == "A"){
//     console.log("You did great!");
// }
// else if(grade == "B"){
//     console.log("You did good!");
// }
// else if(grade == "C"){
//     console.log("You did okay!");
// }
// else if(grade == "D"){
//     console.log("You passed....barely!");
// }
// else if(grade == "F"){
//     console.log("You FAILED!");
// }
// else{
//     console.log(grade, "is not a letter grade!");
// }

// Insted of using more if else statement we use switch statement

// switch(grade){
//     case "A":
//         console.log("You did great!");
//         break;
//     case "B":
//         console.log("You did good!");
//         break;
//     case "C":
//         console.log("You did okey!");
//         break;
//     case "D":
//         console.log("You passed....barely!");
//         break;
//     case "F":
//         console.log("You Failed!");
//         break;
//     default:
//         console.log(grade, "is not a letter grade!");
// }

// gives us the ability to check more than 1 condition concurrently
// && AND (BOTH condition must be true)
// || OR (EITHER condition can be true)

// let temp =15;

// if(temp>0 && temp <30){
//     console.log("The weather is good!");
// }
// else{
//     console.log("The weather is bad!");
// }

/* while loop = repeat some code
                while some condition is true
                potentially infinite
*/
// let username="";
// while(username=="" || username==null){
//     username=window.prompt("Enter your name");
// }
// console.log("Hello", username);

/* foe loop = repeat some code a
              certain amount of times
*/

// let x;
// document.getElementById("Q").onclick = function(){
//     x = document.getElementById("P").value;
//     for(let counter =1; counter<= 10; counter++){
//         document.getElementById("S").innerHTML += x + " " + "x" + " " + counter + "=";
//         document.getElementById("S").innerHTML += x*counter;
//         document.getElementById("S").innerHTML += "<br>";
//     }
// }
// document.getElementById("T").onclick = function(){
//      document.getElementById("S").innerHTML =" ";    
// }
// break = breaks out of a loop entirely
// continue = skip an iteration of a loop

//function = Define code once, and use it many times.
//           To perform some code, call the function name.

// startProgram();
//  function startProgram(){
//     let userName = "Bro";
//     let age = 21;

//      happyBirthday(userName, age);
//  }
// function happyBirthday(userName, age){
//     console.log("Happy birthday to you!");
//     console.log("Happy birthday to you!");
//     console.log("Happy birthday dear__");
//     console.log("Happy birthday to you!");
//     console.log("You are", age, "years old!");
// }

// return = returns a value back to place 
//          where you invoked a function

// let area;
// let width;
// let height;

// width = window.prompt("Enter width");
// height = window.prompt("Enter height");

// area = getArea(width, height);

// console.log("The area is:", area);

// function getArea(width, height){
//     return width*height;
// }

/*  ternary operator = Shortcut for an 'if/else ststement'
                    Takes 3 operands

                    1. a condition with ?
                    2. expression if True
                    3. expression if False

condition ? exprIfTrue : exprlfFalse
*/

// let adult = checkAge(21);
// console.log(adult);
// function checkAge(age){
//     // if(age >= 18){
//     //     return true;
//     // }
//     // else{
//     //     return false;
//     // }
//       return age>=18 ? true : false;
// }

// checkWinner(true);

// function checkWinner(win){
//     win ? console.log('You Win!') : console.log('You lose!');
// }

// variable scope = where a variable is accessible

// let = variable are limited to block scope {}
// var = variable are limited to a function(){}

// global variable = is declared outside any function 
// (if global, var will Change browser's window properties)// 

// so it is best practice to use let key word
// let name = "Kunal"


// Template literals = delimited with (`)
//                     instead of double or single quotes
//                     allows embedded variables and expression

// let username = "Kunal";
// let items = 3;
// let total = 75;

// console.log("Hello", userName);
// console.log("You have", items, "items in your cart");
// console.log("your total is $", total);

//console.log(`Hello9 ${userName}`);
//console.log(`You have ${items} items in your cart`);
//console.log(`Your total is $${total}`);

// let text =
// 'Hello ${username}<br>
// You have ${items} items in your cart<br>
// Your total is $${total}<br>';

//to localstring() = returns a string with a language
//                     sensitive representation of this

// 'local = specify that language (undefined = defult)
// 'options' = object with formatting options

// let mynum = 123456.789;

// mynum = mynum.toLocaleString("en-US"); // US English
//mynum = mynum.toLocaleString("hi-IN"); // HINDI
//mynum = mynum.toLocaleString("de-DE"); // standard German

// mynum = mynum.toLocaleString("hi-IN", {style: "currency", currency: "INR"}); 
// mynum = mynum.toLocaleString("en-US", {style: "currency", currency: "USD"}); 
// mynum = mynum.toLocaleString(undefined, {style: "percent"}); 
// mynum = mynum.toLocaleString(undefined, {style: "unit", unit: "kilometer"});

// console.log(mynum);

// document.getElementById("S").onclick = function(){
//       let x,y,z;
//       let myCheckBox=document.getElementById("Q");
//       let myCheckBox2=document.getElementById("R");
//       if(myCheckBox.checked){
//         x=document.getElementById("P").value;
//         x= Number(x);
//         y=(x-32)*(5/9);
//         document.getElementById("K").innerHTML=y + "°C";
//       }    
//       else if(myCheckBox2.checked){
//         x=document.getElementById("P").value;
//         x= Number(x);
//         z=(x)*(9/5)+32;
//         document.getElementById("K").innerHTML=z + "°F";
//       }
//       else{
//         document.getElementById("K").innerHTML="Select a unit";
//       }    
// }
// document.getElementById("V").onclick = function(){
//     document.getElementById("K").innerHTML = " "; 
// }

// let x;
// document.getElementById("Q").onclick = function(){
//     x=document.getElementById("P").value;
//     let y=1;
//     for(let i=1; i<=x; i++){
//         y*=i;
//     }
//     document.getElementById("S").innerHTML = y;
// }
// document.getElementById("R").onclick = function(){
//     document.getElementById("S").innerHTML = " "; 
// }

// array = think of it as a variable 
//         that can store multiple values

// let fruits = ["apple", "orange", "banana"];
// fruits.push("lemon");
// fruits.pop();
// fruits.unshift("mango");//add element to beginning
// fruits.shift();//remove element from beginning

// let length = fruits.length;
// let index = fruits.indexOf("orange");
// console.log(index);

// let prices = [5, 10, 15, 20];

// for(let i=0; i<prices.length; i++){
//     console.log(prices[i]);
// }

// for(let i of prices){
//     console.log(i);
// }

// let fruits = ["apple", "orange", "banana", "mango"];

// fruits = fruits.sort();

// for(let i of fruits){
//     console.log(i);
// }

// 2D array = An array of arrays

// let fruits = ["apple", "orange", "banana"];
// let vegetables = ["carrots", "onions", "potatoes"];
// let meats = ["eggs", "chicken", "fish"];
 
// let groceryList = [fruits, vegetables, meats];

// groceryList[2][2] = "steak";

//  for(let list of groceryList){
//     for(let food of list){
//         console.log(food);
//     }
//  }

// spread operator = allows an iteraable such as an
// ...               array or string to be expanded
//                   in places where zero or more
//                   arguments are expacted
//                   (unpacks the elements);

// let numbers = [1, 2, 3, 4, 5, 6, 7];
// console.log(...numbers);
// uses

// let maximum = Math.max(...numbers);
// console.log(maximum);

// rest parameters = represents an indefinite number
//...                of parameters
//                   (packs arguments into an array);

// let a=1;
// let b=2;
// let c=3;
// let d=4;
// let e=5;

// console.log(sum(a,b,c,d));

// function sum(...numbers){
//     let total = 0;
//     for(let i of numbers){
//         total+=i;
//     }
//     return total;
// }

// callback = a function passed as an argument
//            to another function

// let total = sum(2,3);
// displayDOM(total);

// function sum(x,y){
//     return x+y;
// }

// function displayDOM(output){
//     console.log(output);
// }
/*  Ensures that a function is not going
    to run before a task is completed.
    Helps us develop asynchronous code.
    (When one function has to wait for another function)
    that helps us avoid errors and potential problems
    Ex. wait foe file to load
*/

// sum(8, 9, displayDOM);

// function sum(x, y, callback){
//     let result = x + y;
//     callback(result);
// }

// function displayDOM(output){
//     console.log(output);
// }

//array.forEach() = executes a provided callback function
//                  once for each array element

// let students = ["sopngebob", "patrick", "squidward"];
// students.forEach(capitalize);
// students.forEach(print);

// function capitalize(element, index, array){
//     array[index] = element[0].toUpperCase()+element.substring(1);
// }

// function print(element){
//     console.log(element);
// }

// array.map = executes a provided callback function
//             once for each array element
//             AND creates a new array

// let numbers = [1, 2, 3, 4, 5];
// let squares = numbers.map(square);

// squares.forEach(print);

// function square(element){
//     return Math.pow(element, 2);
// }

// function print(element){
//     console.log(element);
// }

//array.filter() = creates a new array with all elements
//                 that pass the test provided by a function

// let ages = [18, 16, 21, 17, 8, 90];
// let adults = ages.filter(checkAge);

// adults.forEach(print);

// function checkAge(element){
//     return element >= 18;
// }

// function print(element){
//     console.log(element);
// }

// array.reduce() = reduces an array to a single value

// let prices = [5, 10, 15, 20, 25, 30];
// let total = prices.reduce(checkout);

// console.log(total);

// function checkout(total, element){
//     return total + element;
// }

// sort the array element using callback 

// let grades = [100, 50, 90, 80, 70];

// grades = grades.sort(ascendingSort);

// grades.forEach(print);

// function descendingSort(x,y){
//      return y - x;
// }

// function ascendingSort(x,y){
//     return x-y;
// }

// function print(element){
//     console.log(element);
// }

// function expression = function without a name(anonymous function)
//                       avoid polluting the global scope with names
//                       Write it, then forgot about it

// let count = 0;

// document.getElementById("Q").onclick = function(){
//     count+=1;
//     document.getElementById("P").innerHTML = count;
// }
// document.getElementById("R").onclick = function(){
//     count-=1;
//     document.getElementById("P").innerHTML = count;
// }

// arrow function = compact alternative to a traditional function
//                 =>

// const percent = function(x,y){
//     return x/y * 100;
// }

// const percent = (x, y) => x/y * 100;

// console.log(`${percent(40, 50)}`);

// let grades = [100, 50, 90, 60, 80, 70];

// grades.sort((x,y) => y-x);
// grades.forEach((element) => console.log(element));


// let x;
// let total;
// var myinputarr = [];
// var size = 5; // Array size
 
// for(var a=0; a<size; a++) 
// {
     
     
//     myinputarr[a] = prompt('Enter array Element ' + (a+1));
// }
 
// //user eneter array
// console.log(myinputarr);

// function shuffle(array){
//     let currentIndex = array.length;

//     while(currentIndex !=0){
//         let randomIndex = Math.floor(Math.random()*array.length);
//         currentIndex--;

//         let temp = array[currentIndex];
//         array[currentIndex] = array[randomIndex];
//         array[randomIndex] = temp;
//     }
//     return array;
// }

// let cards = [1,2,3,4,5,6,7];

// shuffle(cards);

// // console.log(cards);
// cards.forEach(print);
// function print(i){
//     console.log(i);
// }

// nested function = Function inside other functions.
                    //  Outer function have access to inner function
                    //  Inner function are "hidden" from outside
                    //  used in closures (future video topic)
 
// let userName = "Bro";
// let userInbox = 0;

// login();

// function login(){
//     displayUserName();
//     displayUserInbox();

//     function displayUserName(){
//         console.log(`Welcome ${userName}`);
//     }
//     function displayUserInbox(){
//         console.log(`You have ${userInbox} new message`);
//     }
// }

// Map = object that hold key-value pairs of any data type

// const store = new Map([
//     ["t-shirt", 20],
//     ["jeans", 30],
//     ["socks", 10],
//     ["underwear", 50]
// ]);

// // let shoppingCart = 0;

// // shoppingCart += store.get("t-shirt");
// // shoppingCart += store.get("underwear");
// // console.log(shoppingCart);

// // store.get("t-shirt");
// // store.set("hat", 40);
// // store.delete("hat");
// // console.log(store.has("underwear"));
// // console.log(store.size());
// store.forEach((value, key) => console.log(`${key} $${value}`));

// object = A group of properties and methods
//          properties = what an object has
//          methods = what an object can do
//          use . to access properties/methods

// const car = {
//     model:"Mustang",
//     color:"red",
//     year:2023,

//     drive : function(){
//         console.log("You drive the car");
//     },
//     brake : function(){
//         console.log("You step on the brakes");
//     }
// }

// console.log(car.model);
// console.log(car.color);
// console.log(car.year);

// car.drive();
// car.brake();

// this = reference to a particular object
//        the object depends on the immediate context

// const car1 = {
//     model:"Mustang",
//     color:"red",
//     year:2023,

//     drive : function(){
//         console.log(`You drive the car ${this.model}`);
//     }
// }

// const car2 = {
//     model:"Mustang",
//     color:"red",
//     year:2023,

//     drive : function(){
//         console.log(`You drive the car ${this.model}`);
//     }
// }

// car1.drive();
// car2.drive();

//class = a blueprint for creating objects
//        define what properties and methods they have
//        use a constructor for unique properties

// class Player{
//     score = 0;

//     pause(){
//         console.log("You paused the game");
//     }
//     exit(){
//         console.log("You exited the game");
//     }
// }

// const player1 = new Player();
// const player2 = new Player();
// const player3 = new Player();
// const player4 = new Player();
// player1.score+=6;
// console.log(player1.score);


// constructor = a special method of a class,
//               accepts arguments and assigns properties

// class Student{
//     constructor(name, age, gpa){
//         this.name = name;
//         this.age = age;
//         this.gpa = gpa;
//     }
//     study(){
//         console.log(`${this.name} is studying`);
//     }
// }

// const student1 = new Student("Kunal", 21, 8.5);
// const student2 = new Student("Aniket", 21, 8.5);


// console.log(student1.name);
// console.log(student1.age);
// console.log(student1.gpa);


// console.log(student2.name);
// console.log(student2.age);
// console.log(student2.gpa);


// static = belongs to the class, not the objects
//          properties: useful for caches, fixed-configuration
//          methods:    useful for utility functions

// class Car{
//     static numberofCars =0;

//     constructor(model){
//         this.model = model;
//         Car.numberofCars += 1;
//     }

//     static startRace(){
//         console.log("3...2....1....GO!");
//     }
// }

// const car1 = new Car("Lambo");
// const car2 = new Car("Lambo");
// const car3 = new Car("Lambo");
// console.log(Car.numberofCars);

// Car.startRace();

// document.getElementById("P").onclick = function(){
//     document.getElementById("K").style.backgroundColor='Green';
//     let arr = ["Blue", "Pink", "Red", "Green", "yellow", "Black", "Purple", "Coral", "Mint", "Mustard", "Pulm", "Gray", "Ruby", "Clay", "Magenta", "Bronze", "Lime", "Gainsboro", "Orange-red"];
//     let x=Math.floor(Math.random()*(arr.length));
//     // document.getElementById("R").innerHTML =x;
//     document.getElementById("K").style.backgroundColor=arr[x];

// }
// document.getElementById

// inheritance = a child class can inherit all the 
//                method and properties from another class

// class Animal{
//     alive = true;

//     eat(){
//         console.log(`This ${this.name} is eating`);
//     }
//     sleep(){
//         console.log(`This ${this.name} is sleeping`)
//     }
// }

// class Rabbit extends Animal{
     
//     name = "rabbit";

//     run(){
//         console.log(`This ${this.name} is running`);
//     }
// }
// class Fish extends Animal{
     
//     name = "rabbit";

//     swim(){
//         console.log(`This ${this.name} is swimming`);
//     }
// }
// class Hawk extends Animal{
     
//     name = "hawk";

//     fly(){
//         console.log(`This ${this.name} is flying`);
//     }
// }

// const rabbit = new Rabbit();
// const fish = new Fish();
// const huwk = new Hawk();

// console.log(rabbit.alive);
// rabbit.eat();
// rabbit.sleep();
// rabbit.run();

// super = Refers to the parent class.
//         Commonly used to invoke constructor of a parent class

// class Animal{
//     constructor(name, age){
//         this.name = name;
//         this.age = age;
//     }
// }

// class Rabbit extends Animal{

//     constructor(name, age, runSpeed){
//          super(name, age);
//          this.runSpeed = runSpeed;
//     }
// }

// const rabbit = new Rabbit("rabbit", 1, 40);

// console.log(rabbit.name);
// console.log(rabbit.age);
// console.log(rabbit.runSpeed);

// get = binds an object property to a function 
//       when that property is accsssed
// set = binds an object property to a function
//       when that property is assigned a value


// class Car{
//     constructor(power){
//         this._gas = 25;
//         this._power = power;
//     }
//     get power(){
//         return `${this._power}hp`;
//     }
//     get gas(){
//         return `${this._gas}L (${this._gas / 50 * 100}%)`
//     }
//     set gas(value){
//         if(value > 50){
//             value = 50;
//         }
//         else if(value<0){
//             value = 0;
//         }
//         this._gas = value;
//     }
// }

// let car = new Car(400);
// car.gas = 10000;
// console.log(car.power);
// console.log(car.gas);

// how to pass class as argument in Function

// class Car{

//     constructor(model, year, color){
//         this.model = model;
//         this.year = year;
//         this.color = color;
//     }
// }

// const car1 = new Car("Mustang", 2023, "red");
// const car2 = new Car("Corvette", 2024, "blue");
// const car3 = new Car("Lambo", 2022, "yellow");

// changeColor(car3, "gold");
// displayInfo(car3);

// function displayInfo(car){
//     console.log(car.model);
//     console.log(car.year);
//     console.log(car.color);
// }

// // console.log(car.model);
// function changeColor(car, color){
//     car.color = color;
// }

// anonymous objects = Object without a name 
//                     Not directly referenced
//                     Less syntex. No need for unique names

// class Card{
//     constructor(value, suit){
//         this.value = value;
//         this.suit = suit;
//     }
// }

// let cards = [new Card("A", "Hearts"),
//              new Card("A", "Spades"),
//              new Card("A", "Diamonds"),
//              new Card("A", "Clubs"),
//              new Card("2", "Hearts"),
//              new Card("2", "Spades")
//             ]
// cards.forEach(card => console.log(`${card.value} {card.suit}`));

// error = object with a description of 
//         something went wrong

// throw = executes a user-defined error

// try{
//    let x = window.prompt("Enter a #");
//    x = Number(x);
   
//    if(isNaN(x)) throw "This wasn't a number!";
//    if(x == "") throw "That was empty!";
//    console.log(`${x} is a number`);
// } 
// catch{
//     console.log(error);
// }
// finally{
//     console.log("This always ececutes");
// }

// setTimout() = invokes a function after a number of milliseconds
//               asynchronous function (doesn,t pause execution)

// setTimeout(firstMessage, 3000);
// setTimeout(secondMessage, 6000);
// setTimeout(thirdMessage, 9000);

// function firstMessage(){
//     alert(`Buy this course for $500!`);
// }
// function secondMessage(){
//     alert(`This is not a scam`);
// }
// function thirdMessage(){
//     alert(`DO ITT!`);
// }

// setInterval() = invoke a function repeatedly after a number
//                 asynchronous function (doesn't pause execution)
document.getElementById("Q").onclick = function(){
  let count = 0;
  let max=document.getElementById("P").value ; 
  let p=max;
  max = Number(max);
    if(max>=1){
  const myTimer = setInterval(countUp, 20);
  function countUp(){
    count+=1;
    document.getElementById("R").innerHTML+=count + " ";
    if(count >= max){
        clearInterval(myTimer);
    }
  }
}
else{
  document.getElementById("R").innerHTML ="Please enter value greater then 0";
}
}
document.getElementById("S").onclick = function(){
    document.getElementById("R").innerHTML = " ";
}