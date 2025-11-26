import React from "react";
import "./table/table.css";
import Common from "../common/Common";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import styled from "styled-components";

import rola from "../assets/rolaa.jpeg";
import batoul from "../assets/batoul.jpeg";
import jana from "../assets/jana.jpeg";
import nour from "../assets/nour.jpeg";
import rolaUser from "../assets/rolaUser.jpeg";

function createData(id, UserName, Image, Email, Phone, Birthdate, Status) {
  return { id, UserName, Image, Email, Phone, Birthdate, Status };
}

const rows = [
  createData(
    1,
    "User1",
    rola,
    "user1@gmail.com",
    "71112236",
    "01/01/2001",
    "Released"
  ),
  createData(
    2,
    "User2",
    batoul,
    "user2@gmail.com",
    "71112236",
    "26/04/2002",
    "Released"
  ),
  createData(
    3,
    "User3",
    jana,
    "user3@gmail.com",
    "71112236",
    "16/03/2005",
    "Pending"
  ),
  createData(
    4,
    "User4",
    nour,
    "user4@gmail.com",
    "71112236",
    "26/04/2006",
    "Assign"
  ),
  createData(
    5,
    "User5",
    rolaUser,
    "user5@gmail.com",
    "71112236",
    "20/05/2007",
    "Assign"
  ),
];

const TableData = () => {
  return (
    <>
      <section className="project">
        <div className="table cardBox mr-20">
          <Common title="Users" />
          <div className="tableBox">
            <TableContainer
              component={Paper}
              sx={{ boxShadow: "none", borderRadius: "none" }}
            >
              <Table
                className="tableContainer"
                sx={{
                  minWidth: 650,
                  background: "#313844",
                  border: "none",
                  "& td ,th": {
                    color: "rgb(166, 171, 176)",
                    borderBottom: "1px solid rgb(86, 86, 86)",
                  },
                }}
              >
                <TableHead>
                  <TableRow>
                    <TableCell>#</TableCell>
                    <TableCell>User Name</TableCell>
                    <TableCell>Email</TableCell>
                    <TableCell>Phone</TableCell>
                    <TableCell>Birth Date</TableCell>
                    <TableCell>Status</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {rows.map((row) => (
                    <TableRow key={row.id}>
                      <TableCell component="th" scope="row">
                        {row.id}
                      </TableCell>
                      <UserImage>
                        <img src={row.Image} alt={row.UserName} />
                        <p>{row.UserName} </p>
                      </UserImage>
                      <TableCell>{row.Email}</TableCell>
                      <TableCell>{row.Phone}</TableCell>
                      <TableCell>{row.Birthdate}</TableCell>
                      <TableCell className="status">{row.Status}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </div>
        </div>
      </section>
    </>
  );
};

export default TableData;

const UserImage = styled.td`
  display: flex;
  align-items: center;
  grid-gap: 12px;
  font-family: "Roboto", "Helvetica", "Arial", sans-serif;
  font-weight: 400;
  font-size: 0.875rem;
  line-height: 1.43;
  letter-spacing: 0.01071em;
  padding: 16px;
  margin-bottom: -1px;
`;
