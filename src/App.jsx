import { useState } from "react";
import Header from "./components/Header";
import Tasks from "./components/Tasks";
import AddTask from "./components/AddTask";
import Task from "./components/Task";

const App = () => {
  const [showAddTask, setShowAddTask] = useState(false);
  const [tasks, setTask] = useState([
    {
      id: 1,
      text: "Hello 1",
      day: "1",
      reminder: true,
    },
    {
      id: 2,
      text: "Hello 2",
      day: "2",
      reminder: true,
    },
    {
      id: 3,
      text: "Hello 3",
      day: "3",
      reminder: true,
    },
  ]);

  //Add task
  const addTask = (task) => {
    const id = Math.floor(Math.random() * 10000) + 1;
    const newTask = { id, ...task };
    setTask([...tasks, newTask]);
  };

  //Delete task
  const deleteTask = (id) => {
    setTask(tasks.filter((task) => task.id !== id));
  };

  //Reminder
  const toggleReminder = (id) => {
    setTask(
      tasks.map((task) =>
        task.id === id ? { ...task, reminder: !task.reminder } : task
      )
    );
  };

  return (
    <div className="container">
      <Header onAdd={() => setShowAddTask(!showAddTask)} />
      {showAddTask && <AddTask onAdd={addTask} />}
      {tasks.length > 0 ? (
        <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} />
      ) : (
        "No tasks"
      )}
    </div>
  );
};

Header.defaultProps = {
  title: "Task Tracker",
};

export default App;
