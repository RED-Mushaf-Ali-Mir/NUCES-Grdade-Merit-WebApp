import Course from "./components/Course";
import Form from "./components/Form";
import FilterButton from "./components/FilterButton";

function App(props) {
  const CourseList = props.courses?.map((coursep) => (
    <Course
      id={coursep.id}
      name={coursep.name}
      completed={coursep.completed}
      key={coursep.id}
    />
  ));
  return (
    <div className="todoapp stack-large">
      <h1>NUCES Grade Calculator</h1>

      <div className="filters btn-group stack-exception"></div>

      <h2 id="list-heading">3 tasks remaining</h2>
      <ul
        role="list"
        className="todo-list stack-large stack-exception"
        aria-labelledby="list-heading"
      >
        {CourseList}
      </ul>
    </div>
  );
}

export default App;
