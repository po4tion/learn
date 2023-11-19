const UserClient = require("../user_client.js");
const UserService = require("../user_service.js");

jest.mock("../user_client.js");

describe("User Service", () => {
  const login = jest.fn(async () => "Success");

  UserClient.mockImplementation(() => {
    return { login };
  });

  let userService;

  beforeEach(() => {
    userService = new UserService(new UserClient());
    login.mockClear();
    UserClient.mockClear();
  });

  it("should return true", async () => {
    const isLoggedIn = await userService.login();

    expect(isLoggedIn).toBe(true);
  });

  it("should return undefined", async () => {
    const _ = await userService.login();
    const isLoggedIn = await userService.login();

    expect(isLoggedIn).toBeUndefined();
  });
});
