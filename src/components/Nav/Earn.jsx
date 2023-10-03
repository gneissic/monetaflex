import { Fragment } from "react";
import EarnCheck from "./EarnCheck";
import Button from "../ui/Button";
import { Link } from "react-router-dom";
import { motion, useScroll, useTransform } from "framer-motion";
const EARN = [
    {id: 1, check:"Premium Website Development Skills Class"},
    {id: 2, check:"Premium Android and IOS App Creation Skills class"},
    {id: 3, check:"Premium Copywriting Skills Class"},
    {id: 4, check:"Premium Graphics Design Skills Class"},
    {id: 5, check:"Premium Whatsapp Media Creation Skills Class"},
    {id: 6, check:"Premium Mini Importation Skills Class"},
    {id: 7, check:"Premium Social media boosting Skills Class"},
    {id: 8, check:"Premium social media Monetazitaion Skills Class"},
    {id: 9, check:"Premium Instagram and Facebook Ads skills class"},
]

const Earn = () => {
  const {scrollY} = useScroll()
  const opacityEarn= useTransform(scrollY, [800, 1100], [0, 1])
  const translateBody = useTransform(scrollY, [800, 1100], [-100, 0])
  return (
    <Fragment>
      <motion.div 
      style={{translateY:translateBody, opacity:opacityEarn}}
      className="bg-gradient-2">
        <h1 className=" ml-3 pt-[3rem] font-pops font-bold text-2xl lg:text-3xl w-[87%] lg:w-full lg:text-center  tracking-wider">
          Earn with Monetaflex anytime, anywhere.
        </h1>
        <div className="my-[2rem]">
          <p className="w-[95%] lg:w-[90%] lg:text-lg mx-auto tracking-wide font-nun text-slate-900">
            Monetaflex is simply a skillls learinign and earning platform. It
            has its sources of income that generates money for the users where
            they get paid from so be rest assured of a continued lasting earning
            stream.
          </p>
          <p className="w-[94% lg:text-lg] w-[90%] mx-auto tracking-wide font-nun text-slate-900">
            Monetaflex is well organized and structured and we offer the
            following skills:
          </p>
        </div>
        <div className="lg:grid grid-cols-2 gap-y-6 lg:w-[70%] lg:mx-auto">
            {EARN.map((earn)=>(<EarnCheck key={earn.id} check={earn.check} />))  }
        </div>
       <Link to={"signup"}> <Button reg="Get Started Today"/></Link>
      </motion.div>
    </Fragment>
  );
};

export default Earn;
