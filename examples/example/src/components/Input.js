import React from 'react';
import { func, string } from 'prop-types';

const inputStyle = {
  padding: 10
};

const Input = ({ onChange, type, name }) => (
  <div style={inputStyle}>
    <label htmlFor={name}>{`${name.charAt(0).toUpperCase()}${name.slice(1)}`}</label>
    <br />
    <input
      type={type}
      name={name}
      id={name}
      onChange={({ target: { value } }) => onChange(value)}
    />
  </div>
);

Input.propTypes = {
  onChange: func.isRequired,
  type: string.isRequired,
  name: string.isRequired
};

export default Input;
