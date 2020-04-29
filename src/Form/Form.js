import React from 'react';
import Filter from '../Filter/Filter';
import { MyContext } from '../Context';
import { getStates, getGenres } from '../utils';

class Form extends React.Component {
  static contextType = MyContext;

  update = (e) => {
    this.context.update({searchText: e.target.value});
  }

  render() {
    return (
      <MyContext.Consumer>
        {context => (
          <form className="Form" style={{display: "flex", border: "solid 1px black", width: "85vw", justifyContent: "center", alignItems: "baseline"}}>
            <input type="text" onChange={this.update} id="searchText" placeholder="Search..." style={{height: "1.25rem"}}/>
            <Filter name="State" items={getStates(context.state.restaurants)} />
            <Filter name="Genre" items={getGenres(context.state.restaurants)} />
          </form>
        )}
      </MyContext.Consumer>
    );
  }
}

export default Form;
