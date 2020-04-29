import React from 'react';

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

    const {
      name,
      genre,
      address1,
      city,
      state,
      zip,
      telephone,
      website,
      tags
    } = this.props.restaurantData;

    const rowStyles = {
      border: "solid 0.5px rgba(0,0,0,0.25)",
      borderRadius: "0.25rem",
      boxShadow: "0.5px 1px 5px rgba(0,0,0,0.05)",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      flexWrap: "wrap",
      margin: "0.5rem 0",
      padding: "0 1rem",
    };

    const buttonStyles = {
      fontSize: "2rem",
      margin: "-2rem 0",
      cursor: "pointer",
    };

    const titleStyles = {
      fontSize: "1.25rem",
      cursor: "pointer",
    }

    return (
      <div className="RestaurantRow" style={rowStyles}>
        <p onClick={() => this.toggleDropdown()} style={titleStyles}>{name}</p>
        <p onClick={() => this.toggleDropdown()} style={buttonStyles}>+</p>
        {this.state.dropdown &&
          <div className="RestaurantRowDropdown" style={{flexBasis: "100%"}}>
            <p>{genre}</p>
            <p>{address1}</p>
            <p>{city}, {state}, {zip}</p>
            <p>{telephone}</p>
            <p>{website}</p>
            <p>tags: {tags}</p>
          </div>
        }
      </div>
    );
  }
}

export default RestaurantRow;
