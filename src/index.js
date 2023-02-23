const app = require('./app');
// const dotenv = require('dotenv').config({ path: "./.env" })
const mongoose = require('mongoose');


// dotenv.config();
//connect to DB
mongoose.connect("mongodb://127.0.0.1:27017/blogs",{ useNewUrlParser: true, useUnifiedTopology: true }, () => {
    console.log('connected to DB')
})


app.listen(3000, () => console.log('Server running......'));

