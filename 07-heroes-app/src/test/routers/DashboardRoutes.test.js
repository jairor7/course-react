import { mount } from "enzyme";
import { MemoryRouter } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import { DashboardRoutes } from "../../routers/DashboardRoutes";

const contextValue = {
  user: {
    name: "Jairo",
    isAuthenticated: true,
  },
};

describe("Pruebas en <DashboardRoutes />", () => {
  test("Debe de mostrarse correctamente con la ruta de marvel", () => {
    const wrapper = mount(
      <AuthContext.Provider value={contextValue}>
        <MemoryRouter
          children={<DashboardRoutes />}
          initialEntries={["/dc", "/marvel", { pathname: "/" }]}
          initialIndex={2}
        />
      </AuthContext.Provider>
    );
    expect(wrapper).toMatchSnapshot();
    expect(
      wrapper.find(".nav-item.nav-link.text-info").text().trim()
    ).toBe("Jairo");
    expect(wrapper.find("h1").text().trim()).toBe("Marvel Screen");
  });

  test("Debe de mostrarse correctamente con la ruta de dc", () => {
    const wrapper = mount(
      <AuthContext.Provider value={contextValue}>
        <MemoryRouter
          children={<DashboardRoutes />}
          initialEntries={["/dc", "/marvel", { pathname: "/" }]}
          initialIndex={0}
        />
      </AuthContext.Provider>
    );
    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find("h1").text().trim()).toBe("DC Screen");
  });
});
