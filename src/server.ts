import {createServer } from "node:http"


const PORT:number= 3000

const app= createServer()

app.listen(()=>{
  console.log(`server is running on port ${PORT}`)
},PORT)