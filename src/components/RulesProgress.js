import React, { Component } from 'react';
import { Progress } from 'semantic-ui-react';
import { calcRulesPercents, getStatus } from '../helpers';

class RulesProgress extends Component {

  render() {
    const percentage = calcRulesPercents(this.props);
    const  status = getStatus(percentage);

    const statusColors = {
      'ERROR' : 'red',
      'SUCCESS': 'green',
      'WARNING': 'yellow'
    };

    return (
        <Progress
            percent={percentage}
            color={statusColors[status]}
        />
    )
  }
}

export default RulesProgress;