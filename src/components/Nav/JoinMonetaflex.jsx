import { Fragment } from "react";
import MonetaFlexBar from "./MonetaFlexBar";
import Button from "../ui/Button";
import { Link } from "react-router-dom";
import { motion, useScroll, useTransform } from "framer-motion";
import Person2 from "../../assets/person-img-2.png";
import Card from "../card";
const Monetaflex = [
  {
    id: 1,
    title: "Easy to learn",
  },
  { id: 2, title: "Instant withdrawal" },
  { id: 3, title: "No compulsory referral" },
  { id: 4, title: "Highly secured" },
];

const JoinMonetaflex = () => {
  const { scrollY } = useScroll();
  const transformContainer = useTransform(scrollY, [200, 260], [-50, 0]);
  const opacityHeader = useTransform(scrollY, [200, 250], [0, 1]);
  const scaleButton = useTransform(scrollY, [550, 700], [0, 1]);
  const opacityButton = useTransform(scrollY, [550, 700], [0, 1]);
  return (
    <Fragment>
      <div className="block lg:flex lg:justify-around bg-gradient-2">
      <div  className="hidden lg:relative lg:block"  >
        <div className="absolute bottom-0 -right-[15%] z-10 bg-gray-100 shadow-xl">
        <Card>
        <p className="text-center text-black/85 font-pop">Monetalfex is active and running 24/7 everyday</p>
      <Link>  <button className="text-gray-100 py-3 px-4 rounded-lg bg-secondary ">Get Started</button></Link>
      </Card>
        </div>
     
      <div>

      <img src={Person2} alt="" />
      </div>
      </div>
      <div>
      <motion.h1
        transition={{ delay: 5 }}
        style={{ translateY: transformContainer, opacity: opacityHeader }}
        className="py-[2rem] font-pops font-semibold text-2xl ml-3 bg-gradient-2 "
      >
        Why join <span>Monetaflex</span>
      </motion.h1>
      <div className="bg-gradient-2">
        {Monetaflex.map((mon) => (
          <MonetaFlexBar key={mon.id} title={mon.title} />
        ))}
      </div>

      <Link to={"signup"}>
        <motion.div
        style={{scale:scaleButton, opacity:opacityButton}}
        >
          <Button reg="Register Here" />
        </motion.div>
      </Link>
      </div>
      
      </div>
    </Fragment>
  );
};

export default JoinMonetaflex;
