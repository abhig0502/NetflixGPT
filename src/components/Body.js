import React from "react";
import { useEffect } from "react";

const Body = () => {
  useEffect(()=>{
    fetchData();
  },[]);
  const fetchData=async()=>{
    const data=await fetch("");
    const response=await data.json();
  }

  return (
    <div className="bg-black">
    
    </div>
  );
};

export default Body;
