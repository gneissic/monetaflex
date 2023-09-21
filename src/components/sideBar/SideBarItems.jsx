import { Fragment } from "react";
import SidebarLogo from "./SidebarLogo";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
const NAV_ITEMS = [
  { id: "/", nav: "Home" },
  { id: "about", nav: "About" },
  { id: "services", nav: "Services" },
  { id: "checkers", nav: "Coupon Cheker" },
  { id: "vendors", nav: "Coupon Vendors" },
  { id: "top", nav: "Top Earners" },
  { id: "contact", nav: "Contact" },
];
const sideVariants = {
  hidden: { x: "-100vw", opacity: 0 , },
  visible: { x: 0, opacity: 1, transition:{duration:0.3} },
};
const hoverVariant = {
  hover: { scale: 1.1, originX: 0, color: "#ffffcd" },
};

const SideBarItems = (props) => {
  return (
    <Fragment>
      <AnimatePresence>
      <motion.div
        variants={sideVariants}
        initial="hidden"
        animate="visible"
        exit={{ X: -1000 }}
        className="fixed top-0 z-30 bg-[#66ff66] w-[55%] h-full"
      >
        <SidebarLogo />
        <div className="pl-2 pt-[2rem]">
          <ul className="grid gap-5 font-nun font-semibold text-gray-700">
            {NAV_ITEMS.map((item) => (
              <motion.li
                className="cursor-pointer"
                onClick={props.onHideMenu}
                variants={hoverVariant}
                whileHover="hover"
                key={item.id}
              >
                <Link to={item.id}>
                {item.nav}
                </Link>
              </motion.li>
            ))}
          </ul>
        </div>
        <div onClick={props.onHideMenu} className="pt-[2rem] grid gap-3 place-items-start">
         <Link to={"login"}> <button className="ml-2 bg-primary py-3 px-5 rounded-md text-white shadow">
            Login
          </button></Link>
          <Link to={"signup"}><button className="ml-3 bg-[#ccccff] py-4 px-6">Register</button></Link>
        </div>
      </motion.div>
      </AnimatePresence>
      
    </Fragment>
  );
};

export default SideBarItems;
