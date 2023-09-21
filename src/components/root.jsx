import { Fragment, useState } from "react"
import Header from "./Nav/Header"
import { Outlet } from "react-router-dom"
import SideBarItems from "./sideBar/SideBarItems";
import Footer from "./Nav/Footer";


const Root = () => {
    const [menu, showMenu] = useState(false);
  const hideMenuHandler = () => {
    showMenu(false);
  };
  const showMenuHandler = () => {
    showMenu(true);
  };
  return (
    <Fragment>
        <Header menu={menu} showMenu={showMenuHandler} hideMenu={hideMenuHandler} />
        {menu && (
          <SideBarItems onHideMenu={hideMenuHandler} />
      )}
        <Outlet/>
        <Footer/>
    </Fragment>
  )
}

export default Root