//Importing
const express = require('express');
const mongoose = require('mongoose');
const detailsRoute = require('./Routes/detailsRoutes')
const bodyParser = require('body-parser')
const cors = require('cors')


// constant
const mongoDBLink = 'mongodb://127.0.0.1:27017/PostApiPractice';
const PORT = 4500;

// Connect to mongoDB
mongoose.connect(mongoDBLink,()=>{
    console.log('Connected MongoDB');
},e=>console.log(e))

//Server Config
const app = express();

//Middleware
app.use(cors())
app.use(bodyParser.json())
app.use('/details', detailsRoute)
app.use('/details/all', detailsRoute)



//Listner
app.listen(PORT, () => {
    console.log(`Server Running ${PORT}`);
})