import { Fragment } from "react";
import PageLinks from "../PageLinks";
import EarnCheck from "../Nav/EarnCheck";
import Button from "../ui/Button";
const ABOUT = [
    {id: 1, check:"Instant Withdrawal"},
    {id: 2, check:"End-to-end encryption"},
    {id: 3, check:"No compulsory referrl"},
    {id: 4, check:"Highly secured online"}]


const About = () => {
  return (
    <Fragment>
      <PageLinks
        title="About Us"
        linkTitle="home"
        linkTitle2="About Monetaflex"
        link="/about"
      />
      <div className="pl-3">
        <div className="pt-[3rem]">
          <h1 className="text-black font-bold font-pops text-3xl">
            An MonetaFlex - <span className="block">Operations</span>
          </h1>
        </div>
        <div className=" grid gap-4 text-black/70 pt-[2rem] font-pops font-semibold tracking-wide">
          <p>Monetaflex is a system built with unique features of its own</p>
          <p>
            Monetaflex is a system bult to equip the users with modern day
            premium digital money making skills that will make its members to be
            self independent and also make them acquire new skills that will
            make life much easier and suitable for it users
          </p>
          <p>
            Monetaflex members not only will their learning money making digital skills but can also earn too by sharing the flex sponsored post from their parteners and advertisers... The revenue made from the sharing of sponsored post will be paid from the available advert revenue made for the month from the advertisment the site got for the month...
          </p>
        </div>
      </div>
      <div className=" w-[60%] text-md pt-3 font-semibold">
            {ABOUT.map((about)=>(<EarnCheck key={about.id} check={about.check} />))  }
        </div>
        <div>
            <Button reg="Get Started Today" />
        </div>
    </Fragment>
  );
};

export default About;
