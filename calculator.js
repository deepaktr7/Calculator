const express = require("express")
const app = express()
const port = 3000
const bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({extended: true}));
app.listen(port, function(){
  console.log("server started!")
})

app.post("/", function(req,res){
  var num1 = Number(req.body.Num1);
  var num2 = Number(req.body.Num2);
  var sum = num1 + num2;
  res.send("Sum is " + sum)
})

app.post("/bmicalculator", function(req,res){
  var height = Number(req.body.height);
  var weight = Number(req.body.weight);
  height = height * height;
  var bmi = weight/height;
  res.send("Your BMI score is " + bmi)
})

app.get("/",function(req,res){
  res.sendFile(__dirname + "/index.html");
})

app.get("/bmicalculator",function(req,res){
  res.sendFile(__dirname + "/bmi.html");
})
