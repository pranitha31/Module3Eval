import React, {useState} from "react";
import {useAuth} from '../context/AuthContext';
import {useHistory} from 'react-router-dom';

const Login=()=>{
    const [email, setEmail]=useState('');
    const [password, setPassword]=useState('');
    const {login}=useAuth();
    const history = useHistory();

    const handleSubmit=(e)=>{
        e.preventDeafult();
        if(email === 'admin@gmail.com' && password == 'admin1234'){
            login('admin');
            history.push('/admin/dashbord');
        }else if (email === 'customer@gmail.com	' && password === 'customer1234'){
            login('customer');
            history.push('/customer/dashbord'); 
        }else{
            alert('Invalid email or password');
        }
    };
    return(
        <form onSubmit={handleSubmit}>
            <input 
            type="email"
            value={email}
            onChange={(e)=> setEmail(e.target.value)}
            placeholder="Email"
            />
            <input 
            type="password"
            value={password}
            onChange={(e)=> setPassword(e.target.value)}
            placeholder="Password"
            />
            <button type="submit">Login</button>
        </form>
    );
};
export default Login;