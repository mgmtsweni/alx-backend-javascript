export default class Currency {
  constructor(code, name) {
    this._code = code;
    this._name = name;
  }

  get name() {
    return this._name;
  }

  get code() {
    return this._code;
  }

  set name(myName) {
    this._name = myName;
  }
  set code(myCode) {
    this._name = myCode;
  }

  displayFullCurrency() {
    return `${this.name} (${this.code})`;
  }

}
