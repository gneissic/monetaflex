import { Fragment } from "react";
import Logo from "../../assets/logo.png";
import { CiMenuFries } from "react-icons/ci";
import { AiOutlineClose } from "react-icons/ai";
import Img from "../../assets/bg-img-1.png";
import { Link, NavLink } from "react-router-dom";

const Header = (props) => {
  const { menu, showMenu, hideMenu } = props;

  return (
    <Fragment>
      <div className="bg-title pt-7 flex items-end justify-between px-3 z-10 relative">
        <div>
          <img src={Logo} alt="" className="w-14 h-14" />
        </div>
        <div>
          <ul className="hidden  lg:flex lg:gap-[5rem]">
            <NavLink to={"/"} className={({ isActive }) =>
              isActive
                ? "text-primary font-semibold"
                : "font-semibold hover:underline hover:text-primary transition-all duration-200 ease-in"
            }>
              {" "}
              <li>Home</li>{" "}
            </NavLink>
            <NavLink to={"about"} className={({ isActive }) =>
              isActive
                ? " hover:text-red-900 text-primary font-semibold"
                : "font-semibold hover:underline hover:text-primary transition-all duration-200 ease-in"
            }>
              {" "}
              <li>About</li>
            </NavLink>
            <NavLink to={"services"} className={({ isActive }) =>
              isActive
                ? "text-primary font-semibold"
                : "font-semibold hover:underline hover:text-primary transition-all duration-200 ease-in"
            }>
              {" "}
              <li>Services</li>
            </NavLink>
            <NavLink to={"checkers"} className={({ isActive }) =>
              isActive
                ? "text-primary font-semibold"
                : "font-semibold hover:underline hover:text-primary transition-all duration-200 ease-in"
            }>
              {" "}
              <li>Coupon Checker</li>
            </NavLink>
            <NavLink to={"contact"} className={({ isActive }) =>
              isActive
                ? "text-primary font-semibold"
                : "font-semibold hover:underline hover:text-primary transition-all duration-200 ease-in"
            }>
              {" "}
              <li>Contact</li>
            </NavLink>
          </ul>
        </div>
        <div className="hidden lg:flex lg:pr-5 lg:gap-3 ">
          <Link to={"login"}>
            {" "}
            <button className="ml-2 bg-primary py-4 px-6 rounded-md text-white shadow">
              Login
            </button>
          </Link>
          <Link to={"signup"}>
            <button className="ml-3 bg-[#ccccff] py-4 px-6 rounded-md">
              Register
            </button>
          </Link>
        </div>
        <div className="lg:hidden">
          <div onClick={showMenu}>
            {!menu && (
              <CiMenuFries className="h-8 w-8 text-primary font-bold" />
            )}
          </div>
          <div onClick={hideMenu}>
            {menu && (
              <AiOutlineClose className="h-8 w-8 text-primary font-bold" />
            )}
          </div>
        </div>
      </div>
      <img
        src={Img}
        className="h-[50rem]  absolute -z-10 top-0 right-0"
        alt=""
      />
    </Fragment>
  );
};

export default Header;
