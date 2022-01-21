import express from 'express';
import data from './data';

const app = express();

app.get("/api/products", (req, res) => {
    res.send(data.bikeproducts);
})

app.listen(5000, ()  => {console.log('Your localhost:5000 is running the server')});