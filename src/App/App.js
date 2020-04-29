import React from 'react';
import Form from '../Form/Form';
import RestaurantsContainer from '../RestaurantsContainer/RestaurantsContainer';
import MyProvider from '../Context';

const appStyles = {
  position: "relative",
  display: "flex",
  flexDirection: "column",
  alignItems:" center",
  justifyContent: "center",
  padding: "2.5rem 0 10rem 0",
}

const App = () => (
      <MyProvider>
        <div className="App" style={appStyles}>
          <h1>Let's Eat!</h1>
          <Form />
          <RestaurantsContainer />
        </div>
      </MyProvider>
    )

export default App;
