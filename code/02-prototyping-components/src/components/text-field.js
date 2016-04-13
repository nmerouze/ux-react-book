import React from 'react';

export default ({name, type, label}) => (
  <div className="form-group">
    <label htmlFor={name}>{label}</label>
    <input type={type} className="form-control" id={name} placeholder={label}/>
  </div>
);
