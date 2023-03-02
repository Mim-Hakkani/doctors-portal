import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import About from "../../pages/About/About";
import Appointment from "../../pages/Appointmemnt/Appointment";
import Dashboard from "../../pages/Dashboard/Dashboard";
import Home from "../../pages/Home/Home";
import Login from "../../pages/Login/Login";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Main />,
        // loader: rootLoader,
        children: [
          {
            path: "/",
            element: <Home />,
           
          },
          {
            path: "/about",
            element: <About />,
          
          },

          {
            path: "/login",
            element: <Login />,
         
          },
          {
            path: "/appoinment",
            element: <Appointment />,
         
          },

          {
            path: "/dashboard",
            element: <Dashboard />,
         
          },


          

        ],
    }
]);

export default router;
