import delImg from "./del.png";
import axios from "axios";

const StuDisplayDelete=(props)=>
{
    const myDel=(myId)=>
    {
        axios.get(`http://localhost:5000/studelete/${myId}`).then(()=>alert("Data Deleted Sucessfully"));
    }
    return(
        <>
        <tr>
            <td>{props.rno}</td>
            <td>{props.nm}</td>
            <td>{props.ct}</td>
            <td>{props.fs}</td>
            <td> <a href="#" onClick={()=>{myDel(props.myid)}}>
            {<img src={delImg} width="20" height="20" align="center" />}
                </a> </td>
        </tr>
        </>
    );
}

export default StuDisplayDelete;

