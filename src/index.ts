import express from 'express';
import session from 'express-session';
import bodyParser from 'body-parser';
import * as UserDao from '../src/dao/user-dao';



// App is the set up for Express server
const app = express();

// Set up express to attach sessions
const sess =  {
    secret: 'ERS',
    cookie: { secure: false},
    resave: false,
    saveUninitialized: false
};

// Use of Sessions when the requests to server is made
app.use(session(sess));

// Set up body parser to convert JSON body to JS object and attach to req
app.use(bodyParser.json());

// Routers
app.get('/users/:id', async (req, res) => {
    const users = await UserDao.findById(req.params.id);
    res.json(users);
});

app.patch('/users', async (req, res) => {
    const user = await UserDao.updateUserById(req.body);
    res.json(user);
});

// Create logging middleware
app.use((req, res, next) => {
    console.log('headers: ', req.headers);
    console.log(`Request was made with URL: ${req.url}
    and method: ${req.method}`);
    next(); // Will pass the request on to search for the next piece of middleware
});

// Port that's being listened on and printed to the console
app.listen(3000);
console.log('Application Started on Port: 3000');
