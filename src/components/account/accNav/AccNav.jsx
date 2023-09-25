import { Fragment } from "react"
import { CiMenuFries } from "react-icons/ci";
import  Logo  from "../../../assets/logo.png";

const AccNav = (props) => {
  return (
    <Fragment>
        <div className="bg-white flex gap-2 ml-5 py-6 items-center">
            <img src={Logo} className="h-[3rem]" alt="" />
            <div>

            <CiMenuFries onClick={props.showSidebar} className="h-[2rem] w-[4rem] text-black font-bold" />
            </div>
        </div>
    </Fragment>
  )
}

export default AccNav