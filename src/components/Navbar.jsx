
import { useContext } from "react";
import { NavLink} from "react-router";
import { AuthData } from "../context/AuthContext";
import { toast } from "react-toastify";

const Navbar = () => {
  // const navigate = useNavigate();
  const {setLoggedInUsers} = useContext(AuthData)
  const menuItems = [
    { name: "Home", path: "/main", icon: "◫" },
    { name: "Products", path: "/main/products", icon: "▦" },
    { name: "Users", path: "/main/users", icon: "♙" },
  ];

  const LogOut = ()=>{
    console.log("logout")
    localStorage.removeItem("loggedInUserLocal");
    setLoggedInUsers(null)
    toast.success("You loggedOut!")
  }

  return (
    <aside className="w-full shrink-0 bg-slate-900 text-white md:min-h-screen md:w-64 fixed">
      {/* Logo */}
      <div className="flex h-16 items-center gap-3 border-b border-slate-700 px-6">
        <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-indigo-500 text-xl font-bold">
          S
        </div>

        <h1 className="text-xl font-bold tracking-wide">
          SkyMart
        </h1>
      </div>

      {/* Navigation */}
      <nav className="p-4">
        <p className="mb-4 px-3 text-xs font-semibold uppercase tracking-widest text-slate-400">
          Menu
        </p>

        <div className="space-y-2">
          {menuItems.map((item) => (
            <NavLink
              key={item.name}
              to={item.path}
              end={item.path === "/main"}
              className={({ isActive }) =>
                `flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium transition ${
                  isActive
                    ? "bg-indigo-600 text-white shadow-lg shadow-indigo-950/30"
                    : "text-slate-300 hover:bg-slate-800 hover:text-white"
                }`
              }
            >
              <span className="w-5 text-center text-lg">
                {item.icon}
              </span>

              {item.name}
            </NavLink>
          ))}
        </div>
      </nav>

      {/* Bottom Profile */}
      <div className="border-t border-slate-700 p-4 md:mt-8">
        <div className="flex items-center gap-3 rounded-xl bg-slate-800 p-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-indigo-500 font-bold">
            S
          </div>

          <div className="min-w-0">
            <p className="truncate text-sm font-semibold">
              Admin User
            </p>
            <p className="text-xs text-slate-400">
              Administrator
            </p>
          </div>
        </div>
      </div>
      <div className="border-t border-slate-700 p-4 md:mt-8">
         <div className="flex items-center justify-center gap-3 rounded-xl bg-slate-800 p-3">
          <button 
          onClick={LogOut}
          className="cursor-pointer">Logout</button>
         </div>
      </div>
    </aside>
  );
};

export default Navbar;
