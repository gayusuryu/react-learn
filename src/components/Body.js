import RestaurantCard ,{withPromotedLabel} from "./RestaurantCard";
import { Link } from "react-router-dom";
import resList from "../utils/mockData";
import { useEffect, useState,useContext } from "react";
import Shimmer from "./Shimmer";
import useOnlineStatus from "../utils/useOnlineStatus";
import TicTacToe from "../utils/TicTacToe";
import UserContext from "../utils/UserContext";


// <RestaurantCard resName="Platez" cuisine="Biriyani , Malabar , Asian "/>
// <RestaurantCard resData={resList[0]}/>


let listOfRestaurantJS = [
  {
    type: "restaurant",
    data: {
      type: "F",
      id: "689528",
      name: "Shyamji's Chole Bhature",
      uuid: "0ef63dab-40ff-4af7-862b-833b486690c9",
      city: "1",
      area: "Malleshwaram",
      totalRatingsString: "100+ ratings",
      cloudinaryImageId: "573ce264ceb9c76d27aaa0b7cb1e36c8",
      cuisines: ["Street Food", "Chaat"],
      costForTwo: 30000, 
      address:
        "21/1,ground floor 10th cross , sampige road, Malleswaram Bangalore Karnataka 560003",
      locality: "Sampige Road",
      parentId: 255424,
      avgRating: "4.1",
    },
  },

  {
    type: "restaurant",
    data: {
      type: "F",
      id: "5938",
      name: "Burger King",
      uuid: "0ef63dab-40ff-4af7-862b-833b486690c9",
      area: "Shivaji Nagar",
      totalRatingsString: "100+ ratings",
      cloudinaryImageId: "e33e1d3ba7d6b2bb0d45e1001b731fcf",
      cuisines: ["Burgers", "American"],
      tags: [],
      costForTwo: 30000,
      address:
        "21/1,ground floor 10th cross , sampige road, Malleswaram Bangalore Karnataka 560003",
      locality: "Sampige Road",
      parentId: 255424,
      avgRating: "3.1",
    },
  }
];

