import React from 'react'
import './IntroStyles.css'
import {Link} from 'react-router-dom'
const Navbar = () => {
    return (
        
        <div className='top'>
            <h1 className='logo'>
                LIONMOVIEMANIA
            </h1>
            <Link to='/' className='btn'>Sign in</Link>
        </div>
    )
}
export default Navbar