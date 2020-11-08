import React from 'react';
import './App.scss';
import JokeBox from '../components/JokeBox';

export default class App extends React.Component {
  render() {
    return (
      <div className="App">
        <JokeBox />
      </div>
    );
  }
}
