import { useState } from "react";

function Form(props) {
  const [entry, setEntry] = useState("");

  function handleChange(event) {
    setEntry(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    if (entry.replace(/\s/g, "").length !== 0) {
      props.onSubmit(entry);
    }
    setEntry("");
  }
  return (
    <form onSubmit={handleSubmit}>
      <h2 className="label-wrapper">
        <label htmlFor="new-todo-input" className="label__lg">
          Add Course Details
        </label>
      </h2>
      <input
        type="text"
        id="new-todo-input"
        className="input input__lg"
        name="text"
        autoComplete="off"
        value={entry}
        onChange={handleChange}
      />
      <button type="submit" className="btn btn__primary btn__lg">
        Add
      </button>
    </form>
  );
}

export default Form;
