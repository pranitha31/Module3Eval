import { Children, useContext, useState } from "react";
import { createContext } from "react";

const ReastaurantContext=createContext();
const RestaurantProvider =({children})=>{
    const [restaurants,setRestaurants]=useState([]);
    const addRestaurant = (restaurant)=>{
        setRestaurants([...restaurants, restaurant]);

    };
    const updateRestaurant = (id, restaurants)=>{
        setRestaurants(restaurants.map((r)=>(r.id === id ? restaurant : r)));

    };
    const deleteRestaurant=(id)=>{
        setRestaurants(restaurants.filter((r) => r.id !==id));
    };
    return(
        <ReastaurantContext.Provider
        value={{res,addRestaurant,updateRestaurant,deleteRestaurant}}
        >
            {children}
        </ReastaurantContext.Provider>
    );
};
const useRestaurants=()=>{
    return useContext(ReastaurantContext);
};
export {RestaurantProvider,useRestaurants};