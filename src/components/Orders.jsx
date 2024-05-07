import React from "react"
import "./table/table.css"
import Common from "../common/Common"
import Table from "@mui/material/Table"
import TableBody from "@mui/material/TableBody"
import TableCell from "@mui/material/TableCell"
import TableContainer from "@mui/material/TableContainer"
import TableHead from "@mui/material/TableHead"
import TableRow from "@mui/material/TableRow"
import Paper from "@mui/material/Paper"

function createData(id, User,UserImage, Email, Phone, DateOrder, Status) {
    return {id, User,UserImage, Email, Phone, DateOrder, Status }
}

const rows = [createData(1, "Rola Al-Ahmad", "./assets/rolaUser.jpeg", "rola109@gmail.com", 7457896, "01-2-2024", "Completed"), 
createData(2, "Jana Younes", "./assets/jana.jpeg", "jana98@gmail.com", 7457896, "01-2-2024", "Pending"), 
createData(3, "Nour El-Bazzal", "./assets/nour.jpeg", "nour45@gmail.com", 7457896, "01-2-2024", "Process"), 
createData(4, "Rola Al-Ahmad", "./assets/rolaa.jpeg", "rola99@gmail.com", 7457896, "01-2-2024", "Completed"),
createData(5, "Ruba Ibrahim", "./assets/profileImage.jpeg", "ruba12@gmail.com", 7457896, "01-2-2024", "Canceled"),
createData(6, "Salwa Mohra", "./assets/batoul.jpeg", "salwa51@gmail.com", 7457896, "05-12-2024", "Completed"),
createData(7, "Roaa Al-Ahmad", "./assets/jana.jpeg", "roaa11@gmail.com", 7457896, "01-2-2024", "Pending"),
createData(8, "Ruba Al-Ahmad", "./assets/batoul.jpeg", "ruba109@gmail.com", 7457896, "01-2-2024", "Process"),
createData(9, "User 9", "./assets/nour.jpeg", "user9@gmail.com", 7457896, "01-2-2024", "Completed"),
createData(10, "User 10", "./assets/profileImage.jpeg", "user10@gmail.com", 7457896, "01-2-2024", "Process"),
createData(11, "User 11", "./assets/jana.jpeg", "user11@gmail.com", 7457896, "01-2-2024", "Completed"),
createData(12, "User 12", "./assets/rolaUser.jpeg", "user12@gmail.com", 7457896, "01-2-2024", "Canceled"),
createData(13, "User 13", "./assets/nour.jpeg", "user13@gmail.com", 7457896, "01-2-2024", "Process"),
createData(14, "User 14", "./assets/batoul.jpeg", "user14@gmail.com", 7457896, "01-2-2024", "Completed"),
createData(15, "User 15", "./assets/profileImage.jpeg", "user15@gmail.com", 7457896, "01-2-2024", "Canceled"),
createData(16, "User 16", "./assets/rolaUser.jpeg", "user16@gmail.com", 7457896, "01-2-2024", "Pending"),
createData(17, "User 17", "./assets/rolaa.jpeg", "user17@gmail.com", 7457896, "01-2-2024", "Completed"),
]

const TableData = () => {
    return (
        <>
            <section className='project'>
                <div className='table cardBox'>
                    <Common title='Orders' />
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
                                        <TableCell>Email</TableCell>
                                        <TableCell>Phone</TableCell>
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
                                            <TableCell>{row.Email}</TableCell>
                                            <TableCell>{row.Phone}</TableCell>
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