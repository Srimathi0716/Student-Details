import React, { useState } from 'react';
import './SimpleApp.css'; 

function SimpleApp() {
  
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [count, setCount] = useState(0);
  const [isAccordionOpen, setIsAccordionOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formInput, setFormInput] = useState({ name: '', age: '', course: '' });
  const [students, setStudents] = useState([
    { id: 1, name: 'Alex', age: 20, course: 'Coding' },
    { id: 2, name: 'Emily', age: 16, course: 'Math' }
  ]);

  
  const handleInputChange = (e) => {
    setFormInput({ ...formInput, [e.target.name]: e.target.value });
  };

 
  const handleFormSubmit = (e) => {
    e.preventDefault();
    const newStudent = {
      id: Date.now(),
      name: formInput.name,
      age: parseInt(formInput.age, 10),
      course: formInput.course
    };
    setStudents([...students, newStudent]);
    setFormInput({ name: '', age: '', course: '' }); // Clear inputs
  };

  
  const adultStudents = students.filter(student => student.age >= 18);

  return (
    <div className={`app-container ${isDarkMode ? 'dark-mode' : 'light-mode'}`}>
      
      
      <button className="theme-toggle" onClick={() => setIsDarkMode(!isDarkMode)}>
        Switch to {isDarkMode ? 'Light' : 'Dark'} Mode
      </button>
      <hr />

      
      <h2>Student Form</h2>
      <form onSubmit={handleFormSubmit} className="student-form">
        <input name="name" placeholder="Name" value={formInput.name} onChange={handleInputChange} required />
        <input name="age" type="number" placeholder="Age" value={formInput.age} onChange={handleInputChange} required />
        <input name="course" placeholder="Course" value={formInput.course} onChange={handleInputChange} required />
        <button type="submit" className="btn-submit">Submit</button>
      </form>

     
      <h2>Student List (Age 18+)</h2>
      <ul className="student-list">
        {adultStudents.map(({ id, name, age, course }) => (
          <li key={id}>
            <strong>{name}</strong> ({age} years old) - {course}
          </li>
        ))}
      </ul>
      <hr />

      
      <h2>Counter: <span className="counter-val">{count}</span></h2>
      <div className="counter-controls">
        <button onClick={() => setCount(count + 1)}>+</button>
        <button onClick={() => setCount(count - 1)}>-</button>
        <button className="btn-reset" onClick={() => setCount(0)}>Reset</button>
      </div>
      <hr />

    
      <h2>Accordion</h2>
      <div className="accordion">
        <div className="accordion-header" onClick={() => setIsAccordionOpen(!isAccordionOpen)}>
          <span>What is React?</span>
          <span>{isAccordionOpen ? '▲' : '▼'}</span>
        </div>
        {isAccordionOpen && (
          <div className="accordion-content">
            React is a JavaScript library for building user interfaces.
          </div>
        )}
      </div>
      <hr />

      
      <h2>Modal</h2>
      <button className="btn-delete-trigger" onClick={() => setIsModalOpen(true)}>
        Delete All Data
      </button>

      
      {isModalOpen && (
        <div className="modal-overlay">
          <div className="modal-box">
            <h3>Are you sure?</h3>
            <p>This will permanently clear all the students from the list.</p>
            <div className="modal-actions">
              <button className="btn-cancel" onClick={() => setIsModalOpen(false)}>Cancel</button>
              <button className="btn-delete-confirm" onClick={() => { setStudents([]); setIsModalOpen(false); }}>Delete</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
export default SimpleApp;
