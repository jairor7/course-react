import { shallow } from "enzyme";
import CounterApp from "../CounterApp";

describe("Pruebas al componente CounterApp", () => {
  let wrapper = shallow(<CounterApp />);

  beforeEach(() => {
    wrapper = shallow(<CounterApp />);
  });

  test('El componente debe mostrarse correctamente "<CounterApp />"', () => {
    expect(wrapper).toMatchSnapshot();
  });

  test("Debe mostrar el valor por defecto = 100", () => {
    const valor = 100;
    const wrapper = shallow(<CounterApp value={valor} />);
    const counterText = wrapper.find("h2").text().trim();
    expect(counterText).toBe(valor.toString());
  });

  test("Debe decrementar el contador", () => {
    wrapper.find("button").at(0).simulate("click");
    const counterText = wrapper.find("h2").text().trim();
    expect(counterText).toBe("9");
  });

  test("Debe incrementar el contador", () => {
    wrapper.find("button").at(2).simulate("click");
    const counterText = wrapper.find("h2").text().trim();
    expect(counterText).toBe("11");
  });

  test("Debe resetear el contador", () => {
    const value = 105;
    const wrapper = shallow(<CounterApp value={value} />);

    wrapper.find("button").at(0).simulate("click");
    const counterTextDecrement = wrapper.find("h2").text().trim();
    expect(counterTextDecrement).toBe((value - 1).toString());
    wrapper.find("button").at(1).simulate("click");
    const counterText = wrapper.find("h2").text().trim();
    expect(counterText).toBe(value.toString());
  });
});
