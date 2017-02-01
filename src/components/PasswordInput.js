import React, { Component } from 'react';
import PasswordField from './PasswordField';
import StrengthMeter from './StrengthMeter';
import { Grid } from 'semantic-ui-react';

class PasswordInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      password: ''
    }
  }

  changePassword(password) {
    this.setState({password});
  }

  render() {
    const {goodPasswordRules} = this.props;
    const {password} = this.state;

    return (
        <div className='formContainer'>
          <Grid centered columns={3}>
            <Grid.Row>
              <Grid.Column>
                <PasswordField
                    password={password}
                    onPasswordChange={(e) => this.changePassword(e)}
                    rules={goodPasswordRules}
                />
              </Grid.Column>
            </Grid.Row>
            <Grid.Row>
              <Grid.Column>
                <StrengthMeter
                    rules={goodPasswordRules}
                    password={password}
                />
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </div>
    );
  }
}

const SPECIAL_CHARS_REGEX = /[^A-Za-z0-9]/;
const DIGIT_REGEX = /[0-9]/;

PasswordInput.defaultProps = {
  goodPasswordRules: [
    {
      label: "6+ characters",
      predicate: (input) => input.length >= 6
    },
    {
      label: "with at least one digit",
      predicate: (input) => input.match(DIGIT_REGEX) !== null
    },
    {
      label: "with at least one special character",
      predicate: (input) => input.match(SPECIAL_CHARS_REGEX) !== null
    }
  ]
};

export default PasswordInput;
