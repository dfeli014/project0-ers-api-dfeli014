import express from 'express';
import session from 'express-session';
import bodyParser from 'body-parser';
import { userRouter } from './routers/user.router';
import { reimbursementRouter } from './routers/reimbursements.router';
import { loginRouter } from './routers/login.router';

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

// Create logging middleware
app.use((req, res, next) => {
    console.log('headers: ', req.headers);
    console.log(`Request was made with URL: ${req.url}
    and method: ${req.method}`);
    next(); // Will pass the request on to search for the next piece of middleware
});

// Set up body parser to convert JSON body to JS object and attach to req
app.use(bodyParser.json());

// Routers to Endpoints
app.use('/login', loginRouter);
app.use('/users', userRouter);
app.use('/reimbursements', reimbursementRouter);

// Port that's being listened on and printed to the console
app.listen(3000);
console.log('Application Started on Port: 3000');
