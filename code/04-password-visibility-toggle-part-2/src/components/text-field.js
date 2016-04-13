import React, {Component} from 'react';
import FloatingLabelField from './floating-label-field';

const TextField = ({type, name, placeholder, onFocus, onBlur}) => (
  <input
    className="form-control"
    type={type}
    id={name}
    placeholder={placeholder}
    onFocus={onFocus}
    onBlur={onBlur}/>
);

export default FloatingLabelField(TextField);
