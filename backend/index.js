require('dotenv').config();

const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');

const PORT = process.env.PORT;

const elementRouter = require('./routers/elementRouter');

app.use(cors());
app.use(bodyParser.urlencoded({extended: false}));

app.use(bodyParser.json());

app.use('/api/elements', elementRouter);

app.use((err,req, res, next) => {
    console.log(err.stack);
    console.log(err.name);
    console.log(req.code);

    res.status(500).json({
        message: "Ups! Something went wrong 🥺"
    });
});

app.listen(PORT, () => {
    console.log(`======================================`);
    console.log(`||          H O T E L E             ||`);
    console.log(`||🦫 Server running on PORT ${PORT}     ||`);
    console.log(`||       Made by                     ||`);
    console.log(`||       Mariusz Jacek               ||`);
    console.log(`||       Stanisław Fal               ||`);
    console.log(`||       Jakub Hodyr                 ||`);
    console.log(`=====================================`);

})