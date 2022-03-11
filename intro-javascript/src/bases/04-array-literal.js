const arreglo = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// let arreglo2 = arreglo;
let arreglo2 = [...arreglo, 11];
// arreglo2.push(11);
let arreglo3 = arreglo2.map(function (valor) {
  return valor * 2;
});

console.log(arreglo, arreglo2, arreglo3);
