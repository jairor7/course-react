import { shallow, mount } from "enzyme";
import { AuthContext } from "../../context/AuthContext";
import { AppRouter } from "../../routers/AppRouter";

describe("Pruebas al componente AppRouter", () => {
  const contextValue = {
    user: {
      name: "",
      isAuthenticated: false,
    },
  };

  test("El componente se muestra correctamente", () => {
    const wrapper = shallow(<AppRouter />);
    expect(wrapper).toMatchSnapshot();
  });

  test("Debe de mostrar el login si el usuario no esta autenticado", () => {
    const wrapper = mount(
      <AuthContext.Provider value={contextValue}>
        <AppRouter />
      </AuthContext.Provider>
    );
    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find("h1").text().trim()).toBe("Login Screen");
  });

  test("Debe de mostrar el componente Marvel, si el usuario esta autenticado", () => {
    const contextValue = {
      user: {
        name: "Jairo",
        isAuthenticated: true,
      },
    };
    const wrapper = mount(
      <AuthContext.Provider value={contextValue}>
        <AppRouter />
      </AuthContext.Provider>
    );
    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find(".navbar").exists()).toBe(true);
  });
});
