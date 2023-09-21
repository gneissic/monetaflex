import React from "react";
import Button from "../ui/Button";
import { Link } from "react-router-dom";

const BannerBody = () => {
  return (
    <React.Fragment>
      <div className="relative z-20  bg-gradient-to-b from-title ">
        <p className=" text-[2.4rem] pl-2 font-nun font-bold text-black/70 pt-[6.5rem]">
         Momentaflex- Nigeria  <span  >#1 Best Skills Learning and Earning platform</span> 
        </p>
        <Link to={"signup"}><Button reg="Register Here"/></Link> 
        
      </div>
    </React.Fragment>
  );
};

export default BannerBody;
