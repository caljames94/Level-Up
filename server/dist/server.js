"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var connection_1 = require("./config/connection");
var app = (0, express_1.default)();
var PORT = process.env.PORT || 3001;
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
// Force true to drop/recreate table(s) on every sync
connection_1.default.sync({ force: true }).then(function () {
    app.listen(PORT, function () {
        console.log("Server is running on port ".concat(PORT));
    });
});
