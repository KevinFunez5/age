export default class Age {
  constructor(age) {
    this.userAge = age;
    this.mercuryAge = age * .24;
    this.venusAge = age * .62;
  }
}