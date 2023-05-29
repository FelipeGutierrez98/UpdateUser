const bcrypt = require("bcryptjs");

// cifrado de contraseña
const saltRounds = 10;//numero de rondas que se va hacer se ejecuta ese cifrado para hacerlo mas fuerte
const plainPassword = "password123";
bcrypt.hash(plainPassword,saltRounds, function(err, hash){//hash se encarga de generar el hash la contrasena
    if(err){
        console.error(err);
    }
    else {
        console.log('Se creó el hash de la contraseña ',hash);
    }
})

// Autenticación con el hash
const hashedPassword = '$2b$10$';
const loginPassword = 'password123';

bcrypt.compare(loginPassword,hashedPassword,function(err, result){
    if(err){
        console.error(err);
    }
    else if(result){
        console.log("La contraseña es válida");
    }
    else{
        console.log("La contraseña es inválida");
    }
})