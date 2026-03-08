import Course from "./components/Course";
import Form from "./components/Form";
import FilterButton from "./components/FilterButton";
import { useState } from "react";
import { nanoid } from "nanoid";

function App(props) {
  const [courses, setCourses] = useState(props.courses);

  function onSubmit(name) {
    const newCourse = {
      id: `todo-${nanoid()}`,
      name: name,
      completed: false,
    };
    setCourses([...courses, newCourse]);
  }

  const CourseList = courses?.map((course) => (
    <Course
      id={course.id}
      name={course.name}
      completed={course.completed}
      key={course.id}
    />
  ));
  return (
    <div className="todoapp stack-large">
      <h1>NUCES Grade Calculator</h1>
      <Form onSubmit={onSubmit} />

      <div className="filters btn-group stack-exception">
        <FilterButton />
        <FilterButton />
        <FilterButton />
      </div>

      <h2 id="list-heading">{`Course Added ${CourseList.length}`}</h2>
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
