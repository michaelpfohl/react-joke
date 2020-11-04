import React, { Component } from 'react';
import JokePunchline from '../JokePunchline/index';

class JokeSetup extends Component {
  state = { jokePresent: false };

  getInitialJoke = () => {
    this.setState({
      jokePresent: true,
    });
  };

  render() {
    const { joke } = this.props;
    const { jokePresent } = this.state;
    return (
      <div>
        <img
          className="logo"
          src="https://user-images.githubusercontent.com/29741570/98047811-372e3b80-1df2-11eb-9bb6-3e8845e92d9e.png"
          alt="logo"
        ></img>
        {!jokePresent ? (
          <button className="btn btn-dark" onClick={this.getInitialJoke}>
            GET A JOKE
          </button>
        ) : (
          <JokePunchline key={joke.id} joke={joke}/>
        )}
      </div>
    );
  }
}

export default JokeSetup;
