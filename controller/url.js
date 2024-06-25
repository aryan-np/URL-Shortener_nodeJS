const shortid = require('shortid');
const URL = require ("../models/url")

async function handleGenerateShortUrl(req,res) {
    console.log("everything fine");
    const shortId=shortid(8);
    const body = req.body
    await URL.create({
        shortId: shortId,
        originalLink : body.url,
        visitHistory:[]
        
    })
    console.log("everything fine");
    
    return res.status(200).json({"short_id":shortId})
}

module.exports={
    handleGenerateShortUrl
}