import React from 'react'
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined"
import ModeNightIcon from '@mui/icons-material/ModeNight';
import ModeNightOutlinedIcon from '@mui/icons-material/ModeNightOutlined';
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined"
import KeyboardArrowDownOutlinedIcon from "@mui/icons-material/KeyboardArrowDownOutlined"


const Head = ({ dark, setMode }) => {
    return (
        <>
            <section className='head'>
                <div className='container flexSB'>
                    <div className='left'>
                        <div className='logo'>
                            {dark ? <img src='./assets/rola.png' alt='logo' /> : <img src='./assets/rolaDark.png' alt='logo' />}

                        </div>
                    </div>
                    <div className='right flexCenter'>
                        <div className='search flexCenter'>
                            <input type='text' placeholder='Search...' />
                            <SearchOutlinedIcon className='iconHead' />
                        </div>
                        <NotificationsNoneOutlinedIcon className='iconHead' />
                        <div className='profile flexCenter'>
                            <img className='imageCircle' src='./assets/profileImage.jpeg' alt='profile' />
                            <span>Rola</span>
                            <KeyboardArrowDownOutlinedIcon className='iconHead' />
                        </div>
                        <button onClick={() => setMode(!dark)}>
                            {dark ? <ModeNightOutlinedIcon className='iconHead' /> : <ModeNightIcon className='iconHead' />}
                        </button>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Head