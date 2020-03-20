import React from 'react';
import './index.scss';

export default class TextInput extends React.Component {
  render() {
    const { label, onChange, type, value } = this.props;

    return (
      <div className="TextInput">
        <label htmlFor={label} className="TextInput_Label">{label}</label>
        <div>
          <input id={label} className="TextInput_Input" onChange={onChange} type={type} value={value}/>
        </div>
      </div>
    )
  }
}