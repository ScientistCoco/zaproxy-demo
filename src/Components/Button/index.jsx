import React from 'react';
import './index.scss';

export default class Button extends React.Component {
  render() {
    const { children, onClick } = this.props;

    return (
      <button className="Button" onClick={onClick}>{children}</button>
    )
  }
}