import React from 'react';
import { MyContext } from '../../utils/Context';
import { buttonStyles, paginatorStyles } from '../../utils/miscStyles';

const Paginator = ({length = 0}) => {

  const displayNumbers = (length, update) => {
    let nums = [];
    for (let i = 0; i < length / 10; i++) {
      nums.push(i + 1);
    }

    return nums.map(num => (
      <button
        type="button"
        key={num}
        style={buttonStyles}
        onClick={() => update({pageIndex: parseInt(num)})}
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
