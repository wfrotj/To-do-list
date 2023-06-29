import React from "react";
import { useState } from "react";
import "./CreateStudent.css";

function CreateStudent() {
  const [students, setStudents] = useState([]);
  const [firstNameValue, setFirstNameValue] = useState("");
  const [count, setCount] = useState(0);
  const [lastNameValue, setLastNameValue] = useState("");
  const [editingIndex, setEditingIndex] = useState(null);
  const [age, setAge] = useState(0);
  const openPreview = document.getElementById("openPreviewBtn");

  //opening the preview
  const appendModal = () => {
    const body = document.querySelector("body");
    const preview = document.createElement("div");
    preview.classList.add("preview");
    preview.style.display = "flex";

    const details = document.createElement("article");
    details.classList.add("details");

    const fname = document.createElement("h1");
    fname.classList.add("fname");
    fname.textContent = `First Name: ${titleCase(firstNameValue)}`;

    const lname = document.createElement("h1");
    lname.classList.add("lname");
    lname.textContent = `Last Name: ${titleCase(lastNameValue)}`;

    const h2 = document.createElement("h2");
    h2.textContent = `Age: ${age}`;

    const confirm = document.createElement("button");
    confirm.classList.add("confirm");
    confirm.textContent = "CONFIRM";

    details.append(fname, lname, h2, confirm);
    preview.appendChild(details);
    body.appendChild(preview);
  };
  const handleFormSubmit = (event) => {
    event.preventDefault();
    if (firstNameValue === "" || lastNameValue === "" || age === 0) return;

    if (editingIndex !== null) {
      // Editing existing student
      const newStudents = [...students];
      newStudents[editingIndex] = {
        firstName: firstNameValue,
        lastName: lastNameValue,
        age: age,
      };
      setStudents(newStudents);
      setEditingIndex(null);
    } else {
      // appendModal();
      // Adding new student
      setStudents([
        ...students,
        {
          firstName: titleCase(firstNameValue),
          lastName: titleCase(lastNameValue),
          age: age,
        },
      ]);
      setCount(count + 1);
    }
    setFirstNameValue("");
    setLastNameValue("");
    setAge(0);
  };

  const handleFirstNameChange = (event) =>
    setFirstNameValue(event.target.value);
  const handleLastNameChange = (event) => setLastNameValue(event.target.value);
  const handleAge = (event) => setAge(event.target.value);

  const studentDelete = (index) => {
    const newStudents = [...students];
    newStudents.splice(index, 1);
    if (count === 0) return;
    setCount(count - 1);
    setStudents(newStudents);
  };

  const editStudent = (index) => {
    const studentToEdit = students[index];
    setFirstNameValue(studentToEdit.firstName);
    setLastNameValue(studentToEdit.lastName);
    setAge(studentToEdit.age);
    setEditingIndex(index);
  };
  function titleCase(str) {
    str = str.toLowerCase();
    str = str.split(" ");

    for (var i = 0; i < str.length; i++) {
      str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1);
    }

    return str.join(" ");
  }

  return (
    <div className="main">
      <div className="hero">
        <h1>Pre-registration Form</h1>
        <div>
          <p>Number of registrants: {count}</p>
        </div>
      </div>
      <div className="form-container">
        <form onSubmit={handleFormSubmit} id="openPreviewBtn">
          <label>First Name</label>
          <input
            type="text"
            value={firstNameValue}
            onChange={handleFirstNameChange}
          />
          <label>Last Name</label>
          <input
            type="text"
            value={lastNameValue}
            onChange={handleLastNameChange}
          />
          <label>Age</label>
          <input
            type="number"
            className="age"
            value={age}
            onChange={handleAge}
          />
          <button type="submit" className="add-btn">
            {editingIndex !== null ? "Save" : "Add"}
          </button>
        </form>
      </div>
      <div className="tableData">
        <table border="1">
          <thead>
            <tr>
              <th>No.</th>
              <th>First name</th>
              <th>Last name</th>
              <th>Age</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {students.map((student, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{student.firstName}</td>
                <td>{student.lastName}</td>
                <td>{student.age}</td>
                <td>
                  <button onClick={() => studentDelete(index)}>Delete</button>
                  <button onClick={() => editStudent(index)}>Edit</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default CreateStudent;
