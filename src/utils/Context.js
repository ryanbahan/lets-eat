import React from 'react';
import { getRestaurants } from '.';

export const MyContext = React.createContext();

export default class MyProvider extends React.Component {
  state = {
    restaurants: [],
    filters: [],
    searchText: "",
    pageIndex: 1,
  }

  componentDidMount() {
    getRestaurants()
    .then(data => this.setState({'restaurants': data}));
  }

  update = (item) => {
    this.setState(item);
  }

  render() {
    return (
      <MyContext.Provider value={{state: this.state, update: this.update}}>
        {this.props.children}
      </MyContext.Provider>
    )
  }
}
