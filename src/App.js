import React from 'react';
import ReactDOM from 'react-dom';
import Axios from 'axios';

import Button from 'components/Button';
import Character from 'components/Character';

import { characters } from 'constants/App'; 

const App = React.createClass({
  getDefaultProps () {
    console.log('getDefaultProps');

    return {};
  },

  getInitialState () {
    console.log('getInitialState');

    return {
      character: characters[0]
    };
  },

  componentWillMount () {
    console.log('componentWillMount', this);

    this._getCharacterDetails(this.state.character);
  },

  componentDidMount () {
    console.log('componentDidMount');
  },

  componentWillUpdate () {
    console.log('componentWillUpdate');
  },

  componentDidUpdate () {
    console.log('componentDidUpdate');
  },

  _getCharacterDetails (character) {
    Axios.get('http://swapi.co/api/people/' + character.id)
    .then(response => {
      this.setState({
        characterDetails: response.data
      });
    });
  },

  _handleUpdateStateClick (e) {
    const character = characters[Math.floor(Math.random() * characters.length)];

    this.setState({
      character
    });

    this._getCharacterDetails(character);
  },

  render () {
    console.log('render');
    
    return (
      <div className='name'>
        <h1>Star Wars Character: {this.state.character.name}</h1>
        <Button onClick={this._handleUpdateStateClick}>Change Character</Button>
        <Character details={this.state.characterDetails} />
      </div>
    );
  }
});

ReactDOM.render(<App />, document.getElementById('my-app'));