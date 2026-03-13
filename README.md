# FAST-NUCES GPA Calculator

A simple **React-based GPA calculator** for students of **FAST National University (NUCES)**.
This tool allows users to add courses, select grades and credit hours, and instantly compute their GPA using the standard FAST grading scale.

---

## Features

- Add courses with **course name, grade, and credit hours**
- **Edit or delete** courses
- Dynamic list of added courses
- GPA calculation based on **weighted average**
- Clean and responsive UI
- Built using **React + Vite**

---

## GPA Calculation

The GPA is calculated using the weighted average formula:

```
GPA = Σ (Grade Points × Credit Hours) / Σ Credit Hours
```

Example:

| Course   | Grade | Credit Hours |
| -------- | ----- | ------------ |
| PF       | A     | 3            |
| Calculus | B+    | 3            |
| Physics  | B     | 4            |

```
Total Points = (4×3) + (3.33×3) + (3×4)
Total Credits = 10

GPA = Total Points / Total Credits
```

---

## Grade Point Mapping

| Grade | Points |
| ----- | ------ |
| A+    | 4.00   |
| A     | 4.00   |
| A-    | 3.67   |
| B+    | 3.33   |
| B     | 3.00   |
| B-    | 2.67   |
| C+    | 2.33   |
| C     | 2.00   |
| C-    | 1.67   |
| D+    | 1.33   |
| D     | 1.00   |
| F     | 0.00   |

---

## Tech Stack

- **React**
- **Vite**
- **JavaScript**
- **CSS**

---

## Getting Started

Clone the repository:

```bash
git clone https://github.com/YOUR_USERNAME/fast-nuces-gpa-calculator.git
```

Move into the project folder:

```bash
cd fast-nuces-gpa-calculator
```

Install dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

The application will start at:

```
http://localhost:5173
```

---

## Project Structure

```
src
 ├── components
 │   ├── Course.jsx
 │   ├── Form.jsx
 │   ├── Grades.jsx
 │   └── Credit.jsx
 │
 ├── App.jsx
 ├── main.jsx
 └── index.css
```

---

## Future Improvements

- Semester-wise GPA tracking
- CGPA calculation
- Course credit customization
- Dark mode UI
- Export GPA report

---

## Author

**Mushaf Ali Mir**

GitHub: https://github.com/YOUR_USERNAME
LinkedIn: https://linkedin.com/in/YOUR_PROFILE

---

## License

This project is open-source and available under the MIT License.
