const utils = require('./utils');
it('it should add two numbers', () => {
  var res = utils.add(33, 11);
  if(res !==  44) {
    throw new Error(`Expected 44 but got ${res}`)
  }
});

it('It should square the number', () => {
  const res = utils.square(4);
  if(res !== 16) {
    throw new Error(`The res expected as 16 but got ${res}`)
  }
});
