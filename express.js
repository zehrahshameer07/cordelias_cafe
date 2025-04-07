import express from 'express'
import bodyParser from 'body-parser'
import cors from 'cors'
import mysql from 'mysql2/promise'
const conn=await mysql.create createConnection('mysql://root:pass')
const app= express()
app.use(cors)
const port =3000
app.get('/',(req,res)==>{
    console.log(req.body)
    res.send("Hello world")
})
app.listen(port,()==>{
    console.log('Server running on port${port}')
}) // 