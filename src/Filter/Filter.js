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
    if (this.context.state.filters.find(item => item === selection)) {
      return false;
    } else {
      return true;
    }
  }

  updateForm = (selection) => {
    let updatedItems;
    this.context.update({pageIndex: 1});

    if (this.context.state.filters.find(item => item === selection)) {
      updatedItems = this.context.state.filters.filter(item => item !== selection);
    } else {
      updatedItems = this.context.state.filters.concat([selection]);
    }

    this.context.update({filters: [...updatedItems]})
  }

  getListItems = (items) => {
    return items.map(item => (
      <div key={item} style={{display: "flex", alignItems: "baseline"}}>
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
      <div className="modal-bg" style={modalStyles}>
      <div className="filter-dropdown" style={dropdownStyles}>
        <button
          type="button"
          onClick={() => this.closeModal()}
          style={{cursor: "pointer"}}
        >
          Close
        </button>
        {listItems}
      </div>
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
          <>
            <button
              type="button"
              onClick={() => this.toggleDropdown()}
              style={buttonStyles}
            >
              {this.props.name}
              <i className="fas fa-caret-down"></i>
            </button>
            {this.state.dropdown && this.displayList(this.props.items)}
          </>
        )}
      </MyContext.Consumer>
    );
  }
}

export default Filter;
