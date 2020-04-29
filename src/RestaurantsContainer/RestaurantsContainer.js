import React from 'react';
import RestaurantRow from '../RestaurantRow/RestaurantRow';
import { MyContext } from '../Context';
import { getFilteredRestaurants, getPaginatedSlice } from '../utils';
import Paginator from '../Paginator/Paginator';

const RestaurantsContainer = () => {

  const displayRestaurants = (restaurants, filters, searchText, pageIndex) => {
    const filteredRestaurants = getFilteredRestaurants(restaurants, filters, searchText);
    const paginatedRestaurants = getPaginatedSlice(filteredRestaurants, pageIndex);
    return paginatedRestaurants.map(restaurant =>
      (
        <RestaurantRow
          key={restaurant.id}
          restaurantData={{...restaurant}}
        />
      )
    )
  };

  const getLength = (restaurants, filters, searchText) => {
    return getFilteredRestaurants(restaurants, filters, searchText).length;
  }

  const containerStyles = {
    width: "55vw",
    minWidth: "25rem",
    maxWidth: "50rem",
  };

  return (

    <MyContext.Consumer>
      {context => (
        <div className="RestaurantsContainer" style={containerStyles}>
        <Paginator
          length={
            getLength(
            context.state.restaurants,
            context.state.filters,
            context.state.searchText)
          }
        />
        {
          displayRestaurants(
          context.state.restaurants,
          context.state.filters,
          context.state.searchText,
          context.state.pageIndex)
        }
        {
          !getLength(
          context.state.restaurants,
          context.state.filters,
          context.state.searchText)
          &&
          <div style={{margin: "2.5rem 0"}}><p>Sorry, nothing matches your search - try again!</p></div>
        }
        </div>
      )}
    </MyContext.Consumer>
  );
}

export default RestaurantsContainer;
