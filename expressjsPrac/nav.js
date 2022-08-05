const express = require('express')

const app = express()
const port = 3000

app.get('/', (req, res) =>{
    res.status(500).send('welcome to home page')
})

app.get("/about", (req, res) => {
  res.status(500).send("welcome to about page");
});

app.listen(port, () =>{
    console.log(`listening to port ${port}`);
})