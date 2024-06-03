const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();
// imports multer
const multer= require('multer');
//  upload defines destination where images will get uploaded
// here we are creating variable storage which is using a method from a multer name as diskStorage() which is defining two things one is destination and second is file name. destination will accept a function with three arguments request, file which we are sending, and a callback function, this call back function will be called after we received the file
//  this callback can have two arguments  first one will be regarding the error and second one will be its destination i.e. uploads 
//  same like destination we can also added filename its is because as a user i can upload single image multiple time, so if thre will be a multiple image with a single image name then threre will be a confusion so to avoid that we can create a unique file name by using date.now().
//  just like destination filename will also accpt a function with three arguments that is request, filename and callback. In this we are passing date.now() 
//  we will create unique file name using uniqueSuffix, it will contain date and time as of now and we will append this using our original file name using file.originalname

// if we will not use below code corrupted image will come 
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'uploads/')
    },
    filename: function (req, file, cb) {
      const uniqueSuffix = Date.now();
      cb(null, uniqueSuffix + file.originalname);
    }
  })
  
  const upload = multer({ storage: storage })



app.use(express.json());
app.use(cors());
const stuController = require("./controllers/StuController");
mongoose.connect("mongodb://127.0.0.1:27017/college").then(()=>{
    console.log("Database Connected Sucessfully");
});


app.get("/studisplay", stuController.stuDisplay);
app.post("/datasave", stuController.stuSave);
app.post("/stusearch", stuController.stuSearch);
app.get("/studelete/:id", stuController.stuDelete);
app.get("/stuedit/:id", stuController.stuEdit);
app.post("/editsave/:id", stuController.stuEditSave);

// to upload the image we have to pass one more argument upload.single() as we are uploading single image and inside this we have to pass the name of the variable which contain our image 
app.post("/upload-image",stuController.uploadImage);




app.listen(5000, ()=>{
    console.log("Port run at 5000");
})