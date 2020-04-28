import React from 'react';
import RestaurantRow from '../RestaurantRow/RestaurantRow';
import { MyContext } from '../Context';

const RestaurantsContainer = () => {

  const displayRestaurants = data => {
    return data.map(restaurant =>
      (
        <RestaurantRow
          key={restaurant.id}
          name={restaurant.name}
        />
      )
    )
  };

  return (
    <MyContext.Consumer>
      {context => (
        <div className="RestaurantsContainer" style={{border: "solid 1px black", width: "85vw"}}>
          {displayRestaurants(context.state.restaurants)}
        </div>
      )}
    </MyContext.Consumer>
  );
}

export default RestaurantsContainer;
