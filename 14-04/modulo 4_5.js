let usuario = "karolina";
let contrasena = "2435679";

if (usuario === "") {
    console.log("El nombre de usuario no puede estar vacío");
} else if (contrasena.length < 8) {
    console.log("La contraseña debe tener al menos 8 caracteres");
} else {
    console.log("Login exitoso");
}