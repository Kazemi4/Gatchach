const router = require('express').Router()
const connection = require("../config")


router.get("/", (req, res) => {
    connection.query("SELECT * FROM user", (err, results) => {
        if (err) {
            res
                .status(500)
                .send(``)
        } else {
            res.status(200).json(results)
        }
    })
})