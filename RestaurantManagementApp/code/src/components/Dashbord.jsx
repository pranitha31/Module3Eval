import React from "react";
import {useAuth} from '../context/AuthContext';
import {useRestaurants} from '../context/ReastaurantContext';
import RestaurantCard from './RestaurantCard';
import AddRestaurant from "./AddRestaurant";

const Dashboard=()=>{
    const {role}=useAuth();
    const {restaurants}=useRestaurants();

    return(
        <div>
            {role== 'admin' && <AddRestaurant />}
            {restaurants.map((restaurant)=>(
                <RestaurantCard key={restaurant.id} restaurant={restaurant} />
            ))}
        </div>
    );
};
export default Dashboard;