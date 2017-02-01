import React, { Component } from 'react';
import { Progress } from 'semantic-ui-react';

class PrinciplesProgress extends Component {

  progressBarStyle() {
    const percentage = this.satisfiedPrinciplesPercent();

    if (percentage <= 33) {
      return 'error';
    }

    if (percentage > 67) {
      return 'success';
    }

    return 'warning';
  }

  satisfiedPrinciplesPercent() {
    const {principles, password} = this.props;

    const principleResults = principles.map(
        principle => principle.predicate(password)
    );

    const passedPrinciples = principleResults.reduce(
        (acc, result) => acc + (result ? 1 : 0), 0
    );

    return Math.round(
        (passedPrinciples / principleResults.length) * 100.0
    );
  }

  render() {
    return (
        <Progress
            percent={() => this.satisfiedPrinciplesPercent()}
            {() => this.progressBarStyle()} />
    )
  }
}

export default PrinciplesProgress;