import { getSaludo } from "../../bases/02-template-string";

describe("Pruebas en 02-template-string.js", () => {
  test("getSaludo deberia retornar Hola Jairo", () => {
    const name = "Jairo";
    const saludo = getSaludo(name);
    expect(saludo).toBe("Hola Jairo!");
  });

  test("getSaludo deberia retornar Hola Carlos! si no hay argumento en la funcion", () => {
    const saludo = getSaludo();
    expect(saludo).toBe("Hola Carlos!");
  });
});
