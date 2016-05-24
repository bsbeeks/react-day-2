import React from 'react';
import ReactDOM from 'react-dom';

const App = React.createClass({
  getDefaultProps () {
    console.log('getDefaultProps');

    return {};
  },

  getInitialState () {
    console.log('getInitialState');

    return {};
  },

  componentWillMount () {
    console.log('componentWillMount', this);
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

  render () {
    console.log('render');
    
    return (
      <div className='name'>
        <h1>Star Wars Character: </h1>
      </div>
    );
  }
});

ReactDOM.render(<App />, document.getElementById('my-app'));