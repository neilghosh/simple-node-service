import pg from 'pg'

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
        const now = await client.query("SELECT NOW()");
        var endQuery = performance.now()
        let connectTime = endConnect - startTime;
        let queryTime = endQuery - startTime;
        let overallTime = endQuery - startTime;
        await client.end();
        let result;
        result.connectTime = connectTime;
        result.queryTime = queryTime;
        result.overallTime = overallTime;
        result.data = now.row;
        result.rowCount = now.rowCount;
        return now;
    } catch (error) {
        console.log(error);
        return error;
    }
}
export { dbConnect as dbConnect };
