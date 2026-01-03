import { Component } from "react";
import { useAuth } from "../context/AuthContext";



const AdminRoute =({component: Component, ...rest})=>{
    const {role} = useAuth();
     return(
        <Route
        {...rest}
        render={(props)=>
            role === 'admin' ? <Component {...props} /> : <Redirect to="/login" />

        }
        />
    );
};
export default AdminRoute