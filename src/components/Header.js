import { useState ,useEffect} from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Header = () =>{

    const [btnName,setBtnName] = useState("Login");
    const onlineStatus = useOnlineStatus();

    //if there is no dependency array that is no [] given as sec parameter to useffect ==> useEffect called on every render
    //if there is empy dependency array = [] ==> useeffect is called on initial render (just once)
    //if dependency array is [btnName] ==> called everytime btnName is updated
    // useEffect(()=>{

    // },[])

    return (
       <div className="header">
           <div className="logo-container">
               <img className="logo" src={LOGO_URL}/>
           </div>
           <div className="nav-items">
               <ul>
                <li>Online Status : {onlineStatus ? "🟢" : "🔴"}</li>
                   <li><Link to="/">Home</Link></li>
                   <li><Link to="/about">About Us</Link></li>
                   <li><Link to="/contact">Contact</Link></li>
                   <li><Link to="/grocery">Grocery</Link></li>
                   <li>Cart</li>
                   <button className="login" onClick={()=>{
                    btnName==="Login" ? setBtnName("Logout") : setBtnName("Login")
                   }}>{btnName}</button>
               </ul>
           </div>
       </div>
    );
   };

   export default Header;