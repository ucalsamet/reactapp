import React, { Component } from "react";
import UserConsumer from "../context";
import axios from "axios";

export default class UpdateUser extends Component {
  state = {
    name: "",
    departman: "",
    salary: "",
  };

  changeInput = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };
  componentDidMount = async () => {
    const { id } = this.props;
    const response = await axios.get(`http://localhost:3000/users/${id}`);

    const {name, salary, departman} = response.data

    this.setState({
      name,
      salary,
      departman
    })
  };
  updateUser = async (dispatch, e) => {
    e.preventDefault();
    const { id } = this.props;

    const { name, departman, salary } = this.state;
    const updatedUser = {
      name: name,
      departman: departman,
      salary: salary,
    };

    const response = await axios.put(`http://localhost:3000/users/${id}`, updatedUser);

    dispatch({ type: "UPDATE_USER", payload: response.data });
  };
  render() {
    const { id } = this.props;
    const { name, departman, salary } = this.state;
    return (
      <UserConsumer>
        {(value) => {
          const { dispatch } = value;
          return (
            <div className="col-md-8 mb-4">
              <div className="card">
                <div className="card-header">
                  <h4>Update User Form</h4>
                </div>
                <div className="card-body">
                  <form onSubmit={this.updateUser.bind(this, dispatch)}>
                    <div className="form-group">
                      <label htmlFor="name">Name</label>
                      <input
                        type="text"
                        name="name"
                        id="id"
                        placeholder="Enter Name"
                        className="form-control"
                        value={name}
                        onChange={this.changeInput}
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="departman">Departman</label>
                      <input
                        type="text"
                        name="departman"
                        id="departman"
                        placeholder="Enter Departman"
                        className="form-control"
                        value={departman}
                        onChange={this.changeInput}
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="salary">Salary</label>
                      <input
                        type="text"
                        name="salary"
                        id="salary"
                        placeholder="Enter Salary"
                        className="form-control"
                        value={salary}
                        onChange={this.changeInput}
                      />
                    </div>

                    <button className="btn btn-danger btn-block" type="submit">
                      Update User
                    </button>
                  </form>
                </div>
              </div>
            </div>
          );
        }}
      </UserConsumer>
    );
  }
}
