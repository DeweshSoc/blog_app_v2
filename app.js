const express = require("express"); // express package exposes a lot of things as a function, we just store that function into the express constant
const app = express(); // express() returns an express app

app.use(express.urlencoded());


const blogs = []; //array to store the blogs --> an array of objects

app.get("/", function (req, res) {
  res.sendFile(__dirname + "/index.html");
});


app.post("/send", function (req, res) {

  const authorName = req.body.author; 
  const blog = req.body.blog;


  blogs.push({
    author: authorName,
    blogContent: blog,
  });

  console.log(blogs);

  res.send(blogs);


});

app.listen(3000, function () {
  console.log("server at 3000");
});

/*
want something from server -> make a GET request
want to give somthing to the server -> make a POST request


*/


