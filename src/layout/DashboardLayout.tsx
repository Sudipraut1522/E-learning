import React from "react";
import SideNavForDashboard from "../components/ui/SideNavForDashboard";
import { Outlet } from "react-router-dom";

const DashboardLayout: React.FC = () => {
  return (
    <div className="flex ">
      <SideNavForDashboard />
      <div className="flex-1 ">
        <Outlet />
      </div>
    </div>
  );
};

export default DashboardLayout;
