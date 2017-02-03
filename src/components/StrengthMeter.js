import React, { Component } from 'react';
import RulesProgress from './RulesProgress';
import RulesList from './RulesList';

class StrengthMeter extends Component {
  render() {
    return (
        <div>
          <RulesProgress {...this.props} />
          <h5>A good password is:</h5>
          <RulesList {...this.props} />
        </div>
    )
  }
}

export default StrengthMeter;
