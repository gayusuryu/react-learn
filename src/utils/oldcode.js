// import React from "react";
// import ReactDOM from "react-dom/client";

// /**
//  * Header
//  *  - Logo
//  *  - Nav items
//  * Body
//  *  - Search
//  *  - Restaurant container
//  *   - Restaurant card
//  *     -Img
//  *     -Name,Star rating,cuisine,delivery time
//  * Footer
//  *  - Copyright
//  *  - Links
//  *  - Address
//  *  - Contact
//  * 
//  **/

// const Header = () =>{
//  return (
//     <div className="header">
//         <div className="logo-container">
//             <img className="logo" src="https://cdn.dribbble.com/users/200948/screenshots/5843732/logo_biryani-04_4x.jpg"/>
//         </div>
//         <div className="nav-items">
//             <ul>
//                 <li>Home</li>
//                 <li>About Us</li>
//                 <li>Contact</li>
//                 <li>Cart</li>
//             </ul>
//         </div>
//     </div>
//  )
// }

// //Inline styles
// // const styleCard = {
// //     backgroundColor :"#f0f0f0"
// // };

// //Destructuring can also be done for props like below 
// // const RestaurantCard = ({resName,cuisine}) =>{
// const RestaurantCard = (props) =>{
 
// //  const {resName,cuisine} = props;
// const {resData} = props;
//   return (
//     // <div className="res-card" style={styleCard}> we can give style like this or like below
//     // <div className="res-card" style={{backgroundColor :"#f0f0f0"}}>
//     <div className="res-card">
//         <img className="res-logo" alt="res-logo" src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/e0vvulfbahjxjz6k4uwi"/>
//         <div className="content">
//         <p className="heads">{resData.data.name}</p>
//         <p className="cont">{resData.data.cuisines.join(", ")}</p>
//         <p className="cont">{resData.data.avgRating} stars</p>
//         <p className="cont">₹{resData.data.costForTwo/100} FOR TWO</p>
//         <p className="cont">{resData.data.deliveryTime} minutes</p>
//         </div>  
//     </div>
//   )
// }

// const resObj =  {
//     "type": "restaurant",
//     "data": {
//       "type": "F",
//       "id": "689528",
//       "name": "Shyamji's Chole Bhature",
//       "uuid": "0ef63dab-40ff-4af7-862b-833b486690c9",
//       "city": "1",
//       "area": "Malleshwaram",
//       "totalRatingsString": "100+ ratings",
//       "cloudinaryImageId": "573ce264ceb9c76d27aaa0b7cb1e36c8",
//       "cuisines": [
//         "Street Food",
//         "Chaat"
//       ],
//       "tags": [
        
//       ],
//       "costForTwo": 30000,
//       "costForTwoString": "₹300 FOR TWO",
//       "deliveryTime": 31,
//       "minDeliveryTime": 31,
//       "maxDeliveryTime": 31,
//       "slaString": "31 MINS",
//       "lastMileTravel": 5.900000095367432,
//       "slugs": {
//         "restaurant": "shyamji's-chole-bhature-malleshwaram-malleshwaram",
//         "city": "bangalore"
//       },
//       "cityState": "1",
//       "address": "21/1,ground floor 10th cross , sampige road, Malleswaram Bangalore Karnataka 560003",
//       "locality": "Sampige Road",
//       "parentId": 255424,
//       "unserviceable": false,
//       "veg": false,
//       "select": false,
//       "favorite": false,
//       "tradeCampaignHeaders": [
        
//       ],
//       "ribbon": [
//         {
//           "type": "PROMOTED"
//         }
//       ],
//       "chain": [
        
//       ],
//       "feeDetails": {
//         "fees": [
//           {
//             "name": "distance",
//             "fee": 5200,
//             "message": ""
//           },
//           {
//             "name": "time",
//             "fee": 0,
//             "message": ""
//           },
//           {
//             "name": "special",
//             "fee": 0,
//             "message": ""
//           }
//         ],
//         "totalFees": 5200,
//         "message": "",
//         "title": "Delivery Charge",
//         "amount": "5200",
//         "icon": ""
//       },
//       "availability": {
//         "opened": true,
//         "nextOpenMessage": "",
//         "nextCloseMessage": ""
//       },
//       "longDistanceEnabled": 0,
//       "rainMode": "NONE",
//       "thirdPartyAddress": false,
//       "thirdPartyVendor": "",
//       "adTrackingID": "cid=7477484~p=1~eid=00000189-4ea4-7428-038d-bfdd00f6013a~srvts=1689241547816",
//       "badges": {
//         "imageBased": [
          
//         ],
//         "textBased": [
          
//         ],
//         "textExtendedBadges": [
          
//         ]
//       },
//       "lastMileTravelString": "5.9 kms",
//       "hasSurge": false,
//       "sla": {
//         "restaurantId": "689528",
//         "deliveryTime": 31,
//         "minDeliveryTime": 31,
//         "maxDeliveryTime": 31,
//         "lastMileTravel": 5.900000095367432,
//         "lastMileDistance": 0,
//         "serviceability": "SERVICEABLE",
//         "rainMode": "NONE",
//         "longDistance": "NOT_LONG_DISTANCE",
//         "preferentialService": false,
//         "iconType": "EMPTY"
//       },
//       "promoted": true,
//       "avgRating": "4.1",
//       "totalRatings": 100,
//       "new": false
//     },
//     "subtype": "basic"
//   };

//   // <RestaurantCard resName="Platez" cuisine="Biriyani , Malabar , Asian "/>
// const Body = () =>{
//     return (
//     <div className="body">
//     <div className="search">Search</div>
//     <div className="res-container">
       
//         <RestaurantCard resData={resObj}/>
    
//     </div>
//     </div>
//     )

// }

// const AppLayout = () =>{
//     return (
//     <div className="app">
//         <Header/>
//         <Body/>
//     </div>
//     );
// };

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(<AppLayout/>);


