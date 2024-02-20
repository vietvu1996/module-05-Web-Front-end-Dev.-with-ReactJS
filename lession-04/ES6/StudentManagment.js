import Student from "./Student.js";
import { ROLE_ADMIN, ROLE_USER, getDefaultRole } from "./RoleConstant.js";

function main() {
  // let student1 = new Student(1, "John", 18, ROLE_USER);
  let student2 = new Student(2, "Geogre", 20, ROLE_ADMIN);
  let student1 = new Student(1, "Viet", 18, getDefaultRole());
  console.log(student1);
  console.log(student2);
}
main();
