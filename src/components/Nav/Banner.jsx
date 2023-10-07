import { Fragment } from "react";
import BannerBody from "./BannerBody";
import FlexiblePackages from "./FlexiblePackages";
import JoinMonetaflex from "./JoinMonetaflex";
import Earn from "./Earn";
import FinancialJourney from "./FinancialJourney";
import { useSelector } from "react-redux";
const Banner = () => {
  const productData = useSelector((state)=> state.product.productData)
  console.log(productData);
  
  return (
    <Fragment>
     
      <BannerBody
      />
      <FlexiblePackages />
      <JoinMonetaflex />
      <Earn />
      <FinancialJourney />
    </Fragment>
  );
};

export default Banner;
