import { useState } from "react";
import axios from "axios";


const StuInsert=()=>
{
  const [input, setInput]=useState({});
  const[image, setImage]= useState()
  const handleInput=(e)=>
  {
    let name=e.target.name;
    let value=e.target.value;

    setInput(values=>({...values, [name]:value}));
  }

  const handleSubmit=()=>
  {
    axios.post("http://localhost:5000/datasave", input).then(alert("Data Save Sucessfully"));
  }

 const onInputChange=(e)=>{
    //  whatever image user will select we will get in e.target.file
    // storing this in useState
    console.log(e.target.files[0])
    setImage(e.target.files[0]);
 }


const submitImage= (e)=>{
      e.preventDefault();
      const formData = new FormData();
      formData.append("image",image);

      axios.post("http://localhost:5000/upload-image",
      formData,
      // using below header because we are passing files 
      {
         headers: {"Content-Type": "multipart/form-data"},
      });

};

    return(
        <>
        <h1>Insert Student Record</h1>
  
        <div className="formdiv">
 
    <label for="fname">Roll No : </label>
    <input type="text"  name="rollno" placeholder="Your Roll no.." value={input.rollno} onChange={handleInput} /> 

    <label for="lname">Student Name : </label>
    <input type="text"  name="name" placeholder="Your Name.." value={input.name} onChange={handleInput} />

    <label for="lname">City : </label>
    <input type="text"  name="city" placeholder="Your City.." value={input.city} onChange={handleInput} />

    <label for="lname">Your Fees : </label>
    <input type="text"  name="fees" placeholder="Your fees.." value={input.fees} onChange={handleInput} />
    
    <form onSubmit={submitImage}>
    <label for="lname">Photo : </label>
    <input type="file" accept="image/*" onChange={onInputChange}></input>
    <button type="submit">Submit Image</button>
    </form>
    
    <input type="submit" value="Submit" onClick={handleSubmit} />
  
</div>
        </>
    );
}
export default StuInsert;