import { Fragment } from "react";
import DashboardCards from "./DashboardCards";
import DashboardItems from "./DashboardItems";
import { Link } from "react-router-dom";
const DASHBOARD = [
  { title: "User Profile", num: "mikisplinz" },
  { title: "Flx share", num: "$0" },
  { title: "Earnings", num: "$0" },
  { title: "Spin balance", num: "$0" },
  { title: "Direct Referrals", num: "0" },
  { title: "Indirect Referrals", num: "0" },
  { title: "ALl time earnings", num: "$0" },
];

const Dashboard = () => {
  return (
    <Fragment>
      <div className="ml-3">
        <p className="py-4 text-xl font-pops tracking-wider">User Dasboard</p>
        <div className=" grid gap-3 grid-cols-2 grid-rows-3 pb-5">
          {DASHBOARD.map((dash) => (
            <DashboardCards
              key={dash.title}
              title={dash.title}
              num={dash.num}
            />
          ))}
        </div>
        <div className="grid gap-3 pb-4">
          <div className="relative">
            <Link to={"/account/store"}>
            <button className="absolute right-12 top-3 bg-secondary py-2 px-3 rounded-md text-gray-200 font-semibold">Go to Store</button>
            </Link>
        <DashboardItems title="My products" products="No products uploaded yet"/>
          </div>
        <DashboardItems title="Earning History" products="No Earning records yet"/>
        <DashboardItems title="Referral History" products="No Referral history yet"/>
        <DashboardItems title="Withdrawal History" products="No history yet"/>
 
        </div>
            </div>
    </Fragment>
  );
};

export default Dashboard;
