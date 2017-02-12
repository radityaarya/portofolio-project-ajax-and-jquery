var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
//   let color= ["red", "blue", "green", "brown", "pink", "gray", "black", "Navy ", "Aqua",
//               "RebeccaPurple", "lime", "MediumVioletRed", "AliceBlue",
//               "Chartreuse", "Crimson", "DarkMagenta", "DarkSlateBlue ", "Chocolate", "Coral", "Gold", "GreenYellow", "MidnightBlue"]
  let randomIndex = Math.ceil(Math.random() * 9)
  let color1 = Math.floor(Math.random() * 255)
  let color2 = Math.floor(Math.random() * 255)
  let color3 = Math.floor(Math.random() * 255)
  let allColors = `rgb(${color1}, ${color2}, ${color3})`
  res.send({index : randomIndex, color: allColors })
});

module.exports = router;
