import { Fragment } from "react";
import EarnCheck from "./EarnCheck";
import Button from "../ui/Button";
import { Link } from "react-router-dom";
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
  return (
    <Fragment>
      <div className="bg-gradient-2">
        <h1 className=" ml-3 pt-[3rem] font-pops font-bold text-2xl w-[87%]  tracking-wider">
          Earn with Monetaflex anytime, anywhere.
        </h1>
        <div className="mt-[2rem]">
          <p className="w-[95%] mx-auto tracking-wide font-nun text-slate-900">
            Monetaflex is simply a skillls learinign and earning platform. It
            has its sources of income that generates money for the users where
            they get paid from so be rest assured of a continued lasting earning
            stream.
          </p>
          <p className="w-[94%] mx-auto tracking-wide font-nun text-slate-900">
            Monetaflex is well organized and structured and we offer the
            following skills:
          </p>
        </div>
        <div>
            {EARN.map((earn)=>(<EarnCheck key={earn.id} check={earn.check} />))  }
        </div>
       <Link to={"signup"}> <Button reg="Get Started Today"/></Link>
      </div>
    </Fragment>
  );
};

export default Earn;
