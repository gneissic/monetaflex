
import { Fragment } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
const NAV_ITEMS = [
  { key:1, id: "/", nav: "Home" },
  { key:2,  id: "account/store", nav: "Moneta Store" },
  { key:3, id: "vendors", nav: "Coupon Vendors" },
  { key:4, id: "checkers", nav: "Verify Coupon" },
  {  key:5, id: "tiktok", nav: "Tiktok Task" },
  {  key:6, id: "transfer", nav: "Transfer Earnings" },
  { key:7, id: "free", nav:"Free Premium Digital Skills"},
  { key:8, id:"buy", nav: "VTU(Buy Airtime & Data)"},
  { key:9, id: "top", nav: "Top Earners" },
  {key:10,  id: "/", nav: "Logout" },
];
const sideVariants = {
  hidden: { x: "-100vw", opacity: 0 , },
  visible: { x: 0, opacity: 1, transition:{duration:0.3} },
};
const hoverVariant = {
  hover: { scale: 1.1, originX: 0, color: "#ffffcd" },
};

const AccSidebar = (props) => {
  return (
    <Fragment>
      <AnimatePresence>
      <motion.div
        variants={sideVariants}
        initial="hidden"
        animate="visible"
        className="fixed top-0 z-30 bg-slate-900 w-[55%] h-full"
      >

        <div className="pl-2 pt-[2rem]">
            <div className="grid gap-5 ml-[1rem]">

            <h1 className="text-gray-400 text-lg tracking-widest font-lato">Monetaflex</h1>
            <p className="text-gray-300 font-semibold">Menu</p>
            </div>
          <ul className="grid ml-[2.4rem] mt-[1rem] gap-5 font-pops font-semibold text-gray-300">
            {NAV_ITEMS.map((item) => (
              <motion.li
                className="cursor-pointer"
                onClick={props.onHideMenu}
                variants={hoverVariant}
                whileHover="hover"
                key={item.key}
              >
                <Link to={item.id}>
                {item.nav}
                </Link>
              </motion.li>
            ))}
          </ul>
        </div>
      </motion.div>
      </AnimatePresence>
      
    </Fragment>
  );
};

export default AccSidebar;
