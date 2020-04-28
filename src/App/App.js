import React from 'react';
import Form from '../Form/Form';
import Paginator from '../Paginator/Paginator';
import RestaurantsContainer from '../RestaurantsContainer/RestaurantsContainer';
import { getRestaurants } from '../utils';
import './App.css';

class App extends React.Component {
  constructor() {
    super();
    this.state = {}
  }

  componentDidMount() {
    getRestaurants()
    .then(data => this.setState({restaurants: data}));
  }

  render() {
    return (
      <div className="App">
        <h1>Let's Eat!</h1>
        <Paginator />
        <Form />
        <RestaurantsContainer />
      </div>
    )
  }
}

export default App;
