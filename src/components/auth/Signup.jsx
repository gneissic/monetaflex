import { Fragment } from "react";
import PageLinks from "../PageLinks";
import { Form, Link } from "react-router-dom";

const Signup = () => {
 
  return (
    <Fragment>
      <PageLinks title="Signup" linkTitle="Home" linkTitle2="Signup" />
      <div className=" pt-[4rem]">
        <h1 className=" ml-2 text-3xl tracking-wider font-pops font-bold">
          Sign Up
        </h1>
        <Form>
          <div className="grid gap-4 pt-7">
            <input
              type="text"
              name="fullname"
              required
              placeholder="Enter your Full Name"
              className=" outline-none w-[90%] ml-3 border rounded-md border-black/50 py-2 font-pops pl-2 font-semibold text-black"
            />
            <input
              type="text"
              name="user"
              required
              placeholder="Enter your Username"
              className=" outline-none w-[90%] ml-3 border rounded-md border-black/50 py-2 font-pops pl-2 font-semibold text-black"
            />
            <input
              type="email"
              name="mail"
              
              required
              placeholder="Enter your email address"
              className=" outline-none w-[90%] ml-3 border rounded-md border-black/50 py-2 font-pops pl-2 font-semibold text-black"
            />
            <input
              type="password"
              name="password"
              required
              placeholder="Enter your Password"
              className=" outline-none w-[90%] ml-3 border rounded-md border-black/50 py-2 font-pops pl-2 font-semibold text-black"
            />
            <input
              type="number"
              name="number"
              required
              placeholder="Enter your Phone Number"
              className=" outline-none w-[90%] ml-3 border rounded-md border-black/50 py-2 font-pops pl-2 font-semibold text-black"
            />
            <div>
              <p className="pl-2 pb-2 text-black font-semibold">Referred By:</p>
              <input
                type="text"
                name="refer"
                placeholder="Optional"
                className=" outline-none w-[90%] ml-3 border rounded-md border-black/50 py-2 font-pops pl-2 font-semibold text-black"
              />
            </div>
          </div>
          <button className=" ml-2 py-4 rounded-md text-white font-pops font-semibold tracking-wider bg-primary px-6 mt-7">
            Signup
          </button>
          <p className="pt-3 font-pops text-black/70 font-semibold">
            Already have an account?{" "}
            <span className="text-secondary font-bold font-pops">
              {" "}
              <Link to={"/login"}> Login here </Link>
            </span>{" "}
          </p>
        </Form>
      </div>
    </Fragment>
  );
};

export default Signup;
