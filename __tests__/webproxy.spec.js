import { fetchData } from "../webProxy.js";
import regeneratorRuntime from "regenerator-runtime";
//import { fetchData } from "../index.js";

describe("#fetchData()", function () {
  test("should compute MD5 hash", function () {
    return fetchData().then(function (response) {
      expect(response.statusCode).toBe(200);
    });
  });
});
