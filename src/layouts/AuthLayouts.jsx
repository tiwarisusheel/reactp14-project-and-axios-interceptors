import { Outlet } from "react-router"


const AuthLayouts = () => {
  console.log("auth layout rendring...")
  return (
    <div>
        <Outlet />
    </div>
  )
}

export default AuthLayouts