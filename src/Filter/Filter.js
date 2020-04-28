import React from 'react';

const Filter = ({ name, items }) => {

  return (
    <div className="Filter" style={{margin: "1rem"}}>
      <p>{name}</p>
      {console.log(items)}
    </div>
  );
}

export default Filter;
