const express = require('express');
const app = express();
const bodyParser = require('body-parser');


const dataBase = [
    {
        name: 'Kate',
        email: 'kate@gmail.com',
        password: 'puppydog'
    },

    {
        name: 'Bill',
        email: 'billy@gmail.com',
        password: 't-rex'
    },

    {
        name: 'Ondria',
        email: 'ondria@gmail.com',
        password: 'shoesandtatoos'
    }
]


app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.send(dataBase);
})

app.post('/signin', (req, res) => {
    if((req.body.name === dataBase[0].name && req.body.email === dataBase[0].email) 
        && req.body.password === dataBase[0].password) {
        res.json('You successfully signed in');
    } else {
        res.status(400).json('Failed Signin')
    }
})


app.post('/register', (req, res) => {
    const { name, email, password } = req.body;
    dataBase.push({
        name: name,
        email: email,
        password: password,
        joined: new Date()
    })
    res.json(dataBase[dataBase.length - 1]);
})

app.listen(3001, () => {
    console.log('Server is Running on Port: 3001');
})