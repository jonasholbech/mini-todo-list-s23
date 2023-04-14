import { v4 as uuidv4 } from "uuid";
import { useState } from "react";
import "./App.css";
import Form from "./components/Form";
import List from "./components/List";

function App() {
  const [tasks, setTasks] = useState([
    {
      task: "Milk the cat",
      completed: false,
      id: 1,
    },
  ]);

  function addTask(taskName) {
    console.log(taskName);
    const newTask = {
      task: taskName,
      completed: false,
      id: uuidv4(),
    };
    //add it to state
    setTasks((oldTasks) => oldTasks.concat(newTask));
  }
  function completeTask(id) {
    setTasks((oldState) => oldState.filter((task) => task.id !== id));
  }

  return (
    <div className="App">
      <Form addTask={addTask} />
      <List tasks={tasks} completeTask={completeTask} />
    </div>
  );
}

export default App;
