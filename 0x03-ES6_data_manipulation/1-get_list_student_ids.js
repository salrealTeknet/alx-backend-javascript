export default function getListStudentIds(students) {
  if (!Array.isArray(students)) {
    return [];
  }

  const map = students.map((mappedObj) => mappedObj.id);
  return map;
}
