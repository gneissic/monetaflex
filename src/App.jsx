/* eslint-disable react/prop-types */
import { createBrowserRouter, RouterProvider } from "react-router-dom";
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

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root />,
      errorElement:<Error/>,
      children: [
        { path: "/", element: <HomePage /> },
        { path: "about", element: <AboutPage /> },
        { path: "services", element: <ServicesPage /> },
        {path:"checkers", element:<CheckCouponPage/>},
        {path:"vendors", element:<VendorPage/>},
        {path:"top", element:<TopEarnersPage/>},
        {path:"contact", element:<ContactPage/>},
        {path:"login", element:<LoginPage/>},
        {path:"signup", element:<SignupPage/>},
      ],
    },
  ]);
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
