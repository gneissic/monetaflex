import { Fragment } from "react"
import Logo from "../../assets/logo.png";
const SidebarLogo = () => {
  return (
    <Fragment>

        <div className="grid place-items-center mt-[4rem]">
            <img className="w-20 h-20" src={Logo} alt="" />
        </div>
    </Fragment>
  )
}

export default SidebarLogo