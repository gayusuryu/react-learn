import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import { MENU_API } from "../utils/constants";
import useRestaurantMenu from "../utils/useRestaurantMenu";


const RestaurantMenu = () => {
  // const [resInfo, setResInfo] = useState(null);

  const {resId} = useParams();

  //We can nuse this custome hooks instead of the below commented lines
  const resInfo = useRestaurantMenu(resId)

  // useEffect(() => {
  //   fetchMenu();
  // }, []);

  // const fetchMenu = async () => {
  //   const data = await fetch( MENU_API + resId);

  //   const json = await data.json();
  //   // console.log(json);
  //   setResInfo(json.data);
  // };

  if (resInfo === null) return <Shimmer />;

  const { name, cuisines, costForTwoMessage } =
    resInfo?.cards[0]?.card?.card?.info;

  const { itemCards } =
    resInfo?.cards[2].groupedCard?.cardGroupMap?.REGULAR?.cards[1].card.card;
  console.log(itemCards);

  if (itemCards == undefined) return <Shimmer />;

  return (
    <div className="menu">
      <h1>{name}</h1>
      <p>
        {cuisines.join(",")} - {costForTwoMessage}
      </p>
      <ul>
        {itemCards.map((item)=>
        <li key={item.card.info.id}>
          {item.card.info.name} - {"Rs. "}
          {item.card.info.price/100}
        </li>
        )}
      </ul>
    </div>
  );
};

export default RestaurantMenu;