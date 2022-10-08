import express from "express";
import { fetchData } from "./webproxy.js";
import { dbConnect } from "./db.js";

const app = express();
app.use('/static', express.static('public'))
app.get("/", (req, res) => {
    console.log(`Request Came ${req.ip}`);
    fetchData()
        .then((result) => {
            console.log(result.statusCode);
            res.write('Hyderabad CCD Success ' + result.statusCode);
        })
        .catch((result) => {
            console.log('Failed ' + result.statusCode);
            res.send(500);
        })
        .finally(() => {
            console.log(`Request End`);
            res.end(); //end the response
        });
});
app.get("/hit", (req, res) => {
    console.log(`Request Came ${req.ip}`);
    // dbConnect().then((result) => {
    //     console.log(result);
    //     res.write('DB Result' + result);
    // })
    //     .catch((result) => {
    //         console.log('Failed ' + result);
    //         res.send(500);
    //     })

    (async () => {
        const result = await dbConnect(process.env.INSTANCE_HOST);
        console.log("Time with pool: " + JSON.stringify(result));
        res.write(JSON.stringify(result));
        res.end();
        //res.send(200);
      })();
});
app.get("/hit-bouncer", (req, res) => {
    console.log(`Request Came ${req.ip}`);
    (async () => {
        const result = await dbConnect('bouncer-svc.default.svc.cluster.local');
        console.log("Time with pool: " + JSON.stringify(result));
        res.write(JSON.stringify(result));
        res.end();
        //res.send(200);
      })();
});

export { app as server };