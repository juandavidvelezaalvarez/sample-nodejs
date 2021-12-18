var express = require('express');
var router = express.Router();

function randomPage(req, res) {
  res.send('que se cuenta');
}

router.all('*', randomPage);
module.exports = router;
