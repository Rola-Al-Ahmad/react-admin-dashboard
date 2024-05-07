import React from "react"
import "./cards.css"
import PeopleOutlinedIcon from '@mui/icons-material/PeopleOutlined';
import CalendarMonthOutlinedIcon from '@mui/icons-material/CalendarMonthOutlined';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
const Cards = () => {

    return (
        <>
            <ul className="cards grid">
                <div className='cardBox'>
                    <li>
                        <CalendarMonthOutlinedIcon />
                        <span className="text">
                            <h3>1020</h3>
                            <p>New Order</p>
                        </span>
                    </li>
                </div>
                <div className='cardBox'>
                    <li>
                        <PeopleOutlinedIcon />
                        <span className="text">
                            <h3>2834</h3>
                            <p>Visitors</p>
                        </span>
                    </li>
                </div>
                <div className='cardBox'>
                    <li>
                        <MonetizationOnIcon />
                        <span className="text">
                            <h3>$2543</h3>
                            <p>Total Sales</p>
                        </span>
                    </li>
                </div>
            </ul>
        </>
    )
}

export default Cards