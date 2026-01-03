

const RestaurantCard =({restaurant})=>{
    return(
        <div>
            <h4>{restaurant.restaurantName}</h4>
            <p>Address: {restaurant.address}</p>
            <p>Type :{restaurant.parkingLot ? 'Yes' : 'No'}</p>
            <img src="https://coding-platform.s3.amazonaws.com/dev/lms/tickets/7524df6e-46fa-4506-8766-eca8da47c2f1/2izhqnTaNLdenHYF.jpeg" alt={restaurant.restaurantName} />
        </div>
    )
}