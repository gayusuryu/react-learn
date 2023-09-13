import { useState, useEffect, useContext } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";

const Header = () => {
  const [btnName, setBtnName] = useState("Login");
  const onlineStatus = useOnlineStatus();

  const {loggedInUser} = useContext(UserContext);

  //if there is no dependency array that is no [] given as sec parameter to useffect ==> useEffect called on every render
  //if there is empy dependency array = [] ==> useeffect is called on initial render (just once)
  //if dependency array is [btnName] ==> called everytime btnName is updated
  // useEffect(()=>{

  // },[])

  //Subscribing to the store using a selector and this useSelector is a hook
  const cartItems = useSelector((store)=>store.cart.items)

  return (
    //    <div className="header"> normal css
    <div className="flex justify-between bg-gray-200 shadow-lg sm:bg-gray-100">
      <div className="logo-container">
        {/* <img className="logo" src={LOGO_URL} /> */}
        <img className="w-44" src={LOGO_URL} />
      </div>
      {/* <div className="nav-items"> */}
      <div className="flex items-center">
        {/* <ul> */}
        <ul className="flex p-4 m-4">
          <li className="px-4">Online Status : {onlineStatus ? "🟢" : "🔴"}</li>
          <li className="px-4">
            <Link to="/">Home</Link>
          </li>
          <li className="px-4">
            <Link to="/about">About Us</Link>
          </li>
          <li className="px-4">
            <Link to="/contact">Contact</Link>
          </li>
          <li className="px-4">
            <Link to="/grocery">Grocery</Link>
          </li>
          <li className="px-4 font-bold text-xl">
            <Link to="/cart">Cart({cartItems.length} items)</Link>
          </li>
          <button
            className="login"
            onClick={() => {
              btnName === "Login" ? setBtnName("Logout") : setBtnName("Login");
            }}
          >
            {btnName}
          </button>
          <li className="px-4 font-bold">{loggedInUser}</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
