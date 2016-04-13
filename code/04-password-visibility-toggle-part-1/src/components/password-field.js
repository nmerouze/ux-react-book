import React, {Component} from 'react';

class PasswordField extends Component {
  constructor(props) {
    super(props);
    this.state = {isLabelFloating: false, isPasswordVisible: false};
  }

  handleFocus() {
    this.setState({isLabelFloating: true});
  }

  handleBlur(e) {
    if (!e.target.value) {
      this.setState({isLabelFloating: false});
    }
  }

  handleCheckBoxChange() {
    this.setState({isPasswordVisible: !this.state.isPasswordVisible});
  }

  render() {
    const placeholder = this.state.isLabelFloating ? this.props.hint : null;
    const labelClass = this.state.isLabelFloating ? 'is-floating' : null;
    const inputType = this.state.isPasswordVisible ? 'text' : 'password';

    return (
      <div className="form-group text-field">
        <label htmlFor={this.props.name} className={labelClass}>{this.props.label}</label>
        <div className="input-group" style={{width: '100%'}}>
          <input
            className="form-control"
            type={inputType}
            id={this.props.name}
            placeholder={placeholder}
            onFocus={this.handleFocus.bind(this)}
            onBlur={this.handleBlur.bind(this)}/>
          <span className="input-group-addon">
            <label><input type="checkbox" onChange={this.handleCheckBoxChange.bind(this)}/> Show password</label>
          </span>
        </div>
      </div>
    );
  }
}

export default PasswordField;
