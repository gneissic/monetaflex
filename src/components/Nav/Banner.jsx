import { Fragment } from "react";
import BannerBody from "./BannerBody";
import FlexiblePackages from "./FlexiblePackages";
import JoinMonetaflex from "./JoinMonetaflex";
import Earn from "./Earn";
import FinancialJourney from "./FinancialJourney";
import { AnimatePresence, motion } from "framer-motion";

const Banner = () => {
  
  return (
    <Fragment>
      <AnimatePresence>
        <motion.div exit={{opacity:1, x:-1000,}}>
        </motion.div>
      </AnimatePresence>
     
      <BannerBody
      />
      <FlexiblePackages />
      <JoinMonetaflex />
      <Earn />
      <FinancialJourney />
    </Fragment>
  );
};

export default Banner;
