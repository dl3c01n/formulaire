// On reprend les champs input text
const inputUsername = document.querySelector('#username');
const inputMail = document.querySelector('#mail');
const inputPassword = document.querySelector('#password');
const inputPasswordConf = document.querySelector('#passwordConf');

// On reprend l'input submit
const submit = document.querySelector('#submit');

// On reprend les messages d'erreurs
const usernameErr = document.querySelector('#usernameErr');
const mailErr = document.querySelector('#mailErr');
const passwordErr = document.querySelector('#passwordErr');
const passwordConfErr = document.querySelector('#passwordConfErr');

// Variables si les différents input sont individuellements valides
let userValid = false;
let mailValid = false;
let passwordValid = false;
let passwordConfValid = false;


// Fonction checkFields qui vérifie les champs
const checkFields = () => {
    // Si le pseudo est vide, je mets en rouge l'input et j'affiche le message sinon c'est bon et je mets en vert et un nouveau message
    if(inputUsername.value === ""){
        usernameErr.textContent = "Le pseudo n'est pas valide";
        usernameErr.style.color = "red";
        inputUsername.style.border = "1px solid red";
        userValid = false;
    }else{
        usernameErr.textContent = "C'est parfait !";
        usernameErr.style.color = "green";
        inputUsername.style.border = "1px solid green";
        userValid = true;
    }
    
    //Test regex mail, couleur et texte
    if(/(^\w.*@\w+\.\w)/.test(inputMail.value)){
        mailErr.textContent = "C'est parfait !";
        mailErr.style.color = "green";
        inputMail.style.border = "1px solid green";
        mailValid = true;
    }else{
        mailErr.textContent = "Le mail n'est pas valide";
        mailErr.style.color = "red";
        inputMail.style.border = "1px solid red";
        mailValid = false;
    }

    if(inputPassword.value === ""){
        passwordErr.textContent = "Le mot de passe n'est pas valide";
        passwordErr.style.color = "red";
        inputPassword.style.border = "1px solid red";
        passwordValid = false;
    }else{
        passwordErr.textContent = "C'est parfait !";
        passwordErr.style.color = "green";
        inputPassword.style.border = "1px solid green";
        passwordValid = true;
    }

    if(inputPasswordConf.value != inputPassword.value){
        passwordConfErr.textContent = "Le mot de passe ne correspond pas";
        passwordConfErr.style.color = "red";
        inputPasswordConf.style.border = "1px solid red";
        passwordConfValid = false;
    }else{
        if(inputPassword.value === ""){
        inputPasswordConf.style.border = "1px solid red";
        passwordConfErr.style.color = "red";
        }else{
            passwordConfErr.textContent = "C'est parfait !";
            inputPasswordConf.style.border = "1px solid green";
            passwordConfErr.style.color = "green";
            passwordConfValid = true;
        }
    }
    
    // Je vérifie si les champs sont tous valides, si oui, j'active le boutton, sinon, il est disabled
    if(userValid === true && mailValid === true && passwordValid === true && passwordConfValid === true){
        submit.disabled = false;
    }else{
        submit.disabled = true;
    }
    
}

// On ajoute le keyup au chargement de la page
window.addEventListener('keyup', checkFields);