import React from 'react';

export default ({name, type, label, hint}) => (
  <div className="form-group text-field">
    <input type={type} className="form-control" id={name} required placeholder={hint}/>
    <label htmlFor={name}>{label}</label>
  </div>
);
