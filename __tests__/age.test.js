import Age from './../src/js/age.js'
describe('Age', () => {

  test('should output the users age', () => {
    const age = new Age(20);
    expect(age.userAge).toEqual(20);
  });

  test('should output Mercury age', () => {
    const age = new Age(20)
    expect(age.mercuryAge).toEqual(4);
  });

  test('should output Venus age', () => {
    const age = new Age(20)
    expect(age.venusAge).toEqual(12)
  });

  test('should output Mars age', () => {
    const age = new Age(20)
    expect(age.marsAge).toEqual(37);
  });

  test('should output Jupiter age', () => {
    const age = new Age(20)
    expect(age.jupiterAge).toEqual(237);
  });

  test('should output how many years user has left to live on Earth', () => {
    const age = new Age(20);
    age.life();
    expect(age.earthLife).toEqual(58);
  });
});
