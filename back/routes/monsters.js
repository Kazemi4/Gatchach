const router = require('express').Router()
const connection = require("../config")

router.get("/", (req, res) => {
    connection.query("SELECT * FROM Monster", (err, results) => {
        if (err) {
            res
                .status(500)
                .send(`erreur lors de la selection de la section dassault lol fdp`)
        } else {
            res.status(200).json(results)
        }
    })
})