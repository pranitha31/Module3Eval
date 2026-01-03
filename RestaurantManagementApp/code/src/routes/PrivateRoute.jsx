import { Component } from "react";
import { useAuth } from "../context/AuthContext";



const PrivateRoute =({Component:Component, ...rest})=>{
    const {role}=useAuth();

    return(
        <Route 
        {...rest}
        render={(props)=>
            role ? <Component {...props}/>

        }
        />

    );

};
export default PrivateRoute;