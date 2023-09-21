import { Fragment } from "react";
import PageLinks from "../PageLinks";
import { BsFillSunFill } from "react-icons/bs";
import EarnCheck from "../Nav/EarnCheck";
import Button from "../ui/Button";
const STREAMS = [
  {
    id: 2,
    stream: "Direct Referral commission is 3600",
  },
  {
    id: 3,
    stream: "Indirect Referral commission is 200",
  },
  {
    id: 4,
    stream: "Earn 1,200 when you engage with our tiktok task",
  },
];
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


const Services = () => {
  return (
    <Fragment>
      <PageLinks
        title="Services"
        linkTitle="Home"
        linkTitle2="Services"
        link="/services"
      />
      <div className="pl-3">
        <div className="pt-[3rem]">
          <h1 className="text-black font-bold font-pops text-2xl">
            We Provide Best Earning <span className="block">Solutions</span>
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
            Monetaflex members not only will their learning money making digital
            skills but can also earn too by sharing the flex sponsored post from
            their parteners and advertisers... The revenue made from the sharing
            of sponsored post will be paid from the available advert revenue
            made for the month from the advertisment the site got for the
            month...
          </p>
        </div>
      </div>
      <div className="pl-2">
        <h1 className="text-2xl font-pops py-3 font-semibold text-black/80">Earning Streams</h1>
        <p>$400 Activation fee</p>
      </div>
      <ul className="pl-2">
        {STREAMS.map((st) => (
          <li  className="flex items-center gap-x-2 py-2 " key={st.id}>
            <BsFillSunFill className="text-amber-500" />
         <span>{st.stream}</span>
          </li>
        ))}
      </ul>
      <div>
        <h1 className="font-bold font-pops text-black text-3xl tracking-wide py-2 pl-2">Skills to learn</h1>
        <div>
            {EARN.map((earn)=>(<EarnCheck key={earn.id} check={earn.check} />))  }
        </div>
      </div>
      <Button reg="Get Started Today"/>
    </Fragment>
  );
};

export default Services;
