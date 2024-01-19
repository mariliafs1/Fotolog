const mongoose = require("mongoose");

require("dotenv").config();

mongoose.set("strictQuery", true);

async function main(){
    mongoose.connect(`mongodb+srv://${process.env.DBUSER}:${process.env.DBPASS}@cluster0.a6a5us8.mongodb.net/?retryWrites=true&w=majority`
).then(()=>{
    console.log("Conctado com sucesso!")
}).catch(()=>console.log("nao conectou no banco!"));

    
}

main();

module.exports = main;
