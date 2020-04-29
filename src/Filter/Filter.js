import React from 'react';
import { MyContext } from '../Context';

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
    if (this.context.state.filters.find(item => item === selection)) {
      updatedItems = this.context.state.filters.filter(item => item !== selection);
    } else {
      updatedItems = this.context.state.filters.concat([selection]);
    }
    this.context.update({filters: [...updatedItems]})
  }

  displayItems(items) {
    const listItems = items.map(item => (
      <div key={item} style={{display: "flex", alignItems: "baseline"}}>
        <input type="checkbox" onClick={() => this.updateForm(item)} defaultChecked={this.checkFilteredItems(item)} />
        <p id={item}>{item}</p>
      </div>
    ))

    return (
      <div className="modal-bg" style={{display: "flex", justifyContent: "center", alignItems: "center", position: "fixed", top: "0", left: "0", width: "100vw", height: "100vh", backgroundColor: "rgba(0,0,0,0.25)"}}>
      <div className="filter-dropdown" style={{backgroundColor: "white", border: "solid 1px black", height: "50%", width: "50%", overflow: "scroll"}}>
        <button type="button" onClick={() => this.closeModal()} style={{cursor: "pointer"}}>Close</button>
        {listItems}
      </div>
      </div>
    )
  }

  render() {
    const filterStyles = {
      display: "flex",
      margin: "1rem",
      border: "solid 0.5px rgba(0,0,0,0.25)",
      borderRadius: "0.25rem",
      padding: "0 1rem",
      alignItems: "baseline",
    };

    return (
      <MyContext.Consumer>
        {context => (
          <div className="Filter" style={filterStyles}>
            <p style={{cursor: "pointer"}} onClick={() => this.toggleDropdown()}>{this.props.name}</p>
            <p style={{paddingLeft: "0.25rem", cursor: "pointer", fontSize: "1.5rem", margin: "-2rem 0"}} onClick={() => this.toggleDropdown()}>></p>
            {this.state.dropdown && this.displayItems(this.props.items)}
          </div>
        )}
      </MyContext.Consumer>
    );
  }
}

export default Filter;
