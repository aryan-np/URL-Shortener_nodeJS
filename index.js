const express = require ('express')
const URL = require("./models/url")
const urlroute = require ('./routes/url')
const {connectMongoDB}= require("./connect")

const app = express()
const port = 8001

app.use(express.json())
app.use("/url",urlroute)

app.get("/:shortId",async(req,res)=>{
    const shorturl=req.params.shortId;
    const entry = await URL.findOneAndUpdate({
        shortId:shorturl
    },
    {$push:{
        visitHistory:{
            timestamp: Date.now()
        }
    }

    }) 
    return res.redirect(entry.originalLink)
})

connectMongoDB("mongodb+srv://&lt;username&gt;:&lt;password&gt;@&lt;cluster-url&gt;/urlDb")
.then(()=>console.log("connection Successful"))
.catch(()=>console.log("Faced some error during connection to mongo db"))

app.listen(port,()=>console.log("Connection Established with mongo db"))
