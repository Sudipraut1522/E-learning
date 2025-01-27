import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../page/Home";
import Register from "../page/Register";
import Login from "../page/Login";
import NavbarLayout from "../layout/NavbarLayout";
import Dashboard from "../page/Dashboard";
import ProfilePage from "../page/ProfilePage";
import Search from "../page/Search";
import CourseIntroPage from "../page/CourseIntroPage";
import CourseStudyPage from "../page/CourseStudyPage";
import DashboardLayout from "../layout/DashboardLayout";
import About from "../page/About";
import Contactus from "../page/Contactus";
import Blog from "../page/Blog";
import Slides from "../page/slides";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<NavbarLayout />}>
          <Route index element={<Home />} />
          <Route path="register" element={<Register />} />
          <Route path="aboutus" element={<About />} />
          <Route path="slides" element={<Slides />} />
          <Route path="contactus" element={<Contactus />} />
          <Route path="blog" element={<Blog />} />
          <Route path="login" element={<Login />} />
          <Route path="profile" element={<ProfilePage />} />
          <Route path="search" element={<Search />} />
          <Route path="courseintro" element={<CourseIntroPage />} />
        </Route>

        <Route path="/dashboard" element={<DashboardLayout />}>
          <Route index element={<Dashboard />} />
          <Route path="setting" element={<Login />} />
          <Route path="courseintro" element={<CourseIntroPage />} />
        </Route>

        <Route path="/coursestudy" element={<CourseStudyPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
