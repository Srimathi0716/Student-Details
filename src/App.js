import { useEffect, useState } from "react";
import axios from "axios";
import StudentCard from './StudentCard'


function App() {
    const [assign, setAssign] = useState([]);
    const [data, setData] = useState(true);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users ")
      .then((response) => {
        setAssign(response.data);
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        setData(false);
      });
  }, []);

  
  return (
    <div>
    {assign.map((student) => (
        <StudentCard key={student.id} student={student} />
      ))}

    </div>
  );
}

export default App;