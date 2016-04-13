import React, {Component} from 'react';

class TextField extends Component {
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
        <input
          className="form-control"
          type={this.props.type}
          id={this.props.name}
          placeholder={placeholder}
          onFocus={this.handleFocus.bind(this)}
          onBlur={this.handleBlur.bind(this)}/>
      </div>
    );
  }
}

export default TextField;
