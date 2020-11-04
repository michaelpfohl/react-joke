import React, { Component } from 'react';
import jokeData from '../../helpers/data/jokeData';
import JokeSetup from '../JokeSetup/index';

class JokeCorral extends Component {
  state = { joke: {} };

  componentDidMount() {
    jokeData.getJoke().then((response) => {
      this.setState({
        joke: response,
      });
    });
  }

  render() {
    const { joke } = this.state;
    return (
      <div className="joke-corral">
        <JokeSetup key={joke.id} joke={joke}/>
      </div>
    );
  }
}

export default JokeCorral;
