import { useState, useEffect } from "react";
import axios from "axios";
import editImg from "./edit.png";

const Edit = () => {
    const [studata, setStuData] = useState([]);
    const [myData, setMyData] = useState({});

    const loadData = () => {
        axios.get("http://localhost:5000/studisplay").then((res) => {
            setStuData(res.data);
        });
    }

    useEffect(() => {
        loadData();
    }, []);

    const myEdit = (id) => {
        axios.get(`http://localhost:5000/stuedit/${id}`).then((res) => {
            setMyData(res.data);
        });
    }

    const handleInput = (e) => {
        let name = e.target.name;
        let value = e.target.value;
        setMyData(values => ({ ...values, [name]: value }));
        console.log(myData);
    }

    const editSave = () => {
        axios.post(`http://localhost:5000/editsave/${myData._id}`, myData).then(() => {
            alert("Data Update");
            loadData();
        });
    }

    const tableData = studata.map((key) => (
        <tr key={key._id}>
            <td>{key.rollno}</td>
            <td>{key.name}</td>
            <td>{key.city}</td>
            <td>{key.fees}</td>
            <td>
                <a href="#" onClick={() => { myEdit(key._id) }}>
                    <img src={editImg} alt="edit" width="20" height="20" align="center" />
                </a>
            </td>
        </tr>
    ));

    return (
        <>
            <h1>Edit Student Records</h1>
            <table className="displaydata">
              
                    <tr>
                        <th>Roll No</th>
                        <th>Name</th>
                        <th>City</th>
                        <th>Fees</th>
                        <th></th>
                    </tr>
                
               
                    {tableData}
               
            </table>

            <h2>Edit Record </h2>
            Edit Roll No : <input type="text" value={myData.rollno } name="rollno" onChange={handleInput} /> <br />
            Edit Name : <input type="text" value={myData.name } name="name" onChange={handleInput} /> <br />
            Edit City : <input type="text" value={myData.city } name="city" onChange={handleInput} /> <br />
            Edit Fees : <input type="text" value={myData.fees } name="fees" onChange={handleInput} /> <br />
            <button onClick={editSave}>Edit</button>
        </>
    );
}

export default Edit;
