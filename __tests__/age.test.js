import Age from './../src/js/age.js'
describe('Age', () => {

  test('should output the users age', () => {
    const age = new Age(20);
    expect(age.userAge).toEqual(20);
  });

  test('should output Mercury age', () => {
    const age = new Age(20)
    expect(age.mercuryAge).toEqual(4.8);
  });

  test('should output Mercury age as a whole number', () => {
    const age = new Age(20)
    expect(age.mercuryAge).toEqual(4);
  });
});