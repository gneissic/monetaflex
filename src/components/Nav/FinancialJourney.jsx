import { Fragment } from "react"
import D from "../../assets/bg-img-4.png";
import { Link } from "react-router-dom";
const FinancialJourney = () => {
  return (
    <Fragment>
      <div className="bg-gradient-2 pt-[8rem] relative">
      <div className="font-pops text-white pt-[2rem] bg-secondary w-[94%] h-[25rem] mb-2 rounded-md mx-auto">
           <div className="grid gap-5">
           <p className="text-center text-2xl">Start Your Financial</p>
            <p className="text-center text-xl">Journey now!</p>
            <p className="text-center text-md tracking-wide w-[90%]">Monetaflex provides you with the necessary packages to start earning</p>
           </div>
           <div className="m-auto w-[50%]">

           <Link to={"signup"}> <button className="bg-primary px-[2rem] py-3 rounded-md  mt-3 ml-4 text-white">Get Started!</button></Link>
           </div>
            
        </div>
        <div className="absolute top-[15%] -z-10">
        <img src={D}  className="h-[31rem]" alt="" />
        </div>
      </div>
        
    </Fragment>
  )
}

export default FinancialJourney