import React from 'react';
import './Footer.scss';

class Footer extends React.Component
{
    render()
    {
        return (
            <footer className="footer-container text-center py-3">
                <p>Website made by <i>Ivan Lo Greco</i> with React JS (2020)</p>
            </footer>
        );
    }
}

export default Footer;