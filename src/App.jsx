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
  return (
    <div className="container">
      <Header />
      <Tasks tasks={tasks} />
    </div>
  );
};

Header.defaultProps = {
  title: "Task Tracker",
};

export default App;
