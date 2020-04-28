import React from 'react';
import RestaurantRowDropdown from '../RestaurantRowDropdown/RestaurantRowDropdown';

class RestaurantRow extends React.Component {
  constructor() {
    super();
    this.state = {
      dropdown: false,
    }
  }

  toggleDropdown = (e) => {
    this.setState({dropdown: !this.state.dropdown});
  }

  render() {
    return (
      <div className="RestaurantRow" style={{border: "solid 1px black", display: "flex", justifyContent: "space-between", flexWrap: "wrap"}}>
        <p>{this.props.name}</p>
        <p onClick={() => this.toggleDropdown()}>+</p>
        {this.state.dropdown && <RestaurantRowDropdown />}
      </div>
    );
  }
}

export default RestaurantRow;
