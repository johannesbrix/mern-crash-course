// const express = require("express");
import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./config/db.js";

dotenv.config();

const app = express();

// request and response
app.get("/", (req, res) => {
    res.send("Server is ready.");
});

// 5000 is the port
app.listen(5000, () => {
    connectDB(); // connect Database 
    console.log("Server started at http://localhost:5000");
});