import React, { Component } from 'react';
import { Input } from 'semantic-ui-react';
import { calcPrinciplesPercents, changeStyleOnPercentage } from '../helpers';

class PasswordField extends Component {
  constructor(props) {
    super(props);
  }

  handlePasswordChange(e) {
    const { onPasswordChange } = this.props;
    onPasswordChange(e.target.value);
  }

  render() {
    const { password } = this.props;
    const percentage = calcPrinciplesPercents(this.props);

    return (
      <Input
          type='password'
          value={password}
          label='Password'
          onChange={(e) => this.handlePasswordChange(e)}
      />
    );
  }
}

export default PasswordField;