import React, { Component } from 'react';
import PrinciplesList from './PrinciplesList';
import PrinciplesProgress from './PrinciplesProgress'

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
