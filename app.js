const express = require("express")
const dotenv = require("dotenv")
const mongoDBconnect = require("./dbconnect.js")
const cors=require("cors")
const UserRouter = require("./routes/user.routes.js")

dotenv.config()

const app = express()
const PORT=process.env.PORT   
app.use(cors())//for used cross browser or we trying to used in the frontend api call that why it is used 
app.use(express.json())// ir convert the front data to json format before send to the backend 




//Connect Mongodb with import another file
mongoDBconnect(process.env.MONGO_URI)
    .then(() => {
        console.log("mogodb successfully connected ")
        app.listen(PORT, () => console.log(`the server has been up on ${PORT}`))
    })
    .catch((e) => {
        console.log(`something went to wrong when db connected${e}`)
    })




// API routing
app.use(UserRouter)