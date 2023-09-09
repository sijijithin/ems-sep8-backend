require('dotenv').config()
const express =require('express')
const cors =require('cors')
require('./DB-connection/connection')
const router =require('./Routes/router');


const server = express()

server.use(cors())
server.use(express.json())
server.use(router)
server.use('/Uploads',express.static("./Uploads"))
const PORT= 4000 || Process.env.PORT

server.listen(PORT,()=>{
    console.log(`Employee server started at port ${PORT}`);
})

server.get('/', (req,res)=>{
    res.send(" <h1> Employee Server started !!!")
})