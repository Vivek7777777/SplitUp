import express from 'express';
import pg from 'pg';
import dotenv from 'dotenv';

const app = express();

dotenv.config();

// console.log(process.env.DB_PORT);

const db = new pg.Client({
    user: process.env.DB_USER,
    host: process.env.DB_HOST,
    database: process.env.DB_NAME,
    password: process.env.DB_PASSWORD,
    port: process.env.DB_PORT
});

db.connect().then(() => console.log('Connected to the database'))
    .catch(err => console.error('Failed to connect to the database', err.stack));

app.get('/', (req, res) => {
    res.json('Hello World');
});

let names = ['John', 'Doe', 'Jane', 'Dom'];

app.get('/insert', async (req, res) => {
    try {
        await db.query('CREATE TABLE IF NOT EXISTS usersss (payor varchar(50), ($1) int, ($2) int, ($3) int, ($4) int)', names);
        // await db.query('CREATE TABLE IF NOT EXISTS test (id SERIAL PRIMARY KEY, name VARCHAR(50), email VARCHAR(50))');
        // const result = item.rows;
        // console.log(result);
        // res.json(result);
        res.json('Hello World');
    }
    catch (err) {
        console.log(err);
    }
});


app.listen(process.env.PORT, (req, res) => {
    console.log(`server side is live on ${process.env.PORT}`);
})