import React from 'react';

const Button = React.createClass({
  propTypes: {
    onClick: React.PropTypes.func,
    type: React.PropTypes.oneOf(['primary', 'secondary'])
  },

  getDefaultProps () {
    return {
      type: 'primary'
    }
  },

  _handleClick (e) {
    if (this.props.onClick) {
      this.props.onClick(e);
    }
  },

  render () {
    return (
      <div onClick={this._handleClick} style={styles[this.props.type]}>
        {this.props.children}
      </div>
    );
  }
});

const styles = {
  primary: {
    display: 'inline-block',
    padding: '10px 15px',
    fontSize: 14,
    borderRadius: 3,
    backgroundColor: '#1E71AF',
    color: '#fff',
    cursor: 'pointer'
  },
  secondary: {
    display: 'inline-block',
    padding: '10px 15px',
    fontSize: 14,
    borderRadius: 3,
    backgroundColor: '#444444',
    color: '#fff',
    cursor: 'pointer'
  }
};

module.exports = Button;