function sayHello(prenom, hour){
    let result;
      if (hour < 18) {
       result = `Bonjour ${prenom}`;
      } else {
       result =  `Bonsoir ${prenom}`;
      }
      return result;
}

let message = sayHello(`Marie`, 20);

console.log(message)