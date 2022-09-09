import express from "express";
import { fetchData } from "./webproxy.js";

const app = express();
app.use('/static',express.static('public'))
app.get("/", (req, res) => {
  console.log(`Request Came ${req.ip}`);
  fetchData()
    .then((result) => {
      console.log(result.statusCode);
      res.write('CCD Success '+result.statusCode);
    })
    .catch((result) => {
      console.log('Failed '+result.statusCode);
      res.send(500);
    })
    .finally(() => {
      console.log(`Request End`);
      res.end(); //end the response
    });
});

export { app as server };