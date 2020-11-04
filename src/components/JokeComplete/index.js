import React, { Component } from 'react';

class JokeComplete extends Component {
  state = { newJoke: false };

  getNewJoke = () => {
    this.setState({
      newJoke: true,
    });
  };

  render() {
    const { joke } = this.props;
    const { newJoke } = this.state;
    return (
      <div>
        {!newJoke ? (
          <div>
            <div className="setup">{joke.setup}</div>
            <div className="punchline">{joke.punchline}</div>
            <button className="btn btn-dark" onClick={this.getNewJoke}>
              GET NEW JOKE
            </button>
          </div>
        ) : (
          <div>NEW JOKE HAHAHA</div>
        )}
      </div>
    );
  }
}

export default JokeComplete;
