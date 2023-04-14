import React from "react";

function Form() {
  return (
    <form>
      <label htmlFor="form_task">Task</label>
      <input type="text" name="task" id="form_task" />
      <button>Add Task</button>
    </form>
  );
}

export default Form;
