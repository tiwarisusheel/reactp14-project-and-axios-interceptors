import { useEffect, useState } from "react";
import UserCard from "../components/userCard";
import { axiosInstance } from "../config/axiosInstance";

const UsersPage = () => {
  const [usersData, setUsersData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

 console.log("usersData", usersData)
  const getUsersData = async ()=>{
    try {
      const res = await axiosInstance.get("/users");
      console.log(res.data)
      setUsersData(res.data);
      setIsLoading(false);
    } catch (error) {
      console.log("errors in users api", error)
      
    }
  }

  useEffect(()=>{
    getUsersData()
  }, [])

  if (isLoading) {
  return (
    <div className="flex min-h-[50vh] flex-col items-center justify-center gap-4">
      <div className="h-12 w-12 animate-spin rounded-full border-4 border-gray-200 border-t-blue-600"></div>

      <p className="animate-pulse text-lg font-semibold text-gray-600">
        Users Are Loading...
      </p>
    </div>
  );
}

  return (
  <div className="min-h-screen bg-slate-100 p-5 md:p-8">
    {/* Page Header */}
    <div className="mb-8">
      <h1 className="text-3xl font-bold text-slate-800">
        Users
      </h1>
      <p className="mt-2 text-sm text-slate-500">
        Manage and view all registered users.
      </p>

      <div className="mt-5 inline-flex items-center gap-2 rounded-lg bg-white px-4 py-3 shadow-sm">
        <span className="text-sm text-slate-500">
          Total Users
        </span>
        <span className="rounded-md bg-indigo-100 px-2 py-1 font-bold text-indigo-700">
          {usersData.length}
        </span>
      </div>
    </div>

    {/* Users Grid */}
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-3">
      {usersData.map((user) => {
        return <UserCard key={user.id} user={user} />;
      })}
    </div>
  </div>
);
}

export default UsersPage