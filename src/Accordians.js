import React from 'react'
import { useState } from "react";
function Accordians() {
  const [active, setActive] = useState(-1);

  const questions = [
    {
      question: "What is React?",
      answer: "React is a JavaScript library for building user interfaces."
    },
    {
      question: "What is Axios?",
      answer: "Axios is a library used to make HTTP requests."
    },
    {
      question: "What is useEffect?",
      answer: "useEffect handles side effects such as fetching API data."
    }
  ];

  return (
    <section className="section">
      <h1>Frequently Asked Questions</h1>

      {questions.map((item, index) => (
        <div className="accordion-item" key={index}>
          <button
            className="accordion-question"
            onClick={() =>
              setActive(active === index ? -1 : index)
            }
          >
            {item.question}
            <span>{active === index ? "−" : "+"}</span>
          </button>

          {active === index && (
            <p className="accordion-answer">{item.answer}</p>
          )}
        </div>
      ))}
    </section>
  );
}

export default Accordians;