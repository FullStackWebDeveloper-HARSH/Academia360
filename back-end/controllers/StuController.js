
const StuModel = require("../models/StuModel");
const stuDisplay=(req, res)=>
{
    StuModel.find().then((data)=>{
        res.send(data);
    });
}

const stuSave=(req, res)=>
{
    
   const myData = new StuModel(req.body);
   myData.save().then(()=>{console.log("Data Save Sucessfully")});
}

const stuSearch=(req, res)=>
{
    StuModel.find(req.body).then((data)=>{
     res.send(data);
    });
}

const stuDelete=(req, res)=>
{
    StuModel.findByIdAndDelete(req.params.id).then((data)=>{
        StuModel.find(req.body).then((data)=>{
            res.send(data);
           });
    });
}

const stuEdit=(req, res)=>
{
    
    StuModel.findById(req.params.id).then((data)=>{
        res.send(data);
    });

}

const stuEditSave=(req, res)=>
{
    StuModel.findByIdAndUpdate(req.params.id, req.body).then((data)=>{
        res.send(data);
    });

}

const uploadImage=async(req,res)=>{
    console.log(req.body);
    //     res.send("Uploaded!!")
    // to store image to mongodb
    const imageName= req.file.filename;
    
    try {
        await StuModel.create({
            // we are passing image, because in schema we are passing image variable 
            image: imageName
        })
        res.json({status:"ok"})
    } catch (error) {
        res.json({status:"error"})
    }
}




module.exports={
    stuDisplay,
    stuSave,
    stuSearch,
    stuDelete,
    stuEdit,
    stuEditSave,
   uploadImage

}