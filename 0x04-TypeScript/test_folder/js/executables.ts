export {};
const executeWork = require("./js/main").executeWork;
const createEmployee = require("./js/main").createEmployee;

test("the workTeacherTasks method for a Teacher returns the correct value", () => {
  expect(executeWork(createEmployee(200))).toBe("Getting to work");
});
test("the workDirectorTasks method for a Director returns the correct value", () => {
  expect(executeWork(createEmployee(10000))).toBe("Getting to director tasks");
});
