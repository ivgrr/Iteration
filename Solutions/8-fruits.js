'use strict';

const fruits = (obj) => {
  const result = Object.entries(obj).reduce((prev, current) => {
    const name = current[0];
    const fruitsArr = current[1];
    prev[name] = fruitsArr.reduce((tally, fruit) => {
      if (!tally[fruit]) {
        tally[fruit] = 1;
      } else {
        tally[fruit]++;
      }
      return tally;
    }, {});
    return prev;
  }, {});

  return result;
};

module.exports = { fruits };
