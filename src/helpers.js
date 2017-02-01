export const calcPrinciplesPercents = (props) => {
  const {principles, password} = props;

  const principleResults = principles
      .map(principle => principle.predicate(password));

  const passedPrinciples = principleResults
      .reduce((acc, result) => acc + (result ? 1 : 0), 0);

  return Math
      .round((passedPrinciples / principleResults.length) * 100.0
  );
};

export const changeStyleOnPercentage = (percentage) => {

  if (percentage <= 33) {
    return 'error';
  }

  if (percentage > 67) {
    return 'success';
  }

  return 'warning';
};