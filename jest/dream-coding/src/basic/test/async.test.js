const fetchProduct = require("../async.js");

describe("Test async function", () => {
  it("should return 'network error'", async () => {
    expect.assertions(1);

    try {
      await fetchProduct("error");
    } catch (e) {
      expect(e).toBe("network error");
    }
  });

  it("should return value", async () => {
    const data = await fetchProduct();

    expect(data).toEqual({
      item: "Milk",
      price: 200,
    });
  });
});
