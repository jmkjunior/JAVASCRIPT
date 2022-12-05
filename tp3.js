//exo1
/*
function Bonjour ()

   {
    alert(' Hello World !') // des instructions ici
   }

   Bonjour();
*/
//exo2
/*
function utilisateur()
   {
     let Nom = 'kuyo';

     let Reponse_Nom = prompt("Saisissez votre nom");

     //let Prenom = 'junior';

     //let Reponse_Prenom = prompt("Saisissez votre prénom");

     //let reponse_Nom = confirm(Nom);
     //let reponse_Prenom = confirm(Prenom);

     if(Reponse_Nom = Nom)
        {
        alert("Bonjour junior");
        }
        else
        {
        alert("T'es qui toi ???");
        }
   }
   utilisateur();
*/
   //exo3

   function Calculateur_IMC()
   {
     

     let Poids = prompt("Saisissez votre poids");
     let Taille = prompt("Saisissez votre taille");
     let  imc = Poids  / (Taille*Taille)

     alert ('Votre IMC est de '+Math.round(imc))
     
   }
   Calculateur_IMC();