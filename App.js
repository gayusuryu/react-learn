import React from "react";
import ReactDOM from "react-dom/client";

/**
 * Header
 *  - Logo
 *  - Nav items
 * Body
 *  - Search
 *  - Restaurant container
 *   - Restaurant card
 *     -Img
 *     -Name,Star rating,cuisine,delivery time
 * Footer
 *  - Copyright
 *  - Links
 *  - Address
 *  - Contact
 * 
 **/

const Header = () =>{
 return (
    <div className="header">
        <div className="logo-container">
            <img className="logo" src="https://cdn.dribbble.com/users/200948/screenshots/5843732/logo_biryani-04_4x.jpg"/>
        </div>
        <div className="nav-items">
            <ul>
                <li>Home</li>
                <li>About Us</li>
                <li>Contact</li>
                <li>Cart</li>
            </ul>
        </div>
    </div>
 )
}

//Inline styles
// const styleCard = {
//     backgroundColor :"#f0f0f0"
// };

const RestaurantCard = () =>{
  return (
    // <div className="res-card" style={styleCard}> we can give style like this or like below
    // <div className="res-card" style={{backgroundColor :"#f0f0f0"}}>
    <div className="res-card">
        <img className="res-logo" alt="res-logo" src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/e0vvulfbahjxjz6k4uwi"/>
        <div className="content">
        <p className="heads">Platez</p>
        <p className="cont">Biriyani , Malabar , Asian </p>
        <p className="cont"> 4.4 stars</p>
        <p className="cont">38 minutes</p>
        </div>
    </div>
  )
}

const Body = () =>{
    return (
    <div className="body">
    <div className="search">Search</div>
    <div className="res-container">
        <RestaurantCard/>
        <RestaurantCard/>
        <RestaurantCard/>
        <RestaurantCard/>
        <RestaurantCard/>
        <RestaurantCard/>
    </div>
    </div>
    )

}

const AppLayout = () =>{
    return (
    <div className="app">
        <Header/>
        <Body/>
    </div>
    );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout/>);


