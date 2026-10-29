import { useContext } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router";
import { AuthData } from "../context/AuthContext";
import { toast } from "react-toastify";

export const useAuth = () => {
  const navigate = useNavigate();
  const { setLoggedInUsers, registeredUsers, setRegisteredUsers } = useContext(AuthData);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

//   login logic
  const loginFormSubmit = (data) => {
    const user = registeredUsers.find(
      (registeredUser) =>
        registeredUser.email === data.email &&
        registeredUser.password === data.password,
    );
    console.log("login user", user);
    if (!user) {
      toast.error("User not found or invalid credentials");
      reset();
      return;
    }
    setLoggedInUsers(user);
    localStorage.setItem("loggedInUserLocal", JSON.stringify(user));
    toast.success("User Logged in");
    navigate("/main");
    console.log("formdata login", data);
    reset();
  };

  //register logic
  const registerFormSubmit = (data) => {
    let userArr = [...registeredUsers, data];
    setRegisteredUsers(userArr);
    localStorage.setItem("registeredUsers", JSON.stringify(userArr));
    toast.success("User Registered Successfully");
    console.log("formdata", data);
    reset();
    navigate("/");
  };

  return {
    register,
    handleSubmit,
    errors,
    reset,
    navigate,
    loginFormSubmit,
    registerFormSubmit,
  };
};
