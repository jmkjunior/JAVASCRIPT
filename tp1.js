//exo1

var Nombre = 120;
let Chaine = 'snir';
let x = Boolean(false);
const y = 100;

console.log(Nombre === 120);
console.log(Chaine === 'snir');
console.log(x === true);
console.log(y === 100);

//exo2

let Salutation = 'Bonjour';
let Personne = 'Monsieur';
let Phrase = Salutation + Personne;

console.log( Phrase);

//exo3

console.log(typeof(0));
console.log(typeof(true));
console.log(typeof('hello'));
console.log(typeof('bonjour' + 4));
console.log(typeof({a : 0.4}));
console.log(typeof(['a','b','c']));

//exo4

let a = 1;
let b = 2;
let c = a+b;
console.log(c)
console.log(typeof c)

//exo5

let variableLet = "globale";
var variableVar = "globale";
if(true) 
{
 let variableLet = "locale";
 var variableVar = "locale";
 console.log("let : " + variableLet);
 console.log("var : " + variableVar);
}
console.log("let : " + variableLet);
console.log("var : " + variableVar);
