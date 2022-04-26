import {
  renderHook,
  act,
} from "@testing-library/react-hooks";
import { useForm } from "../../hooks/useForm";

describe("Pruebas en el useForm", () => {
  const initialUseForm = {
    name: "Fernando",
    email: "fernando@gmail.com",
  };

  const name = "Jairo";

  const newNameObj = {
    target: {
      name: "name",
      value: name,
    },
  };

  test("Debe de regresar el formulario por defecto", () => {
    const { result } = renderHook(() =>
      useForm(initialUseForm)
    );
    const [values, handleInputChange, reset] =
      result.current;

    expect(values).toEqual(initialUseForm);
    expect(typeof handleInputChange).toEqual("function");
    expect(typeof reset).toEqual("function");
  });

  test("Debe de cambiar el valor del formulario (Cambio de name)", () => {
    const { result } = renderHook(() =>
      useForm(initialUseForm)
    );
    const [, handleInputChange] = result.current;
    act(() => {
      handleInputChange(newNameObj);
    });
    const [values] = result.current;
    expect(values).toEqual({
      ...initialUseForm,
      name: name,
    });
  });

  test("Debe de restablecer el formulario con RESET", () => {
    const { result } = renderHook(() =>
      useForm(initialUseForm)
    );
    const [, handleInputChange, reset] = result.current;
    act(() => {
      handleInputChange(newNameObj);
      reset();
    });
    const [values] = result.current;
    expect(values).toEqual(initialUseForm);
  });
});
