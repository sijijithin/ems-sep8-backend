const mongoose = require('mongoose')
const connectionString =process.env.DATABASE
mongoose.connect(connectionString,{
    useUnifiedTopology:true,
    useNewUrlParser:true
}).then(()=>{
    console.log("Mongoose Atlas connected to employee server !!!");
}).catch((err)=>{
    console.log(`Mongose Connection failed !!! Errore : ${err}`);
})