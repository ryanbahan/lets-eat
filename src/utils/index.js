// api calls

export const getRestaurants = async () => {
  const res = await fetch('https://code-challenge.spectrumtoolbox.com/api/restaurants',
    { headers: {
      Authorization: 'Api-Key q3MNxtfep8Gt', },
    }
  )

  return res.json();
};

// helpers for mapping all available states/genres to filters

export const getGenres = (data) => {
  const items = data.map(restaurant => restaurant.genre.split(',')).flat();
  return [...new Set(items)];
}

export const getStates = (data) => {
  const items = data.map(restaurant => restaurant.state);
  const sortedItems = items.sort();
  return [...new Set(sortedItems)];
}

// selectors for presenting specific restaurants without using derived state

export const getFilteredRestaurants = (restaurants, filters, searchText) => {
  const filteredByState = restaurants.filter(restaurant => filterByState(filters, restaurant));
  const filteredByStateAndGenre = filteredByState.filter(restaurant => filterByGenre(filters, restaurant.genre));
  const allFiltered = filterByQuery(filteredByStateAndGenre, searchText);
  return sortAlphabetically(allFiltered);
}

const filterByState = (filters, restaurant) => {
  return !filters.find(item => item === restaurant.state);
}

const filterByGenre = (filters, genre) => {
  const genres = genre.split(',');
  if (filters.find(filter => genres.find(genre => genre === filter)))  {
    return false;
  } else {
    return true;
  }
}

const filterByQuery = (restaurants, searchText) => {
  if (searchText) {
    let query = new RegExp(searchText, "gi");
    return restaurants.filter(restaurant => {
      return (
        restaurant.name.match(query) ||
        restaurant.city.match(query) ||
        restaurant.genre.match(query)
      );
    });
  } else {
    return restaurants;
  }
}

const sortAlphabetically = (data) => {
  return data.sort((a,b) => (a.name > b.name) ? 1 : -1);
}

export const getPaginatedSlice = (restaurants, index) => {
  return restaurants.slice((index * 10) - 10, index * 10);
}
