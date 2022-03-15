import { getImagen } from "../../bases/11-async-await";

describe("Pruebas con async-away y Fech", () => {
  test("should return url the img", async () => {
    const url = await getImagen();
    // expect(typeof url).toBe("string");
    // console.log(url);
    expect(url.includes("https://")).toBe(true);
  });
});
