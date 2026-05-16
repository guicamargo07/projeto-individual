var express = require("express");
var router = express.Router();

router.get("/", function (req, res) {

    res.redirect("/inicial.html");

});

module.exports = router;