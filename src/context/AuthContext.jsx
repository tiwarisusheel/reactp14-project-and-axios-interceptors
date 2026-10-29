import { createContext, useState } from "react";

export const AuthData = createContext();

export const AuthProvider = ({children})=>{
       const [registeredUsers, setRegisteredUsers] = useState(
       JSON.parse(localStorage.getItem("registeredUsers")) || []
       );
       const [loggedInUsers, setLoggedInUsers] = useState(
        JSON.parse(localStorage.getItem("loggedInUserLocal")) || null
       )

       console.log("registeredUser", registeredUsers);
       console.log("loggedInUser", loggedInUsers);

    return(
        <AuthData.Provider
        value={{
            registeredUsers,
            setRegisteredUsers,
            loggedInUsers,
            setLoggedInUsers
        }}
        >
            {children}
        </AuthData.Provider>
    )
}