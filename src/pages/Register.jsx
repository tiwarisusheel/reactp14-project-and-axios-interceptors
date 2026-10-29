import { Link } from "react-router";
import { useAuth } from "../hooks/useAuthHooks";

function Register() {
  const {handleSubmit, registerFormSubmit, register, errors} = useAuth()
 
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4 py-8">
      <div className="w-full max-w-md rounded-2xl bg-white p-8 shadow-lg">

        <h1 className="mb-2 text-center text-3xl font-bold text-gray-800">
          Create Account
        </h1>

        <p className="mb-8 text-center text-gray-500">
          Enter your details to get started.
        </p>

        <form onSubmit={handleSubmit(registerFormSubmit)}>
          <div className="mb-5">
            <label className="mb-2 block font-medium text-gray-700">
              Full Name
            </label>
            <input
              type="text"
              placeholder="Enter your full name"
              {...register("name", {
                required:"Name is required",
              })}
              className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-indigo-500"
            />
            {errors.name && <p className="text-red-700">{errors.name.message}</p> }
          </div>

          <div className="mb-5">
            <label className="mb-2 block font-medium text-gray-700">
              Email Address
            </label>
            <input
              type="email"
              placeholder="Enter your email"
              {...register("email", {
                required:"Email is required",
              })}
              className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-indigo-500"
            />
            {errors.email && <p className="text-red-700">{errors.email.message}</p> }
          </div>

          <div className="mb-5">
            <label className="mb-2 block font-medium text-gray-700">
              Password
            </label>
            <input
              type="password"
              placeholder="Create a password"
              {...register("password", {
                required:"password is required",
                minLength:{
                    value:6,
                    message:"Minimum 6 characters are required"
                }
              })}
              className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-indigo-500"
            />
            {errors.password && <p className="text-red-700">{errors.password.message}</p> }
          </div>
          <button
            type="submit"
            className="w-full rounded-lg bg-indigo-600 py-3 font-semibold text-white transition hover:bg-indigo-700 cursor-pointer"
          >
            Create Account
          </button>
        </form>

        <p className="mt-6 text-center text-sm text-gray-600">
          Already have an account?{" "}
          <Link
            to="/"
            className="font-semibold text-indigo-600 hover:text-indigo-700"
          >
            Login
          </Link>
        </p>

      </div>
    </div>
  );
}

export default Register;