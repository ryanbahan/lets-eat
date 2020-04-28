import React from 'react';
import { getRestaurants } from './utils';

export const MyContext = React.createContext();

export default class MyProvider extends React.Component {
  state = {
    restaurants: [],
  }

  componentDidMount() {
    getRestaurants()
    .then(data => this.setState({'restaurants': data}));
  }

  update(key, value) {
    this.setState({[key]: value})
  }

  render() {
    return (
      <MyContext.Provider value={{state: this.state, update: this.update}}>
        {this.props.children}
      </MyContext.Provider>
    )
  }
}
