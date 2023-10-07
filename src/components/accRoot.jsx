import { Outlet } from "react-router-dom"
import AccNav from "./account/accNav/AccNav"
import { Fragment, useState } from "react"
import AccFooter from "./account/AccFooter"
import AccSidebar from "./account/AccSidebar"
import IsLoggedInSideBar from "./account/IsLoggedInSideBar"


const AccRoot = () => {
    const [sidebar, showSidebar] = useState(false)
    const showSidebarHandler = ()=>{
        showSidebar(true)
    }
    const hideSidebar = ()=>{
        showSidebar(false)
    }
  return (
    <Fragment>
    <AccNav showSidebar={showSidebarHandler} />

    <div className="lg:hidden">
    {sidebar && <AccSidebar/>}
    <div onClick={hideSidebar}>   
    <Outlet/>
    </div>
    </div>
    <div className="hidden lg:flex">
      <IsLoggedInSideBar/>
      <Outlet/>
    </div>
   
    <AccFooter/>
    </Fragment>
  )
}

export default AccRoot