const express = require('express');
const app = express();
const port = 3000;

//
app.get("/",(req, res) => {
    res.send("Hallo, ini halama Home dengan method get");
})

//membuat middlewer untuk menerima request body dari json
app.use(express.json());

// membuat route kehalaman submit dengan method post
app.post("/submit",(req, res) => {
    const {name} = req.body;
    res.send('hello, ${name}!');
});

app.listen(port, () => {
    console.log('server running at http://localhost:${port}/');
})