import Life from './../src/js/life.js'
describe('Life', () => {
  
  test('should output the users life expectancy', () => {
    const life = new Life(61);
    expect(life.userLife).toEqual(61);
  })
})