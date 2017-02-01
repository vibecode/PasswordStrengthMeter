import React, { Component } from 'react';
import { Input } from 'semantic-ui-react';
import { calcRulesPercents, getStatus } from '../helpers';

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
    const percentage = calcRulesPercents(this.props);
    const  status = getStatus(percentage);

    const statusColors = {
      'ERROR' : 'red',
      'SUCCESS': 'green',
      'WARNING': 'yellow'
    };

    return (
      <Input
          fluid
          type='password'
          value={password}
          label='Password'
          onChange={(e) => this.handlePasswordChange(e)}
      />
    );
  }
}

export default PasswordField;