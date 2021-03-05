import request from "supertest";
import { server } from "../server.js";

describe("GET /", function () {
  it("responds success", function (done) {
    request(server)
      .get("/")
      .expect(200,'Success 200', done)      
  });
});
