import { Fragment, useState } from "react";
import PageLinks from "../PageLinks";
import Button from "../ui/Button";

const CheckCoupon = () => {
  const [coupon, setCoupon] = useState("")
  const [submitCoupon, setSubmitCoupon] = useState(false)
  const couponIsValid = coupon.trim.length === "0"
  const couponIsInvalid =  !couponIsValid && submitCoupon
  const changeCouponHandler  = (e)=>{
setCoupon(e.target.value)
  }
  const onSubmitCouponHandler = (e)=>{
e.preventDefault()
setSubmitCoupon(true)

  }
 
  return (
    <Fragment>
      <PageLinks
        title="Coupon Checker"
        linkTitle="Home"
        linkTitle2="Coupon Check"
        link="/checkers"
      />
      <div className="pt-[5rem] lg:w-[35%] lg:mx-auto lg:tracking-wider">
        <h1 className="text-black font-bold font-pops text-3xl pb-4">Coupon Checker</h1>
      </div>
      <form onSubmit={onSubmitCouponHandler} className="lg:w-[35%] lg:mx-auto">
        <div className="grid gap-2">
        <select name="coupon-data" id="coupon" className="w-[90%] ml-2 border rounded-md border-black/70 py-1" >
                <option value="type-package">Select Package Type</option>
                <option value="basic-flex">Basic Flex</option>
            </select>
            <input required  value={coupon} onChange={changeCouponHandler} type="password" name="coupon-input" placeholder="Enter Coupon Code" className="w-[90%] ml-2 border rounded-md border-black/70 py-1" />
{couponIsInvalid && <p className="text-red-900 text-center font-semibold font-pops">Coupon entered is not correct.</p>}
        </div>
        <div>
            <Button id="coupon-button" reg="Check Coupon" />
        </div>
         </form>
    </Fragment>
  );
};

export default CheckCoupon;
