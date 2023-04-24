export default function getStudentIdsSum(students) {
  return students.map((studentsObj) => studentsObj.id)
    .reduce((previous, studentsObj) => previous + studentsObj);
}
