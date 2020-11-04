import React from 'react';
import JokeHandler from '../components/JokeHandler';
import './App.scss';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <JokeHandler />
      </div>
    );
  }
}

export default App;
