import "./App.css";
import { useState, useEffect } from "react";
import axios from "axios";

function App() {
  const [state, setState] = useState({
    list: [],
    isCreated: false,
    form: {},
  });

  const handleChange = (event) => {
    setState((prevState) => ({
      ...prevState,
      form: { ...prevState.form, [event.target.name]: event.target.value },
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const isCreated = true;
    // console.log(isCreated);
    // setState((prevState) => ({
    //   ...prevState, isCreated: true }
    // });
    // setState({ ...state, isCreated: true });

    await axios
      .post("https://jsonplaceholder.typicode.com/todos", state.form)
      .then((res) => {
        alert(
          `${isCreated ? "Create" : ""}  ${JSON.stringify(
            res.data
          )} successfully !!!`
        );
      })
      .catch((err) => {
        throw err;
      });
  };

  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/todos").then((res) => {
      setState((prevState) => ({ ...prevState, list: res.data }));
    });
  });

  return (
    <div>
      <h1>Todo List</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="title"
          value={state.form.title || ""}
          onChange={handleChange}
        />
        <button type="submit">Submit</button>
        <ul>
          {state.list.map((item, index) => (
            <li key={index}>{item.title}</li>
          ))}
        </ul>
      </form>
    </div>
  );
}

export default App;
