// HW8 – COSC 2328 – Professor McCurry
// Implemented by: Amelia Jaimes Alcauter

function App() {
    const [taskName, setTaskName] = React.useState('');
    const [priority, setPriority] = React.useState('Medium');

    const [error, setError] = React.useState('');
    const [tasks, setTasks] = React.useState([]);

    const deleteTask = (id) => {
    setTasks(tasks.filter(t => t.id !== id));
    };

    const clearAll = () => {
    setTasks([]);
    };

   
    {tasks.length > 0 && (
    <button type="button" className="clear-btn" onClick={clearAll}>
        Clear All
    </button>
    )}


    <TaskList tasks={tasks} onDelete={deleteTask} />

    const handleAddTask = () => {
    if (taskName.trim() === '') {
      setError('Task name cannot be empty.');
      return;
    }

    setError('');
    setTasks([...tasks, { name: taskName.trim(), priority }]);
    setTaskName('');
  };

    console.log(taskName);
    return (
    <main className="app">
        <h1>Tasks</h1>

        <div>
            <form className="task-form" onSubmit={e => e.preventDefault()}>
                <input type="text" value={taskName}
                onChange={e => setTaskName(e.target.value)}/>

                <select value={priority} onChange={e => setPriority(e.target.value)}>
                    <option value="Low">Low</option>
                    <option value="Medium">Medium</option>
                    <option value="High">High</option>
                </select>

                <button type="button" onClick={handleAddTask}>Add Task</button>

                {error && <p className="error-message">{error}</p>}

            </form>

            <ul>
            {tasks.map((task, index) => (
            <li key={index}>
                {task.name} ({task.priority})
            </li>
            ))}
        </ul>
        </div>
    </main>

  );
}

function TaskCard(props) {
  const level = props.task.priority.toLowerCase();

  return (
    <li className={"task-card " + level}>
      <span className="task-name">{props.task.name}</span>
      <div className="task-actions">
        <span className={"badge " + level}>{props.task.priority}</span>
        <button
          type="button"
          className="delete-btn"
          aria-label={"Delete " + props.task.name}
          onClick={() => props.onDelete(props.task.id)}
        >
          ✕
        </button>
      </div>
    </li>
  );
}

function TaskList(props) {
  if (props.tasks.length === 0) {
    return <p className="empty-state">No tasks yet — add one above!</p>;
  }

  return (
    <div className="task-list">
      {props.tasks.map(task => (
        <TaskCard key={task.id} task={task} onDelete={props.onDelete} />
      ))}
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
