import { fetchData } from "../webproxy.js";
import regeneratorRuntime from "regenerator-runtime";

describe("#fetchData()", function () {
  test("should fetch Hacker News Data", () =>
    fetchData().then(function (response) {
      expect(response.statusCode).toBe(200);
    }));
});
