


const CustomerRoute =({component: Component, ...rest})=>{
    const {role} = useAuth();
     return(
        <Route
        {...rest}
        render={(props)=>
            role === 'customer' ? <Component {...props} /> : <Redirect to="/login" />

        }
        />
    );
};
export default CustomerRoute;