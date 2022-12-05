

//exo1

let temp = Math.random()*190;
console.log(temp)

if (temp < 28)
{
console.log('Il fait froid')
}
else
{
console.log('Il fait chaud')
}

//exo2

var i=0; // initialisation d'une variable i

while (i<101) // tant que et sa condition
{
 console.log(i); // affichage
 i = i+1; // incrémentation de la variable
}


for (var i=0 ; i<101 ; i++) 
{
 console.log(i); // affichage
}

//exo3



for(let i=0;i<10;i++)
{
    for(let j=0;j<10;j++)
    {
        document.write('*')
    }
    document.write('<br/>');
}

for(let i=0;i<10;i++)
{
    for(let j=0;j<i;j++)
    {
        document.write('*')
    }
    document.write('<br/>');
}

//exo4


for(let i=0;i<=9;i++)
{
    for(let j=0;j<=9;j++)
    {
       
        document.write(i+'*'+j+'='+i*j);
        document.write('<br/>');
    }
    document.write('<br/>');
}

//exo5

let x = prompt("Saisissez un nombre")

for(let i=0;i<= x ;i++)
{
    for(let j=0;j<= x ;j++)
    {
        document.write(i+'+'+j+'=');
        document.write(i+j);
        document.write('<br/>');
    }
    document.write('<br/>');
}


document.write('Exercice5');
document.write('<br/>');

let y;
function somme (y){
let sum=0;
for(let i=1;i<=y;i++){
sum = sum+i;
}
return (sum);
}

let sum = somme(3);
document.write(sum);

document.write('Exercice6');
document.write('<br/>');

let nb = prompt("Saisissez un nombre");
let a = Math.round(Math.random()*100);

while(nb%a != 0)
{
    a = Math.round(Math.random()*100);
    console.log(a);
}
console.log(a+"est multiple de"+nb)
