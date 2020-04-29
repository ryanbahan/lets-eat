import React from 'react';
import { MyContext } from '../Context';
import { modalStyles, dropdownStyles } from '../miscStyles';

class Filter extends React.Component {
  static contextType = MyContext;

  constructor() {
    super();
    this.state = {
      dropdown: false,
    }
  }

  toggleDropdown = (e) => {
    this.setState({dropdown: !this.state.dropdown});
  }

  closeModal = (e) => {
    this.setState({dropdown: false});
  }

  checkFilteredItems = (selection) => {
    const { filters } = this.context.state;

    if (filters.find(item => item === selection)) {
      return false;
    } else {
      return true;
    }
  }

  updateForm = (selection) => {
    this.context.update({pageIndex: 1});

    const { filters } = this.context.state;
    let updatedItems;

    if (filters.find(item => item === selection)) {
      updatedItems = filters.filter(item => item !== selection);
    } else {
      updatedItems = filters.concat([selection]);
    }

    this.context.update({filters: [...updatedItems]})
  }

  getListItems = (items) => {
    return items.map(item => (
      <div key={item} style={{display: "flex", alignItems: "baseline", padding: "0.5rem"}}>
        <input
          type="checkbox"
          onClick={() => this.updateForm(item)}
          defaultChecked={this.checkFilteredItems(item)}
        />
        <p id={item}>{item}</p>
      </div>
    ));
  }

  displayList = (items) => {
    const listItems = this.getListItems(items);

    return (
      <div className="filter-dropdown" style={dropdownStyles}>
        {listItems}
      </div>
    );
  }

  render() {

    const buttonStyles = {
      cursor: "pointer",
      fontSize: "1.5rem",
      border: "solid 0.5px rgba(0,0,0,0.25)",
      borderRadius: "0.25rem",
      padding: "0.75rem",
      margin: "0.5rem",
    };

    return (
      <MyContext.Consumer>
        {context => (
          <div style={{flexWrap: "wrap"}}>
            <button
              type="button"
              onClick={() => this.toggleDropdown()}
              style={buttonStyles}
            >
              {this.props.name}
              <i className="fas fa-caret-down"></i>
            </button>
            {this.state.dropdown && this.displayList(this.props.items)}
          </div>
        )}
      </MyContext.Consumer>
    );
  }
}

export default Filter;
