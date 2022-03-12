const activo = true;
const mensaje = activo ? "Estoy activo" : "Estoy inactivo";
console.log(mensaje);

// Cuando no esta activo, no quiero que haga nada
const activate = true;
const mensajeA = activate && "Estoy activo";
console.log(mensajeA);
