import { use, useState } from "react";

const grades = ["A+", "A", "A-", "B+", "B", "B-", "C+", "C", "C-", "D", "F"];

function Form(props) {
  const [entry, setEntry] = useState("");
  const [grade, setGrade] = useState("Grade");
  const [crdhr, setCrdhr] = useState("Credit");
  const [errPlacehl, seterrPlacehl] = useState("");

  function handleChange(event) {
    setEntry(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    if (crdhr === "Credit" || grade === "Grade") {
      seterrPlacehl("Select Both CRDHR & Grade");
      return;
    } else if (entry.replace(/\s/g, "").length !== 0) {
      props.onSubmit(entry, crdhr, grade);
    } else {
      props.onSubmit("Course", crdhr, grade);
    }
    setEntry("");
    setCrdhr("Credit");
    setGrade("Grade");
  }
  return (
    <form onSubmit={handleSubmit}>
      <h2 className="label-wrapper">
        <label htmlFor="new-todo-input" className="label__lg">
          Add Course Details
        </label>
      </h2>

      <div className="form-row">
        <input
          type="text"
          id="new-todo-input"
          className="input input__lg"
          name="text"
          autoComplete="off"
          value={entry}
          onChange={handleChange}
          placeholder={errPlacehl}
        />

        <div className="dropdown small">
          <button className="btn">{crdhr}</button>
          <div className="dropdown-content">
            <a onClick={() => setCrdhr("1")} className="btn">
              1
            </a>
            <a onClick={() => setCrdhr("2")} className="btn">
              2
            </a>
            <a className="btn" onClick={() => setCrdhr("3")}>
              3
            </a>
          </div>
        </div>

        <div className="dropdown small">
          <button className="btn">{grade}</button>
          <div className="dropdown-content">
            <a onClick={() => setGrade("A+")} className="btn">
              A+
            </a>
            <a onClick={() => setGrade("A")} className="btn">
              A
            </a>
            <a onClick={() => setGrade("A-")} className="btn">
              A-
            </a>
            <a onClick={() => setGrade("B+")} className="btn">
              B+
            </a>
            <a onClick={() => setGrade("B")} className="btn">
              B
            </a>
            <a onClick={() => setGrade("B-")} className="btn">
              B-
            </a>
            <a onClick={() => setGrade("C+")} className="btn">
              C+
            </a>
            <a onClick={() => setGrade("C")} className="btn">
              C
            </a>
            <a onClick={() => setGrade("C-")} className="btn">
              C-
            </a>
            <a onClick={() => setGrade("D")} className="btn">
              D
            </a>
            <a onClick={() => setGrade("F")} className="btn">
              F
            </a>
          </div>
        </div>
      </div>
      <button type="submit" className="btn btn__primary btn__lg">
        Add
      </button>
    </form>
  );
}

export default Form;
