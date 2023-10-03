import React from "react";
import Button from "../ui/Button";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import img1 from "../../assets/person-img-1.png";

const BannerBody = () => {
 
  const bodyVariants = {
    hidden: {opacity: 0,},
    visible: {opacity:1, transition:{delay: 0.5, duration:2} }
  }

  return (
    <React.Fragment>
      <div className="relative z-20  bg-gradient-to-b from-title ">
      <  motion.div
      variants={bodyVariants}
      initial="hidden"
      animate="visible"
      className="lg:flex lg:justify-center lg:items-end lg:gap-8"
      >
        <div className="lg:w-[50%]">
        <p className="text-[2.4rem] lg:text-[3rem]  pl-2 font-nun font-bold text-black/70 pt-[6.5rem]">
         Momentaflex- Nigeria  <span  >#1 Best Skills Learning and Earning platform</span> 
        </p>
        <Link to={"signup"}><Button reg="Register Here"/></Link> 
        </div>
        <div className="hidden lg:block">
          <img src={img1} alt=""  className=" w-[22rem] h-[25rem] mt-[3rem]" />
        </div>
        
      </motion.div>
      </div>
     
    </React.Fragment>
  );
};

export default BannerBody;
