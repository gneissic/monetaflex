import { Fragment } from "react"
import D from "../../assets/bg-img-4.png";
import { Link } from "react-router-dom";
import { motion, useScroll, useTransform } from "framer-motion";
const FinancialJourney = () => {
  const {scrollY}= useScroll()
  const translateEl = useTransform(scrollY, [1300, 1500, 1800], [-200, -100, 0])
  const opacityEl = useTransform(scrollY, [1300, 1500, 1800], [0, 0.3, 1])
  return (
    <Fragment>
      <div className="bg-gradient-2 pt-[8rem] relative">
      <div 
      
      className="font-pops text-white pt-[2rem] bg-secondary lg:w-[80%] w-[94%] h-[25rem] mb-2 rounded-md mx-auto">
        <motion.div style={{translateY:translateEl, opacity:opacityEl}}>
        <div className="grid gap-5">
           <p className="text-center text-2xl lg:text-5xl">Start Your Financial</p>
            <p className="text-center text-xl lg:4xl">Journey now!</p>
            <p className="text-center mt-2 text-md tracking-wide">Monetaflex provides you with the necessary packages to start earning</p>
           </div>
           <div className="m-auto w-[50%] lg:w-[20%] lg:mt-5">

           <Link to={"signup"}> <button className="bg-primary px-[2rem] py-3 rounded-md  mt-3 ml-4 text-white">Get Started!</button></Link>
           </div>
        </motion.div>
           
            
        </div>
        <div className="absolute top-[15%] -z-10">
        <img src={D}  className="h-[31rem]" alt="" />
        </div>
      </div>
        
    </Fragment>
  )
}

export default FinancialJourney