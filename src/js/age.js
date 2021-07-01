export default class Age {
  constructor(age) {
    this.userAge = age;
    this.mercuryAge = Math.floor(age * .24);
    this.venusAge = Math.floor(age * .62);
    this.marsAge = Math.floor(age * 1.88);
    this.jupiterAge = Math.floor(age * 11.86);
    this.earthLife = "";
    this.earthLife = "";
  }


  life() {
    const lifeExpectancy = 78;
    this.earthLife = lifeExpectancy - this.userAge;
    this.mercuryLife = lifeExpectancy - this.mercuryAge;
    this.venusLife = lifeExpectancy - this.venusAge;
  }
}