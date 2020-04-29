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
      fontSize: "1.5rem",
      cursor: "pointer",
      margin: "0.25rem 0.5rem",
    };

    const titleStyles = {
      fontSize: "1.25rem",
      cursor: "pointer",
    }

    const linkStyles = {
      display: "block",
      padding: "0.5rem 0",
      fontWeight: "600",
      color: "#000",
    }

    return (
      <div className="RestaurantRow" style={rowStyles}>
        <p
          onClick={() => this.toggleDropdown()}
          style={titleStyles}
        >
          {name}
        </p>
        <div style={{display: "flex", alignItems: "baseline"}}>
          <a
            href={`tel:${telephone}`}
            style={linkStyles}
          >
            <i className="fas fa-phone-volume"
              style={buttonStyles}
            >
            </i>
          </a>
          <i
            onClick={() => this.toggleDropdown()}
            className="fas fa-caret-down"
            style={buttonStyles}
          >
          </i>
        </div>
        {this.state.dropdown &&
          <div className="RestaurantRowDropdown" style={{flexBasis: "100%"}}>
            <p>{genre}</p>
            <p>{address1}</p>
            <p>{city}, {state}, {zip}</p>
            <a href={`tel:${telephone}`} style={linkStyles}>{telephone}</a>
            <a href={{website}} style={linkStyles}>{website}</a>
            <p>tags: {tags}</p>
          </div>
        }
      </div>
    );
  }
}

export default RestaurantRow;
