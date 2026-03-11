import { useState } from "react";

function Course(props) {
  const [Editing, setEditing] = useState(false);
  const [newName, setNewName] = useState("");

  function handleChange(event) {
    setNewName(event.target.value);
  }

  function handleSave(event) {
    event.preventDefault();
    props.editCourse(newName, props.id);
    setNewName("");
    setEditing(false);
  }

  const editingTemplate = (
    <form className="stack-small" onSubmit={handleSave}>
      <div className="form-group">
        <label className="todo-label" htmlFor={props.id}>
          New name for {props.name}
        </label>
        <input
          id={props.id}
          className="todo-text"
          type="text"
          value={newName}
          onChange={handleChange}
        />
      </div>
      <div className="btn-group">
        <button
          type="button"
          className="btn todo-cancel"
          onClick={() => setEditing(false)}
        >
          Cancel
          <span className="visually-hidden">renaming {props.name}</span>
        </button>
        <button type="submit" className="btn btn__primary todo-edit">
          Save
          <span className="visually-hidden">new name for {props.name}</span>
        </button>
      </div>
    </form>
  );
  const viewTemplate = (
    <div className="stack-small">
      <div className="c-cb">
        <input
          id={props.id}
          type="checkbox"
          defaultChecked={props.completed}
          onChange={() => props.toggleCourse(props.id)}
        />
        <label className="todo-label" htmlFor={props.id}>
          {props.name}
        </label>
      </div>
      <div className="btn-group">
        <button type="button" className="btn" onClick={() => setEditing(true)}>
          Edit <span className="visually-hidden">{props.name}</span>
        </button>
        <button
          type="button"
          className="btn btn__danger"
          onClick={() => props.deleteCourse(props.id)}
        >
          Delete <span className="visually-hidden">{props.name}</span>
        </button>
      </div>
    </div>
  );

  return <li className="todo">{Editing ? editingTemplate : viewTemplate} </li>;
}

export default Course;
//   <li className="todo stack-small">
//       <div className="c-cb">
//         <input
//           id={props.id}
//           type="checkbox"
//           defaultChecked={props.Completed}
//           onChange={() => {
//             props.toggleCourse(props.id);
//           }}
//         />
//         <label className="todo-label" htmlFor={props.id}>
//           {props.name}
//         </label>
//       </div>
//       <div className="btn-group">
//         <button type="button" className="btn">
//           Edit <span className="visually-hidden">{props.name}</span>
//         </button>
//         <button
//           type="button"
//           className="btn btn__danger"
//           onClick={() => {
//             props.deleteCourse(props.id);
//           }}
//         >
//           Delete <span className="visually-hidden">{props.name}</span>
//         </button>
//       </div>
//     </li>