const Body = () => {

  //Local State variable useState and to update it use set variable , here setListOfRestaurant

  // let [listOfRestaurant,setListOfRestaurant] = useState([ 
  //   {
  //   data: {
  //     type: "F",
  //     id: "689528",
  //     name: "Shyamji's Chole Bhature",
  //     uuid: "0ef63dab-40ff-4af7-862b-833b486690c9",
  //     city: "1",
  //     area: "Malleshwaram",
  //     totalRatingsString: "100+ ratings",
  //     cloudinaryImageId: "573ce264ceb9c76d27aaa0b7cb1e36c8",
  //     cuisines: ["Street Food", "Chaat"],
  //     costForTwo: 30000, 
  //     address:
  //       "21/1,ground floor 10th cross , sampige road, Malleswaram Bangalore Karnataka 560003",
  //     locality: "Sampige Road",
  //     parentId: 255424,
  //     avgRating: "4.1",
  //   },
  // },
  
  // {
  //   data: {
  //     type: "F",
  //     id: "5938",
  //     name: "Burger King",
  //     uuid: "0ef63dab-40ff-4af7-862b-833b486690c9",
  //     area: "Shivaji Nagar",
  //     totalRatingsString: "100+ ratings",
  //     cloudinaryImageId: "e33e1d3ba7d6b2bb0d45e1001b731fcf",
  //     cuisines: ["Burgers", "American"],
  //     tags: [],
  //     costForTwo: 30000,
  //     address:
  //       "21/1,ground floor 10th cross , sampige road, Malleswaram Bangalore Karnataka 560003",
  //     locality: "Sampige Road",
  //     parentId: 255424,
  //     avgRating: "3.1",
  //   },
  // }]);
 //Initially taken from mockdata resList
  // let [listOfRestaurant,setListOfRestaurant] = useState([resList]);

  const [listOfRestaurant,setListOfRestaurant] = useState([]);

  const [filteredRestaurant,setFilteredRestaurant] = useState([])

  const [searchText,setSearchText] = useState("");
//Whenever a state varibale update react triggers a reconciliation cycle (i.e, re-renders the component)
  console.log("Body rendered",listOfRestaurant);

  const RestaurantCardPromotedComponent = withPromotedLabel(RestaurantCard);

  useEffect(()=>{
    fetchData();
  },[]);

  const fetchData = async () =>{
    const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9715987&lng=77.5945627&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
    
    const json = await data.json();
    console.log(json);
    console.log(json.data.cards[2].card.card.gridElements.infoWithStyle.restaurants);

    setListOfRestaurant(json.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    setFilteredRestaurant(json.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
  };

  //This concept is called conditional rendering.Before details are fetched a dummy shimmer ui is displayed
  // if(listOfRestaurant === 0){
  //   return <Shimmer/>;
  // }

  const onlineStatus = useOnlineStatus();

  if(onlineStatus === false) return <h1>Looks like you are offline!! Please check your internet connection
      <TicTacToe />
  </h1>

  const {loggedInUser,setUserName} = useContext(UserContext);

  return listOfRestaurant === 0 ? <Shimmer/> :(
    <div className="body">
      {/* <div className="filter"> */}
      <div className="filter flex">
        {/* <div className="search"> */}
        <div className="search m-4 p-4">
          {/* <input type="text" className="search-bar" value={searchText} onChange={(e)=>{
            setSearchText(e.target.value)
          }}/> */}
            <input type="text" className="border border-solid border-black" value={searchText} onChange={(e)=>{
            setSearchText(e.target.value)
          }}/>
          {/* <button onClick={()=>{
            console.log(searchText);
            const filteredRestaurants = listOfRestaurant.filter((res)=>res.info.name.toLowerCase().includes(searchText.toLowerCase()));
            // setListOfRestaurant(filteredRestaurants);
            setFilteredRestaurant(filteredRestaurants)
          }}>Search</button> */}
           <button className="px-4 py-2 bg-green-100 m-4 rounded-lg" onClick={()=>{
            console.log(searchText);
            const filteredRestaurants = listOfRestaurant.filter((res)=>res.info.name.toLowerCase().includes(searchText.toLowerCase()));
            // setListOfRestaurant(filteredRestaurants);
            setFilteredRestaurant(filteredRestaurants)
          }}>Search</button>
        </div>
        {/* <button
          className="filter-btn"
          onClick={() => {
            console.log("listOfRestaurant",listOfRestaurant)
            const filteredList = listOfRestaurant.filter(
              (res) => res.info.avgRating > 4
            );
            // setListOfRestaurant(filteredList);
            setFilteredRestaurant(filteredList);
          }}
        >
          Top rated Restaurant
        </button> */}
        <div className="m-4 p-4 flex items-center">
        <button
          className="px-4 py-2 bg-gray-100 rounded-lg"
          onClick={() => {
            console.log("listOfRestaurant",listOfRestaurant)
            const filteredList = listOfRestaurant.filter(
              (res) => res.info.avgRating > 4
            );
            // setListOfRestaurant(filteredList);
            setFilteredRestaurant(filteredList);
          }}
        >
          Top rated Restaurant
        </button>
        </div>
        <div className="m-4 p-4 flex items-center">
          <label>Username : </label>
          <input className="border border-black p-2" 
          value={loggedInUser}
          onChange={(e)=>setUserName(e.target.value)}/>
        </div>
      </div>
      {/* <div className="res-container"> */}
      <div className="flex flex-wrap">
        {filteredRestaurant.map((restaurant) => (
          <Link key={restaurant.info.id} to={"/restaurants/"+ restaurant.info.id}>
            {restaurant.info.avgRating>4.5 ? (<RestaurantCardPromotedComponent resData={restaurant}/>) :  (<RestaurantCard resData={restaurant} />)}
           
            </Link >
        ))}
      </div>
    </div>
  );
};

export default Body;
