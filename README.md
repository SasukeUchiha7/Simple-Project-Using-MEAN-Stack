## Simple Phonebook Using MEAN

Hello guys!,
 This project is for people who are newbie/beginners like me in the web-development field.
 So in this project we are using MEAN which stands for (Mongodb Express Angular NodeJS).
 So basically we are using these to build our mini project.
 ### Reqiurements
You need the following :
- A Code editor(here we are using VSCode) 
- NodeJS
- MongoDB
### Installations
Here I'm Guessing you are familiar with NodeJS and npm module.
Otherwise please follow up any tutorial in YouTube, there are so many.
Here is the basic things you need to setup.

Make a project folder. In that folder open command shell and type :
```
npm init
```
It will ask bunch of things and will create a **package.json** file for you.

Now you need to install all the depedencies you need so run :
```cmd
npm i --save express body-parser cors moongoose @angular/cli
```
* express : Since you are using express framework for this project.
* body-parser: To read body contents.
* cors: Since the client and server will be on different urls.
* angular/cli: Here you are using angular/cli module of npm .

### Building
Now you have to make your main/starting file like here you have _app.js_.

Now you have to start mongo DB server. For that in your mongoshell run:
```cmd
mongod -dbpath -"location to store your data of db"
```
Now you have to connect to this database , for that make a connection in your entry file :
```js
mongoose.connect("mongodb://localhost:27017/DBNAME", { useNewUrlParser: true, useUnifiedTopology: true});
mongoose.connection.on('connected',()=>{
    console.log("Connected to the Database");
});
mongoose.connection.on('error',(err)=>{
    if(err)
    console.log("Error connecting Database "+ err);
});
```
After that you have to make your Database Scheama for storing data in a format.
```js
const mongoose  = require('mongoose');

var ContactSchema = mongoose.Schema({
    first_name: {
        type : String,
        required : true
    },
    last_name: {
        type : String,
        required : true
    },
    phone: {
        type : String,
        required : true
    }
});

const Contact = module.exports = mongoose.model("Contact", ContactSchema);
```
Now you have to make some routes for your project for retrieving, adding and deleting Contacts.
Its always nice to separate your code in groups, make routes folder add different routes.
```js
const express = require('express');
const router  = express.Router();
const Contact = require("../models/contacts");

//Retrieve Contacts
router.get("/contacts",(req,res, next)=>{
});
//Add Contacts
router.post("/contact", (req,res,next)=>{
});
//Delete Contacts
router.delete("/contact/:id", (req,res,next)=>{
    });
});

module.exports = router;
```
Now after setting up your server-side, you need fornt-end for that you are using AngularJS.
```cmd
ng new client
```
This will make a new client dir and will download all the necessary depedencies.

Now you have to make component and services which will need.
```cmd
ng g component conctact
ng g sevices contacts
```
Now you have to configure **contacts.component.html** for your user view page. 
And **contact.service.ts** for all the operations like adding deleting and retrieving. 

### Running
- Here we are using port 3000 for server-side. So to check your server in your browser open
```
http://localhost:3000/
```
- Since default port on which Angular runs is 4200. So to check for your user-side visit
```
http://localhost:4200/
```
**Note:**
 For CSS styling I have used Bootwatch theme  which free to use.

You can customize on your own and can add additional features as you please.

Hope you like this project. 

### Author
* Apil Thapa - [SasukeUchicha7](https://github.com/SasukeUchiha7).

### Acknowledgment
 This project is completely based on Edureka's Tutorial on youtube.
 Hats off to **Edureka** for this wonderfull tutorial.
 
