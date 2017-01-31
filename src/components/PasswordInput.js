import React, { Component } from 'react';
import PasswordField from './PasswordField';
import StrengthMeter from './StrengthMeter';
import { Grid } from 'semantic-ui-react';

class PasswordInput extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
        <Grid>
          <StrengthMeter />
          <PasswordField />
        </Grid>
    );
  }
}

const SPECIAL_CHARS_REGEX = /[^A-Za-z0-9]/;
const DIGIT_REGEX = /[0-9]/;

PasswordInput.defaultProps = {
  goodPasswordPrinciples: [
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
