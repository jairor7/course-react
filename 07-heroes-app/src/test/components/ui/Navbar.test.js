import { mount } from "enzyme";
import { MemoryRouter } from "react-router-dom";
import { Navbar } from "../../../components/ui/Navbar";
import { AuthContext } from "../../../context/AuthContext";
import { routes } from "../../../routers/routes";
import { authTypes } from "../../../store/types";

const user = {
  name: "Pedro",
  isAuthenticated: true,
};

const dispatch = jest.fn();
const mockNavigate = jest.fn();
jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => mockNavigate,
}));

describe("Pruebas en el <Navbar />", () => {
  test("Debe de mostrarse correctamente", () => {
    const wrapper = mount(
      <AuthContext.Provider value={{ user }}>
        <MemoryRouter children={<Navbar />} />
      </AuthContext.Provider>
    );
    expect(wrapper).toMatchSnapshot();
    expect(
      wrapper.find(".nav-item.nav-link.text-info").text().trim()
    ).toBe("Pedro");
  });

  test("Debe de llamar el logout, llamar el navigate y el dispatch con los argumentos", () => {
    const action = {
      type: authTypes.LOGOUT,
    };
    const wrapper = mount(
      <AuthContext.Provider value={{ user, dispatch }}>
        <MemoryRouter children={<Navbar />} initialEntries={["/"]} />
      </AuthContext.Provider>
    );
    // wrapper.find("button").simulate("click");
    wrapper.find("button").prop("onClick")();
    expect(dispatch).toHaveBeenCalledWith(action);
    expect(mockNavigate).toHaveBeenCalledWith(routes.login, {
      replace: true,
    });
  });
});
