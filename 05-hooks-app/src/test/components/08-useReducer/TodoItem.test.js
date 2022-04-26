import TodoItem from "../../../components/08-useReducer/TodoItem";
import { shallow } from "enzyme";
import { demoInitialStateTodos } from "../../fixtures/demoTodos";

describe("Pruebas en <TodoItem />", () => {
  const handleComplete = jest.fn();
  const handleRemoveTodo = jest.fn();
  const wrapper = shallow(
    <TodoItem
      todo={demoInitialStateTodos[0]}
      index={demoInitialStateTodos[0].id}
      handleComplete={handleComplete}
      handleRemoveTodo={handleRemoveTodo}
    />
  );
  test("Debe de mostrarse correctamente", () => {
    expect(wrapper).toMatchSnapshot();
  });

  test("Debe de llamar la funcion handleRemoveTodo", () => {
    wrapper.find("button").simulate("click");
    expect(handleRemoveTodo).toHaveBeenCalledWith(
      demoInitialStateTodos[0].id
    );
  });

  test("Debe de llamar la funcion handleComplete", () => {
    wrapper.find("p").simulate("click");
    expect(handleComplete).toHaveBeenCalledWith(
      demoInitialStateTodos[0].id
    );
  });

  test("Debe de mostrar el texto correctamente del parrafo", () => {
    expect(wrapper.find("p").text()).toBe(
      `${demoInitialStateTodos[0].id + 1}. ${
        demoInitialStateTodos[0].description
      }`
    );
  });

  test("Debe el parrafo tener la clase complete, si la tarea esta en done", () => {
    const todo = demoInitialStateTodos[0];
    todo.done = true;
    const wrapper = shallow(<TodoItem todo={todo} />);
    // const { className } = wrapper.find("p").props();
    // expect(className.includes("complete")).toBe(true);
    expect(wrapper.find("p").hasClass("complete")).toBe(
      true
    );
  });
});
