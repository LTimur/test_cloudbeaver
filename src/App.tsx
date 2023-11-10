import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { Registration } from "./components/registration/Registration";
import { Login } from "./components/login/Login";
import { UserInfo } from "./components/userInfo/UserInfo";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/registration" element={<Registration />} />
        <Route path="/login" element={<Login />} />
        <Route path="/userinfo" element={<UserInfo />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
