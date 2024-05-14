import * as React from "react";
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import Home from "../pages/site/home/Home";
import SiteRoot from "../pages/site/SiteRoot";
import AminRoot from "../pages/admin/AminRoot";
import Basket from "../pages/site/basket/basket";
// import Basket from "../pages/site/Basket/Basket";


const routes =[
    {
        path:"/",
        element:<SiteRoot/>,
        children:[
          {
            path:"",
            element:<Home/>
          },
          {
            path:"basket",
            element:<Basket/>
          }
        ]
    },
    {
        path:"/admin",
        element:<AminRoot/>,
        children:[
          {
            path:"",
          }
        ]
    }
]
export default routes