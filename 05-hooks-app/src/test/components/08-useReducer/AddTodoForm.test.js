import AddTodoForm from "../../../components/08-useReducer/AddTodoForm";
import { shallow } from "enzyme";

describe("Pruebas al componente <AddTodoForm />", () => {
  const handleAddTodo = jest.fn();
  const wrapper = shallow(
    <AddTodoForm handleAddTodo={handleAddTodo} />
  );
  test("Debe mostrar correctamente el componente", () => {
    expect(wrapper).toMatchSnapshot();
  });

  test("No debe de llamar handleAddTodo", () => {
    //wrapper.find("form").simulate("submit");
    const formSubmit = wrapper
      .find("form")
      .prop("onSubmit"); //Otra forma de simular una acción como click o submit
    formSubmit({ preventDefault() {} });
    expect(handleAddTodo).toHaveBeenCalledTimes(0); //Veces que se llamo la función
  });

  test("Debe de llamar la función handleAddTodo con un argumento", () => {
    const valueDescription = "Aprender React";
    const inputChange = wrapper
      .find("input")
      .prop("onChange");
    inputChange({
      target: {
        value: valueDescription,
        name: "description",
      },
    });
    const formSubmit = wrapper
      .find("form")
      .prop("onSubmit");
    formSubmit({ preventDefault() {} });
    expect(handleAddTodo).toHaveBeenCalledWith({
      id: expect.any(Number),
      description: valueDescription,
      done: false,
    });
    expect(wrapper.find("input").prop("value")).toBe("");
  });
});
