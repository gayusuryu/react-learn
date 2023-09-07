import { CDN_URL } from "../utils/constants";
//Inline styles
// const styleCard = {
//     backgroundColor :"#f0f0f0"
// };

import { CDN_URL } from "../utils/constants";

//Destructuring can also be done for props like below
// const RestaurantCard = ({resName,cuisine}) =>{
const RestaurantCard = (props) => {
  //  const {resName,cuisine} = props;
  const { resData } = props;
  console.log("resData",resData)

  const { name, cuisines, avgRating, costForTwo ,sla } = resData?.info;
  return (
    // <div className="res-card" style={styleCard}> we can give style like this or like below
    // <div className="res-card" style={{backgroundColor :"#f0f0f0"}}>
    <div className="res-card" style={{ backgroundColor: "#f0f0f0" }}>
      <img
        className="res-logo"
        alt="res-logo"
        src={CDN_URL + resData?.info?.cloudinaryImageId}
      />
      <h3>{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{avgRating} stars</h4>
      <h4>{costForTwo}</h4>
      <h4>{sla.deliveryTime} minutes</h4>
    </div>
  );
};

export default RestaurantCard;