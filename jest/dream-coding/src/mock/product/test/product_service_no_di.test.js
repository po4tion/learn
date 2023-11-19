const ProductService = require("../product_service_no_di.js");
const ProductClient = require("../product_client.js");

jest.mock("../product_client.js");

describe("ProductService", () => {
  const fetchItems = jest.fn(async () => [
    { item: 1, available: true },
    { item: 2, available: false },
    { item: 3, available: true },
  ]);

  ProductClient.mockImplementation(() => {
    return {
      fetchItems,
    };
  });

  let productService;

  beforeEach(() => {
    productService = new ProductService();
    fetchItems.mockClear();
    ProductClient.mockClear();
  });

  it("should filter out only available items", async () => {
    const items = await productService.fetchAvailableItems();

    expect(items.length).toBe(2);
    expect(items).toEqual([
      { item: 1, available: true },
      { item: 3, available: true },
    ]);
  });
});
