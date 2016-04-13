import React from 'react';
import {render} from 'react-dom';
import Form from './components/form';
import TextField from './components/text-field';
import Button from './components/button';

render(
  <div className="container" style={{marginTop: '48px'}}>
    <Form className="col-md-4 col-md-offset-4">
      <TextField type="email" name="email" label="Email" hint="nicolas@example.com"/>
      <TextField type="password" name="password" label="Password" hint="at least 8 characters"/>
      <Button type="submit" label="Sign Up"/>
    </Form>
  </div>,
  document.getElementById('root')
);
