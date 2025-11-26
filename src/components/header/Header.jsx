import React, { useState } from "react";
import "./header.css";
import Head from "../head/Head";
import DashboardOutlinedIcon from "@mui/icons-material/DashboardOutlined";
import GroupIcon from "@mui/icons-material/Group";
import GradingIcon from "@mui/icons-material/Grading";
import MoveToInboxIcon from "@mui/icons-material/MoveToInbox";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { Link, useLocation } from "react-router-dom";

const Header = ({ dark, setMode }) => {
  const [Mobile, setMobile] = useState(false);
  const location = useLocation(); // Get the current URL path

  const isActive = (path) => {
    return location.pathname === path; // Check if the path matches the current URL
  };

  return (
    <>
      <section className="header">
        <Head dark={dark} setMode={setMode} />
        <header>
          <div className="container">
            <ul
              className={Mobile ? "navMenu-list" : "link"}
              onClick={() => setMobile(false)}
            >
              <li>
                <DashboardOutlinedIcon
                  className={isActive("/") ? "navIcon active" : "navIcon"}
                />
                <Link
                  to="/"
                  className={isActive("/") ? "navIcon active" : "navIcon"}
                >
                  Dashboard
                </Link>
              </li>
              <li>
                <GroupIcon
                  className={isActive("/user") ? "navIcon active" : "navIcon"}
                />
                <Link
                  to="/user"
                  className={isActive("/user") ? "navIcon active" : "navIcon"}
                >
                  Users
                </Link>
              </li>
              <li>
                <GradingIcon
                  className={isActive("/order") ? "navIcon active" : "navIcon"}
                />
                <Link
                  to="/order"
                  className={isActive("/order") ? "navIcon active" : "navIcon"}
                >
                  Orders
                </Link>
              </li>
              <li>
                <MoveToInboxIcon
                  className={isActive("/inbox") ? "navIcon active" : "navIcon"}
                />
                <Link
                  to="/inbox"
                  className={isActive("/inbox") ? "navIcon active" : "navIcon"}
                >
                  Inbox
                </Link>
              </li>
            </ul>
            <button className="toggle" onClick={() => setMobile(!Mobile)}>
              {Mobile ? <CloseIcon /> : <MenuIcon />}
            </button>
          </div>
        </header>
      </section>
    </>
  );
};

export default Header;
