import React from 'react';
import RestaurantRow from '../RestaurantRow/RestaurantRow';
import { MyContext } from '../Context';
import { getFilteredRestaurants } from '../utils';
import Paginator from '../Paginator/Paginator';

const RestaurantsContainer = () => {

  const displayRestaurants = (restaurants, filters, searchText) => {
    const filteredRestaurants = getFilteredRestaurants(restaurants, filters, searchText);
    const mappedRestaurants = filteredRestaurants.map(restaurant =>
      (
        <RestaurantRow
          key={restaurant.id}
          restaurantData={{...restaurant}}
        />
      )
    )

    return mappedRestaurants;
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
        <Paginator length={displayRestaurants(context.state.restaurants, context.state.filters, context.state.searchText).length}/>
          {displayRestaurants(context.state.restaurants, context.state.filters, context.state.searchText)}
          {!displayRestaurants(context.state.restaurants, context.state.filters, context.state.searchText).length &&
            <div style={{margin: "2.5rem 0"}}><p>Sorry, nothing matches your search - try again!</p></div>
          }
        </div>
      )}
    </MyContext.Consumer>
  );
}

export default RestaurantsContainer;
