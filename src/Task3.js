import React, { useState } from "react";

function Task3() {
  const [form, setForm] = useState({ name: "", age: "", course: "" });
  const [students, setStudents] = useState([]);
  const [count, setCount] = useState(0);
  const [dark, setDark] = useState(false);
  const [show, setShow] = useState(false);
  const [del, setDel] = useState(null);

  const addStudent = (e) => {
    e.preventDefault();
    if (!form.name || !form.age || !form.course) return;
    setStudents([...students, { ...form, id: Date.now() }]);
    setForm({ name: "", age: "", course: "" });
  };

  const deleteStudent = () => {
    setStudents(students.filter(s => s.id != del));
    setDel(null);
  };

  return (
    <div style={{
      padding: 20, minHeight: "100vh",
      background: dark ? "#222" : "#eee",
      color: dark ? "white" : "black"
    }}>
      <h2>Student Management</h2>

      <form onSubmit={addStudent}>
        <input placeholder="Name" value={form.name}
          onChange={e => setForm({...form, name:e.target.value})} />
        <input placeholder="Age" value={form.age}
          onChange={e => setForm({...form, age:e.target.value})} />
        <input placeholder="Course" value={form.course}
          onChange={e => setForm({...form, course:e.target.value})} />
        <button>Add</button>
      </form>

      <h3>Counter: {count}</h3>
      <button onClick={() => setCount(count + 1)}>+</button>
      <button onClick={() => setCount(count - 1)}>−</button>
      <button onClick={() => setCount(0)}>Reset</button>

      <button onClick={() => setDark(!dark)}>
        {dark ? "Light" : "Dark"}
      </button>

      <button onClick={() => setShow(!show)}>What is React?</button>
      {show && <p>React is a JavaScript library for building UI.</p>}

      <h3>All Students</h3>
      {students.map(s => (
        <p key={s.id}>
          {s.name} - {s.age} - {s.course}
          <button onClick={() => setDel(s.id)}>Delete</button>
        </p>
      ))}

      <h3>Age 18 and Above</h3>
      {students.filter(s => s.age >= 18).map(s => (
        <p key={s.id}>{s.name} - {s.age}</p>
      ))}

      {del && (
        <div style={{background:"white", color:"black", padding:20}}>
          <p>Are you sure?</p>
          <button onClick={deleteStudent}>Delete</button>
          <button onClick={() => setDel(null)}>Cancel</button>
        </div>
      )}
    </div>
  );
}

export default Task3;