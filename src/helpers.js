export const calcRulesPercents = (props) => {
  const {rules, password} = props;

  const rulesResults = rules
      .map(rule => rule.predicate(password));

  const passedRules = rulesResults
      .reduce((acc, result) => acc + (result ? 1 : 0), 0);

  return Math
      .round((passedRules / rulesResults.length) * 100.0
  );
};

export const getStatus = (percentage) => {

  if (percentage <= 33) {
    return 'ERROR';
  }

  if (percentage > 67) {
    return 'SUCCESS';
  }

  return 'WARNING';
};
