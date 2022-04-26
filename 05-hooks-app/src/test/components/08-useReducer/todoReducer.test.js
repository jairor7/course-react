import { todoReducer } from "../../../components/08-useReducer/todoReducer";
import { demoInitialStateTodos } from "../../fixtures/demoTodos";

describe("Pruebas en todoReducer", () => {
  test("Debe de retornar el state por defecto", () => {
    const state = todoReducer(demoInitialStateTodos, {});
    expect(state).toEqual(demoInitialStateTodos);
  });

  test("Debe de agregar un TODO", () => {
    const action = {
      type: "ADD_TODO",
      payload: {
        id: 3,
        description: "Llamar a Mauricio",
        done: false,
      },
    };
    const state = todoReducer(
      demoInitialStateTodos,
      action
    );
    expect(state.length).toBe(3);
    expect(state).toEqual([
      ...demoInitialStateTodos,
      action.payload,
    ]);
  });

  test("Debe eliminar un TODO", () => {
    const action = {
      type: "REMOVE_TODO",
      payload: 1,
    };
    const state = todoReducer(
      demoInitialStateTodos,
      action
    );
    expect(state.length).toBe(1);
    expect(state).toEqual([demoInitialStateTodos[1]]);
  });

  test("Debe de cambiar el estado done (toogle) de un TODO", () => {
    const action = {
      type: "IS_COMPLETE_TODO",
      payload: 1,
    };
    const newState = todoReducer(
      demoInitialStateTodos,
      action
    );
    expect(newState[0].done).toBe(true);
  });
});
