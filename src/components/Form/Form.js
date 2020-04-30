import React from 'react';
import Filter from '../Filter/Filter';
import { MyContext } from '../../utils/Context';
import { getStates, getGenres } from '../../utils';

class Form extends React.Component {
  static contextType = MyContext;

  clearFilters = () => {
    this.context.update({filters: []});
  }

  update = (e) => {
    this.context.update({searchText: e.target.value});
    this.context.update({pageIndex: 1});
  }

  render() {
    const formStyles = {
      display: "flex",
      flexWrap: "wrap",
      border: "solid 0.5px rgba(0,0,0,0.15)",
      borderRadius: "0.25rem",
      boxShadow: "0.5px 1px 5px rgba(0,0,0,0.05)",
      width: "55vw",
      minWidth: "25rem",
      maxWidth: "50rem",
      justifyContent: "center",
      alignItems: "center",
    };

    const inputStyles = {
      height: "3rem",
      fontSize: "1.5rem",
      flexGrow: "1",
      paddingLeft: "0.5rem",
      margin: "1rem 1rem 1rem 0.5rem",
    }

    const buttonStyles = {
      cursor: "pointer",
      fontSize: "1.5rem",
      border: "solid 0.5px rgba(0,0,0,0.25)",
      borderRadius: "0.25rem",
      padding: "0.75rem",
      margin: "0.5rem",
    };

    const { restaurants } = this.context.state;

    return (
      <form className="Form" style={formStyles}>
        <input
          type="text"
          onChange={this.update}
          id="searchText"
          placeholder="Search..."
          style={inputStyles}
        />
        <div style={{display: "flex", flexBasis: "100%"}}>
          <Filter
            name="State"
            items={getStates(restaurants)}
          />
          <Filter
            name="Cuisine"
            items={getGenres(restaurants)}
          />
          <button
            type="button"
            style={buttonStyles}
            onClick={this.clearFilters}
          >
            Clear filters
          </button>
        </div>
      </form>
    );
  }
}

export default Form;
