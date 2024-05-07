import React from "react"
import "./table.css"
import Common from "../../common/Common"
import data from "../users/data"
import "../users/users.css"
import Table from "@mui/material/Table"
import TableBody from "@mui/material/TableBody"
import TableCell from "@mui/material/TableCell"
import TableContainer from "@mui/material/TableContainer"
import TableHead from "@mui/material/TableHead"
import TableRow from "@mui/material/TableRow"
import Paper from "@mui/material/Paper"

function createData(id, User,UserImage, DateOrder, Status) {
    return {id, User,UserImage, DateOrder, Status }
}

const rows = [createData(1, "Rola Al-Ahmad", "./assets/rolaUser.jpeg", "01-2-2024", "Completed"), 
createData(2, "Jana Younes", "./assets/jana.jpeg", "01-2-2024", "Pending"), 
createData(3, "Nour El-Bazzal", "./assets/nour.jpeg", "01-2-2024", "Process"), 
createData(4, "Rola Al-Ahmad", "./assets/rolaa.jpeg", "01-2-2024", "Completed"),
createData(5, "Ruba Ibrahim", "./assets/profileImage.jpeg", "01-2-2024", "Canceled"),
createData(6, "Salwa Mohra", "./assets/batoul.jpeg", "05-12-2024", "Completed"),
createData(7, "Roaa Al-Ahmad", "./assets/jana.jpeg", "01-2-2024", "Pending"),
createData(8, "Ruba Al-Ahmad", "./assets/batoul.jpeg", "01-2-2024", "Process"),
createData(9, "User 9", "./assets/nour.jpeg", "01-2-2024", "Completed"),
createData(10, "User 10", "./assets/profileImage.jpeg", "01-2-2024", "Process"),
createData(11, "User 11", "./assets/jana.jpeg", "01-2-2024", "Completed"),
createData(12, "User 12", "./assets/rolaUser.jpeg", "01-2-2024", "Canceled"),
createData(13, "User 13", "./assets/nour.jpeg", "01-2-2024", "Process"),
createData(14, "User 14", "./assets/batoul.jpeg", "01-2-2024", "Completed"),
createData(15, "User 15", "./assets/profileImage.jpeg", "01-2-2024", "Canceled"),
createData(16, "User 16", "./assets/rolaUser.jpeg", "01-2-2024", "Pending"),
createData(17, "User 17", "./assets/rolaa.jpeg", "01-2-2024", "Completed"),
]

const TableData = () => {
    return (
        <>
            <section className='project'>
                <div className='user cardBox'>
                    <Common title='Inbox' />
                    <div className='userBox'>
                        {data.map((value) => {
                            return (
                                <div className='cardBox flexSB' key={value.id}>
                                    <div className='img'>
                                        <img className='imageCircle' src={value.cover} alt='' />
                                    </div>
                                    <div className='title'>
                                        <h3>{value.title}</h3>
                                        <p>{value.email}</p>
                                    </div>
                                    <div className='time'>
                                        <span>{value.time}</span>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
                <div className='table cardBox'>
                    <Common title='Latest Orders' />
                    <div className='tableBox'>
                        <TableContainer component={Paper} sx={{ boxShadow: "none", borderRadius: "none" }}>
                            <Table
                                className='tableContainer'
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
                                        <TableCell>User</TableCell>
                                        <TableCell>Date Order</TableCell>
                                        <TableCell>Status</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {rows.map((row) => (
                                        <TableRow key={row.id}>
                                            <TableCell>
                                                <img src={row.UserImage} alt="" />
                                                <p>{row.User}</p>
                                                </TableCell>
                                            <TableCell>{row.DateOrder}</TableCell>
                                            <TableCell> <span className={`status ${row.Status}`}>{row.Status}</span></TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </TableContainer>
                    </div>
                </div>
            </section>
        </>
    )
}

export default TableData