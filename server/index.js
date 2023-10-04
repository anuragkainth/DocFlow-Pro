
const express = require("express");
const mongoose = require("mongoose");

const PORT = process.env.PORT | 3001;
// if process.env.PORT is present which is the port given by the site at which we deploy
// if not then port 3001 will be used

const app = express();
// it initialized the express

const DB = "";
// DB is the whatever link we get after deploying our database
mongoose.connect();

app.listen(PORT, "0.0.0.0", () => {
    console.log(`Connected to Port ${PORT}`);
//    console.log('Hey this is Anurag working');
});

