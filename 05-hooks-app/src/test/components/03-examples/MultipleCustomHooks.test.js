import { shallow } from "enzyme";
import { MultipleCustomHooks } from "../../../components/03-examples/MultipleCustomHooks";
import { useFetch } from "../../../hooks/useFetch";
import { useCounter } from "../../../hooks/useCounter";
jest.mock("../../../hooks/useFetch");
jest.mock("../../../hooks/useCounter");

describe("Pruebas en MultipleCustomHooks", () => {
  test("Debe de mostrarse correctamente", () => {
    useCounter.mockReturnValue([1]);
    useFetch.mockReturnValue({
      data: null,
      loading: true,
      error: null,
    });
    const wrapper = shallow(<MultipleCustomHooks />);
    expect(wrapper).toMatchSnapshot();
  });

  test("Debe de mostrar la información", () => {
    useCounter.mockReturnValue([1, () => {}]);
    useFetch.mockReturnValue({
      data: [
        { author: "Jairo", quote: "Nunca digas nunca!!" },
      ],
      loading: false,
      error: null,
    });
    const wrapper = shallow(<MultipleCustomHooks />);
    expect(wrapper.find("blockquote").exists()).toBe(true);
    expect(wrapper.find(".mb-1").text()).toBe(
      "Nunca digas nunca!!"
    );
    expect(wrapper.find("figcaption").text()).toBe("Jairo");
    expect(wrapper.find("button").exists()).toBe(true);
  });
});
