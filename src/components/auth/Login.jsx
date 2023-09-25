import { Fragment } from "react"
import PageLinks from "../PageLinks"
import { Form, Link, redirect,  } from "react-router-dom"

const Login = () => {
  const signupHandler = ()=>{
  redirect("/")
  }
  return (
    <Fragment>
        <PageLinks  linkTitle="home" linkTitle2="login" title="Login" />
        <div className=" pt-[4rem]">
        <h1 className=" ml-2 text-3xl tracking-wider font-pops font-bold">Sign Up</h1>
            <Form onSubmit={signupHandler}>
                <div className="grid gap-4 pt-7">
                <input
                type="text"
                name="fullname"
                required
                placeholder="Enter your Email"
                className=" outline-none w-[90%] ml-3 border rounded-md border-black/50 py-2 font-pops pl-2 font-semibold text-black"
              />
            <input
                type="text"
                name="password"
                required
                placeholder="Enter your Password"
                className=" outline-none w-[90%] ml-3 border rounded-md border-black/50 py-2 font-pops pl-2 font-semibold text-black"
              />
              </div>
              <button className=" ml-2 py-4 rounded-md text-white font-pops font-semibold tracking-wider bg-primary px-6 mt-7">Login</button>
            <p className="pt-3 font-pops text-black/70 font-semibold">Dont have an account? <span className="text-secondary font-bold font-pops"> <Link to={"/signup"}> Sign Up here </Link></span> </p>
  
              </Form>
              </div>
    </Fragment>
  )
}

export default Login