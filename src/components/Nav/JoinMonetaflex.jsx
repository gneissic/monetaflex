import { Fragment } from "react";
import MonetaFlexBar from "./MonetaFlexBar";
import Button from "../ui/Button";
import { Link } from "react-router-dom";
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
  return (
    <Fragment>
      <h1 className="py-[2rem] font-pops font-semibold text-2xl ml-3 bg-gradient-2 ">
        Why join <span>Monetaflex</span>
      </h1>
      <div className="bg-gradient-2">
      {Monetaflex.map((mon) => (
        <MonetaFlexBar key={mon.id} title={mon.title} />
      ))}
      </div>
     
     <Link to={"signup"}> <Button reg="Register Here"/></Link>
    </Fragment>
  );
};

export default JoinMonetaflex;
