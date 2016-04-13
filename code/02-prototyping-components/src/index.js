import React from 'react';
import {render} from 'react-dom';
import Form from './components/form';
import TextField from './components/text-field';
import Button from './components/button';

render(
  <div className="container">
    <Form className="col-md-4 col-md-offset-4">
      <TextField type="email" name="email" label="Email"/>
      <TextField type="password" name="password" label="Password"/>
      <Button type="submit" label="Sign Up"/>
    </Form>
  </div>,
  document.getElementById('root')
);
