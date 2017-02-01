import React, { Component } from 'react';
import { Input } from 'semantic-ui-react';
import { calcRulesPercents, getStatus } from '../helpers';

class PasswordField extends Component {
  handlePasswordChange(e) {
    const { onPasswordChange } = this.props;
    onPasswordChange(e.target.value);
  }

  render() {
    const { password } = this.props;
    const percentage = calcRulesPercents(this.props);
    const  status = getStatus(percentage);

    const statusClasses = {
      'ERROR' : 'input-error',
      'SUCCESS': 'input-success',
      'WARNING': 'input-warning'
    };

    return (
      <Input
          className={password.length > 0 ? statusClasses[status] : ''}
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
