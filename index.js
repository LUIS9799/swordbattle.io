const express = require("express");
const http = require("http");
require("dotenv").config();
const { Server } = require("socket.io");
const app = express();
var cors = require("cors");
var fs = require("fs");

/*
var server;
if(process.env.PRODUCTION==="true") {
	var options = {
		key: fs.readFileSync("./ssl/privatekey.pem"),
		cert: fs.readFileSync("./ssl/certificate.pem"),
	};
 server = http.createServer(options, app);
} else {

 server = http.createServer(app);
}*/

const server = http.createServer(app);

app.get('/', (req,res) => {
	res.redirect("https://www.swordbattle.io")
})

server.listen(process.env.PORT || 3000, () => {
	console.log("server started");
});
