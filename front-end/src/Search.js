import { useState } from "react";
import axios from "axios";
import Studisplay from "./Studisplay";
const Search=()=>
{
    const [rollno, setRollno]=useState("");
    const [stuData, setStudata]=useState([]);
    const handleSubmit=()=>
    {
        axios.post("http://localhost:5000/stusearch", {rollno:rollno}).then((res)=>{setStudata(res.data);});
    }

    const myData = stuData.map((key)=>
    <Studisplay  
    rno={key.rollno} 
    nm={key.name}
    ct={key.city}
    fs={key.fees}
    
    />);
    return(
        <>
        <h1> Search Student Record </h1>

       Enter Roll No : <input type="text"  placeholder="Enter your Roll No ....." name="rollno" onChange={(e)=>{setRollno(e.target.value)}} /> <button onClick={handleSubmit}>Search</button>
       <table className="displaydata">
        <tr>
        <th>Roll No </th>
        <th>Name</th>
        <th>City</th>
        <th>Fees</th>
        </tr>
        {myData}
    </table>
        </>
    );
}
export default Search;