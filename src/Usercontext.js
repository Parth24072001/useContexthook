import { createContext, useContext, useState } from "react";
export const UserContext =createContext(null)
export const UserProvider = ({ children }) => {

const [value,setValue]=useState(1)
    return <UserContext.Provider value={{value , setValue}}>{children}</UserContext.Provider>;
}
export const useUser = () => {
    return useContext(UserContext);
}