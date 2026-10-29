
import { Outlet } from "react-router";
import Navbar from "../components/Navbar";

const MainLayouts = () => {
  return (
    <div className="min-h-screen bg-slate-100 md:flex">
      {/* Sidebar */}
      <Navbar />

      {/* Main Dashboard Content */}
      <div className="min-w-0 flex-1 md:ml-64">
        {/* Top Header */}
        <header className="flex h-16 items-center justify-between border-b border-slate-200 bg-white px-6">
          <h2 className="text-lg font-semibold text-slate-800">
            Dashboard
          </h2>

          <div className="flex items-center gap-3">
            <button className="rounded-full p-2 text-slate-500 hover:bg-slate-100">
              <span className="text-xl">🔔</span>
            </button>

            <div className="flex h-9 w-9 items-center justify-center rounded-full bg-indigo-600 font-semibold text-white">
              S
            </div>
          </div>
        </header>

        {/* Page Content */}
        <main className="p-5 md:p-8">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default MainLayouts;
