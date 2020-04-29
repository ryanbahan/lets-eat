import React from 'react';
import RestaurantRow from '../RestaurantRow/RestaurantRow';
import { MyContext } from '../Context';
import { getFilteredRestaurants } from '../utils';

const RestaurantsContainer = () => {

  const displayRestaurants = (restaurants, filters, searchText) => {
    const filteredRestaurants = getFilteredRestaurants(restaurants, filters, searchText);
    return filteredRestaurants.map(restaurant =>
      (
        <RestaurantRow
          key={restaurant.id}
          name={restaurant.name}
        />
      )
    )
  };

  const containerStyles = {
    width: "55vw",
    minWidth: "25rem",
    maxWidth: "50rem",
  };

  return (

    <MyContext.Consumer>
      {context => (
        <div className="RestaurantsContainer" style={containerStyles}>
          {displayRestaurants(context.state.restaurants, context.state.filters, context.state.searchText)}
        </div>
      )}
    </MyContext.Consumer>
  );
}

export default RestaurantsContainer;
