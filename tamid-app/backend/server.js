const express = require('express')
const path = require("path")
const app = express()

app.use(express.static(path.join(__dirname, "..", "frontend")));

app.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname, "..", "frontend", "index.html"))
})

app.get("/abigailrosenfeld", (req, res) => {
  res.sendFile(path.join(__dirname, "..", "frontend", "abigail.html"));
});

app.get("/mattheweichenholz", (req, res) => {
  res.sendFile(path.join(__dirname, "..", "frontend", "matthew.html"));
});

app.get("/remyeidelman", (req, res) => {
  res.sendFile(path.join(__dirname, "..", "frontend", "remy.html"));
});

app.listen(4000,() => {
    console.log("Listening on port 4000")

})
