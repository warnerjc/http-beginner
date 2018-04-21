const http = require("http");

const goodPort = 7000;
const badPort = 7500;

function goodRequest(request, response) {
    response.end("You are such an amazing person! Welcome!");
}

function badRequest(request, response) {
    response.end("Uggh - why did we even let you in here!");
}

let goodServer = http.createServer(goodRequest);
let badServer = http.createServer(badRequest);

goodServer.listen(goodPort, function () {
    console.log("Good Server listening on: http://localhost:" + goodPort);
});

badServer.listen(badPort, function() {
    console.log("Bad Server listening on: http://localhost:" + badPort);
});