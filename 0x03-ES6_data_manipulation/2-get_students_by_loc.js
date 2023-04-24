export default function getStudentsByLocation(students, city) {
  const studentList = students.filter((filteredObj) => filteredObj.location === city);
  return studentList;
}
