import React, {Component} from 'react';
import FloatingLabelField from './floating-label-field';

class PasswordField extends Component {
  constructor(props) {
    super(props);
    this.state = {isPasswordVisible: false};
  }

  handleCheckBoxChange() {
    this.setState({isPasswordVisible: !this.state.isPasswordVisible});
  }

  render() {
    const inputType = this.state.isPasswordVisible ? 'text' : 'password';

    return (
      <div className="input-group">
        <input
          className="form-control"
          type={inputType}
          id={this.props.name}
          placeholder={this.props.placeholder}
          onFocus={this.props.onFocus}
          onBlur={this.props.onBlur}/>
        <span className="input-group-addon">
          <label><input type="checkbox" onChange={this.handleCheckBoxChange.bind(this)}/> Show password</label>
        </span>
      </div>
    );
  }
}

export default FloatingLabelField(PasswordField);
