console.log("Hello");

// age est un number// 
let age;
age = 15;
age = prompt("tappez votre age");
if(age <= 0){
    console.log("vous êtes un poisson panné");

}else if(age <= 120){
    console.log("Votre âge est validé");
}else if(age <= 0){
    console.log("Je ne suis pas d'accord");
}else if(age >= 21){
    console.log("VOUS ÊTES MAJEUR");
}else if(age >= 18){
    console.log("VOUS ÊTES MAJEUR MAIS PAS AUX USA");
}



// prenom est un string //
const prenom = "Maxime" ;

let addition = 4+12;
console.log(addition);

let soustraction = 2-50;
console.log(soustraction);

let multiplication = 3*8; 
console.log(multiplication);

let division = 7/2; 
console.log(division);

let modulo = 5%2;
console.log(modulo);;

//test est booleenne//
let test = 3>5;
console.log(typeof(test));

const identity = "Bonjour" + " " + "Maxime" + " " + "vous avez" + " " + "15" + " " + "ans"
let majuscule = identity.toUpperCase();
// bonjour +  + prenom +  + vous avez +  + 15 +  + ans  //
console.log(identity);
console.log(majuscule);
// majuscule pour mettre identity en maj//




function direbonjour() {
    console.log("bonjour");
}
direbonjour();

function direBonjourAkelkain(name) {
    console.log("Bonjour " + name);
}
direBonjourAkelkain("Maxime")

function hello(name, city) {
    console.log("Bonjour" + " " + name + " " + "Vous habitez" + " " + "à" + " " + city)
}
hello("maxime", "Lyon");

function add(a, b) {
    console.log(a + b)
}
add(2, 5)

function div(a, b) {
    console.log(a / b)
}
div(5, 6)

function positive(num) {
return num > 0
}
positive(5);
vdh