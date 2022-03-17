describe("Pruebas en el archivo demo.test.js", () => {
  test("Deben ser iguales los Strings", () => {
    // Arrange Inicializacion de variables
    const mensaje = "Hola Mundo";
    // Act Estimulo
    const mensaje2 = `Hola Mundo`;
    // Assert Resultado
    expect(mensaje).toBe(mensaje2);
  });
});
