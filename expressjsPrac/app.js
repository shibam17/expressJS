const express = require('express') //get express

const app = express() //use express - app is creates with express

app.get('/', (req, res) =>{
  res.send("hello from express")
})

app.listen(8000, () =>{
    console.log("listening at 80000");
})