export const getRestaurants = () => {
  return fetch('https://code-challenge.spectrumtoolbox.com/api/restaurants',
    { headers: {
      Authorization: 'Api-Key q3MNxtfep8Gt', },
    }
  ).then(res => res.json())
};
