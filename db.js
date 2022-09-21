import pg from 'pg'

const { Client } = pg
function dbConnect() {
    const client = new Client({
        user: process.env.DB_USER,
        host: process.env.INSTANCE_HOST,
        database: process.env.DB_NAME,
        password: process.env.DB_PASS,
        port: 5432,
    })
    client.connect()
    client.query('SELECT NOW()', (err, res) => {
        console.log(err, res)
        client.end()
    })
};

export { dbConnect as dbConnect };
