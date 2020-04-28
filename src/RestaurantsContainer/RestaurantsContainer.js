import React from 'react';
import RestaurantRow from '../RestaurantRow/RestaurantRow';

const RestaurantsContainer = ({ restaurants }) => {
  const displayRestaurants = (data) => {
    return data.map(restaurant =>
      (
        <RestaurantRow
          name={restaurant.name}
        />
      )
    )
  };

  return (
    <div className="RestaurantsContainer" style={{border: "solid 1px black"}}>
      {displayRestaurants(restaurants)}
    </div>
  );
}

export default RestaurantsContainer;
