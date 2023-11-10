// let age = 17;
// let name = "Ryan";

// console.log(age);
// console.log(name);

// age = prompt("What is your age: ")
// name = prompt("What is your name: ")

// console.log(age);
// console.log(name);

// alert("This is an alert!");

// const NameP = document.getElementById("name");
// const AgeP = document.getElementById("age");
// console.log(NameP);
// console.log(AgeP);
// NameP.innerText = name;
// AgeP.innerText = age;
// NameP.style.color = "red";
// NameP.style.

let place = prompt("Enter a place: ");
let placeSpan = document.getElementById("place");
placeSpan.innerText = place;

let adjective = prompt("Enter an adjective: ");
let adjectiveSpan = document.getElementById("adjective");
adjectiveSpan.innerText = adjective;

let animal = prompt("Enter an animal: ");
let animal1Span = document.getElementsByClassName("animal")[0];
animal1Span.innerText = animal;
let animal2Span = document.getElementsByClassName("animal")[1];
animal2Span.innerText = animal;
let animal3Span = document.getElementsByClassName("animal")[2];
animal3Span.innerText = animal;

let verb = prompt("Enter a verb: ");
let verbSpan = document.getElementById("verb");
verbSpan.innerText = verb;

let diffAnimal = prompt("Enter another animal: ");
let diffAnimalSpan = document.getElementById("diffAnimal");
diffAnimalSpan.innerText = diffAnimal;

let pastverb = prompt("Enter a past tense verb: ");
let pastVerbSpan = document.getElementById("pastverb");
pastVerbSpan.innerText = pastverb;

let place2 = prompt("Enter another place: ");
let place2Span = document.getElementById("place2");
place2Span.innerText = place2;
