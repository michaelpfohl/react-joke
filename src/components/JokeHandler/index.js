import React, { Component } from 'react';
import jokeData from '../../helpers/data/jokeData';

class JokeHandler extends Component {
  state = { jokeState: 'no-joke' };

  componentDidMount() {
    jokeData.getJoke().then((response) => {
      this.setState({
        joke: response,
        jokeState: 'no-joke',
      });
    });
  }

  getInitialJoke = () => {
    this.setState({
      jokeState: 'setup',
    });
  };

  updatePunchline = () => {
    this.setState({
      jokeState: 'punchline',
    });
  };

  getNewJoke = () => {
    jokeData.getJoke().then((response) => {
      this.setState({
        joke: response,
        jokeState: 'no-joke',
      });
    });
  };

  render() {
    const { joke, jokeState } = this.state;
    let jokeComponent;
    if (jokeState === 'no-joke') {
      jokeComponent = (
        <button className="btn btn-dark" onClick={this.getInitialJoke}>
          GET A JOKE
        </button>
      );
    } else if (jokeState === 'setup') {
      jokeComponent = (
        <div>
          <div className="setup">{joke.setup}</div>
          <button className="btn btn-dark" onClick={this.updatePunchline}>
            GET PUNCHLINE
          </button>
        </div>
      );
    } else if (jokeState === 'punchline') {
      jokeComponent = (
        <div>
          <div className="setup">{joke.setup}</div>
          <div className="punchline">{joke.punchline}</div>
          <button className="btn btn-dark" onClick={this.getNewJoke}>
            GET NEW JOKE
          </button>
        </div>
      );
    }

    return (
      <div className='joke-corral'>
        <img
          className="logo"
          src="https://user-images.githubusercontent.com/29741570/98047811-372e3b80-1df2-11eb-9bb6-3e8845e92d9e.png"
          alt="logo"
        ></img>
        {jokeComponent}
      </div>
    );
  }
}

export default JokeHandler;
