// Desestructuracion de arreglos
const characteres = ["Goku", "Vegeta", "Trunks"];

const [, , p3] = characteres;
console.log(p3);

const returnArr = () => {
  return ["ABC", 123];
};

const [letras, numeros] = returnArr();
console.log(letras, numeros);

// Tarea
const usedState = (valor) => {
  return [
    valor,
    () => {
      console.log("Hola mundo");
    },
  ];
};

const arr = usedState("Goku");
console.log(arr);
arr[1]();

// 1. Primer valor del arreglo se llamara nombre
// 2. Segundo valor del arreglo se llamara setNombre

const [nombre, setNombre] = usedState("Goku");
console.log(nombre);
setNombre();
