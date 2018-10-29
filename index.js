const express = require('express')
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')
const mongoose = require('mongoose')
const config = require('./config/keys')
const app = express()


mongoose.Promise = global.Promise;
mongoose.connect(config.mongoURI, { useNewUrlParser: true })



app.use(bodyParser.json())
app.use(cookieParser())

require('./routes/userRoutes')(app)






const port = process.env.PORT || 4000

app.listen(port, () =>{
    console.log(`Listening on port ${port}`)
})