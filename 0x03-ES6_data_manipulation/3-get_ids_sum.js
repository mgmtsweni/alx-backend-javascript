export default function getStudentsByLocation(students) {
  return students.reduce((accumulator, currentValue) => accumulator + currentValue.id, 0);
}
