import React, { Component } from 'react';
import getJoke from '../helpers/data/jokeData';

export default class JokeBox extends Component {
  state = { jokeStatus: 'none' };

  componentDidMount() {
    getJoke().then((response) => {
      this.setState({
        jokes: response,
        jokeStatus: 'none',
      });
    });
  }

  getFirstJoke = () => {
    this.setState({
      jokeStatus: 'setup',
    });
  };

  showPunchline = () => {
    this.setState({
      jokeStatus: 'punchline',
    });
  }

  getANewJoke = () => {
    getJoke().then((response) => {
      this.setState({
        jokes: response,
        jokeStatus: 'setup',
      });
    });
  };

  render() {
    let jokeContainer;
    const { jokeStatus } = this.state;
    if (jokeStatus === 'none') {
      jokeContainer = (
      <button className='btn btn-lg' onClick={this.getFirstJoke}>GET A JOKE
      </button>
      );
    } else if (jokeStatus === 'setup') {
      jokeContainer = (
      <div>
        <div className='setup'>{this.state.setup}</div>
        <button className='btn btn-lg' onClick={this.showPunchline}>GET PUNCHLINE</button>
      </div>
      );
    } else if (jokeStatus === 'punchline') {
      jokeContainer = (
        <div>
          <div className='setup'>{this.state.setup}</div>
          <div className='punchline'>{this.state.punchline}</div>
          <button className='btn btn-lg' onClick={this.getANewJoke}>GET A NEW JOKE</button>
        </div>
      );
    }
    return (
        <div className=''>
          <img
            src='https://user-images.githubusercontent.com/29741570/98047811-372e3b80-1df2-11eb-9bb6-3e8845e92d9e.png'
            alt='logo'
          /><br></br><br></br>
        {jokeContainer}
        </div>
    );
  }
}
