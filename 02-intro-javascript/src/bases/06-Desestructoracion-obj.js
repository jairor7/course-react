//Destructuracion de objetos
// Asignacion desestructurada

const person = {
  name: "Tomy",
  age: 23,
  key: "IronMan",
  range: "soldier",
};

const { name, age, key } = person;
console.log(key, name, age);
//Cambiar el nombre de la variable
const { name: nombre, age: edad, key: llave } = person;
console.log(edad, nombre, llave);

//Destructuracion en funciones
const printPerson = ({ name, age, range = "Captain" }) => {
  console.log(name, age, range);
};

printPerson(person);

//Destructuracion en funciones
const usedContext = ({ key, name, age, range = "Captain" }) => {
  return {
    nombreClave: name,
    anios: age,
    range,
    key,
    latlng: {
      lat: 10,
      lng: -10,
    },
  };
};
//Extraer un objeto dentro de otro - anidados
const {
  nombreClave,
  anios,
  latlng: { lat, lng },
} = usedContext(person);
console.log(nombreClave, anios);
console.log(lat, lng);
