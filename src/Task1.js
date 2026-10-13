import React, { useState } from "react";

function Task1 () {
  const [form, setForm] = useState({ title: "" });
  const [tasks, setTasks] = useState([]);
  const [dark, setDark] = useState(false);
  const [showHelp, setShowHelp] = useState(false);
  const [deleteId, setDeleteId] = useState(null);

  const addTask = (e) => {
    e.preventDefault();
    if (form.title == "") return;
    setTasks([...tasks, { id: Date.now(), title: form.title, done: false }]);
    setForm({ title: "" });
  };

  const changeStatus = (id) => {
    setTasks(tasks.map(t =>
      t.id == id ? { ...t, done: !t.done } : t
    ));
  };

  const deleteTask = () => {
    setTasks(tasks.filter(t => t.id != deleteId));
    setDeleteId(null);
  };

  return (
    <div style={{
      padding: 20, minHeight: "100vh",
      background: dark ? "#222" : "#eee",
      color: dark ? "white" : "black"
    }}>
      <h2>Task Manager</h2>

      <form onSubmit={addTask}>
        <input
          value={form.title}
          placeholder="Enter task"
          onChange={(e) => setForm({ title: e.target.value })}
        />
        <button>Add</button>
      </form>

      <h3>Total Tasks: {tasks.length}</h3>

      <button onClick={() => setDark(!dark)}>
        {dark ? "Light Mode" : "Dark Mode"}
      </button>

      <button onClick={() => setShowHelp(!showHelp)}>
        How to use
      </button>

      {showHelp && <p>Add task → Change status → Delete task</p>}

      <h3>All Tasks</h3>
      {tasks.map(t => (
        <div style={{ margin: 10 }} key={t.id}>
          {t.title} - {t.done ? "Completed" : "Pending"}
          <button onClick={() => changeStatus(t.id)}>
            Change
          </button>
          <button onClick={() => setDeleteId(t.id)}>Delete</button>
        </div>
      ))}

      <h3>Completed Tasks</h3>
      {tasks.filter(t => t.done).map(t => (
        <p key={t.id}>✅ {t.title}</p>
      ))}

      {deleteId && (
        <div style={{
          position: "fixed", top: "40%", left: "35%",
          background: "white", color: "black", padding: 20,
          border: "2px solid black"
        }}>
          <p>Delete this task?</p>
          <button onClick={deleteTask}>Yes</button>
          <button onClick={() => setDeleteId(null)}>No</button>
        </div>
      )}
    </div>
  );
}

export default Task1;