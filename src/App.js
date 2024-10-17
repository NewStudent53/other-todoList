import React, { useState } from 'react';
import '../src/index.css'

function App() {
  const [tasks, setTasks] = useState([]);
  const [input, setInput] = useState('');

  const addTask = (e) => {
    if (e.key === 'Enter' || e.type === 'click') {
      if (input.trim()) {
        setTasks([...tasks, input]);
        setInput('');
      }
    }
  };

  const deleteTask = (index) => {
    const newTasks = tasks.filter((task, i) => i !== index);
    setTasks(newTasks);
  };

  return (
    <div className="App">
      <h1>todos</h1>
      <input
        type="text"
        placeholder="What needs to be done?"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyDown={addTask}
      />
      <button onClick={addTask}>Add</button>
      <ul>
        {tasks.length === 0 ? (
          <p>No tasks, add a task</p>
        ) : (
          tasks.map((task, index) => (
            <li key={index} onMouseOver={() => document.getElementById(`del-${index}`).style.display = 'inline'} onMouseOut={() => document.getElementById(`del-${index}`).style.display = 'none'}>
              {task}
              <span id={`del-${index}`} style={{ display: 'none' }} onClick={() => deleteTask(index)}>❌</span>
            </li>
          ))
        )}
      </ul>
    </div>
  );
}

export default App;
