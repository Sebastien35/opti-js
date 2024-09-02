const Measure = (func, input) => {
    console.time(func.name);
    console.log(func(input));
    console.timeEnd(func.name);
    console.log('---------------------------------');
  }

  module.exports = { Measure };
  