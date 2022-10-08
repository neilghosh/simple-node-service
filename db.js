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
        await client.connect();
        const now = await client.query("SELECT NOW()");
        await client.end();

        return now;
    } catch (error) {
        console.log(error);
        return error;
    }
}
export { dbConnect as dbConnect };
