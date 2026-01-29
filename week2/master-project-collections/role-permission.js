/*

MODULE 4: ROLE & PERMISSION ENGINE
  -> Get all role names
  -> Check if student can delete
  -> Create a flat list of all unique permissions
  -> Add new role moderator immutably
  */

  const roles = {
  admin: ["create", "update", "delete", "view"],
  student: ["view"]
};

const roleNames=Object.keys(roles);
console.log(roleNames);

const canStudentDelete=roles.student.includes("delete");
console.log(canStudentDelete);

const allPermissions = [
  ...new Set(Object.values(roles).flat())
];
console.log("All unique permissions:", allPermissions);

const newRole = { moderator: ["update", "view"] };
const updatedRoles = { ...roles, ...newRole };
console.log("Updated Roles:", updatedRoles);
