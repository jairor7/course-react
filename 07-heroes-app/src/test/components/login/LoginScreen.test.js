import { mount } from "enzyme";
import { AuthContext } from "../../../context/AuthContext";
import { LoginScreen } from "../../../components/login/LoginScreen";
import { MemoryRouter } from "react-router-dom";
import { authTypes } from "../../../store/types";

const dispatch = jest.fn();
const user = {
  name: "",
  isAuthenticated: false,
};
const mockNavigate = jest.fn();
jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => mockNavigate,
}));

describe("Pruebas en el componente <LoginScreen />", () => {
  const wrapper = mount(
    <AuthContext.Provider value={{ user, dispatch }}>
      <MemoryRouter
        children={<LoginScreen />}
        initialEntries={["/login"]}
      />
    </AuthContext.Provider>
  );

  test("Muestra el componente correctamente", () => {
    expect(wrapper).toMatchSnapshot();
  });

  test("Debe de realizar el dispatch y la navegación", () => {
    const handleClick = wrapper.find("button").prop("onClick");
    const action = {
      type: authTypes.LOGIN,
      payload: {
        name: "Jairo R.",
        lastName: "Rodriguez",
      },
    };
    handleClick();
    expect(dispatch).toHaveBeenCalledWith(action);
    expect(mockNavigate).toHaveBeenCalledWith("/", {
      replace: true,
    });
    localStorage.setItem("lastPath", "/dc");
    handleClick();
    expect(mockNavigate).toHaveBeenCalledWith("/dc", {
      replace: true,
    });
  });
});
