import { fetchData } from "../webproxy.js";
import regeneratorRuntime from "regenerator-runtime";
//import { fetchData } from "../index.js";

describe("#fetchData()", function () {
  test("should fetch Hacker News Data", () =>
    fetchData().then(function (response) {
      expect(response.statusCode).toBe(200);
    }));
});
