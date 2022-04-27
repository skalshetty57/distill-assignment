

module.exports = (app)=>{
    const countries = require("../controller/country.controller")
    const router = require("express").Router();

    router.get('/',countries.get);

    app.use("/countries",router);
}