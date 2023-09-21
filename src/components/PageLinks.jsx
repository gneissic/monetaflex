import { Link, NavLink } from "react-router-dom";

const PageLinks = (props) => {
  return (
    <div className="bg-gradient-to-b from-title h-full">
      <div className="text-center pt-[3rem] font-pops grid gap-3 ">
        <h1 className="font-bold text-3xl tracking-wider">{props.title}</h1>
        <div className="flex justify-center gap-2 ">
          <Link to={"/"}>
            <p className="text-black/70 font-semibold">{props.linkTitle} </p>
          </Link>
          <NavLink
            to={props.link}
            className={({ isActive }) =>
              isActive
                ? "text-primary font-semibold"
                : "text-black/70 font-semibold"
            }
          >
            <p>{`>>`} {props.linkTitle2}</p>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default PageLinks;
