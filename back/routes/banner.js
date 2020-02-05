const router = require('express').Router()
const connection = require("../config")


router.get("/", (req, res) => {
    connection.query("SELECT * FROM banner", (err, results) => {
        if (err) {
            res
                .status(500)
                .send(`Error`)
        } else {
            res.status(200).json(results)
        }
    })
})


router.get("/:id/monster",(req, res) => {
    const params = req.params.id
    connection.query("SELECT * FROM banner_monster WHERE id_banner = ?", params, (err, results) => {
        if(err) {
            res
                .status(500)
                .send(`Error`)
        } else {
            res.status(200).json(results)
        }
    })
})

module.exports = router