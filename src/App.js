import React, { Component } from "react";
import Navbar from "./components/Navbar";
import Users from "./components/Users";
import AddUser from "./forms/AddUser";
import UpdateUsers from "./forms/UpdateUsers";
import { BrowserRouter, Routes, Route } from "react-router-dom";

export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar title="User App" />
          <hr />
          <Routes>
            <Route exact path="/" element={<Users />} />
            <Route exact path="/add" element={<AddUser />} />
            <Route exact path="/edit/:id" element={<UpdateUsers  />} />
          </Routes>
        </div>
      </BrowserRouter>
    );
  }
}
