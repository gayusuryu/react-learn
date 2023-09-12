import { useEffect, useState } from "react";

const User = (props) => {
  const [count] = useState(0);
  const [count2] = useState(2);

  useEffect(()=>{
    // const timer = setInterval(()=>{
    //   console.log("HII");
    //   //It wont stop calling even if we navigate to home,about coz its a SPA
    // },1000);

    // return ()=>{
    //   //To clear the setInterval we use this return inside useEffect
    //   clearInterval(timer)
    // }
  },[]);

  return (
    <div className="user-card m-4 p-4 rounded-lg bg-gray-100 w-56">
      <h3>Count fn : {count}</h3>
      <h3>Count fn : {count2}</h3>
      <h2>Name : {props.name}</h2>
      <h3>Location : Bangalore</h3>
      <h4>Contact : @gayumarch15</h4>
    </div>
  );
};

export default User;
