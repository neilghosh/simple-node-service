import pg from 'pg'
import {performance} from 'perf_hooks';

const { Client } = pg
async function dbConnect(dbhost) {
    const client = new Client({
        user: process.env.DB_USER,
        host: dbhost,
        database: process.env.DB_NAME,
        password: process.env.DB_PASS,
        port: 5432,
    })
    try {
        var startTime = performance.now();
        await client.connect();
        var endConnect = performance.now()
        const now = await client.query("select generate_series(1, 200)");
        var endQuery = performance.now()
        let connectTime = endConnect - startTime;
        let queryTime = endQuery - endConnect;
        let overallTime = endQuery - startTime;
        await client.end();
        let result = {};
        result.connectTime = connectTime;
        result.queryTime = queryTime;
        result.overallTime = overallTime;
        result.data = now.rows;
        result.rowCount = now.rowCount;
        return result;
    } catch (error) {
        console.log(error);
        return error;
    }
}
export { dbConnect as dbConnect };
