import { mount } from "enzyme";
import { MemoryRouter } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import { PrivateRoute } from "../../routers/PrivateRoute";

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  Navigate: () => <span>Saliendo de aquí</span>,
}));

describe("Pruebas en <PrivateRoutes />", () => {
  Storage.prototype.setItem = jest.fn();
  test("debe de mostrar el componente si está autenticado y guardar en el localStorage", () => {
    const contextValue = {
      user: {
        name: "Jairo",
        isAuthenticated: true,
      },
    };
    const wrapper = mount(
      <AuthContext.Provider value={contextValue}>
        <MemoryRouter initialEntries={["/"]}>
          <PrivateRoute>
            <h1>Private Router</h1>
          </PrivateRoute>
        </MemoryRouter>
      </AuthContext.Provider>
    );
    expect(wrapper.find("h1").text().trim()).toBe("Private Router");
    expect(localStorage.setItem).toHaveBeenCalledWith(
      "lastPath",
      "/"
    );
  });

  test("Debe de bloquear el componente si no está autenticado", () => {
    const contextValue = {
      user: {
        isAuthenticated: false,
      },
    };
    const wrapper = mount(
      <AuthContext.Provider value={contextValue}>
        <MemoryRouter initialEntries={["/"]}>
          <PrivateRoute>
            <h1>Private Router</h1>
          </PrivateRoute>
        </MemoryRouter>
      </AuthContext.Provider>
    );
    expect(wrapper.text()).toBe("Saliendo de aquí");
  });
});
