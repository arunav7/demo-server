const express = require('express');
const hbs = require('hbs');
const port = process.env.PORT || 3000;

var app = express();

app.set('view engine','hbs');

app.use((req,res,next) => {
    next();
})

app.get('/', (req,res) => {
    res.render('home.hbs',{
        msg: 'HOME PAGE'
    });
});

app.listen(port, () => {
    console.log(`Server is up on ${port}`);
});