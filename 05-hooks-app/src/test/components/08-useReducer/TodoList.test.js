import TodoList from "../../../components/08-useReducer/TodoList";
import { shallow } from "enzyme";
import { demoInitialStateTodos } from "../../fixtures/demoTodos";

describe("Pruebas en el componente <TodoList />", () => {
  const handleComplete = jest.fn();
  const handleRemoveTodo = jest.fn();
  const wrapper = shallow(
    <TodoList
      todos={demoInitialStateTodos}
      handleComplete={handleComplete}
      handleRemoveTodo={handleRemoveTodo}
    />
  );
  test("Debe mostrarse correctamente el componente", () => {
    expect(wrapper).toMatchSnapshot();
  });

  test("Debe de tener dos <TodoItem />", () => {
    expect(wrapper.find("TodoItem").length).toBe(
      demoInitialStateTodos.length
    );
    expect(
      wrapper
        .find("TodoItem")
        .at(0)
        .prop("handleRemoveTodo")
    ).toEqual(expect.any(Function));
  });
});
