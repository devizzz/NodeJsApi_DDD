require("dotenv").config();

const PRODUCTION = require("./prod");
const DEVELOPMENT = require("./dev");

const { NODE_ENV } = process.env;

let currentEnv = DEVELOPMENT;

if(NODE_ENV === "production"){
    currentEnv = PRODUCTION;
}

module.exports = currentEnv;