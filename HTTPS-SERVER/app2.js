import express from 'express';

const port = 5000;

const app = express();

app.get(".well-known/acme-challenge/",(req, res)=>{
    res.send("Hello");
});

app.listen(port);