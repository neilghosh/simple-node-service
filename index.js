import express from "express";
import { fetchData } from "./webProxy.js";

const app = express();
const port = 8080;

app.get("/", (req, res) => {
  console.log(`Request Came ${req.ip}`);
  fetchData()
    .then((result) => {
      console.log(result.statusCode);
      res.write('Success '+result.statusCode);
    })
    .catch((result) => {
      console.log('Failed '+result.statusCode);
    })
    .finally(() => {
      res.end(); //end the response
    });
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
