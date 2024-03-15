const axios = require('axios');
const https = require('node:https');
exports.searchUniversities = async(req,res) =>{
    try{
        const {country} = req.query;
        const response = await axios.get(`https://universities.hipolabs.com/search?country=${country}`,{
        });
        const universities = response.data;
        res.render('search',{universities});
    }catch (error){
        console.error('Error searching universities:',error);
        res.status(500).send('Internal Server Error');
    }
};