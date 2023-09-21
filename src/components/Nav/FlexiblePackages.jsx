import { BsFillGrid1X2Fill } from "react-icons/bs";
import Card from "../card";
import B from "../../assets/bg-img-2.png"
import C from "../../assets/bg-img-3.png"
import { Link } from "react-router-dom";

const FlexiblePackages = () => {
  return (
    <div className="pt-[5rem] bg-gradient-2 relative">
      <h1 className=" text-[1.6rem] text-center font-pops font-semibold">Flexible Earining Packages</h1>
      <div className="mt-[4rem] grid gap-[3rem]">
      <Card >
        <div className="flex gap-4 items-start flex-start ml-2 ">
          <div className=" bg-secondary border py-2 px-2 rounded-full">

          <BsFillGrid1X2Fill className="text-gray-100"/>
          </div>
          <div>
          <p className="font-pops text-xl font-bold text-black" >Basic Flex Package</p>
          <p>Earn from sharing sponsored posts from direct and also indirect referrals- All from the comfort of your home</p>

          </div>
        </div>
      </Card>
      <Card>
        <p className="text-center text-black/85 font-pop">Monetalfex is active and running 24/7 everyday</p>
      <Link>  <button className="text-gray-100 py-3 px-4 rounded-lg bg-secondary ">Get Started</button></Link>
      </Card>
      </div>
      <div className="absolute top-[5%] -z10">
        <img src={B} alt="" />
      </div>
      <div className="absolute left-0 top-[90%] -z-10">
        <img src={C} className="h-[40rem]" alt="" />
      </div>
    </div>
  );
};

export default FlexiblePackages;
