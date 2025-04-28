"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var dotenv_1 = require("dotenv");
(0, dotenv_1.config)();
var express = require('express');
var app = express();
var port = process.env.PORT;
app.listen(port, function () {
    console.log("App is listening on port ".concat(port));
});
