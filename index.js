const express = require('express');
const bodyParser = require('body-parser');
const route = require("./src/Route/route")
const { default: mongoose } = require('mongoose');
//const { Route } = require('express');
const app = express();


app.use(bodyParser.json());




mongoose.connect("mongodb://localhost:27017/URL", {
    useNewUrlParser: true
})
.then( () => console.log("MongoDb is connected"))
.catch ( err => console.log(err) )

app.use('/', route);


app.listen(3000)
    console.log('Express app running on port ' + (process.env.PORT || 3000))