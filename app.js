const express = require('express');
const app = express();
const PORT = process.env.PORT || 3500;

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

const writeRead = require('./routes/writeRead');
const updataDelete = require('./routes/updataDelete');
app.use('/wr', writeRead);
app.use('/ud', updataDelete);


app.use("/", function(req, res){
    res.send("Hello");
});

app.listen(PORT, ()=>{
    console.log("Server running at http://localhost:"+PORT);
});