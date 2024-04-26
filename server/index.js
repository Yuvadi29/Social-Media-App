const express = require("express");
const dotenv = require("dotenv");

const app = express();

dotenv.config();

const PORT = process.env.PORT;


app.get("/", (req, res) => {
    res.send("Server is Running Successfully");
});


app.listen(PORT, () => {
    console.log(`Server Running on PORT ${PORT}`);
})
