import React from 'react';
import { MyContext } from '../Context';

const Paginator = ({length = 0}) => {

  const paginatorStyles = {
    width: "55vw",
    minWidth: "25rem",
    maxWidth: "50rem",
  };

  const buttonStyles = {
    margin: "1rem 0.25rem 0 0.25rem",
    cursor: "pointer",
  }

  const displayNumbers = (length, fn) => {
    let nums = [];
    for (let i = 0; i < length / 10; i++) {
      nums.push(i + 1);
    }

    return nums.map(num => (
      <button
        type="button"
        key={num}
        style={buttonStyles}
        onClick={() => fn({pageIndex: parseInt(num)})}
      >
        {num}
      </button>
    ))
  }


  return (
    <MyContext.Consumer>
    {context => (
      <div className="Paginator" style={paginatorStyles}>
        {displayNumbers(length, context.update)}
      </div>
    )}
    </MyContext.Consumer>
  );
}

export default Paginator;
