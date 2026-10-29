import { useContext } from "react"
import { Outlet, Navigate } from "react-router"
import { AuthData } from "../context/AuthContext"

const PublicRoutes = () => {
    console.log("public routes rendering.....")
 const {loggedInUsers} = useContext(AuthData);
    
    if(loggedInUsers){
        return <Navigate to={"/main"} />
    }
  return (
        <Outlet />
  )
}

export default PublicRoutes