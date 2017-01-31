import React, { Component } from 'react';

class PrinciplesList extends Component {
  satisfiesPrinciple(principle) {
    let {password} = this.props;

    return principle.predicate(password);
  }

  principleClass(principle) {
    let satisfied = this.satisfiesPrinciple(principle);

    return classNames({
      ["text-success"]: satisfied,
      ["text-danger"]: !satisfied
    });
  }

  render() {
    let {principles} = this.props;
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