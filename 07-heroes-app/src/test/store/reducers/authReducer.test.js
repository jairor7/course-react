import { authReducer } from "../../../store/reducers/authReducer";
import { authTypes } from "../../../store/types";

describe("Pruebas en el reducer Auth", () => {
  test("Debe de retornar el estado por defecto", () => {
    const initialState = { isAuthenticated: false };
    const state = authReducer(initialState, {});
    expect(state).toEqual(initialState);
  });

  test("Debe de autenticar y colocar el nombre del usuario", () => {
    const action = {
      type: authTypes.LOGIN,
      payload: {
        name: "Ana Maria",
      },
    };
    const state = authReducer({ isAuthenticated: false }, action);
    expect(state).toEqual({
      name: "Ana Maria",
      isAuthenticated: true,
    });
  });

  test("Debe de borrar el name del usuario y isAuthenticated en false", () => {
    const action = {
      type: authTypes.LOGOUT,
    };
    const state = authReducer(
      { isAuthenticated: true, name: "Ana Maria" },
      action
    );
    expect(state).toEqual({ isAuthenticated: false });
  });
});
