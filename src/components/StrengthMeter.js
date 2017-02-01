import React, { Component } from 'react';
import PrinciplesList from './PrinciplesList';

class StrengthMeter extends Component {
  render() {
    return (
        <div>
          <h5>A good password is:</h5>
          <PrinciplesList {...this.props} />
        </div>
    )
  }
}

export default StrengthMeter;
