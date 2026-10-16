import EmployeeSkills from "./EmployeeSkills";

function EmployeeCard({ employee }) {
  return (
    <div>
      <h2>Employee Details</h2>
      <p>Name: {employee.name}</p>
      <p>Role: {employee.role}</p>
      <p>Salary: ₹{employee.salary}</p>

      <EmployeeSkills skills={employee.skills} />
    </div>
  );
}

export default EmployeeCard;