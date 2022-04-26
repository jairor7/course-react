import { shallow } from "enzyme";
import { HooksApp } from "../HooksApp";

describe("Pruebas en componente HooksTest", () => {
  test("Debe de regresar mostrar correctamente el componente <HooksApp />", () => {
    const wrapper = shallow(<HooksApp />);
    expect(wrapper).toMatchSnapshot();
  });
});
