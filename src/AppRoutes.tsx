import { Routes, Route, BrowserRouter } from "react-router-dom";
import { Home } from "./components/home/Home";
import { Registration } from "./components/registration/Registration";
import { Login } from "./components/login/Login";
import { UserInfo } from "./components/userInfo/UserInfo";

export function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/registration" element={<Registration />} />
        <Route path="/login" element={<Login />} />
        <Route path="/userinfo" element={<UserInfo />} />
      </Routes>
    </BrowserRouter>
  );
}
