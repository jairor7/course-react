import { TodoApp } from "../../../components/08-useReducer/TodoApp";
import { shallow, mount } from "enzyme";
import { demoInitialStateTodos } from "../../fixtures/demotodos";
import { act } from "@testing-library/react";

describe("Prueba del componente <TodoApp />", () => {
  Storage.prototype.setItem = jest.fn();
  const wrapper = shallow(<TodoApp />);
  test("Debe de mostrar correctamente el componente <TodoApp />", () => {
    expect(wrapper).toMatchSnapshot();
  });

  test("Debe de agregar un TODO", () => {
    const wrapper = mount(<TodoApp />);
    act(() => {
      wrapper.find("AddTodoForm").prop("handleAddTodo")(
        demoInitialStateTodos[0]
      );
      wrapper.find("AddTodoForm").prop("handleAddTodo")(
        demoInitialStateTodos[1]
      );
    });
    expect(wrapper.find("h1").text().trim()).toBe(
      "Todo App (2)"
    );
    expect(localStorage.setItem).toHaveBeenCalledTimes(2);
    expect(localStorage.setItem).toHaveBeenCalledWith(
      "todos",
      '[{"id":1,"description":"Hacer la compra","done":false},{"id":2,"description":"Lavar la loza","done":false}]'
    );
  });
  test("Debe de eleminar un TODO", () => {
    wrapper.find("AddTodoForm").prop("handleAddTodo")(
      demoInitialStateTodos[0]
    );
    expect(wrapper.find("h1").text().trim()).toBe(
      "Todo App (1)"
    );
    wrapper.find("TodoList").prop("handleRemoveTodo")(
      demoInitialStateTodos[0].id
    );
    expect(wrapper.find("h1").text().trim()).toBe(
      "Todo App (0)"
    );
  });
});
