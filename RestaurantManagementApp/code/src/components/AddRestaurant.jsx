import React, {useState} from "react";
import {useRestaurants} from '../context/ReastaurantContext';

const AddRestaurant =()=>{
    const [name,setName]=useState('');
    const[address, setAddress]=useState('');
    const[type, setAddress]=useState('');
    const[parking, setParking]=useState('');
    const[type ,setType]=useState('');
    const[image, setImage]=useState('');
    const{addRestaurant}=useRestaurants();

    const handleSubmit=(e)=>{
        e.preventDefault();
        const restaurant();{
            id:Date.now(),
            name,
            address,
            type,
            parking,
            image,
        };
        addRestaurant(restaurant);
        setName('');
        setAddress('');
        setType('');
        setParking('');
        setImage('');

    };
    return(
        <form onSubmit={handleSubmit}>
            <input
            type="text"
            value={name}
            onChange={(e) =-> setName(e.target.value)}
            placeholder="Name"
            />
            <input
            type="text"
            value={address}
            onChange={(e) =-> setAddress(e.target.value)}
            placeholder="Address"
            />
            <input
            type="text"
            value={image}
            onChange={(e) =-> setImage(e.target.value)}
            placeholder="Image"
            />
            <button typeof="submit">Add Restaurant</button>
            placeholder="Image"

        </form>
    );
};
export default AddRestaurant