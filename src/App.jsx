import { useState } from "react";
import Header from "./components/Header";
import Tasks from "./components/Tasks";

const App = () => {
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
  //Delete task
  const deleteTask = (id) => {
    setTask(tasks.filter((task) => task.id !== id));
  };

  //Reminder
  const toggleReminder = (id) => {
    setTask(tasks.map(task));
  };

  return (
    <div className="container">
      <Header />
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
