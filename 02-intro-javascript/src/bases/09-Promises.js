//Promesas
// Resolve callback que se ejecuta cuando la promesa es exitosa

import { getHeroesById } from "./bases/08-Imp-exports";

// // Reject callback que se ejecuta cuando la promesa falla
// const promesa = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     const heroe = getHeroesById(2);
//     reject("No se pudo encontrar heroe");
//   }, 1000);
// });

// promesa
//   .then((param) => console.log(param))
//   .catch((error) => console.warn(error))
//   .catch(() => console.log("Ejecutarme cuando se termine mal"))
//   .finally(() => console.log("Ejecutarme siempre"));

const getHeroeByIdAsync = (id) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const heroe = getHeroesById(id);
      if (heroe) {
        resolve(heroe);
      } else {
        reject(`No se pudo encontrar el heroe con id ${id}`);
      }
    }, 1000);
  });
};

getHeroeByIdAsync(3).then(console.log).catch(console.error);
