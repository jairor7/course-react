import { getUser, getUsuarioActivo } from "../../bases/05-funciones";

describe("Pruebas de 05-funciones", () => {
  test("getUser debe de retornar un objeto", () => {
    const userTest = {
      uid: "ABC123",
      username: "El_Papi1502",
    };
    const user = getUser();
    expect(user).toEqual(userTest);
  });

  test("getUsuarioActivo debe de retornar un objeto", () => {
    const userName = "JairoR7";
    const userTest = {
      uid: "ABC567",
      username: userName,
    };
    const user = getUsuarioActivo(userName);
    expect(user).toEqual(userTest);
  });
});
