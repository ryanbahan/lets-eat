import React from 'react';
import './App.css';

const App = () => {

  function test() {
    fetch('https://code-challenge.spectrumtoolbox.com/api/restaurants', { headers: {
      Authorization: 'Api-Key q3MNxtfep8Gt', },
    }).then(res => res.json()).then(data => console.log(data))
  }

  return (
    <div className="App">
    {test()}
    </div>
  );
}

export default App;
