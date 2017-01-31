import React, { Component } from 'react';

class StrengthMeter extends Component {
  constructor(props) {
    super(props);
  }

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
