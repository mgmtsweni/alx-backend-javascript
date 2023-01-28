export default class HolbertonCourse {
  constructor(name, length, students) {
    this.name = name;
    this.length = length;
    this.students = students;
  }
  get name() {
    return this._name;
  }

  set name(value) {
    if (typeof value != 'string')
      throw new TypeError('Name must be a string')
    this._name
  }

  get length() {
    return this._length;
  }

  set length(value) {
    if (typeof value != 'number')
      throw new TypeError('Name must be a number')
    this._length
  }

  get students() {
    return this._students;
  }

  set students(value) {
    value.forEach((element) => {
      if (typeof element !== 'string')
        throw new TypeError('Students must be an array of strings');
    });
    this._students = value;
  }
}