import { Link, Outlet } from "react-router-dom";

const Layout=()=>
{
  return(
    <>
   <div id="topmenu">
   <ul>
    <li><Link to="/" className="topmenu">Home</Link></li>
    <li><Link to="/insert" className="topmenu">Insert</Link></li>
    <li><Link to="/display" className="topmenu">Display</Link></li>
    <li><Link to="search" className="topmenu">Search</Link></li>
    <li><Link to="edit" className="topmenu">Edit</Link></li>
    <li><Link to="delete" className="topmenu">Delete</Link></li>
   </ul>
    
    </div>

   <div id="middledata">
    <Outlet />
   </div>

   <div id="footer">
    www.studentmanagement.com all right reserved. 2003
   </div>

    </>
  );
}

export default Layout;