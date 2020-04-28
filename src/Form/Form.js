import React from 'react';
import Filter from '../Filter/Filter';

class Form extends React.Component {
  constructor() {
    super();
    this.state = {searchText: ""}
  }

  update = (e) => {
    this.setState({[e.target.id]: e.target.value})
  }

  render() {
    return (
      <form className="Form" style={{display: "flex", border: "solid 1px black", width: "85vw", justifyContent: "center", alignItems: "baseline"}}>
        <input type="text" value={this.state.searchText} onChange={this.update} id="searchText" placeholder="Search..." style={{height: "1.25rem"}}/>
        <Filter name="State"/>
        <Filter name="Genre"/>
      </form>
    );
  }
}

export default Form;
