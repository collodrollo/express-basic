const express = require("express");
const router = express.Router();

router.route('/')
    .get((req, res) => {
        res.send("YA GOT A BOOK")
    })
    .post((req, res) => {
        res.send("YA POSTED A BOOK")
    })
    .delete((req, res) => {
        res.send("YA DELETED A BOOK")
    })
    .put((req, res) => {
        res.send("YA PUT A BOOK")
    })

module.exports = router;
