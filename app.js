const express = require("express"); // express package exposes a lot of things as a function, we just store that function into the express constant
const mongoose = require("mongoose"); // exposes an object

const app = express(); // express() returns an express app

app.use(express.urlencoded({extended:true}));



const blogSchema = new mongoose.Schema({
    authorName:{
        type:String,
    },
    blog:{
        type:String
    }
})

const BlogModel = mongoose.model('blog',blogSchema);






app.get("/", function (req, res) {
  res.sendFile(__dirname + "/index.html");
});


app.post("/send", function (req, res) {

  const authorName = req.body.author; 
  const blog = req.body.blog;

//  NO LONGER NEEDED, AS WE WILL BE USING MONGODB
//   blogs.push({
//     author: authorName,
//     blogContent: blog,
//   });
//   console.log(blogs);
//   res.send(blogs);



  const newBlog = new BlogModel({
      authorName: req.body.author,
      blog: req.body.blog
  });

  newBlog.save()
  .then(function(){
    console.log('new blog created!');
  })

});





const uri = "mongodb://localhost:27017/blogDB";

mongoose.connect(uri).then(function(){
    console.log('Database connected');
    app.listen(3000, function () {
      console.log("server at 3000");
    });
})

/*

mongoose.connect() // returns a promise

mongoose.connect().then(function(){ console.log('here')  })

// to make blogs collection -> first create a blog model



*/


/*
want something from server -> make a GET request
want to give somthing to the server -> make a POST request


*/


