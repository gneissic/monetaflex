
import { Fragment } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";

const IsLoggedInSideBar = () => {
    const alertHanlder  = ()=>{
        alert("coming soon")
    }
  return (
    <Fragment>
      <AnimatePresence>
      <motion.div
        
        className=" bg-slate-900 h-inherit w-[20%]"
      >

        <div className="pl-2 pt-[2rem]">
            <div className="grid gap-5 ml-[1rem]">

            <h1 className="text-gray-400 text-lg tracking-widest font-lato">Monetaflex</h1>
            <p className="text-gray-300 font-semibold">Menu</p>
            </div>
          <ul 
          className="  cursor-pointer grid ml-[2.4rem] mt-[1rem] gap-5 font-pops font-semibold text-gray-300">
           <Link to={"/"}> <li>Home</li></Link>
         <Link to={"/account/store"}>  <li>Moneta Store</li></Link>
         <Link to={"checkers"}>  <li>Verify Coupon</li></Link>
          <Link to={"vendors"}> <li>Coupon Vendors</li></Link>
           <li onClick={alertHanlder}>Tik tok Tasks</li>
            <li onClick={alertHanlder}>Transfer Earnings</li>
           <li onClick={alertHanlder}>Free Premium Digital Skills</li>
            <li onClick={alertHanlder}>Transfer Earnings</li>
           <Link to={"top"}> <li>Top Earners</li></Link>
            <Link to={"/"}> <li>Log Out</li></Link>
          </ul>
        </div>
      </motion.div>
      </AnimatePresence>
      
    </Fragment>
  );
};

export default IsLoggedInSideBar;
