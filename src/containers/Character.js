import React from 'react';

const Character = React.createClass({
  propTypes: {
    details: React.PropTypes.object
  },

  componentWillReceiveProps (newProps) {
    console.log('componentWillReceiveProps', newProps);
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
      <div>
        {this.props.details ? this.props.details.name : null}
      </div>
    );
  }
});

const styles = {
};

module.exports = Character;