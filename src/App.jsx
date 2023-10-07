/* eslint-disable react/prop-types */
import { createBrowserRouter, RouterProvider, } from "react-router-dom";
import Root from "./components/root";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ServicesPage from "./pages/ServicesPage";
import CheckCouponPage from "./pages/CheckCouponPage";
import VendorPage from "./pages/VendorPage";
import TopEarnersPage from "./pages/TopEarnersPage";
import Error from "./components/error";
import ContactPage from "./pages/ContactPage";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";
import DashboardPage from "./pages/DashboardPage";
import AccRoot from "./components/accRoot";
import { action as storeAction, loader as storeLoader } from "./pages/storeActions";
import StorePage from "./pages/StorePage";
import { useState } from "react";
import { Provider } from "react-redux";
import reduxStore from "./store";
reduxStore


function App() {
  

  const [showStoreModal, setShowStoreModal] = useState(false);

    const showStoreModalHandler = () => {
    setShowStoreModal(true);
  };
  const hideStoreModalHandler = () => {
    setShowStoreModal(false);
  };
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root />,
      errorElement: <Error />,
      children: [
        { path: "/", element: <HomePage /> },
        { path: "about", element: <AboutPage /> },
        { path: "services", element: <ServicesPage /> },
        { path: "checkers", element: <CheckCouponPage /> },
        { path: "vendors", element: <VendorPage /> },
        { path: "top", element: <TopEarnersPage /> },
        { path: "contact", element: <ContactPage /> },
        { path: "login", element: <LoginPage /> },
        { path: "signup", element: <SignupPage /> },
      ],
    },
    {
      path: "",
      element: <AccRoot />,
      errorElement:<Error/>,
      children: [
        { path: "account/dashboard", element: <DashboardPage /> },
        {
          path: "account/store",
          element: (
            <StorePage
              storeModal={showStoreModal}
              showStoreModal={showStoreModalHandler}
              hideStoreModal={hideStoreModalHandler}
            />
          ),
          action: storeAction,
          loader:storeLoader

        },
      ],
    },
  ]);
  return (
    <>
      
     <Provider store={reduxStore}>
      <RouterProvider router={router}  />
      </Provider>
    </>
  );
}

export default App;
