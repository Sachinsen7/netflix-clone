import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

import { useLocation } from "react-router-dom";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Header from "./Components/Header.jsx";
import Footer from "./Components/Footer.jsx";
import Signin from "./Components/Signin.jsx";
import StepOne from "./Components/GetStarted/StepOne.jsx";
import StepTwo from "./Components/GetStarted/StepTwo.jsx";
import StepThree from "./Components/GetStarted/StepThree.jsx";
import StepFour from "./Components/GetStarted/StepFour.jsx";
import Layout from "./ReactRouter.jsx";
import StepFive from "./Components/GetStarted/StepFive.jsx";
import PaymentOne from "./Components/GetStarted/PaymentOne.jsx";
import PaymentTwo from "./Components/GetStarted/PaymentTwo.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Header />, // Main page content
      },
      {
        path: "signin",
        element: <Signin />,
      },
      {
        path: "stepone",
        element: <StepOne />,
      },
      {
        path: "steptwo",
        element: <StepTwo />,
      },
      {
        path: "stepthree",
        element: <StepThree />,
      },
      {
        path: "stepfour",
        element: <StepFour />,
      },
      {
        path: "stepfive",
        element: <StepFive />,
      },
      {
        path: "paymentOne",
        element: <PaymentOne />,
      },
      {
        path: "paymentTwo",
        element: <PaymentTwo />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
