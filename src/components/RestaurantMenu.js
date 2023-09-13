import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import { MENU_API } from "../utils/constants";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";

const RestaurantMenu = () => {
  // const [resInfo, setResInfo] = useState(null);

  const { resId } = useParams();

  //We can nuse this custome hooks instead of the below commented lines
  const resInfo = useRestaurantMenu(resId);

  const [showIndex,setShowIndex] = useState(null);

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

  const categories =
    resInfo?.cards[2].groupedCard?.cardGroupMap?.REGULAR.cards.filter(
      (c) =>
        c.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );

  console.log(categories);

  if (itemCards == undefined) return <Shimmer />;

  return (
    // <div className="menu">
    //   <h1>{name}</h1>
    //   <p>
    //     {cuisines.join(",")} - {costForTwoMessage}
    //   </p>
    //   <ul>
    //     {itemCards.map((item) => (
    //       <li key={item.card.info.id}>
    //         {item.card.info.name} - {"Rs. "}
    //         {item.card.info.price / 100}
    //       </li>
    //     ))}
    //   </ul>
    // </div>

    <div className="text-center">
      <h1 className="font-bold my-6 text-2xl">{name}</h1>
      <p className="font-bold text-lg">
        {cuisines.join(",")} - {costForTwoMessage}
      </p>
      {categories.map((category,index)=>
      (<RestaurantCategory key={category?.card?.card?.title} 
      data={category?.card?.card} 
      showItems={index === showIndex ? true : false}
      setShowIndex={()=>setShowIndex(index)}/>
      ))}
      
    </div>
  );
};

export default RestaurantMenu;
