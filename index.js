const express = require('express')
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')
const mongoose = require('mongoose')
const keys = require('./config/keys')
const app = express()


mongoose.Promise = global.Promise;
mongoose.connect(keys.mongoURI, { useNewUrlParser: true })



app.use(bodyParser.json())
app.use(cookieParser())

require('./routes/userRoutes')(app)
require('./routes/drinkRoutes')(app)






const PORT = process.env.PORT || 4000

app.listen(PORT, () =>{
    console.log(`Listening on port ${PORT}`)
})