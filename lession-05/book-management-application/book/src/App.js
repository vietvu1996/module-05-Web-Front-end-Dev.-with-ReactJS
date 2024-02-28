import "./App.css";
import React, { useState } from "react";
import { Formik } from "formik";

export default function App() {
  const [books, setBooks] = useState([]);

  const [form, setForm] = useState({});

  const [indexSelected, setIndexSelected] = useState(-1);

  const handleChange = (event) => {
    setForm({ ...form, [event.target.name]: event.target.value });
  };

  const handleValidate = () => {
    const errors = {};

    if (!form.title) {
      errors.title = "Required";
    }

    if (!form.number) {
      errors.number = "Required";
    } else if (form.number <= 0) {
      errors.number = "Invalid number";
    }

    return errors;
  };

  const handleSelect = (book, index) => {
    setForm(book);
    setIndexSelected(index);
  };

  const handleDelete = (index) => {
    const newBooks = JSON.parse(JSON.stringify(books));
    newBooks.splice(index, 1);
    setBooks(newBooks);
  };

  const handleSubmit = () => {
    let newBooks = JSON.parse(JSON.stringify(books));
    if (indexSelected > -1) {
      newBooks.splice(indexSelected, 1, form);
    } else {
      newBooks.push(form);
      console.log(form.title);
    }
    console.log(newBooks);
    setBooks(newBooks);
    setForm({});
    setIndexSelected(-1);
  };

  return (
    <div>
      <h1>Library</h1>
      <Formik
        initialValues={form}
        validate={handleValidate}
        onSubmit={handleSubmit}
      >
        {({ errors, handleSubmit }) => (
          <form onSubmit={handleSubmit}>
            <div
              className={`custom-input ${
                errors.title ? "custom-input-error" : ""
              }`}
            >
              <label>Tiêu đề</label>
              <input
                type="text"
                name="title"
                value={form.title || ""}
                onChange={handleChange}
              />
              <p className="error">{errors.title}</p>
            </div>

            <div
              className={`custom-input ${
                errors.number ? "custom-input-error" : ""
              }`}
            >
              <label>Số lượng</label>
              <input
                type="text"
                name="number"
                value={form.number || ""}
                onChange={handleChange}
              />
              <p className="error">{errors.number}</p>
            </div>

            <button type="submit">Submit</button>
          </form>
        )}
      </Formik>

      <table>
        <thead>
          <tr>
            <th>Title</th>
            <th>Number</th>
            <th>Actions</th>
          </tr>
        </thead>

        <tbody>
          {books.map((book, index) => (
            <tr key={index}>
              <td>{book.title}</td>
              <td>{book.number}</td>
              <td>
                <button onClick={() => handleSelect(book, index)}>Edit</button>
              </td>
              <td>
                <button onClick={() => handleDelete(index)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
