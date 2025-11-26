import React from "react";
import "../../App.css";
import Cards from "../cards/Cards";
import TableData from "../table/TableData";
import User from "../users/User";
import { Link } from "react-router-dom";
import CloudDownloadIcon from "@mui/icons-material/CloudDownload";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

const Home = () => {
  return (
    <>
      <section className="home">
        <div className="container">
          <div className="head-title">
            <div className="left">
              <h1>Dashboard</h1>
              <ul className="breadcrumb">
                <li>
                  <Link to="/">Dashboard</Link>
                </li>
                <li>
                  <ChevronRightIcon className="ChevronRightIcon" />
                </li>
                <li>
                  <Link to="/" className="active">
                    Home
                  </Link>
                </li>
              </ul>
            </div>
            <Link to="/" className="btn-download">
              <CloudDownloadIcon />
              <span className="text">Download PDF</span>
            </Link>
          </div>
          <Cards />
          <User />
          <TableData />
        </div>
      </section>
    </>
  );
};

export default Home;
