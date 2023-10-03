import { Fragment, useState } from "react"
import PageLinks from "../PageLinks"
import { Link, useNavigate,  } from "react-router-dom"

const Login = () => {
  const [userName, setUserName] = useState("")
  const [password, setPassword] = useState("")
  const [submitForm, setSubmitForm] = useState(false)
  
  const userNameIsValid = userName.length > 6
  const userNamIsInValid = !userNameIsValid && submitForm
  const passwordIsValid = password.length > 0 
  const passwordIsInavlid = !passwordIsValid && submitForm

  const changeUserNameHandler = (e)=>{
    setUserName(e.target.value)
  }
  const changePasswordHandler = (e)=>{
    setPassword(e.target.value)
  }

  const navigate = useNavigate()
  const signupHandler = (e)=>{
    e.preventDefault()
    if (userNameIsValid && passwordIsValid) {
      navigate("/account/dashboard")
    }else{
      setSubmitForm(true)
    }

  }
  return (
    <Fragment>
        <PageLinks  linkTitle="home" linkTitle2="login" title="Login" />
        <div className=" pt-[4rem]">
        <h1 className=" ml-2 text-3xl tracking-wider font-pops font-bold">Sign Up</h1>
            <form onSubmit={signupHandler} >
                <div className="grid gap-4 pt-7">
                <input
                value={userName}
                onChange={changeUserNameHandler}
                type="text"
                name="fullname"
                required
                placeholder="Enter your Email"
                className=" outline-none w-[90%] ml-3 border rounded-md border-black/50 py-2 font-pops pl-2 font-semibold text-black"
              />
              {userNamIsInValid && <p className="ml-2 text-red-900 font-semibold">Username must be greather than 6</p>}
            <input
                type="text"
                name="password"
                value={password}
                onChange={changePasswordHandler}
                required
                placeholder="Enter your Password"
                className=" outline-none w-[90%] ml-3 border rounded-md border-black/50 py-2 font-pops pl-2 font-semibold text-black"
              />
              {passwordIsInavlid && <p className="ml-2 text-red-900 font-semibold">Please input a valid password</p>}
              </div>
              <button  className=" ml-2 py-4 rounded-md text-white font-pops font-semibold tracking-wider bg-primary px-6 mt-7"  >Login</button>
            <p className="pt-3 font-pops text-black/70 font-semibold">Dont have an account? <span className="text-secondary font-bold font-pops"> <Link to={"/signup"}> Sign Up here </Link></span> </p>
  
              </form>
              </div>
    </Fragment>
  )
}

export default Login