import { SearchScreen } from "../../../components/search/SearchScreen";
import { mount } from "enzyme";
import { MemoryRouter, useNavigate } from "react-router-dom";

// Esta prueba funciona pero al mockear el useSearchParams las demas pruebas fallan

const mockUseSearchParams = jest.fn();
jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useSearchParams: () => [
    jest.requireActual("react-router-dom").useSearchParams()[0],
    mockUseSearchParams,
  ],
}));

// const mockNavigate = jest.fn();

// jest.mock("react-router-dom", () => ({
//   ...jest.requireActual("react-router-dom"),
//   useNavigate: () => mockNavigate,
// }));

describe("Pruebas en el <SearchScreen />", () => {
  test("Debe mostrar el componente correctamente", () => {
    const wrapper = mount(
      <MemoryRouter
        children={<SearchScreen />}
        initialEntries={["/search"]}
      />
    );
    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find(".alert.alert-info").text().trim()).toBe(
      "Buscar un héroe"
    );
  });

  test("Debe de mostrar a Batman y el input con el valor del queryString", () => {
    const wrapper = mount(
      <MemoryRouter
        children={<SearchScreen />}
        initialEntries={["/search?hero=batman"]}
      />
    );
    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find("input").prop("value")).toBe("batman");
  });

  test("Debe de mostrar un error, si no se encuentra el hero", () => {
    const wrapper = mount(
      <MemoryRouter
        children={<SearchScreen />}
        initialEntries={["/search?hero=123"]}
      />
    );
    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find(".alert.alert-danger").text().trim()).toBe(
      "No hay resultados: 123"
    );
  });

  test("Debe de cambiar la url para realizar un nuevo searchParams", () => {
    const wrapper = mount(
      <MemoryRouter
        children={<SearchScreen />}
        initialEntries={["/search?hero=su"]}
      />
    );
    wrapper.find("input").simulate("change", {
      target: { name: "searchText", value: "batman" },
    });

    wrapper.find("form").prop("onSubmit")({
      preventDefault: () => {},
    });

    expect(mockUseSearchParams).toHaveBeenCalledWith({
      hero: "batman",
    });

    // expect(mockNavigate).toHaveBeenCalledWith("?hero=batman");
  });
});
