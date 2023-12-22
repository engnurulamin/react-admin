import React from "react";
import "./sidebar.scss";
import DashboardIcon from "@mui/icons-material/Dashboard";
import PeopleOutlinedIcon from "@mui/icons-material/PeopleOutlined";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="top">
        <span className="logo">
          <Link className="logo-link" to="/">
            Admin
          </Link>
        </span>
      </div>
      <hr />
      <div className="center">
        <ul>
          <li>
            <DashboardIcon />
            <span>Dashboard</span>
          </li>
          <li>
            <PeopleOutlinedIcon />
            <span>Users</span>
          </li>
          <li>
            <span>Products</span>
          </li>
          <li>
            <span>Orders</span>
          </li>
          <li>
            <span>Delivery</span>
          </li>
          <li>
            <span>Stats</span>
          </li>
          <li>
            <span>Notifications</span>
          </li>
          <li>
            <span>System Health</span>
          </li>
          <li>
            <span>Logs</span>
          </li>
          <li>
            <span>Settings</span>
          </li>
          <li>
            <span>Profile</span>
          </li>
          <li>
            <span>Logout</span>
          </li>
        </ul>
      </div>
      <div className="bottom">Color Options</div>
    </div>
  );
};

export default Sidebar;
