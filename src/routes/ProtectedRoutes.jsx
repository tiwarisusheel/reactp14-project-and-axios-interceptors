import { useContext } from "react"
import { Outlet, Navigate } from "react-router"
import { AuthData } from "../context/AuthContext"

const ProtectedRoutes = () => {
    const {loggedInUsers} = useContext(AuthData);
    
    if(!loggedInUsers){
        return <Navigate to={"/"} />
    }
  return (
        <Outlet />
  )
}

export default ProtectedRoutes