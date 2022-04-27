const countries = require("../data/countries").countries;
// import countries from '../data/countries'

exports.get = (req,res)=>{
    if (!req.body) {
        res.status(400).send({
          message: "Content can not be empty!"
        });
    }
    let page=req.query.page;
    let perPage=req.query.perPage;
    let countryStart = (page-1)*perPage+1;
    let countryEnd = (page)*perPage;

    
    

    
    const sliceCountries= countries.slice(countryStart-1,countryEnd);

    const resCountries = {
        name:"Countries",
        list:sliceCountries,
        endList: Math.floor(countries.length/perPage)+countries.length%perPage
    }
    res.status(200).send(resCountries);
}