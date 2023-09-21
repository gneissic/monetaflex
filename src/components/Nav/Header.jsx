import { Fragment } from "react";
import Logo from "../../assets/logo.png";
import { CiMenuFries } from "react-icons/ci";
import { AiOutlineClose } from "react-icons/ai";
import { motion } from "framer-motion";
import Img from "../../assets/bg-img-1.png";
const Header = (props) => {
  const { menu, showMenu, hideMenu } = props;
  const toggleVriant = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 , transition:{duration:5}},
  };

  return (
    <Fragment>
      <div className="bg-title pt-7 flex items-end justify-between px-3 z-10 relative">
        <div>
          <img src={Logo} alt="" className="w-14 h-14" />
        </div>
        <div>
          <motion.div
            variants={toggleVriant}
            initial="hidden"
            animate="visible"
            onClick={showMenu}
          >
            {!menu && <CiMenuFries className="h-8 w-8 text-primary font-bold" />}
          </motion.div>
          <motion.div
            variants={toggleVriant}
            initial="hidden"
            animate="visible"
            onClick={hideMenu}
          >
            {menu && (
              <AiOutlineClose className="h-8 w-8 text-primary font-bold" />
            )}
          </motion.div>
        </div>
      </div>
        <img src={Img} className="h-[50rem]  absolute -z-10 top-0 right-0" alt="" />
    </Fragment>
  );
};

export default Header;
