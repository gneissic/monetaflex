import { Fragment } from "react"
import PageLinks from "../PageLinks"

const Vendors = () => {
  return (
    <Fragment>
        <PageLinks title="vendors" linkTitle="Home" linkTitle2="Coupon Vendors" />
        <div>
            <h1 className=" pt-[4rem] text-3xl font-pops text-black font-bold pl-2 tracking-wider pb-[1.5rem] border-b border-black/40">Coupon Vendors</h1>
        </div>
    </Fragment>
  )
}

export default Vendors