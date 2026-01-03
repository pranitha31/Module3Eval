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
            {role== 'admin' && (
                <div>
                    <h2>Admin Dashboard</h2>
                    <AddRestaurant />
                    <h3>Restaurant List</h3>
                    {restaurants.map((restaurant)=>(
                    <RestaurantCard key={restaurant.id} restaurant={restaurant} />
            ))}
        </div>
        {role === 'customer' && (
            <div>
                <h2>Customer Dashboard</h2>
                {restaurants.map((restaurants))=>(
                    <RestaurantCard key={restaurant.id} restaurant={restaurant} />
                )}
            </div>
        )}
    );
};
export default Dashboard;