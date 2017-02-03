import React, { Component } from 'react';
import classNames from 'classnames';

class RulesList extends Component {
  constructor(props) {
    super(props);
    this.getClassByStatus = this.getClassByStatus.bind(this);
  }

  satisfiesRule(rule) {
    const {password} = this.props;

    return rule.predicate(password);
  }

  getClassByStatus(rule) {
    const satisfied = this.satisfiesRule(rule);

    return classNames({
      'text-success': satisfied,
      'text-danger': !satisfied
    });
  }

  render() {
    const {rules} = this.props;

    return (
          <ul>
            {rules.map((rule, i) =>
                <li key={i} className={this.getClassByStatus(rule)}>
                  <small>{rule.label}</small>
                </li>
            )}
          </ul>
    );
  }
}

export default RulesList;
