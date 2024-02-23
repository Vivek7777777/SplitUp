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


let names = ['Abhi', 'Bob', 'Carry', 'Dobby', 'Eno'];
const transactions = [{
                        id: 1,
                        name: 'Abhi',
                        amount: 150
                    }, 
                    {
                        id: 2,
                        name: 'Bob',
                        amount: 100
                    }];

app.get('/', (req, res) => {
    res.json('Hello World');
});

const userCredential = ['a', '1234'];
const usernames = ['a', 'b', 'c', 'd', 'e'];

app.get('/login', async (req, res) => {
    try{
        await db.query('INSERT INTO users (name, password) VALUES ($1, $2)', userCredential);
        res.send('User created successfully');
    }
    catch(err){
        console.log(err);
    }
});

app.get('/users', async (req, res) => {
    try{
        const result = await db.query('SELECT serial_no FROM users WHERE password = $1', [userCredential[1]]);
        const serial_no = result.rows[0].serial_no;
        usernames.forEach(async user => {
            await db.query('INSERT INTO groups (serial_no, name) VALUES ($1, $2)', [serial_no, user]);
        });    
        
        res.json(serial_no);
    }
    catch(err){
        console.log(err);
    }
});

app.get('/transactions', async (req, res) => {
    try{

    }
    catch(err){
        console.log(err);
    }
});



app.listen(process.env.PORT, (req, res) => {
    console.log(`server side is live on ${process.env.PORT}`);
})