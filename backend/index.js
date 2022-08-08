const express = require('express');
//const session = require('express-session')
const bodyParser = require('body-parser');
const routeHandler = require('./routes/handler.js');
//const MongoStore = require('connect-mongo');

const app = express()

// const options = {
//     mongoUrl: "mongodb+srv://Mohmag111:Mohmag078@cluster0.w5sp9.mongodb.net/?retryWrites=true&w=majority",
//     secret: 'yep'
// }

// app.use(session({
//     secret: 'good-secret',
//    // store: MongoStore.create(options),
//     resave: true,
//     saveUninitialized: true
// }))

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
app.use('/', routeHandler);

const PORT = 4000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
});