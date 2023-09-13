//See in Episode 9 - Optimizing our code

import { useEffect, useState } from "react";
import { MENU_API } from "../utils/constants";


//This is a custom hook
const useRestaurantMenu = (resId) => {
  const [resInfo, setResInfo] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(MENU_API + resId);

    const json = await data.json();
    console.log(json);
    setResInfo(json.data);
  };

  return resInfo;
};

export default useRestaurantMenu;
