import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

const subject = "React";

function App(props) {
  const [count, setCount] = useState(0);
  console.log(props.subject);
  return (
    <>
      <header>
        <h1>Hello Senior {`${subject} :)`}</h1>
        <button type="button" className="primary">
          Click Me
        </button>
      </header>
    </>
  );
}

export default App;
