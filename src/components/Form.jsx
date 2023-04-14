function Form(props) {
  return (
    <form>
      <label htmlFor="form_task">Task</label>
      <input type="text" name="task" id="form_task" />
      <button>Add Task</button>
    </form>
  );
}

export default Form;
