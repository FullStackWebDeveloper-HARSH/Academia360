import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./Layout";
import Home from "./Home";
import StuInsert from "./StuInsert";
import Display from "./Display";
import Search from "./Search";
import Delete from "./Delete";
import Edit from "./Edit";
const App=()=>
{
  return(
    <>
     <BrowserRouter>
     <Routes>
       <Route path="/" element={<Layout />}>
       <Route index element={<Home />} />
       <Route path="/insert" element={<StuInsert />} />
       <Route path="/display" element={<Display />} />  
       <Route path="/search" element={<Search />} />
       <Route path="/delete" element={<Delete />} />
       <Route path="/edit" element={<Edit />} />
       </Route>
       
     </Routes>
     </BrowserRouter>
    </>
  );
}

export default App;