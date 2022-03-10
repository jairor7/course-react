// Funciones
const greet = function (name) {
  return `Hello ${name}`;
};

const greet2 = (name) => {
  return `Hello ${name}`;
};

const greet3 = (name) => `Hello ${name}`;

console.log(greet("Juan"));
console.log(greet2("Juan2"));
console.log(greet3("Juan3"));

// Retornar un objeto
const getPerson = () => ({
  name: "Juan",
  lastName: "Perez",
  age: 30,
});

console.log(getPerson());

//Tarea
// 1. Transformar a funcion de flecha
// 2. Retornar un objeto implicito
// 3. Pruebas
function getUserActive(nombre) {
  return {
    uid: `ABC123`,
    nombre,
    online: true,
  };
}

// Resolved
const userActive = getUserActive("Juan");
console.log(userActive);

const getUserActive2 = (nombre) => ({
  uid: `ABC123`,
  nombre,
  online: true,
});

console.log(getUserActive2("Jairo"));
