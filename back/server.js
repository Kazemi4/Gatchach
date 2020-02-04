// First step : npm init y 
// Second step : npm i nodemon 
// Third step :  npm i express
// Four step : npm i body parser
// Fifth step : npm i cors
// Sixth step : npm i mysql
// Seventh step : npm i dotenv



//Import Require and Port.
const express = require('express')()
const body = require('body-parser')
const cors = require('cors')
// const mysql = require('mysql')
const port = 5000


//middleware

express.use(body.json())
express.use(body.urlencoded({
    extended:true
}))

express.use(cors({
    origin:"https://localhost:3000", 
    optionsSuccessStatus:200
}))




// There's our listener on port 5000
express.listen(port, err => {
    if(err){
        throw new Error('It failed to load.')
    }
    else{
        console.log(`https://localhost:${port}`)
    }
})
