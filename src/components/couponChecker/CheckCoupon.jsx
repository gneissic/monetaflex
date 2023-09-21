import { Fragment } from "react";
import PageLinks from "../PageLinks";
import { Form } from "react-router-dom";
import Button from "../ui/Button";

const CheckCoupon = () => {
  return (
    <Fragment>
      <PageLinks
        title="Coupon Checker"
        linkTitle="Home"
        linkTitle2="Coupon Check"
        link="/checkers"
      />
      <div className="pt-[5rem]">
        <h1>Coupon Checker</h1>
      </div>
      <Form name="coupon-check">
        <div className="grid gap-2">
        <select name="coupon-data" id="coupon" className="w-[90%] ml-2 border round-md border-black/70 py-1" >
                <option value="type-package">Select Package Type</option>
                <option value="basic-flex">Basic Flex</option>
            </select>
            <input type="text" name="coupon-input" placeholder="Enter Coupon Code" className="w-[90%] ml-2 border round-md border-black/70 py-1" />

        </div>
        <div>
            <Button id="coupon-button" reg="Check Coupon" />
        </div>
         </Form>
    </Fragment>
  );
};

export default CheckCoupon;
