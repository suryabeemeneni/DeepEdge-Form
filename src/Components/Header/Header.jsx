import React from 'react';
import './Header.css'

const Header = () => {
    return (
        <div className='header-container'>
            <div className='header-top-line'></div>
        <header className='header'>
            <div className='header-img'>
                <img src='https://deepedge.ai/assets/img/brand/logo_white_bg.png' alt='logo' />
            </div>
            <div className='header-content'>
            <h5 onClick={() =>
                (window.location.href = "mailto:beemeneni@gmail.com")
              }> <i className="fa fa-user-circle" /> beemeneni@gmail.com</h5>
            {/* <h5 onClick={() =>
                (window.location.href = "tel:+91 8790304431")
              }> <i className="fa fa-phone" /> +91 8790304431</h5> */}
            </div>
        </header>
        </div>
    );
};

export default Header;