import { fetchData } from "../webproxy.js";
//import regeneratorRuntime from "regenerator-runtime";
//https://stackoverflow.com/a/65871601/747456

describe("#fetchData()", function () {
  test("should fetch Hacker News Data", () =>
    fetchData().then(function (response) {
      expect(response.statusCode).toBe(200);
    }));
});
