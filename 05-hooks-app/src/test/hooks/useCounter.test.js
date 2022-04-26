import { useCounter } from "../../hooks/useCounter";
import {
  renderHook,
  act,
} from "@testing-library/react-hooks";

describe("Pruebas al hoook useCounter", () => {
  test("Debe de retornar el valor inicial", () => {
    const {
      result: {
        current: [counter, increment, decrement, reset],
      },
    } = renderHook(() => useCounter());
    expect(counter).toBe(10);
    expect(typeof increment).toBe("function");
    expect(typeof decrement).toBe("function");
    expect(typeof reset).toBe("function");
  });
  test("Debe retornar el valor que se añade como parametro", () => {
    const {
      result: {
        current: [counter],
      },
    } = renderHook(() => useCounter(20));
    expect(counter).toBe(20);
  });
  test("Debe de incrementar el counter en 1", () => {
    const { result } = renderHook(() => useCounter(20));
    const [, increment] = result.current;
    act(() => {
      increment();
    });
    const [counter] = result.current;
    expect(counter).toBe(21);
  });
  test("Debe de disminuir el counter en 1", () => {
    const { result } = renderHook(() => useCounter(20));
    const [, , decrement] = result.current;
    act(() => {
      decrement();
    });
    const [counter] = result.current;
    expect(counter).toBe(19);
  });
  test("Debe de hacer un reset del counter a 20", () => {
    const { result } = renderHook(() => useCounter(20));
    const [, increment, , reset] = result.current;
    act(() => {
      increment();
      reset();
    });
    const [counter] = result.current;
    expect(counter).toBe(20);
  });
});
