const express = require ('express')
const {handleGenerateShortUrl} = require('../controller/url')

const router = express.Router()

router.post('/',handleGenerateShortUrl)
console.log("everything fine");

module.exports=router;