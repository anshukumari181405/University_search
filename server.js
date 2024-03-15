const express = require('express');
const mysql = require('mysql');
const axios = require('axios');
const searchRouter = require('./routes/search');
const favoritesRouter = require('./routes/favorites');

const app = express();

const PORT = 8080;

//Database Connection

const dbConfig = {
    host: 'localhost',
    user: 'root',
    password: 'Akash123',
    database: 'university_db'
};

app.use(express.static('public'));
app.set('view engine', 'ejs');

app.use(express.urlencoded({extended: true}));

//Middleware
app.use(async (req,res,next) => {
    try{
        const connection = await mysql.createConnection(dbConfig);
        req.db = connection;
        next();
    } catch (error){
        console.error('Error connecting to database');
        res.status(500).send('Internal Server Error');
    }
});

//Routes
app.use('/search', searchRouter);
app.use('/favorites', favoritesRouter);

app.listen(PORT, () =>{
    console.log(`Server is running on http://localhost:${PORT}`);
})