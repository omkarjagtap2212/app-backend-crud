const mongoose = require("mongoose")

   const mongoDBconnect=async(uri)=>{
    try {
     await   mongoose.connect(uri)
        
    } catch (error) {
        console.log(error)

        
    }

}


module.exports=mongoDBconnect