import express from "express";
import cors from 'cors';
import bodyParser from "body-parser";
import toursRouter from "./src/tours/tours.router.js";
import AdminRouter from './src/admin/admin.routes.js'
import connectDB from "./config/db.js";
import dotenv from "dotenv";

dotenv.config();

const server = express();

// Connect to MongoDB
await connectDB();

// CORS - allow any frontend to use API
server.use(cors({
    origin: "*",
    methods: ["GET", "POST", "PUT", "DELETE", "PATCH"],
    allowedHeaders: ["Content-Type", "Authorization"]
}));

// Middlewares
server.use(bodyParser.json());

// Routes
server.use('/api/tours', toursRouter);
server.use('/api/admin', AdminRouter);

// Home Route
server.get('/', (req, res) => {
    res.send("Welcome to Home Route");
});

// 404 Handler
server.use((req, res) => {
    res.status(404).send('API Not Found - Please check the route');
});

// Start Server
server.listen(3200, () => {
    console.log("Server listening on http://localhost:3200");
});
