/*------controle de saisie formulaire à gauche de la page sign in-------------*/
function verif1()
{
var email=document.getElementById('email-signup').value;
var password=document.getElementById('pass-signup').value;
var password2=document.getElementById('confirm-pass').value;

var error1=document.getElementById('email');
var error2=document.getElementById('pass');
var error3=document.getElementById('pass2');

var mail=/^([a-z\d\.-]+)@([a-z\d-]+)\.([a-z]{2,3})$/;
var mdp=/(?=.{8,})/;

    if(email== "") {
        error1.innerHTML = '<p style="color:red">Veuillez entrer votre Email!</p>';
     }
     else if(!email.match(mail)){
        error1.innerHTML = '<p style="color:red">Veuillez entrer un Email valid!!</p>';
     }
     else{
        error1.innerHTML = "";
    }

    if(password== "") {
        error2.innerHTML = '<p style="color:red">Veuillez entrer votre Mot de passe!</p>';
     }
     else if(!password.match(mdp)){
        error2.innerHTML = '<p style="color:red">Veuillez entrer un Mot de passe valid!</p>';
     }
     else{
        error2.innerHTML = "";
    }

    if(password2== "") {
        error3.innerHTML = '<p style="color:red">Veuillez entrer votre Mot de passe!</p>';
     }
     else if(password2!=password){
        error3.innerHTML = '<p style="color:red">Mot de passe incorrect</p>';
     }
     else{
        error3.innerHTML = "";
    }
}
/*------controle de saisie formulaire connexion  de la page sign in-------------*/
function verif2()
{
var email2=document.getElementById('email-signin').value;
var password3=document.getElementById('pass-signin').value;

var error4=document.getElementById('email2');
var error5=document.getElementById('pass3');

var mail=/^([a-z\d\.-]+)@([a-z\d-]+)\.([a-z]{2,3})$/;
var mdp=/(?=.{8,})/;

    if(email2== "") {
        error4.innerHTML = '<p style="color:red">Veuillez entrer votre Email!</p>';
     }
     else if(!email2.match(mail)){
        error4.innerHTML = '<p style="color:red">Veuillez entrer un Email valid!!</p>';
     }
     else{
        error4.innerHTML = "";
    }

    if(password3== "") {
        error5.innerHTML = '<p style="color:red">Veuillez entrer votre Mot de passe!</p>';
     }
     else if(!password3.match(mdp)){
        error5.innerHTML = '<p style="color:red">Veuillez entrer un Mot de passe valid!</p>';
     }
     else{
        error5.innerHTML = "";
    }
}
/*------controle de saisie de la page contact-------------*/
function test(){
  var mail=/^([a-z\d\.-]+)@([a-z\d-]+)\.([a-z]{2,3})$/;
  var letters=/^[A-Za-z]+$/;

 var nom=document.getElementById('inputName').value;
 var email=document.getElementById('inputEmail').value;
 var num=document.getElementById('inputnumber').value;
 var sub=document.getElementById('inputSubject').value;
 var comment=document.getElementById('inputcomment').value;
 
 var errorN=document.getElementById('nom');
 var errorE=document.getElementById('email-c');
 var errornb=document.getElementById('number');
 var errors=document.getElementById('subject');
 var errorc=document.getElementById('comment');

 if (nom == "") {
    errorN.innerHTML = '<p style="color:red">Veuillez entrer votre nom!</p>';
   }
    else if (!(nom.match(letters) && nom.charAt(0).match(/^[A-Z]+$/))) {
        errorN.innerHTML = '<p style="color:red">Veuillez entrer un nom valid!</p>';
    } 
    else {
        errorN.innerHTML = "";}

  if(email== "") {
    errorE.innerHTML = '<p style="color:red">Veuillez entrer votre Email!</p>';
    }
    else if(!email.match(mail)){
      errorE.innerHTML = '<p style="color:red">Veuillez entrer un Email valid!!</p>';
      }
    else{
     errorE.innerHTML = "";
    }

    if(num== "") {
        errornb.innerHTML = '<p style="color:red">Veuillez entrer votre Numero!</p>';
        }
        else if(!num.match(/^\d{8}$/)){
          errornb.innerHTML = '<p style="color:red">Veuillez entrer un Numero valid!!</p>';
          }
        else{
         errornb.innerHTML = "";
        }

  if(sub== "") {
    errors.innerHTML = '<p style="color:red">Veuillez entrer votre Subject!</p>';
    }
    else{
     errors.innerHTML = "";
    }

    if(comment== "") {
        errorc.innerHTML = '<p style="color:red">Veuillez ajouter votre Commentaire!</p>';
        }
        else{
         errorc.innerHTML = "";
        }
}