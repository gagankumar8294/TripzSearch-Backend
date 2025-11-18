import express from "express";
import bodyParser from "body-parser";

const server = express();
server.use(bodyParser.json());

server.get('/', (req, res) => {
    res.send("Welcome to Home route")
})

server.use((req, res) => {
    res.send('Api Not Found - Please Look for the correct Api')
})

server.listen(3200, () => {
    console.log('server Listening on port http://localhost:3200')
})