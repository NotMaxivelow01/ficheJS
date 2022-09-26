console.log("Hello");

// age est un number// 
let age;
age = 15;
age = prompt("tappez votre age");
if(age = 0){
    console.log("vous êtes un poisson panné");
}

if(age <= 120){
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
let test = 3 > 5;
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


age = parseInt(age);
let verifier_nombre = isNaN(age);
console.log(age);
console.log(verifier_nombre);


function isValid(userInput){
    let input = parseInt(userInput);
    if (isNaN(input)) {
        console.log("faux");
        return input;
}else if (userInput>12 && userInput<90) {
    console.log("vrais");
    return input;
}
}
isValid("152");


let resultat = isValid(age);
    console.log(resultat)
let resultatinverse = !resultat;
    console.log(resultatinverse);

console.log(0);
console.log(1);
console.log(2);
console.log(3);
console.log(4);


let Index = 0;
while (Index <= 4) {
    console.log(Index)
    Index ++
}


let chiffres = 0;
while (chiffres <= 100) {
    console.log(chiffres);
    chiffres += 3;
}


let chiffre = 0;
while (chiffre <= 99) {
    console.log(chiffre);
    chiffre ++;
}


// faux car key ne peux pas être plus grand que 100 
let key = 0;
while(key > 100){
   console.log(key);
   key++;
}


let id = 0;
do {
   console.log(id);
   id++;
} while(id > 100);


let ages = [14,14,14,15,15,15,16,16,16,16,16,17];
console.log(ages);