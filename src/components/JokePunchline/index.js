import React, { Component } from 'react';
import JokeComplete from '../JokeComplete';

class JokePunchline extends Component {
  state = { punchlinePresent: false };

  updatePunchline = () => {
    this.setState({
      punchlinePresent: true,
    });
  };

  render() {
    const { joke } = this.props;
    const { punchlinePresent } = this.state;
    return (
      <div>
        {!punchlinePresent ? (
          <div>
            <div className="setup">{joke.setup}</div>
            <button className="btn btn-dark" onClick={this.updatePunchline}>GET PUNCHLINE</button>
          </div>
        ) : (
          <JokeComplete key={joke.id} joke={joke}/>
        )}
      </div>
    );
  }
}

export default JokePunchline;
