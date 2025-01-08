//Relacionar con el DOM de HTML
let input= document.getElementById("numeroEntrada");
let message= document.getElementById("mensaje");
let messageTry= document.getElementById("intentos");

//Inicializamos variables y llamamos a la función newNumber
let randomNumber;
let tries;
newNumber();

//Crear nuevo número aleatorio
function newNumber() {
    randomNumber=Math.round(Math.random()*100);
    tries=8;
    message.innerHTML="Se ha generado un nuevo número aleatorio, ¡Adivínalo!";
    messageTry.innerHTML="Tienes 8 intentos";
}

//Comprobar número y mostrar mensaje
function check() {
    
    //Pasar el valor del input a una variable
    let inputNumber = input.value;
    
    //Comprobar si el número es mayor, menor o igual
    if (tries>0) {
        if (inputNumber<1 || inputNumber>100 || isNaN(inputNumber)) {
            message.innerHTML="El número debe estar entre 0 y 100";
        } else if (inputNumber==randomNumber) {
            message.innerHTML="¡Has acertado!";
        } else if (inputNumber>randomNumber) {
            message.innerHTML="El número es menor";
            tries --;
        } else if (inputNumber<randomNumber) {
            message.innerHTML="El número es mayor";
            tries --;
        }
        messageTry.innerHTML="Te quedan " + tries + " intentos";
    } else {
        message.innerHTML = "¡Has perdido! no te quedan intentos";
    }
}



