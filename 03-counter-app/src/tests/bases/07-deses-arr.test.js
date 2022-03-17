import { retornaArreglo } from "../../bases/07-deses-arr";

describe("Pruebas en desestructuración", () => {
  test("Debe de retornar un string y un numero", () => {
    const [string, numero] = retornaArreglo();
    expect(string).toBe("ABC");
    expect(numero).toBe(123);

    expect(typeof string).toBe("string");
    expect(typeof numero).toBe("number");
  });
});
