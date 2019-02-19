const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const bcrypt = require('bcrypt-nodejs');
const cors = require('cors');

const dataBase = [
    {
        id: '1',
        name: 'Kate',
        email: 'kate@gmail.com',
        password: 'puppydog',
        entries: 0
    },

    {
        id: '2',
        name: 'Bill',
        email: 'billy@gmail.com',
        password: 't-rex',
        entries: 0
    },

    {
        id: '3',
        name: 'Ondria',
        email: 'ondria@gmail.com',
        password: 'shoesandtatoos',
        entries: 0
    }
]


app.use(bodyParser.json());
app.use(cors());

app.get('/', (req, res) => {
    res.send(dataBase);
})

app.post('/signin', (req, res) => {
    if( req.body.email === dataBase[0].email 
        && req.body.password === dataBase[0].password) {
        res.json('You successfully signed in');
    } else {
        res.status(400).json('Failed Signin')
    }
})


app.post('/register', (req, res) => {
    const { name, email, password } = req.body;
    bcrypt.hash(password, null, null, (err, hash) => {
        // Store hash in your password DB.
        console.log(hash);
      });
    dataBase.push({
        name: name,
        email: email,
        password: password,
        joined: new Date()
    })
    res.json(dataBase[dataBase.length - 1]);
})

app.get('/profile/:id', (req, res) => {
    const { id } = req.params;
    let found = false;
    dataBase.forEach(user => {
        if(user.id === id) {
            found = true;
            return res.json(user);
        }
    })
    if(found === false) {
        return res.status(400).json('User Not Found')
    }
})


app.put('/image', (req, res) => {
    const { id } = req.body;
    let found = false;
    dataBase.forEach(user => {
        if(user.id === id) {
            found = true;
            user.entries++;
            return res.json(user.entries);
        }
    })
    if(found === false) {
        return res.status(400).json('User Not Found')
    }
})

app.listen(3001, () => {
    console.log('Server is Running on Port: 3001');
})