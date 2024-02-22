import express from 'express';

const app = express();

// app.use();


app.get('/', (req, res) => {
    res.json("hi");
});


app.listen(3001, (req, res) => {
    console.log(`server side is line on 3001`);
})