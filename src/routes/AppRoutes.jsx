import { createBrowserRouter, RouterProvider } from "react-router"
import AuthLayouts from "../layouts/AuthLayouts"
import Login from "../pages/Login"
import Register from "../pages/Register"
import MainLayouts from "../layouts/MainLayouts"
import ProtectedRoutes from "./ProtectedRoutes"
import PublicRoutes from "./PublicRoutes"
import Home from "../pages/Home"
import ProductPages from "../pages/ProductPages"
import UsersPage from "../pages/UsersPage"

const AppRoutes = () => {
    const router = createBrowserRouter([
       {
        path:"/",
        element:<PublicRoutes />,
        children:[
             {
            path:"",
            element:<AuthLayouts />,
            children:[
                {
                    path:"",
                    element:<Login />
                },
                {
                    path:"register",
                    element:<Register />
                }
            ]
        },
        ]
       },
        {
            path:"/main",
            element:<ProtectedRoutes />,
            children:[
                {
                    path:"",
                    element:<MainLayouts />,
                    children:[
                        {
                            path:"",
                            element:<Home />
                        },
                         {
                            path:"products",
                            element:<ProductPages />
                        },
                         {
                            path:"users",
                            element:<UsersPage />
                        }
                    ]
                }
            ]
        }
    ])
  return <RouterProvider router={router} />
}

export default AppRoutes