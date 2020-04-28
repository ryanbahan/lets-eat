import React from 'react';
import Form from '../Form/Form';
import Paginator from '../Paginator/Paginator';
import RestaurantsContainer from '../RestaurantsContainer/RestaurantsContainer';
import MyProvider from '../Context';

class App extends React.Component {

  render() {
    return (
      <MyProvider>
        <div className="App" style={{display: "flex", flexDirection: "column", justifyContent: "center", alignItems:" center"}}>
          <h1>Let's Eat!</h1>
          <Paginator />
          <Form />
          <RestaurantsContainer />
        </div>
      </MyProvider>
    )
  }
}

export default App;
