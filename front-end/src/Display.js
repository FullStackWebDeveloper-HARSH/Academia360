import { useState, useEffect } from "react";
import axios from "axios";
import Studisplay from "./Studisplay";
const Display=()=>
{
    const [studata,setStuData]=useState([]);

    const loadData=()=>
    {
       axios.get("http://localhost:5000/studisplay").then((res)=>{
        setStuData(res.data);
       });
    }

    useEffect(()=>{
       loadData();
    }, []);

    const myData = studata.map((key)=>
    <Studisplay  
    rno={key.rollno} 
    nm={key.name}
    ct={key.city}
    fs={key.fees}
    
    />);
  

    return(
    <>
    <h1>Display Student Records</h1>
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
export default Display;