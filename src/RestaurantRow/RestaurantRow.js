import React from 'react';

const RestaurantRow = ({ name }) => {

  return (
    <div className="RestaurantRow" style={{border: "solid 1px black"}}>
      <p>{name}</p>
    </div>
  );
}

export default RestaurantRow;
