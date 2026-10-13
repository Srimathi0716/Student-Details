import React, { useEffect, useState } from "react";

function Dashboard() {
  const [user, setUser] = useState({});
  const [tasks, setTasks] = useState([
    { id: 1, name: "Complete React Project", priority: "High", completed: false },
    { id: 2, name: "Study JavaScript", priority: "Medium", completed: true }
  ]);

  const [taskName, setTaskName] = useState("");
  const [priority, setPriority] = useState("Low");
  const [darkMode, setDarkMode] = useState(false);


  useEffect(() => {
    setUser({
      name: "Srimathi",
      email: "srimathi@gmail.com",
      role: "CSE Student"
    });
  }, []);

  
  function addTask() {
    if (taskName === "") {
      alert("Enter task name");
      return;
    }

    setTasks([
      ...tasks,
      {
        id: Date.now(),
        name: taskName,
        priority: priority,
        completed: false
      }
    ]);

    setTaskName("");
  }

  
  function deleteTask(id) {
    setTasks(tasks.filter((task) => task.id !== id));
  }

  
  function completeTask(id) {
    setTasks(
      tasks.map((task) =>
        task.id === id
          ? { ...task, completed: !task.completed }
          : task
      )
    );
  }

  return (
    <div
      style={{
        minHeight: "100vh",
        padding: "30px",
        fontFamily: "Arial",
        backgroundColor: darkMode ? "#180202" : "white",
        color: darkMode ? "white" : "black"
      }}
    >
      <div style={{ maxWidth: "800px", margin: "auto" }}>

        <h1>Task Management Dashboard</h1>

        <button onClick={() => setDarkMode(!darkMode)}>
          {darkMode ? "Light Mode" : "Dark Mode"}
        </button>

        
        <div className="box">
          <h2>Welcome, {user.name}!</h2>
          <p>Email: {user.email}</p>
          <p>Role: {user.role}</p>
        </div>

        
        <div className="box">
          <h2>Add New Task</h2>

          <input
            value={taskName}
            placeholder="Enter task"
            onChange={(e) => setTaskName(e.target.value)}
          />

          <select
            value={priority}
            onChange={(e) => setPriority(e.target.value)}
          >
            <option>High</option>
            <option>Medium</option>
            <option>Low</option>
          </select>

          <button onClick={addTask}>Add Task</button>
        </div>

        {/* Tasks */}
        <div className="box">
          <h2>My Tasks</h2>

          <p>Total Tasks: {tasks.length}</p>

          {tasks.map((task) => (
            <div className="task" key={task.id}>
              <h3
                style={{
                  textDecoration: task.completed
                    ? "line-through"
                    : "none"
                }}
              >
                {task.name}
              </h3>

              <p>Priority: {task.priority}</p>

              <button onClick={() => completeTask(task.id)}>
                {task.completed ? "Undo" : "Complete"}
              </button>

              <button onClick={() => deleteTask(task.id)}>
                Delete
              </button>
            </div>
          ))}
        </div>
      </div>

      <style>
        {`
          .box {
            background: ${darkMode ? "#333" : "white"};
            padding: 20px;
            margin-top: 20px;
            border-radius: 10px;
          }

          input, select, button {
            padding: 10px;
            margin: 5px;
          }

          .task {
            border: 1px solid gray;
            padding: 10px;
            margin-top: 10px;
            border-radius: 5px;
          }
        `}
      </style>
    </div>
  );
}

export default Dashboard;