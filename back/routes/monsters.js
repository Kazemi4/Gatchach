const router = require('express').Router()
const connection = require("../config")

router.get("/", (req, res) => {
    connection.query("SELECT * FROM Monster", (err, results) =>
})