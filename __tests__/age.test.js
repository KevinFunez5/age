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

  test('should output life expenctancy on Earth', () => {
    const age = new Age(20);
    age.life();
    expect(age.earthLife).toEqual(58);
  });

  test('should output how many years past life expectancy on earth', () => {
    const age = new Age(100);
    age.life();
    expect(age.earthLife).toEqual(22);
  })

  test('should output how many years left on mercury', () => {
    const age = new Age(20);
    age.life();
    expect(age.mercuryLife).toEqual(74);
  })

  test('should output how many years past life expectancy on mercury', () => {
    const age = new Age(100000);
    age.life();
    expect(age.mercuryLife).toEqual(23922);
  })

  test('should output how many years left on venus', () => {
    const age = new Age(20);
    age.life();
    expect(age.venusLife).toEqual(66);
  })

  test('should output how many years past life expectancy on venus', () => {
    const age = new Age(100000);
    age.life();
    expect(age.venusLife).toEqual(61922);
  })

  test('should output how many years left on mars', () => {
    const age = new Age(20);
    age.life();
    expect(age.marsLife).toEqual(41);
  })

  test('should output how many years past life expectancy on mars', () => {
    const age = new Age(100000);
    age.life();
    expect(age.marsLife).toEqual(187922);
  })

  test('should output how many years left on jupiter', () => {
    const age = new Age(2);
    age.life();
    expect(age.jupiterLife).toEqual(55);
  })

  test('should output how many years past life expectancy on jupiter', () => {
    const age = new Age(20);
    age.life();
    expect(age.jupiterLife).toEqual(159);
  })
});
