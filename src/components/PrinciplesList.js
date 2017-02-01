import React, { Component } from 'react';
import classNames from 'classnames';

class PrinciplesList extends Component {
  satisfiesPrinciple(principle) {
    const {password} = this.props;

    return principle.predicate(password);
  }

  principleClass(principle) {
    const satisfied = this.satisfiesPrinciple(principle);

    return classNames({
      ["text-success"]: satisfied,
      ["text-danger"]: !satisfied
    });
  }

  render() {
    const {principles} = this.props;
    console.log(this.props);
    console.log(principles);
    return (
          <ul>
            {principles.map((principle) =>
                <li className={() => this.principleClass(principle)}>
                  <small>{principle.label}</small>
                </li>
            )}
          </ul>
    );
  }
}

export default PrinciplesList;
