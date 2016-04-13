import React, {Component} from 'react';

const FloatingLabelField = FieldComponent => class extends Component {
  constructor(props) {
    super(props);
    this.state = {isLabelFloating: false};
  }

  handleFocus() {
    this.setState({isLabelFloating: true});
  }

  handleBlur(e) {
    if (!e.target.value) {
      this.setState({isLabelFloating: false});
    }
  }

  render() {
    const placeholder = this.state.isLabelFloating ? this.props.hint : null;
    const labelClass = this.state.isLabelFloating ? 'is-floating' : null;

    return (
      <div className="form-group text-field">
        <label htmlFor={this.props.name} className={labelClass}>{this.props.label}</label>
        <FieldComponent
          {...this.props}
          placeholder={placeholder}
          onFocus={this.handleFocus.bind(this)}
          onBlur={this.handleBlur.bind(this)}/>
      </div>
    );
  }
}

export default FloatingLabelField;
