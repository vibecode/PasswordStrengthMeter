import React, { Component } from 'react';
import { Progress } from 'semantic-ui-react';
import { calcPrinciplesPercents, changeStyleOnPercentage } from '../helpers';

class PrinciplesProgress extends Component {

  render() {
    const percentage = calcPrinciplesPercents(this.props);

    return (
        <Progress
            percent={percentage}
        />
    )
  }
}

export default PrinciplesProgress;