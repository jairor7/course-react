import { HeroScreen } from "../../../components/heros/HeroScreen";
import { AuthContext } from "../../../context/AuthContext";
import { mount } from "enzyme";
import { MemoryRouter, Route, Routes } from "react-router-dom";

const mockNavigate = jest.fn();
jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => mockNavigate,
}));

describe("Prueba en el componente de <HeroScreen >", () => {
  test("No debería mostrar el HeroScreen, si no hay héroe en el URL", () => {
    const wrapper = mount(
      <MemoryRouter initialEntries={["/hero"]}>
        <Routes>
          <Route path="/hero" element={<HeroScreen />} />
          <Route path="/" element={<h1>No Hero Page</h1>} />
        </Routes>
      </MemoryRouter>
    );
    expect(wrapper.find("h1").text().trim()).toBe("No Hero Page");
  });

  test("Debe de mostrar un hero si el parámetro existe y se encuentra", () => {
    const wrapper = mount(
      <MemoryRouter initialEntries={["/hero/marvel-spider"]}>
        <Routes>
          <Route path="/hero/:heroId" element={<HeroScreen />} />
          <Route path="/" element={<h1>No Hero Page</h1>} />
        </Routes>
      </MemoryRouter>
    );
    expect(wrapper.find(".row").exists()).toBe(true);
  });

  test("Debe de regresar a la pantalla anterior", () => {
    const wrapper = mount(
      <MemoryRouter initialEntries={["/hero/marvel-spider"]}>
        <Routes>
          <Route path="/hero/:heroId" element={<HeroScreen />} />
        </Routes>
      </MemoryRouter>
    );
    wrapper.find("button").prop("onClick")();
    expect(mockNavigate).toHaveBeenCalledWith(-1);
  });

  test("Debe de mostrar el No Hero Page si no tenemos un héroe", () => {
    const wrapper = mount(
      <MemoryRouter initialEntries={["/hero/marvel-spider123"]}>
        <Routes>
          <Route path="/hero/:heroId" element={<HeroScreen />} />
          <Route path="/" element={<h1>No Hero Page</h1>} />
        </Routes>
      </MemoryRouter>
    );
    expect(wrapper.text()).toBe("No Hero Page");
  });
});
