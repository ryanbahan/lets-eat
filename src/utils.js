export const getRestaurants = () => {
  return fetch('https://code-challenge.spectrumtoolbox.com/api/restaurants',
    { headers: {
      Authorization: 'Api-Key q3MNxtfep8Gt', },
    }
  ).then(res => res.json())
};

export const getGenres = (data) => {
  const items = data.map(restaurant => restaurant.genre.split(',')).flat();
  return [...new Set(items)];
}

export const getStates = (data) => {
  const items = data.map(restaurant => restaurant.state);
  return [...new Set(items)];
}
