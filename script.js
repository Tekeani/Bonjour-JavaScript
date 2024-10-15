function sayHello(prenom){
//let prenom = "Marie"
let message = `Bonjour ${prenom}`
//console.log(message)
document.querySelector('h1').innerText = message;
}

let résultat = prompt("Quel est ton prénom ?");


//let firstName = "Damien"
sayHello(résultat)
//sayHello(firstName)