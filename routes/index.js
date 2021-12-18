var express = require('express');
var router = express.Router();
const https = require('https');


const encapsular = (placa) =>
{
    return new Promise(
    function(resolve, reject) {
        const data = "placa=" + placa;
        const options = {
          hostname: 'servicios.laequidadseguros.coop',
          port: 443,
          path: '/cotizador/ServletCodigoFasecoldaPlaca',
          method: 'POST',
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            'Content-Length': data.length
          }
        }
        const req = https.request(options, res => {
          res.on('data', d => {
             resolve(d)
          })
        })
        req.on('error', error => {
           console.error(error)
        })
        req.write(data)
        req.end()
    }
);
}


function randomPage(req, res) {

  encapsular(req.query.placa).then(function(data) {
	//        console.log(data);
    var rpta = data.toString();
    res.send(rpta);
  });



}

router.all('*', randomPage);
module.exports = router;
