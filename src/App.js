import React, { Component } from 'react';
import { Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import UserList from "./pages/user-list";
import UserRepositories from "./pages/user-repositories";
class App extends Component {
  render() {
    return (
      <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/user-list" element={<UserList/>} />
          <Route path="/user-repositories" element={<UserRepositories/>} />
      </Routes>
    );
  }
}
export default App;
