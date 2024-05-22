import React from 'react'
import { Outlet, Link } from 'react-router-dom'
import Layout from './Layout'

const Footer = () => {
    return (
        <div className='footer'>
            <footer style={{ backgroundColor: 'black', color: 'white', textAlign: 'center', height: '130px',left: 0, bottom: 0, width: '100%' }}>
                <h2><b>All Rights Reserved</b></h2>
                <img src='data:image/png;base64,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' style={{ height: '30px', width: '30px' }}></img>
                <ul style={{ listStyleType: 'none', display: 'flex', justifyContent: 'center' }}>
                <li style={{paddingLeft:'30px'}}>
                    <Link to="/about">About us</Link>
                </li>
                <li style={{paddingLeft:'30px'}}>
                    <Link to="/contact">Contact US</Link>
                </li>
                <li style={{paddingLeft:'30px'}}>
                    <div className='privacy-link'>
                    <Link className='link' to="/privacy">Privacy and Policy</Link>
                    </div>
                </li>
                </ul>
            </footer>
            <Outlet/>
        </div>
    )
}

export default Footer
