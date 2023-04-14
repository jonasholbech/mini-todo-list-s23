import { useState } from "react";
import "./App.css";
import Form from "./components/Form";
import List from "./components/List";

function App() {
  const handler = () => {
    console.log("handler called");
  };
  return (
    <div className="App">
      <Form clickHandler={handler} />
      <List />
    </div>
  );
}

export default App;
