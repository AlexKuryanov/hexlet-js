import _ from 'lodash';

export default (arr) => {
  const lastNum = _.last(arr);
  return lastNum;
};
