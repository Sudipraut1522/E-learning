import React from "react";
import Navbar from "../components/ui/Navbar";
import { Outlet } from "react-router-dom";

const NavbarLayout: React.FC = () => {
  return (
    <div>
      <Navbar />
      <Outlet />
    </div>
  );
};

export default NavbarLayout;
