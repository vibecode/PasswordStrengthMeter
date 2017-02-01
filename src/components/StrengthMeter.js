import React, { Component } from 'react';
import PrinciplesList from './RulesList';
import PrinciplesProgress from './RulesProgress'

class StrengthMeter extends Component {
  render() {
    return (
        <div>
          <PrinciplesProgress {...this.props} />
          <h5>A good password is:</h5>
          <PrinciplesList {...this.props} />
        </div>
    )
  }
}

export default StrengthMeter;
