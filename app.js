const express = require('express');
const app = express();
const path = require('path');
const SerialPort = require('serialport').SerialPort;
const sp = new SerialPort( { path:'/dev/ttyACM0', baudRate: 9600 });
const port = 3000; 
/**************************************************************************/
app.get('/init',function(req,res) {

	sp.write('in\n', function(err){
		if (err) {
            return console.log('Error on write: ', err.message);
        }
        console.log('init pt');
		res.writeHead(200, {'Content-Type': 'text/plain'});
		res.end('Init PT\n');
	});

}); 
/**************************************************************************/

app.get('/up',function(req,res) {
    //console.log('=====');
	sp.write('up\n', function(err){
		if (err) {
            return console.log('Error on write: ', err.message);
        }
        console.log('tilt up');
		res.writeHead(200, {'Content-Type': 'text/plain'});
		res.end('Tilt Up\n');
	});

}); 
/**************************************************************************/

app.get('/down',function(req,res)

{

	sp.write('dn\n', function(err){
		if (err) {

            return console.log('Error on write: ', err.message);
        }
        console.log('tilt down');

		res.writeHead(200, {'Content-Type': 'text/plain'});

		res.end('Tilt Down\n');

	}); 

});
/**************************************************************************/
app.get('/left',function(req,res)

{

	sp.write('lt\n', function(err){
		if (err) {

            return console.log('Error on write: ', err.message);
        }
        console.log('pan left');

		res.writeHead(200, {'Content-Type': 'text/plain'});

		res.end('Pan Left\n');

	}); 

});
/**************************************************************************/
app.get('/right',function(req,res)

{

	sp.write('rt\n', function(err){
		if (err) {

            return console.log('Error on write: ', err.message);
        }
        console.log('pan right');

		res.writeHead(200, {'Content-Type': 'text/plain'});

		res.end('Pan Right\n');

	});

});
/**************************************************************************/
app.get('/capture',function(req,res)

{
    console.log("=====");

		res.writeHead(200, {'Content-Type': 'text/plain'});

		res.end('Pan Right\n');
});
/**************************************************************************/

 

app.use(express.static(__dirname + '/public'));

 

app.listen(port, function() {

    console.log('listening on *:' + port);

});
