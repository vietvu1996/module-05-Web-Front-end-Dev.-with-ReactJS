import "./App.css";
import React, { Component } from "react";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      studentList: [],
      form: { name: "", phone: "", email: "" },
      isValid: false,
      indexSelected: 0,
    };
  }

  handleChange = (event) => {
    this.setState(
      (state) => {
        const form = state.form;
        form[event.target.name] = event.target.value;
        return { form };
      },
      () => this.checkInvalidForm()
    );
  };

  handleSelect = (studentSelected, index) => {
    this.setState({
      form: JSON.parse(JSON.stringify(studentSelected)),
      indexSelected: index,
    });
  };

  checkInvalidForm = () => {
    const { name, phone, email } = this.state.form;
    const value = name && phone && email;
    this.setState({ isValid: value });
  };

  handleSubmit = () => {
    if (this.state.isValid) {
      if (this.state.indexSelected > 0) {
        let updatedList = [...this.state.studentList];
        updatedList[this.state.indexSelected] = this.state.form;
        this.setState({ studentList: updatedList });
      } else {
        this.setState((prevState) => ({
          studentList: [...prevState.studentList, this.state.form],
        }));
      }
      this.setState({
        form: { name: "", phone: "", email: "" },
        isValid: false,
        indexSelected: 0,
      });
    }
  };

  handleDelete = (index) => {
    let updatedList = [...this.state.studentList];
    updatedList.splice(index, 1);
    this.setState({ studentList: updatedList });
  };

  render() {
    return (
      <div>
        <div>
          <h1>Student List</h1>
          <div>
            <label>Name: </label>
            <input
              name="name"
              value={this.state.form.name}
              onChange={this.handleChange}
            />
          </div>
          <div>
            <label>Phone: </label>
            <input
              type="number"
              name="phone"
              value={this.state.form.phone}
              onChange={this.handleChange}
            />
          </div>
          <div>
            <label>Email: </label>
            <input
              name="email"
              value={this.state.form.email}
              onChange={this.handleChange}
            />
          </div>
          <button onClick={this.handleSubmit}>Submit</button>
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Phone</th>
                <th>Email</th>
                <th>Actions</th>
              </tr>
            </thead>

            <tbody>
              {this.state.studentList.map((student, index) => (
                <tr key={index}>
                  <td>{student.name}</td>
                  <td>{student.phone}</td>
                  <td>{student.email}</td>
                  <td>
                    <button onClick={() => this.handleSelect(student, index)}>
                      Edit
                    </button>
                    <button onClick={() => this.handleDelete(index)}>
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}
export default App;
