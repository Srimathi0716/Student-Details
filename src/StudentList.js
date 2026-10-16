import StudentCard from "./StudentCard";

function StudentList({student}) {
  return (
    <>
  {student.map((student) => (
        <StudentCard student={student} />
      ))}
     
       </>
      )  
        
}

export default StudentList;