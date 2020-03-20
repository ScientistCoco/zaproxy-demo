import React from 'react';
import './index.scss';

export default class TextArea extends React.Component {
  render() {
    const { label, onChange, value } = this.props;

    return (
      <div className="TextArea">
        <label htmlFor={label} className="TextArea_Label">{label}</label>
        <div>
          <textarea id={label} className="TextArea_Input" onChange={onChange} value={value}/>
        </div>
      </div>
    )
  }
}