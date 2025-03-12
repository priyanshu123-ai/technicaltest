

import { NavLink } from "react-router-dom";

const Home = ()=>{
   return (
    <>
    <div>
    <NavLink to = '/'>Home</NavLink>
     

     <NavLink to = '/Dashboard'>Dashboard</NavLink>

    </div>

    <div>
        <h1>Welcome to the home page</h1>
    </div>

    </>
 
   )

}
export default Home;