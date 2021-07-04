const express = require("express");
const cors = require('cors');
const jwt =require("jsonwebtoken");


require("./src/db/connect");




const userdata = require("./src/model/userdata");
const authordata = require("./src/model/authordata");
const bookdata =require("./src/model/bookdata");

const app = new express();

app.use(cors());
app.use(express.json());

// admin 
const admin = "admin@gmail.com";
const adminPwd="123456@aA";
const role = "@";
const secretKey="hai good morning";

//token verification--------------------start
function verifyToken(req, res, next) {
  
    if(!req.headers.authorization) {
      
  
      return res.status(401).send('Unauthorized request')
    }
    let token = req.headers.authorization.split(' ')[1]
    if(token === 'null') {
      
      return res.status(401).send('Unauthorized request')    
    }
    let payload = jwt.verify(token, 'secretKey')
    if(!payload) {
      return res.status(401).send('Unauthorized request')    
    }
    req.userId = payload.subject
    next()
  }



//token verification--------------------ends


// user signup -------------- starts

app.post("/signup",async (req,res)=>{

    console.log(req.body);

    var item = {
        uname: req.body.uname,
        email: req.body.email,
        password: req.body.password
        } 
    
        var user = await userdata(item);
        user.save(function(err) {
          if (err) {
            if (err.name === 'MongoError' && err.code === 11000) {
              // Duplicate username
              return  res.status(404).json(err)
            }
      
            // Some other error
            return res.status(422).json(err);
          }
         res.json("user added");
          
        }) 

    
});

// user signup -------------- ends

// user login -------------- starts

app.post('/login', async (req, res) => {
     
              const userrole= 0;
              const email = req.body.email;
              const password = req.body.password;
              const udata = await userdata.findOne({email: email})
              
              if(udata==null){
                return res.status(404).send("userdata not present");
              }

               if(email===admin && password===adminPwd){
                let payload = {subject: role}
                let token = jwt.sign(payload, 'secretKey')
                return  res.status(200).send({token});
              }if(udata.email===email && udata.password===password){
                let payload = {subject: email+password}
                let token = jwt.sign(payload, 'secretKey')
                 res.status(200).send({token});
              }
              else{
                res.status(405).send("something Went Wrong Try Again");
              }
 
  
})


// user login -------------- ends




// addbook-------------------- starts

app.post('/addbook',verifyToken,(req,res)=>{
  console.log(req.body);
  var item = {
    title: req.body.title,
    author: req.body.author,
    gener: req.body.gener,
    image: req.body.image

}

    var book = bookdata(item);
    book.save();
   res.status(200).json("user Added");
})


app.get('/books',verifyToken,(req,res)=>{
  bookdata.find()
  .then(function(products){
      res.send(products);
  });

 app.get("/book/:id",verifyToken,(req,res)=>{
  const id = req.params.id;
  bookdata.findOne({"_id":id})
  .then((book)=>{
      res.send(book);
  });
 }) 

})
app.put('/book/update',verifyToken,(req,res)=>{
  console.log(req.body)
  id=req.body._id,
  title= req.body.title,
  author= req.body.author,
  gener = req.body.gener,
  image= req.body.image,
  
 bookdata.findByIdAndUpdate({"_id":id},
                              {$set:{"title":title,
                              "author":author,
                              "gener":gener,
                              "image":image,
                               }})
 .then(function(){
     res.send();
 })
})


app.delete('/bookremove/:id',verifyToken,(req,res)=>{
   
  id = req.params.id;
  bookdata.findByIdAndDelete({"_id":id})
  .then(()=>{
      console.log('success')
      res.send();
  })
})
  


// addbook-------------------- ends




// autgors section -----------------starts


app.post('/addauthor',verifyToken,(req,res)=>{
  console.log(req.body);
  var item = {
    info: req.body.info,
    authorname: req.body.authorname,
    gener: req.body.gener,
    image: req.body.image

}

    var author = authordata(item);
    author.save();
   res.status(200).json("user Added");
})


app.get('/authors',verifyToken,(req,res)=>{
  authordata.find()
  .then(function(authors){
      res.send(authors);
  });

 app.get("/author/:id",verifyToken,(req,res)=>{
  const id = req.params.id;
  authordata.findOne({"_id":id})
  .then((author)=>{
      res.send(author);
  });
 }) 

})
app.put('/author/update',verifyToken,(req,res)=>{
  console.log(req.body);
  
  id=req.body._id,
  info= req.body.info;
  authorname= req.body.authorname;
  gener = req.body.gener;
  image= req.body.image;


  console.log(authorname);
 authordata.findByIdAndUpdate({"_id":id},
                              {$set:{"info":info,
                              "authorname":authorname,
                              "gener":gener,
                              "image":image,
                               }})
 .then(function(){
     res.send();
 })
})




// authors section -----------------enda

app.listen(3000, function(){
    console.log('listening to port 3000');
});


