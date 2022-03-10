import server from "./server.js"
import mongodb from "mongodb"
import dotenv from "dotenv"
import userDAO from "./dao/userDAO.js"
//import influencerDAO from "./dao/influencerDAO.js"

const MongoClient = mongodb.MongoClient
const port = 5000 || 8000

const uri = "mongodb+srv://gambyt:0tE0G1m4wr1Y0b1E@gambyt.ydpng.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"

MongoClient.connect(
    uri,
    {
        useNewUrlParser: true,
        useUnifiedTopology: true}
    )
    .catch(err => {
        console.error(err.stack)
        process.exit(1)
    })
    .then(async client => {
        console.log("begin injection")
        await userDAO.injectDB(client)
        console.log("injection succeeded")
        //await influencerDAO.injectDB(client)
        server.listen(port, () => {
            console.log(`listening on port ${port}`)
        })
    })