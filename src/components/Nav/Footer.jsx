import { Fragment } from "react";
import Logo from "../../assets/logo.png";
import FooterLinks from "./FooterLinks";
const QUICK_LINKS_1 = [
  { id: "home", link: "Home" },
  { id: "about", link: "About" },
  { id: "services", link: "Services" },
  { id: "contact", link: "Contact" },
  { id: "coupon", link: "Coupon Checker" },
];
const QUICK_LINKS_2 = [
  { id: "login", link: "Login" },
  { id: "signup", link: "Signup" },
  { id: "privacy", link: "Privacy Policy" },
  { id: "terms", link: "Terms of Services" },
];

const Footer = () => {
  return (
    <Fragment>
      <footer className=" bg-black/75 text-white mt-[4rem] py-10 lg:py-16">
        <div className="lg:flex lg:justify-around lg:w-[90%] lg:gap-5">
          <div className="pl-2 lg:w-[30%]">
            <img className="h-[6rem]" src={Logo} alt="" />
            <p>
              Join Nigeria #1 fastest growing skill learning and earning platform.
              Build your way to financial freedom{" "}
            </p>
          </div>
          <div className="pl-2 flex justify-start ml-3 gap-[2.5rem]">
            <div>
              {QUICK_LINKS_1.map((lin) => (
                <FooterLinks key={lin.id} link={lin.link} />
              ))}
            </div>
            <div>
              {QUICK_LINKS_2.map((lin) => (
                <FooterLinks key={lin.id} link={lin.link} />
              ))}
            </div>
          </div>
          <div className="pl-2">
            <p className="text-white font-bold">Contact</p>
            <p>
              <span>whatsapp: </span>+2347015649347
            </p>
            <p>
              <span>Email: </span>josephnwodoh@gmail.com
            </p>
          </div>
        </div>
        <div className=" mt-4 pt-4 tex-sm text-center border-t border-gray-400">
          <p>Copyright@Monetaflex..All right reserved</p>
        </div>
      </footer>
    </Fragment>
  );
};

export default Footer;
