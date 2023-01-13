import React from "react";
import ReactDOM from "react-dom/client";
import { Route, createBrowserRouter, RouterProvider } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import App from "./routes/App";
import Home from "./routes/Home"
import ErrorPage from "./Error-page";
import Contact from "./routes/Contact"
import Dashboard from "./routes/Dashboard";
import { Login} from "./routes/Login";

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <App />,
      errorElement: <ErrorPage />,
      children: [{
        path: "/",
        element: <Home />

      }, {
        path: "contact/:contactid",
        element: <Contact />
      },
      {
        path: "dashboard",
        element: <Dashboard />
      }
        ,
      {
        path: "login",
        element: <Login />,
        // children: [{

        //   path: "loginpage",
        //   element: <LoginTab />

        // }, {

        //   path: "signup",
        //   element: < SignUp />

        // }]
      }]
    }]


);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={router} />);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
