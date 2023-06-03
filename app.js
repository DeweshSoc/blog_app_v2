const express = require('express'); // express package exposes a lot of things as a function, we just store that function into the express constant

const app = express(); // express() returns an express app



app.get('/',function(req,res){
  console.log(req);
  res.send('Hello!');  
})






app.listen(3000,function (){
    console.log("server at 3000");
});