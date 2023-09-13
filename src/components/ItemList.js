import { useDispatch } from "react-redux";
import { CDN_URL } from "../utils/constants";
import { addItem } from "../utils/cartSlice";

const ItemList = (props) => {
  console.log(props);

  const dispatch = useDispatch();

  const handleAddItem = (item) =>{
    //Dispatch an action . For that we need useDispatch hook given by react-redux
    console.log(item)
    dispatch(addItem(item))
  }
  return (
    <div>
      {props.item.map((item) => (
        <div
          key={item.card.info.id}
          className="p-2 m-2 border-gray-200 border-b-2 text-left flex justify-between"
        >
          <div className="w-9/12">
            <div className="py-2">
              <span>{item.card.info.name}</span>
              <span> - ₹ {item?.card?.info?.price ? item.card.info.price / 100 : item.card.info.defaultPrice / 100}</span>
            </div>
            <p className="text-xs">{item.card.info.description}</p>
          </div>
          <div className="w-3/12 p-4">
            <div className="absolute">
            <button className="p-2 bg-black text-white shadow-lg mx-16 rounded-md" onClick={()=>handleAddItem(item)}>Add +</button>
            </div>
            <img className="rounded-lg" src={CDN_URL + item.card.info.imageId}></img>
            
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemList;
