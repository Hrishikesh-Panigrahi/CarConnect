// FooterMenuDiv.jsx
import React from 'react';
import './FooterMenuDiv.css'; // Create a CSS file for styling

const FooterMenuDiv = ({ title, menuItems }) => {
    return (
        <div className='FootersingleGrid'>
            <span className='footerTitle'>{title}</span>
            <ul className='footerUI grid'>
                {menuItems.map((item, index) => (
                    <li className='footerLI' key={index}>
                        {item}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default FooterMenuDiv;
