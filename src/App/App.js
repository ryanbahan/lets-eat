import React from 'react';
import Form from '../Form/Form';
import Paginator from '../Paginator/Paginator';
import RestaurantsContainer from '../RestaurantsContainer/RestaurantsContainer';
import { getRestaurants } from '../utils';

class App extends React.Component {
  constructor() {
    super();
    this.state = {restaurants: []}
  }

  componentDidMount() {
    getRestaurants()
    .then(data => this.setState({restaurants: data}));
  }

  render() {
    return (
      <div className="App" style={{display: "flex", flexDirection: "column", justifyContent: "center", alignItems:" center"}}>
        <h1>Let's Eat!</h1>
        <Paginator />
        <Form />
        <RestaurantsContainer
          restaurants={this.state.restaurants}
        />
      </div>
    )
  }
}

export default App;
