import { Children, createContext, useContext, useState } from "react";


const AuthContext = createContext();
 const AuthProvider = ({children})=>{
    const [role, setRole]=useState(null);
    const login=(role)=>{
        setRole(role);
    };
    const logout=()=>{
        setRole(null);
    };
    return(
        <AuthContext.Provider value={{role,login,logout}}>
            {children}
        </AuthContext.Provider>
    );
 };
 const useAuth =()=>{
    return useContext(AuthContext);
 };
 export {AuthProvider,useAuth};