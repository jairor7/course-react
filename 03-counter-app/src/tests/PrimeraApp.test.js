import React from "react";
import "@testing-library/jest-dom";
import PrimeraApp from "../PrimeraApp";
import { shallow } from "enzyme";

describe("Pruebas en >PrimeraApp />", () => {
  test("Debe de mostrar <PrimeraApp /> correctamente", () => {
    const saludo = "Hola, soy Jairo";
    const wrapper = shallow(<PrimeraApp saludo={saludo} />);
    expect(wrapper).toMatchSnapshot();
  });

  test("Debe de mostrar <PrimeraApp /> correctamente con subtítulo", () => {
    const saludo = "Hola, soy Jairo";
    const subtitle = "Soy un subtítulo";
    const wrapper = shallow(<PrimeraApp saludo={saludo} subtitle={subtitle} />);
    const textoParrafo = wrapper.find("p").text();
    expect(textoParrafo).toBe(subtitle);
  });
});
