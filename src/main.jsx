import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";

const DATA = [
  {
    name: "Physics",
    id: "course-1",
    Grade: "A+",
    CreditHr: "3",
    completed: true,
  },
  {
    name: "FE",
    id: "course-2",
    Grade: "A+",
    CreditHr: "3",
    completed: false,
  },
  {
    name: "Calculus",
    id: "course-3",
    Grade: "A+",
    CreditHr: "3",
    completed: false,
  },
];

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App courses={DATA} />
  </StrictMode>,
);
