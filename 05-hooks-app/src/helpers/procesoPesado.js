export const procesoPesado = (iteraciones) => {
  for (let i = 0; i < iteraciones; i++) {
    console.log("Procesando...");
  }
  return `Proceso terminado con ${iteraciones} iteraciones`;
};
