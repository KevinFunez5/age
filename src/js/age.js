export default class Age {
  constructor(age) {
    this.userAge = age;
    this.mercuryAge = Math.floor(age * .24);
    this.venusAge = Math.floor(age * .62);
    this.marsAge = Math.floor(age * 1.88);
    this.jupiterAge = Math.floor(age * 11.86);
    this.earthLife = "";
    this.mercuryLife = "";
    this.venusLife = "";
    this.marsLife = "";
    this.jupiterLife = "";
  }

  life() {
    const lifeExpectancy = 78;
    if (this.userAge <= lifeExpectancy) {
      this.earthLife = lifeExpectancy - this.userAge;
    } else if (this.userAge > lifeExpectancy) {
      this.earthLife = this.userAge - lifeExpectancy;
    }
    if (this.mercuryAge <= lifeExpectancy) {
      this.mercuryLife = lifeExpectancy - this.mercuryAge;
    } else if (this.mercuryAge > lifeExpectancy) {
      this.mercuryLife = this.mercuryAge - lifeExpectancy;
    }
    if (this.venusAge <= lifeExpectancy) {
      this.venusLife = lifeExpectancy - this.venusAge;
    } else if (this.venusAge > lifeExpectancy) {
      this.venusLife = this.venusAge - lifeExpectancy;
    }
    if (this.marsAge <= lifeExpectancy) {
      this.marsLife = lifeExpectancy - this.marsAge;
    } else if (this.marsAge > lifeExpectancy) {
      this.marsLife = this.marsAge - lifeExpectancy;
    }
    if (this.marsAge <= lifeExpectancy) {
      this.marsLife = lifeExpectancy - this.marsAge;
    } else if (this.marsAge > lifeExpectancy) {
      this.marsLife = this.marsAge - lifeExpectancy;
    }
    if (this.jupiterAge <= lifeExpectancy) {
      this.jupiterLife = lifeExpectancy - this.jupiterAge;
    } else if (this.jupiterAge > lifeExpectancy) {
      this.jupiterLife = this.jupiterAge - lifeExpectancy;
    }
  } 
}