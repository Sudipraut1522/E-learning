import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../page/Home";
import Register from "../page/Register";
import Login from "../page/Login";
import NavbarLayout from "../layout/NavbarLayout";
import Dashboard from "../page/Dashboard";
import ProfilePage from "../page/ProfilePage";
import Search from "../page/Search";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<NavbarLayout />}>
          <Route index element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/search" element={<Search />} />
        </Route>
        <Route path="dashboard" element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
