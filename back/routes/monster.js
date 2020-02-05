const router = require('express').Router()
const connection = require("../config")

router.get("/", (req, res) => {
    connection.query("SELECT * FROM monster", (err, results) => {
        if (err) {
            res
                .status(500)
                .send(`Error`)
        } else {
            res.status(200).json(results)
        }
    })
})




module.exports = router