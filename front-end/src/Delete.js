import { useState, useEffect } from "react";
import axios from "axios";
import delImg from "./del.png";



const Delete=()=>
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

    const myDel=(id)=>
    {
        axios.get(`http://localhost:5000/studelete/${id}`).then(()=>
        {
            alert("Record deleted");
            loadData();
        });
        
    }

    const myData = studata.map((key)=>
    {
    return(
        <>
        <tr>
            <td>{key.rollno} </td>
            <td>{key.name}</td>
            <td>{key.city}</td>
            <td>{key.fees}</td>
            <td>
            <a href="#" onClick={()=>{myDel(key._id)}}>
            {<img src={delImg} alt="delete"  width="20" height="20" align="center" />}
                </a>
            </td>
        </tr>
        </>
    );

    } );
   
  

    return(
    <>
    <h1>Display Student Records</h1>
    <table className="displaydata">
        <tr>
        <th>Roll No </th>
        <th>Name</th>
        <th>City</th>
        <th>Fees</th>
        <th></th>
        </tr>
        {myData}
    </table>
    </>
    );
}
export default Delete;